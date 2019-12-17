# Presentation
(Japanese only)  
https://speakerdeck.com/cha1ra/introduction-of-babel

# Environment
- Mac OS 10.14
- Node.js

# Directory Structure

```
.  
├── dist   
├── resource  
│   ├── ex_1.js  
│   └── ex_2.js  
├── server.js  
└── src  
    ├── rakko.js  
    └── rm_func.js
```

- resource ... example JS files
- src ... main func JS
- dist ... output JS files are provided here


# How to use

## Preparation

```
$ git clone https://github.com/cha1ra/dbk_babel_ex.git
$ npm install
```

## ~/src/rakko.js

### Description

Convert all function name to `donBuRakko`.

```
$ node rakko.js [Filepath]
```

  
### Example

```
$ node ./src/rakko.js ./resource/ex_1.js
```
  
ex_1.js
```javascript
function hoge (n) {
  return n
}
```
  
Expected result:  
  
~/dist/ex_1_dbk_[Number].js
```javascript
function donBuRakko(n) {
  return n;
}
```

## ~/src/rm_func.js

### Description

Remove function that you want.

```
$ node rakko.js [Filepath] [Function Name]
```

### Example

```
$ node ./src/rm_func.js ./resource/ex_2.js debug
```
  
ex_2.js
```javascript
const debug = (str) => {
  console.log(`[Debug] ${str}`)
}

let name = '太郎'

debug(name)

name = '二郎'

debug(name)
```
  
Expected result:  
  
~/dist/ex_1_dbk_[Number].js
```javascript
const debug = str => {
  console.log(`[Debug] ${str}`);
};

let name = '太郎';
name = '二郎';
```
