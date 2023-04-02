
function salvar(){
var num = document.getElementById("n1").value;
var numero = Number(num);

var teste = numero % 2;

if(teste == 0){
    alert("par");
}else{
    alert("impar");
}
}