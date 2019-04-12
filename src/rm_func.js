/* ---------
引数で指定した関数を取り除いて dist に push してくれる
--------- */

const parse = require('@babel/parser').parse
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const fs = require('fs')
const path = require('path')

const arg = process.argv[2]
const funcName = process.argv[3]
const ext = path.extname(arg)
const filePath = path.join(__dirname, arg)
const code = fs.readFileSync(filePath, { encoding: 'utf-8' })

console.log(`${funcName} を取り除いて出力します...`)

// parse
const ast = parse(code)

// traverse
traverse(ast, {
  ExpressionStatement: (path) => {
    const exp = path.node.expression
    if ('callee' in exp) {
      exp.callee.name === funcName && path.remove()
    }
  }
})

// generator
const result = generate(ast).code
const fileName = `${path.basename(arg, ext)}_rm_func_${Date.now()}${ext}`

fs.writeFileSync(
  path.join('../dist', fileName),
  result
)

console.log(`${fileName} として出力が完了しました。`)
