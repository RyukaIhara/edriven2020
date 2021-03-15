function subevent1(){
    var subtotal = document.getElementById("subtotal").value;
    var tax = parseFloat(subtotal) * 0.12;
    var total = parseFloat(subtotal) * 1.12;
    var paid = total;
    var change = 0;

    if (subtotal < 100 || subtotal > 10000){
        document.getElementById("tax").value = "";
        document.getElementById("total").value = "";
        document.getElementById("paid").value = "";
        document.getElementById("change").value = "";
        document.getElementById("paid").disabled=true;
    }
    else{
        
        document.getElementById("tax").value = tax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
        document.getElementById("paid").value = paid.toFixed(2);
        document.getElementById("change").value = change.toFixed(2);
        document.getElementById("paid").disabled=false;
        if (parseFloat(paid) >= parseFloat(total)){
            pay.style.backgroundColor = "#285b13";
        }
        else{
            pay.style.backgroundColor = "#570b0b";
        }
    }
}
 
function subevent2(){
    var total = document.getElementById("total").value;
    var paid = document.getElementById("paid").value;
    if (paid == ""){
        document.getElementById("change").value = "Change";
        pay.style.backgroundColor = "#570b0b";
    }
    else{
        var change = parseFloat(paid) - parseFloat(total);
        document.getElementById("change").value = change.toFixed(2);
    
        if (parseFloat(paid) >= parseFloat(total)){
            pay.style.backgroundColor = "#285b13";
        }
        else{
            pay.style.backgroundColor = "#570b0b";
        }
    }
    
  
}