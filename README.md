## :arrow_up: Run iOS

Require Xcode 8 or higher

```
react-native run-ios
```

Build and test on Device

```
$ npm run ios:device
```

## :arrow_up: Build Android

1) Install Android Studio. (Standard is fine, Custom if you want to)

2) Launch Android Studio

3) From the Welcome Screen, click Configure (bottom right corner) > SDK Manager

4) Double check that you have the latest platform tools and tools installed in the SDK Tools tab.

At this point, you will have installed everything related to the android sdk, including the tools, in the default location of /Users/your-user-name/Library/Android/sdk

5) Create a .bash_profile file if you don't already have one at /Users/your-user-name

6) Add the following lines to it: (replace your-user-name)

```
export PATH=$PATH:/Users/your-user-name/Library/Android/sdk/platform-tools
```

```
export PATH=$PATH:/Users/your-user-name/Library/Android/sdk/tools
```

```
export ANDROID_HOME=/Users/your-user-name/Library/Android/sdk
```

By adding it to your .bash_profile, these lines will run every time you use a shell. So you don't have to worry about them ever again.

To test that everything works correctly, try the following 'which' commands from a new shell:

```
which adb
```

```
which android
```

Since these are added to the path, you should see their file path printed in the shell.

## :arrow_up: Android Troubleshooting

Make sure you have installed "Android SDK Build Tool 23.02" by Open the SDK manager from your Android Studio and check whether the build tool 23.0.2 not installed if not install it.

```
android update sdk -u -a -t \
    build-tools-23.0.0,build-tools-23.0.1,build-tools-23.0.2,build-tools-23.0.3
```
## :arrow_up: Run Android

To prevent lagging on navigation transition you can turning off dev mode in the js debug menu.


Install and run on Android Device

```
$ npm run android:device
```

Open debug Android on Device

```
$ npm run android:shake
```

Show log of Android on Console

```
$ npm run android:logcat
```

Install and run Genymotion

```
$ npm run android:emu
```

Shortcut command to build APK

```
$ npm run android:build
```


You must make sure all http://localhost:8081/debugger-ui pages are closed, then open the app to wait state, and reload JS with your simulator / device.

The `.env` file is ignored by git keeping those secrets out of your repo.
