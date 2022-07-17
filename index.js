var butt1 = document.getElementById('butt1');
butt1.addEventListener("onclick", totalproduction);

function totalproduction(){
    
    var shedA = document.getElementById("sheda").value;
    var shedB = document.getElementById("shedb").value;
    var shedC = document.getElementById("shedc").value;
    var shedD = document.getElementById("shedd").value;
   
    var a = shedA *7;
    var b = shedB *7;
    var c = shedC *7;
    var d = shedD *7;
    let p1 = "Your production in Shed A is " + a + " litres per day";
    let p2 = "Your production in Shed A is " + b + " litres per day";
    let p3 = "Your production in Shed A is " + c + " litres per day";
    let p4 = "Your production in Shed A is " + d + " litres per day";

    document.getElementById("outputa").innerHTML=p1;
    document.getElementById("outputb").innerHTML=p2;
    document.getElementById("outputc").innerHTML=p3;
    document.getElementById("outputd").innerHTML=p4;

}













var butt = document.getElementById('but1');
butt.addEventListener("onclick", tabRows);

var months =[];
var weeks =[];
var days =[];
var milkLit =[];
var sheds =[];
var row = 1;
var r=0;

function tabRows(){
    var tableDat = document.getElementById("tabl"); //getting the table
 
    var rows = tableDat.insertRow(row); //inserting a row (containing headers)

    months[r] = document.getElementById("month").value;
    weeks[r] = document.getElementById("week").value;
    days[r] = document.getElementById("day").value;
    sheds[r] = document.getElementById("shed").value;
    milkLit[r] = document.getElementById("milk").value;

        var cel1 = rows.insertCell(0);
        var cel2 = rows.insertCell(1);
        var cel3 = rows.insertCell(2);
        var cel4 = rows.insertCell(3);
        var cel5 = rows.insertCell(4);
        
        cel1.innerHTML = months[r];
        cel2.innerHTML = weeks[r];
        cel3.innerHTML = days[r];
        cel4.innerHTML = sheds[r];
        cel5.innerHTML = milkLit[r];
        
        row++;
        r++;
    }


