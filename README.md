## What is this? 

Cerealize is a simple node console app for generating randomized serial numbers.
Features: 16, 20, 24 numbers or 32 characters with numbers. Manually shorted to minimize file size. 
It could be used to generate some quick dummy data, or as a secure password.

## Installation

Clone it, make sure you have node js installed, and run:

`npm start`

Changing the output is simple. In app.js, you can run:

```
console.log(out({ val:16 })) 
console.log(out({ val:20 })) 
console.log(out({ val:24 }))
```

or leave as default with no arguments

```
console.log(out({}))
```
