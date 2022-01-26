console.log("Hello World");

// Declaración de funciones

//Código del cuadrado
console.group("Cuadrado");
/* const ladoCuadrado = 4;
console.log(`El lado mide ${ladoCuadrado} cm`); */

//const peritroCuadrado = ladoCuadrado * 4;

function perimetroCuadrado(lado) {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
}

//console.log(`El perímetro del cuadrado es ${peritroCuadrado} cm`);

function areaCuadrado(lado) {
  return lado * lado;
}

/* const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd(); */

//Código del triángulo
console.group("Triángulo");
/* const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 6; */

function perimetroTriangulo(ladotriangulo1, ladotriangulo2, basetriangulo) {
  return ladotriangulo1 + ladotriangulo2 + basetriangulo;
}

/* const alturatriangulo = 5.5;

console.log(
  `Los lados del triángulo son ${ladotriangulo1} cm, ${ladotriangulo2} cm y ${basetriangulo} cm`
); */

/* const peritrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log(`El perímetro del triangulo es ${peritrotriangulo} cm`); */

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

/* const areaTriangulo = (alturatriangulo * basetriangulo) / 2;
console.log(`El área del triángulo es ${areaTriangulo} cm^2`); */
console.groupEnd();

//Código del círculo
console.group("Círculo");
/* const radio = 5;
const diametro = 2 * radio;
const perimetrocirculo = Math.PI * diametro; */

function diametroCirculo(radio) {
  return 2 * radio;
}

function perimetroCirculo(radio) {
  return Math.PI * diametroCirculo(radio);
}

function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

/* console.log(`El radio del círculo es ${radio} cm`);
console.log(`El diametro del círculo es ${diametro} cm`);
console.log(`El perímetro del círculo es ${perimetrocirculo} cm`); */

function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

/* console.log(`El área del círculo es ${areaCirculo} cm^2`);
console.groupEnd(); */
