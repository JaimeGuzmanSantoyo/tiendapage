let ropa=[];
let suma=[];






function mostrarMenu(){
    return parseInt(prompt(`
            "Opciones disponibles"
            1.- Agregar Camisas
            2.- Agregar Pantalones
            3.- Agregar acsesorios
            4.- Agregar tenis
            5.- Agregar boxers
            6.- mostrar la lista de productos
            7.- sumar precios y entregar el total
            8.- Salir
            "Elige una opcion:"
        `));
}
function Agregar_Camisas(){
    let camisas = parseInt(prompt("ingresa el tipo de camisa que deseas: ")); 
    let color= prompt("ingresa el tipo de color que deseas para la camisa: " );
    let precio=parseInt(prompt("ingresa el precio: ")); 
    if( color&&precio ){
        let camiseta={
            
            color:color, // objeto 
            talla:'32',
            material:'algodon',
            marca:'polo',
            precio:precio

            };
ropa.push(camiseta);
suma.push(precio);
alert("la camisa se ha agregado correctamente");


}else{
alert("no se ha agregado ninguna camisa al arreglo ropa ");
}
}   

function Agregar_pantalones(){
    let pantalon =prompt("ingresa el tipo de pantalon que deseas:  "); 
    let tiro =prompt("que tiro es , recto ,skiny,acampanados ,otro?   ");
    let color= prompt("color que deseado para el pantalon ?   ");
    let precio=parseInt(prompt("ingresa el precio: ")); 
    if(pantalon&&tiro && color){
        let pantalones={
            pantalon:pantalon,
            tiro:tiro,
            precio:precio,
            color:color, // objeto 
            talla:'32',
            material:'algodon',
            marca:'Lee' 

        };
ropa.push(pantalones);
suma.push(precio);
alert("los pantalones se han agregado correctamente :3 ");


}else{
alert("no se ha agregado ningun pantalon al arreglo ropa ");
}
}
function Agregar_Acsesorios(){

    let Acsesorios = prompt("ingresa el tipo de acesorio que deseas :  ");
    let talla= prompt("que tipo de talla estas buscando ?  ");
    let material = prompt("que tipo de material deseas ? ");
    let color= prompt("que tipo de color quieres ?  ");
    let precio=parseInt(prompt("ingresa el precio: ")); 
    if(Acsesorios&&talla&& color&& material){
        let acsesorio={
            Acsesorios:Acsesorios,
            color:color, // objeto 
            talla:talla,
            material:material,
            precio:precio
            
        };
ropa.push(acsesorio);
suma.push(precio);
alert("el acesesorio se ha agregado correctamente");
}else{
    alert("no se agrego nada");
}  

}
function Agregar_tenis(){
    let teni = prompt("ingresa el tipo de tenis  ");    
    let nombre = prompt("Ingresa el nombre de los tenis: ");
    let color = prompt("Ingresa el color de los tenis: ");
    let talla = parseInt(prompt("Ingresa la talla de los tenis: "));
    let precio=parseInt(prompt("ingresa el precio: ")); 
    if(teni&&nombre && color && talla){
        let  tenis={
            teni:teni,
             nombre:nombre,
             color:color, // objeto 
            talla:talla,
            precio:precio,
            material:'tela'
            
        };
ropa.push(tenis);
suma.push(precio);
alert("los tenis se han agregado correctamente");
    }else{
        alert("no se ha agregado nada al arreglo ropa");
    }
}
function  Agregar_boxers(){
    let boxers = prompt("ingresa el tipo de boxers que quiras:  "); 
  ;
    let color = prompt("Ingresa el color de los boxers: ");
    let talla = prompt("Ingresa la talla de los boxers: ");
    let material =prompt("que tipo de material deseas? ");
    let marca= prompt("que tipo de narca quieres ?  ");
    let precio=parseInt(prompt("ingresa el precio: ")); 
    if(boxers&&color&& talla&& material&&marca&&color){
        let boxer={
            boxers:boxers,
            precio:precio,
             color:color, // objeto 
             talla:talla,
             marca:marca,
            material:material
        };
ropa.push(boxer);
suma.push(precio);
alert("el boxer se ha agregado correctamente");
}else{
    alert("no se ha agregado nada ");
}
}
function ver_listadeproductos(){
    ropa.forEach((ropa, index) => {
        console.log(`ropa-------(${index + 1}) - color------ ${ropa.color}`);
    });
}
function sumas(){
    let total = suma.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);
console.log("precio total------"+total); 
}

function iniciarptograma(){
let inicio= true;
while(inicio){
let opcion = mostrarMenu();
switch(opcion){
    case 1:
        Agregar_Camisas();
        break;
    case 2:
        Agregar_pantalones();
        break;
    case 3: 
        Agregar_Acsesorios();
        break;
    case 4: 
        Agregar_tenis();
        break;
    case 5: 
        Agregar_boxers();
        break;
    case 6: 
        ver_listadeproductos();
        break;
    case 7: 
        sumas();
        break;
   
    case 8:
        alert("Adios");
        continuar = false;
        break;
    default:
        alert("Opcion no valida. Intenta nuevamente");

}
}
}
iniciarptograma();