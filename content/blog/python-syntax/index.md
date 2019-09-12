---
title: "Python Syntax: A Beginner’s Guide for JavaScript Developers"
date: "2017-09-03T22:40:32.169Z"
description: Some basic differences between Python and Javascript syntax.
---


I've been wanting to pick up another programming language for a while. This week, I took Codecadmy's Python course. It is absolutely true when people say that once you learn one programming language, it is easier to pick up others. The core concepts of programming, breaking down a project and working through it methodically, only has to be learned once. While there is a lot to learn with a new language, these simple syntax differences may help you get started if you are a JavaScript Developer looking to learn Python.

(https://media.giphy.com/media/gKI7tjJGk4OtqRDA09/giphy.gif)

## Defining Variables
Variables are declared automatically when they are assigned. Keywords such as JavaScript's "var", "let" and "const" are unnecessary.
```python
a = 'a'
b = 2
c = True
```
Two things worth noting here:
* Semicolons are not used to terminate statements, but they can be used if you want multiple statements on the same line.
* Booleans are capitalized in Python.

Easy money so far, right?

(Donald Duck counting money.)

## Fun with Functions
If you're like me, it may take a while to get used to function syntax. Instead of using curly brackets ( {} ) to define function blocks, Python uses white space. The "def" key word is used to define a function, and colons are used to indicate the start of a program block.

```python
def true_or_false(bool):
  if bool == True:
    return "This is a true statement!"
  else:
    return "This is a false statement!"
  
print true_or_false(False) # returns the else block
```

More stuff worth noting:
* The convention in Python is to define functions and variables using joined_lower casing (classes use StudlyCaps casing).
* Indent using 2 spaces
* Parentheses are not required for the conditional statements.
* The "print" keyword is used to print to the console.
* To make a single-line comment, use "#".

Wait, it gets better!

(Spongebob eagerly waiting.)

## Range (and Lists)
Range is an amazing shorthand tool used to loop through items! It generates a list of numbers. If you provide a single number, like range(x), then a list will be generated with a range of 0 through x-1 (the stop number is not inclusive). So, range(10) will create a list range from 0–9. Range can get more complex and is definitely something worth reading about if you're interested in Python development.

```python
# prints 0-9
for x in range(10):
  print x
  
# prints 1-10  
for x in range(1, 11):
  print x
  
# remember, we don't need to declare variables
# we can just assign them
word = "hello"

# prints each letter in the word variable
for x in range(len(word)):
  print word[x]
```

As you can see, range is a powerful tool. Writing for i in range(10) in Python is the same as writing `for (var i = 0; i < 10; i++)` in JavaScript.
Another amazing Python feature is that STRINGS ARE AUTOMATICALLY CONVERTED INTO LISTS OF CHARACTERS! What does this mean, exactly? In the code snippet above, we have the variable word set to "hello" on line 11. That variable can automatically become `["h", "e", "l", "l", "o"]`.

(Mind blown.)

Lists are similar to JavaScript arrays in functionality, meaning that you can access items by their index and loop through them with both mutable and immutable functions. Just think of the possibilities!

## Conclusion
We've barely scratched the surface here. If you're a JavaScript Developer ready to learn Python, Codecademy's free course and Stack Overflow are great places to start. Happy coding!