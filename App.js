import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const start = () => {
    setIsActive(true);
    const startTime = Date.now() - timer;
    countRef.current = requestAnimationFrame(function update() {
      setTimer(Date.now() - startTime);
      countRef.current = requestAnimationFrame(update);
    });
  };

  const pause = () => {
    cancelAnimationFrame(countRef.current);
    setIsActive(false);
  };
  
  const reset = () => {
    cancelAnimationFrame(countRef.current);
    setIsActive(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getMillis = `0${Math.floor(timer % 1000 / 10)}`.slice(-2);
    const seconds = Math.floor(timer / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
  
    return `${getMinutes}:${getSeconds}.${getMillis}`;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
      <Text style={styles.timerText}>{formatTime()}</Text>
      <View style={styles.buttonContainer}>
          <TouchableOpacity  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={isActive ? pause : start} style={styles.roundButton}>
              <Icon name={isActive ? 'pause' : 'play'} type='font-awesome' size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={reset} style={styles.roundButton}>
              <Icon name='repeat' type='font-awesome' size={30} color="#fff" />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5067FF',
    flex: 2,
  },
  timerText: {
    fontSize: 50,
    marginBottom: 20,
    color: '#5067FF',
    flex: 2,
    width: 300,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    flex: 2,
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 35,
    backgroundColor: '#5067FF',
    margin: 10,
  },
});

export default App;