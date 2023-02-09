window.onload = function(){
    var contador = 0;
    const botones = document.querySelectorAll(".checkbox");

    botones.forEach(accion => {
        accion.addEventListener("click", contar);
    });

    function contar(){
        contador++;

        if(contador == 1){
            Accion_Boton();
            ContadorLecEsc();
        }
        else if(contador == 2){
            alert("Cerrando sesion...");
            window.location.reload();
        }
    }
}

function Accion_Boton(){
    //Declaracion de las variables que poseen la informacion de los integrantes
    var Integrante1 = document.querySelector('#Usuario1').innerHTML;
    var Integrante2 = document.querySelector('#Usuario2').innerHTML;
    var Integrante3 = document.querySelector('#Usuario3').innerHTML;
    var Integrante4 = document.querySelector('#Usuario4').innerHTML;
    var Integrante5 = document.querySelector('#Usuario5').innerHTML;
    var Integrante6 = document.querySelector('#Usuario6').innerHTML;  

    if(document.getElementById('btn1').checked){
        alert("Iniciando sesion como: " + Integrante1);
        document.querySelector("#NombreBotones").innerHTML = Integrante1;
        document.querySelector("#User1").innerHTML ="ESCRITOR";
        document.querySelector("#btn2").disabled = true;
        document.querySelector("#btn3").disabled = true;
        document.querySelector("#btn4").disabled = true;
        document.querySelector("#btn5").disabled = true;
        document.querySelector("#btn6").disabled = true;
        document.querySelector("#EDITARBD1").style.display = "inline";
    }
    else if(document.getElementById('btn2').checked){
        alert("Iniciando sesion como: " + Integrante2);
        document.querySelector("#NombreBotones").innerHTML = Integrante2;
        document.querySelector("#User2").innerHTML ="ESCRITOR";
        document.querySelector("#btn1").disabled = true;
        document.querySelector("#btn3").disabled = true;
        document.querySelector("#btn4").disabled = true;
        document.querySelector("#btn5").disabled = true;
        document.querySelector("#btn6").disabled = true;
        document.querySelector("#EDITARBD2").style.display = "inline";
    }
    else if(document.getElementById('btn3').checked){
        alert("Iniciando sesion como: " + Integrante3);
        document.querySelector("#NombreBotones").innerHTML = Integrante3;
        document.querySelector("#User3").innerHTML ="ESCRITOR";
        document.querySelector("#btn1").disabled = true;
        document.querySelector("#btn2").disabled = true;
        document.querySelector("#btn4").disabled = true;
        document.querySelector("#btn5").disabled = true;
        document.querySelector("#btn6").disabled = true;
        document.querySelector("#EDITARBD3").style.display = "inline";
    }
    else if(document.getElementById('btn4').checked){
        alert("Iniciando sesion como: " + Integrante4);
        document.querySelector("#NombreBotones").innerHTML = Integrante4;
        document.querySelector("#User4").innerHTML ="ESCRITOR";
        document.querySelector("#btn1").disabled = true;
        document.querySelector("#btn2").disabled = true;
        document.querySelector("#btn3").disabled = true;
        document.querySelector("#btn5").disabled = true;
        document.querySelector("#btn6").disabled = true;
        document.querySelector("#EDITARBD4").style.display = "inline";
    }
    else if(document.getElementById('btn5').checked){
        alert("Iniciando sesion como: " + Integrante5);
        document.querySelector("#NombreBotones").innerHTML = Integrante5;
        document.querySelector("#User5").innerHTML ="ESCRITOR";
        document.querySelector("#btn1").disabled = true;
        document.querySelector("#btn2").disabled = true;
        document.querySelector("#btn3").disabled = true;
        document.querySelector("#btn4").disabled = true;
        document.querySelector("#btn6").disabled = true;
        document.querySelector("#EDITARBD5").style.display = "inline";
    }
    else if(document.getElementById('btn6').checked){
        alert("Iniciando sesion como: " + Integrante6);
        document.querySelector("#NombreBotones").innerHTML = Integrante6;
        document.querySelector("#User6").innerHTML ="ESCRITOR";
        document.querySelector("#btn1").disabled = true;
        document.querySelector("#btn2").disabled = true;
        document.querySelector("#btn3").disabled = true;
        document.querySelector("#btn4").disabled = true;
        document.querySelector("#btn5").disabled = true;
        document.querySelector("#EDITARBD6").style.display = "inline";
    }
}

function ContadorLecEsc(){
    //Declaracion de las variables que poseen la cantidad de lectores y escritores
    var Lectores = document.querySelector('#No_Lectores').innerHTML;
    var Escritores = document.querySelector('#No_Escritores').innerHTML;
    var TotalLectores;
    var TotalEscritores;

    TotalLectores = Lectores - 1;
    TotalEscritores = Escritores + 1;

    document.querySelector("#No_Lectores").innerHTML = TotalLectores;
    document.querySelector("#No_Escritores").innerHTML = TotalEscritores.replace('0','');   
}