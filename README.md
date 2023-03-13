# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @010jgl/lotide`

**Require it:**

`const _ = require('@010jgl/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
  `head(array)`: Function to return the first item in the array.
  `tail(array)`: Function to return the last item of the array.
  `middle(array)`: Takes in an array, returns the middle most elements
  `assertArraysEqual(actual, expected)`: Compares 2 arrays to see if they are identical
  `eqArrays(a, b, c)`: Compares 2 arrays to see if they are equal
  `assertEqual(actual, expected)`: Compares 2 value to see if equal
  `assertObjectsEqual(actual, expected)`: Compares 2 objects to see if they are equal
  `countLetters(str)` Count letters in a string
  `countOnly(allItems, itemsToCount)`: Only counts the input in an array
  `eqObjects(object1, object2)`: Compares 2 objects to see if they are identical
  `findKey(obj, callback)`: Returns the key of a value we callback
  `findKeyByValue(object, value)`: Finds the key of a specific value
  `letterPositions(sentence)`: Returns the position of a specific letter
  `map(array, callback)`: Takes in an array and return a new array with the callback wanted
  `takeUntil(array, callback)`: Takes in an array and return a new array with with the callback values
  `without(array, itemsToRemove)`: Takes in an array without the items to remove