# JS Autotest

Running tests for your files made easy. This extension allows you to run your test command on one or more files with only 2 clicks, without having to copy the file paths every time or running all your tests at once.

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
JS Autotest has built-in support for **JS, and TS files**.
### Supported test runners
At this time, JSAutotest supports Jest.
### Running test command for a file

> Tip: You can also run this command  on non-test files. In this case, Autotest will try to find the correspondent test file according to your `autotest.testFilePattern` configuration.

Right-click any of the supported files, then select the option _Run tests for this file_. Autotest will then run your test script passing the file path as an argument to that script.

![Example](https://im2.ezgif.com/tmp/ezgif-2-18c4a4e4f3.gif)

### Running test command for multiple files
To be implemented.

## Requirements

In order to use this extension you need **VSCode 1.73.0** or above.

## Extension Settings

This extension contributes the following settings:

- `autotest.packageManager` (default: `npm`): Which package manager are you using in your project, like _yarn_ or _npm_.

- `autotest.testRunnerScriptName` (default: `test`): The name of the script thar runs your tests.

- `autottest.tesFilePattern` (default: `[name].test.{js,jsx,ts,tsx}`): This is a glob that indicates the pattern name for your test files based on the implementation file nime.
    - You can use the `[name]` variable in the pattern to indicate where the original file name is placed.
    - You can use any pattern that the [glob](https://www.npmjs.com/package/glob) package can read and parse.
