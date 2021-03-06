/* ---------
関数名を donBuRakko に変換してくれる
--------- */

const parse = require('@babel/parser').parse
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const fs = require('fs')
const path = require('path')

console.log('どんぶラッコに変換！')

const arg = process.argv[2]
const ext = path.extname(arg)
const filePath = path.join(__dirname, arg)
const code = fs.readFileSync(filePath, { encoding: 'utf-8' })

// parse
const ast = parse(code)

// traverse
traverse(ast, {
  FunctionDeclaration: (path) => {
    path.node.id.name = 'donBuRakko'
  }
})

// generator
const result = generate(ast).code

fs.writeFileSync(
  path.join(
    '../dist',
    `${path.basename(arg, ext)}_dbk_${Date.now()}${ext}`
  ),
  result
)

console.log('完了！')
