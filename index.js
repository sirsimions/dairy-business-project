var butt1 = document.getElementById('butt1');
butt1.addEventListener("onclick", totalproduction);

function totalproduction(){
    
    var shedA = document.getElementById("sheda").value;
    var shedB = document.getElementById("shedb").value;
    var shedC = document.getElementById("shedc").value;
    var shedD = document.getElementById("shedd").value;
    var prce = document.getElementById("wk").value;
    var tme = document.getElementById("tm").value;
    var wkly = document.getElementById("wkl").value;
    var yrly = document.getElementById("yrl").value;

    var year = yrly*365;
    var weeks = wkly*7;
    var a = shedA *1;
    var b = shedB *1;
    var c = shedC *1;
    var d = shedD *1;
    var totMilk = a + b + c + d;
    var time = tme*1;
    var price = prce*1;

    var totIncome = totMilk*time*price;
    var totIncomeWeek = totMilk*weeks*price;
    var totIncomeYear = totMilk*year*price;

    let p1 = "Your production in Shed A is " + a + " litres per day";
    let p2 = "Your production in Shed B is " + b + " litres per day";
    let p3 = "Your production in Shed C is " + c + " litres per day";
    let p4 = "Your production in Shed D is " + d + " litres per day";
    let p5 = "Your total milk production is " + totMilk + " litres per day";
    let p6 = "Your total income for " + time + " days is Ksh." + totIncome + "";
    let p7 = "Your total income for " + weeks/7 + " week(s) is Ksh." + totIncomeWeek + "";
    let p8 = "Your total income for " + year/365 + " year(s) is Ksh." + totIncomeYear + "";

    document.getElementById("outputa").innerHTML=p1;
    document.getElementById("outputb").innerHTML=p2;
    document.getElementById("outputc").innerHTML=p3;
    document.getElementById("outputd").innerHTML=p4;
    document.getElementById("outpute").innerHTML=p5;
    document.getElementById("outputf").innerHTML=p6;
    document.getElementById("outputg").innerHTML=p7;
    document.getElementById("outputh").innerHTML=p8;

     

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

