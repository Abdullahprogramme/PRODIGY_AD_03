## Code Explanation

The main logic of the stopwatch is contained in the `App.js` file. Here's a brief explanation of the key parts:

- The `isActive` state variable is used to track whether the stopwatch is currently running.
- The `timer` state variable is used to store the current time of the stopwatch in milliseconds.
- The `start` function starts the stopwatch by setting `isActive` to true and repeatedly updating `timer` every 10 milliseconds.
- The `pause` function pauses the stopwatch by setting `isActive` to false and clearing the interval that updates `timer`.
- The `reset` function resets the stopwatch by setting `isActive` to false and resetting `timer` to 0.
- The `formatTime` function converts the time in `timer` from milliseconds to a string format of "minutes : seconds : milliseconds".
- The `TouchableOpacity` components are used for the start/pause and reset buttons. The `onPress` prop is used to specify the function to call when the button is pressed.
- The `Icon` component is used to display the play, pause, and reset icons on the buttons.
- The `styles` object contains the styles for the components. It uses the `StyleSheet.create` method to create the styles.

The application uses React Native's built-in components like `SafeAreaView`, `View`, and `Text` for the layout and structure of the app. It also uses `TouchableOpacity` for the buttons and `Icon` from `react-native-elements` for the button icons.

## Installation

Before starting the installation process, make sure you have [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

1. Clone the repository:
```bash
git clone https://github.com/Abdullahprogramme/PRODIGY_AD_03
```

2. Navigate to the project directory:
```bash
cd StopWatch
```

4. Install the necessary packages:
```bash
npm install
```

Usage
To run the application in development mode, use the following command:

For Android:
```bash
npx react-native run-android
```


## Usage

Once the app is running, you will see a stopwatch on the screen. 

- To start the timer, press the play button.
- To pause the timer, press the pause button.
- To reset the timer, press the reset button.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
