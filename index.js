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
 
 var monthBtt = document.getElementById('mbtn');
 monthBtt.addEventListener("onclick", monthlProd);

 
 function monthlProd(){
    
    
        var janu = document.getElementById("jan").value;
        var febr = document.getElementById("feb").value;
        var marc = document.getElementById("mar").value;
        var apri = document.getElementById("apr").value;
        var mays = document.getElementById("may").value;
        var june = document.getElementById("jun").value;
        var july = document.getElementById("jul").value;
        var augu = document.getElementById("aug").value;
        var sept = document.getElementById("sep").value;
        var octo = document.getElementById("oct").value;
        var nove = document.getElementById("nov").value;
        var dece = document.getElementById("dec").value;

        var totj = janu*1;
        var totf = febr*1;
        var totm = marc*1;
        var tota = apri*1;
        var totmay = mays*1;
        var totju = june*1;
        var totjul = july*1;
        var totau = augu*1;
        var tots = sept*1
        var toto = octo*1
        var totno =nove*1
        var totdec =dece*1

       var janIcome = totj*450;
       var febIcome = totf*450;
       var maIcome = totm*450;
       var aprIcome = tota*450;
       var mayIcome = totmay*450;
       var junIcome = totju*450;
       var julIcome = totjul*450;
       var augIcome = totau*450;
       var sepIcome = tots*450;
       var octIcome = toto*450;
       var nocIcome = totno*450;
       var decIcome= totdec*450;
       
       let m1 = "Your income for January is Ksh." + janIcome + " ";
       let m2 = "Your income for February is Ksh." + febIcome + " ";
       let m3 = "Your income for March is Ksh." + maIcome + " ";
       let m4 = "Your income for April is Ksh." + aprIcome + " ";
       let m5 = "Your income for May is Ksh." + mayIcome + " ";
       let m6 = "Your income for June is Ksh." + junIcome + " ";
       let m7 = "Your income for July is Ksh." + julIcome + " ";
       let m8 = "Your income for August is Ksh." + augIcome + " ";
       let m9 = "Your income for September is Ksh." + sepIcome + " ";
       let m10 = "Your income for October is Ksh." + octIcome + " ";
       let m11= "Your income for November is Ksh." + nocIcome + " ";
       let m12 ="Your income for December is Ksh." + decIcome + " ";
       


    document.getElementById("otputa").innerHTML=m1;
    document.getElementById("otputb").innerHTML=m2;
    document.getElementById("otputc").innerHTML=m3;
    document.getElementById("otputd").innerHTML=m4;
    document.getElementById("otpute").innerHTML=m5;
    document.getElementById("otputf").innerHTML=m6;
    document.getElementById("otputg").innerHTML=m7;
    document.getElementById("otputh").innerHTML=m8;
    document.getElementById("otputi").innerHTML=m9;
    document.getElementById("otputj").innerHTML=m10;
    document.getElementById("otputk").innerHTML=m11;
    document.getElementById("otputl").innerHTML=m12;

      }
    

 









