# Demo React Native Project

This is a basic demo React Native application to showcase a simple counter and navigation between two screens.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Running the Application](#running-the-application)
    -   [iOS](#ios)
    -   [Android](#android)
-   [Project Structure](#project-structure)
-   [Key Features](#key-features)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

## Getting Started

Follow these instructions to get the demo project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your system:

-   **Node.js:** (Recommended version >= 18) - [Download Node.js](https://nodejs.org/)
-   **npm** or **yarn:** (npm comes bundled with Node.js, yarn can be installed globally with `npm install -g yarn`)
-   **React Native CLI:** Install globally using `npm install -g react-native-cli` or `yarn global add react-native-cli`.
-   **Xcode:** (For iOS development) - Available on macOS via the App Store.
    -   Make sure Xcode Command Line Tools are installed (`xcode-select --install`).
    -   You might need to open Xcode once to agree to the terms and conditions.
-   **Android Studio:** (For Android development) - [Download Android Studio](https://developer.android.com/studio).
    -   Ensure you have set up an Android Virtual Device (AVD) or have a physical Android device connected.
    -   Configure the necessary SDKs and platform tools within Android Studio.

### Installation

1.  **Clone the repository** (if this project is hosted on a platform like GitHub):

    ```bash
    git clone [repository-url]
    cd DemoProject
    ```

2.  **Install the project dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    or using yarn:

    ```bash
    yarn install
    ```

## Running the Application

Once the dependencies are installed, you can run the application on either iOS or Android.

### iOS

1.  **Navigate to the `ios` directory:**

    ```bash
    cd ios
    ```

2.  **Install CocoaPods dependencies (if you encounter build issues or are adding native modules):**

    ```bash
    pod install
    ```

3.  **Go back to the project root directory:**

    ```bash
    cd ..
    ```

4.  **Run the application on an iOS simulator or a connected device:**

    ```bash
    npx react-native run-ios
    # or
    yarn ios
    ```

    This will build the app and launch it on the iOS simulator. If you have a device connected, it will attempt to run on the device.

### Android

1.  **Ensure your Android emulator is running or a physical device is connected.**

2.  **Run the application:**

    ```bash
    npx react-native run-android
    # or
    yarn android
    ```

    This will build the app and install it on your running Android emulator or connected device.

## Project Structure

Here's a basic overview of the project's directory structure:

```bash
├── android/        # Android specific configuration and build files
├── ios/            # iOS specific configuration and build files
├── node_modules/   # Project dependencies installed by npm or yarn
├── src/            # Source code of the application
│   ├── components/ # Reusable UI components
│   ├── screens/    # Application screens/views
│   ├── App.js      # Main entry point of the application
│   └── ...         # Other source files (e.g., utils, services)
├── .gitignore      # Specifies intentionally untracked files that Git should ignore
├── App.json        # Configuration file for the React Native app
├── package.json    # Lists project dependencies and scripts
├── README.md       # This file
└── ...             # Other project-specific files
```

## Key Features

-   Displays a simple counter that can be incremented and decremented.
-   Navigates between two basic screens: "Home" and "Details".

## Technologies Used

-   **React Native:** The framework for building native mobile apps using JavaScript and React.
-   **React:** The JavaScript library for building user interfaces.
-   **useState:** For managing the counter state.
-   **useReducer:** For managing the counter state.

## Contributing

Contributions are welcome! If you'd like to contribute to this demo project, please feel free to open a pull request with your proposed changes.

## License

This project is open source and available under the MIT License. See the `LICENSE` file for more details.
