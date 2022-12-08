# JS Autotest

Running tests for your files made easy. This extension allows you to run your test command on one or more files with only 2 clicks, without having to copy the file paths every time or running all your tests at once.

Add to VSCode: https://marketplace.visualstudio.com/items?itemName=SirPedr.js-autotest

## Table of Contents
- [Features](#features)
    - [Supported files](#supported-files)
    - [Supported test runners](#supported-test-runners)
    - [Running test command for a file](#running-test-command-for-a-file)
    - [Running test command for multiple files](#running-test-command-for-multiple-files)
        - [Adding a file to the test group](#adding-a-file-to-the-test-group)
        - [Removing a file from the test group](#removing-a-file-from-the-test-group)
        - [Running all tests for files in the test group](#running-all-tests-for-files-in-the-test-group)
- [Requirement](#requirements)
- [Extension Settings](#extension-settings)

## Features

### Supported files
JS Autotest has built-in support for **JS, TS, JSX and TSX files**.
### Supported test runners
At this time, JSAutotest supports Jest.
### Running test command for a file

> Tip: You can also run this and any command that is executed through the context menu on non-test files. In this case, Autotest will try to find the correspondent test file according to your `autotest.testFilePattern` configuration.

Right-click any of the [supported files](#supported-files), then select the option _Run tests for this file_. Autotest will then run your test script passing the file path as an argument to that script. 

Be aware that JSAutotest will create a new terminal named 'Autotest' to run the command. If a terminal with the same name already, exists, JSAutotest will use it instead.

![Example](https://media.giphy.com/media/6mdv2H11dX01mwH7G4/giphy.gif)

### Running test command for multiple files
You can run tests for multiple files at once adding them to what we call a 'test group'. A test group is a list of paths to your test files.

#### Adding a file to the test group
Right-click any of the [supported files](#supported-files) then select the option _Add to test group_. You should receive a success message if the operation ran without errors. Note that you can't add the same file to the test group more than once.

![Example](https://media.giphy.com/media/4Wgq9CUg7ebbo09sDc/giphy.gif)

#### Removing a file from the test group
Right-click any of the [supported files](#supported-files) then select the option _Remove from test group_. If the file was in the test group, it will be removed and you should see a confirmation message.

![Example](https://media.giphy.com/media/tUf7aIChXKS72OEaDq/giphy.gif)

#### Running all tests for files in the test group
Open the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) (`Ctrl + Shift + P` on Windows/Linux, `Command + Shift + P` on Mac) then type _Run tests for test group_. All tests included in the test group will run at once.


This command follows the same terminal rules explained in [`Running test command for a file`](#running-test-command-for-a-file) section.

![Example](https://media.giphy.com/media/BRPABHeG4Y2umI5oyF/giphy.gif)

## Requirements

In order to use this extension you need **VSCode 1.73.0** or above.

## Extension Settings

This extension contributes the following settings:

- `autotest.packageManager` (default: `npm`): Which package manager are you using in your project, like _yarn_ or _npm_.

- `autotest.testRunnerScriptName` (default: `test`): The name of the script thar runs your tests.

- `autottest.tesFilePattern` (default: `[name].test.{js,jsx,ts,tsx}`): This is a glob that indicates the pattern name for your test files based on the implementation file nime.
    - You can use the `[name]` variable in the pattern to indicate where the original file name is placed.
    - You can use any pattern that the [glob](https://www.npmjs.com/package/glob) package can read and parse.
