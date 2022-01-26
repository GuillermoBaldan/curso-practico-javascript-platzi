console.log("Hello World");

//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 4;
console.log(`El lado mide ${ladoCuadrado} cm`);

const peritroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es ${peritroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd();

//Código del triángulo
console.group("Triángulo");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 6;
const alturatriangulo = 5.5;

console.log(
  `Los lados del triángulo son ${ladotriangulo1} cm, ${ladotriangulo2} cm y ${basetriangulo} cm`
);

const peritrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log(`El perímetro del triangulo es ${peritrotriangulo} cm`);

const areaTriangulo = (alturatriangulo * basetriangulo) / 2;
console.log(`El área del triángulo es ${areaTriangulo} cm^2`);
console.groupEnd();

//Código del círculo
console.group("Círculo");
const radio = 5;
const diametro = 2 * radio;
const perimetrocirculo = Math.PI * diametro;

console.log(`El perímetro del círculo es ${perimetrocirculo} cm`);
console.log(`El diametro del círculo es ${diametro} cm`);
const areacirculo = Math.PI * radio * radio;
console.log(`El área del círculo es ${areacirculo} cm^2`);
console.groupEnd();
