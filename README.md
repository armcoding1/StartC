# StartC

**StartC** is a Visual Studio Code extension that automatically adds standard boilerplate code when certain keywords are typed in a `.c` file. It simplifies the process of starting with new C files by eliminating the need to manually insert standard lines and the `main` function.

## Features

- **Auto-insert Boilerplate Code for `.c` Files**:
  - The extension inserts boilerplate code based on the following trigger keywords:
    - **`io`**: Adds basic `stdio.h` boilerplate.
    - **`arr`**: Adds boilerplate for working with arrays and other standard C libraries.
    - **`mem`**: Adds boilerplate for memory management and related libraries.
    - **`str`**: Adds boilerplate for string handling in C.
    - **`algo`**: Adds boilerplate for algorithms and numeric operations.
    - **`math`**: Adds boilerplate for mathematical operations.
    - **`file`**: Adds boilerplate for file input/output operations.
    - **`ptr`**: Adds boilerplate for working with pointers and memory management.
    - **`time`**: Adds boilerplate for working with time and `time.h`.
    - **`cont`**: Adds boilerplate for working with containers like arrays, lists, and maps.

    Each keyword triggers the insertion of appropriate header files and a basic `main` function template.

## Requirements

- **Visual Studio Code**: You need to have Visual Studio Code installed to use this extension.
- **C Development Setup**: It's recommended to have a C compiler and debugger set up for full functionality.

## Installation

1. Open Visual Studio Code.
2. Go to the **Extensions** section by clicking on the Extensions icon in the sidebar.
3. Search for **StartC** in the search box.
4. Click **Install**.

Alternatively, you can install it from the command line using the following command:

```bash
code --install-extension zyntrax.start-c
