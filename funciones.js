//Funciones basicas

function suma(a, b) {

    console.log( a + b);

}

suma(15, 20)
// var otraCosa;
// var result = suma(15, 20);

// console.log(result, otraCosa)

//Funciones con callBack

// function ejemplo(cb) {

//     console.log(cb(15, 20))

// }

// (function (a, b) {

//     console.log(a+b) 

// })(15, 16)

// function suma(a, b) {

//     return a+b

// }

// ejemplo(suma)

// ejemplo((a, b) => {

//     return a*b

// })

// Arrays


//           0     1    2     3         4
var arr = ["hola", 5, true, suma, function suma(a) { console.log(a)}]

var obj = {
    prop: 1,
    algo: "algo",
    0: "asd"
}

var array = {
    0: 654,
    1: "hola",
    2: true
}

console.log(array[2])

// console.log(obj["prop"], obj[0])
//           0123456
var texto = "Esto es un texto"

// console.log(arr.length)
// console.log(obj.length)
// console.log(texto[5])

// console.log(arr[0])
// console.log(arr[1])

// console.log(arr[2])
// console.log(arr[3](15, 20))
// console.log(arr[4]("Hola, soy otra funcion"))

// var bicis= [

//     {
//     rodado: 26 ,
//     color: "rojo"} ,


//     {
//     rodado: 29,
//     color: "verde",
//     }

// ]


// for (var i = 0; i<2; i = i + 1) {
//     console.log(bicis[i].color)
// }


// Objetos

// var bici = {
//     rodado: 26,
//     color: "rojo",
//     metodo: function () {
//         console.log("Estoy ejecutando el metodo")
//     }
// };
// var bici2 = {
//     rodado: 29,
//     color: "verde"
// }


// console.log(bici.rodado)

// bici.metodo()





// var bicis = {
//     bici1: {rodado: 26,
//         color: "rojo"},
//     bici2: {rodado: 26,
//     color: "rojo"}
// }