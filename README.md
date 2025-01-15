# JavaScript 'this' Keyword Bug

This repository demonstrates a common source of confusion in JavaScript: the `this` keyword.  The `this` keyword's value depends on how the function is invoked.  The provided code examples show scenarios where the value of `this` can be unexpectedly undefined or the global object.

## Bug Description
The `myFunc` function's `this` value differs when it's called directly versus as a method of an object. This often leads to unexpected behavior and difficult-to-debug errors, especially for developers new to JavaScript.

## Solution
The solution clarifies the concept of `this` and provides an explanation of the underlying mechanism.  The solution also demonstrates best practices, such as explicitly binding `this` when necessary using methods like `bind()`, `call()`, or `apply()`.