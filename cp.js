import { encode } from '@algorithm.ts/huffman'
const { encodedData, encodingTable, tree } = encode('Hello, world!')
console.log(encodedData)