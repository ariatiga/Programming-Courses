// Creado por un estdiante de Plati:

// 1)Creamos la función constructora.
function auto(marca, modelo, annio, color){
    
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio,
    this.color = color
}

// 2)Ahora generamos arrays con los datos necesarios de: Marca, Modelo, Año, Color. Además de un array que almacene los objetos nuevos.
var marcaAuto = ['Toyota', 'Tesla', 'Audi', 'Renault', 'Volkswagen', 'BMW'];
var modeloAuto = ['Z', 'X', 'Y', 'W', 'V', 'H'];
var annioAuto = [2020, 2018, 2017, 2019, 2021];
var colorAuto = ['Negro', 'Rojo', 'Plateado', 'Blanco'];
var listaAutos = [];


// 3)Creamos una iteración que añada 30 nuevos objetos a nuestro array 'listaAutos[]'
//   Además de asignar parametros aleatorios a cada registro nuevo.
//   Y por último imprimimos el resultado en consola. 
for (i = 0; i < 30; i++){

    var marca = marcaAuto[Math.floor(Math.random() * marcaAuto.length)];
    var modelo = modeloAuto[Math.floor(Math.random() * modeloAuto.length)];
    var annio = annioAuto[Math.floor(Math.random() * annioAuto.length)];
    var color = colorAuto[Math.floor(Math.random() * colorAuto.length)];

    listaAutos.push(new auto(marca, modelo, annio, color));
    console.log(listaAutos[i]);
}