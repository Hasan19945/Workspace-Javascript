console.log("COMMON-JS")

const { topla, maxValue } = require("./app")
console.log(topla(3, 5))
console.log(maxValue)

//? node.js module yapılari için common.js yi kullanmaktadır.
//* commonjs de dışarı paylaşmak için exports veya module.exports kullanılır.
//? paylaşılan bir degisken, fonksiyon, obje vb. kullanmak için ise require() metodu kullanılır.
//? Günümüzde Backend uygulamlarında genelde CommonJS modül yapisi kullanilmaktadır.
