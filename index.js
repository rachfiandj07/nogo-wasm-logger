const { importWasm } = require('./wasm')

importWasm((log) => {
  console.log({ log })
})