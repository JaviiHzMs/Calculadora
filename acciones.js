var resultado = '';

function clickEnBoton(numero){
    console.log(numero)
    resultado=resultado + numero;
    console.log (resultado)
    document.getElementById("resultado").textContent=resultado;

}
function borrar (){
    resultado=''
    console.log(resultado);
    document.getElementById("resultado").textContent=resultado;


    
}
function calcularResultado (){
    resultado = eval(resultado)+''
    console.log(resultado)
    document.getElementById("resultado").textContent=resultado;


}
function porcentaje() {
    resultado= resultado/100 +''
    console.log(resultado)
    document.getElementById("resultado").textContent=resultado;
    
}
function masmenos() {
    resultado= resultado*-1 + '' 
    console.log(resultado)
    document.getElementById("resultado").textContent=resultado;

    
}