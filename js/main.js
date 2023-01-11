function input(input){
    let angka = document.getElementById("screen2").innerHTML;
    angka = angka+input;
    document.getElementById("screen2").innerHTML=angka;
    if (input == "+"||input == "-"||input == "*"||input == "/"){
        let angka2 = document.getElementById("screen").innerHTML;
        angka2=angka2+angka;
        document.getElementById("screen").innerHTML=angka2;
        document.getElementById("screen2").innerHTML="";
    }
}

function hasil(){
    let angka = document.getElementById("screen2").innerHTML;
    let angka2 = document.getElementById("screen").innerHTML;
    angka2=angka2+angka;
    document.getElementById("screen").innerHTML=angka2;
    document.getElementById("screen2").innerHTML="";
    let hasil = eval(angka2);
    document.getElementById("screen2").innerHTML="="+hasil;
}

function reset(){
    document.getElementById("screen").innerHTML="";
    document.getElementById("screen2").innerHTML="";
}

function persen(){
    let angka = document.getElementById("screen2").innerHTML;
    let persen = angka/100;
    document.getElementById("screen2").innerHTML=persen;
}

function hapus(){
    let angka = document.getElementById("screen2").innerHTML;
    let hapus = angka.slice(0,-1);
    document.getElementById("screen2").innerHTML=hapus;
}

function min(){
    let angka = document.getElementById("screen2").innerHTML;
    if (angka.includes("(")){
        let a = angka.slice(1,-1);
        let plus = Math.abs(a);
        document.getElementById("screen2").innerHTML=plus;
    }
    
    if (angka>0){
        let min = -Math.abs(angka);
        angka=document.getElementById("screen2").innerHTML="("+min+")";
        document.getElementById("screen2").innerHTML=angka;
    }
}
