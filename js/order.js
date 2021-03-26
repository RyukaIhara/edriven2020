window.onload =function(){
    load();
}

function load(){
    var count = 1;
    const receipt = document.querySelector('.receipt');
    const list = receipt.querySelector('table');
        let tabledata = '';
        tabledata +='<tr class="table-active"><th scope="col">#</th><th scope="col">Order #</th><th scope="col">Customer Name</th><th scope="col">Total</th><th scope="col">Actions</th></tr>';
        list.innerHTML = tabledata;
        if(JSON.parse(localStorage.getItem('order')) === null){
        }
        else{
           
            JSON.parse(localStorage.getItem('order')).map(data=>{
                if (data.fullname==""){
                    data.fullname = "Not Specified";
                }
                tabledata +='<tr><td>' + count + '</td><td>' + data.OR + '</td><td>' + data.fullname + '</td><td> ₱ ' +data.total.toFixed(2) + '</td><td><button type="button" id="btn'+count+'" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalView" onclick="view(this.id)">View</button></td></tr>';
                count++;
            });
           
                 
                 
               
        
        list.innerHTML = tabledata;
    }
        
            
        }
        
                
              
function view(x){

    var OR = document.getElementById("ORV");
    var fullname = document.getElementById("fullnameV");
    var btn = document.getElementById(x);

    var img = new Image(); 
    var div1 = document.getElementById("img1"); 
    var div2 = document.getElementById("img2");
    var div3 = document.getElementById("img3");
    var div4 = document.getElementById("img4");
    

    var rowIndex = btn.parentNode.parentNode.rowIndex;
    rowIndex = rowIndex - 1;

    var user = JSON.parse(localStorage.getItem('order'));
    OR.value = user[rowIndex].OR;
    fullname.value = user[rowIndex].fullname;
    var count=0;
    for (var k in user[rowIndex]) {
        if (user[rowIndex].hasOwnProperty(k)) {
           ++count;
        }
    }

    if (count == 4){
        img.src = user[rowIndex].item1.img;
        div1.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item1.name+'</h6> <h7>Price: ₱'+ user[rowIndex].item1.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item1.quantity+'</h7>'; 
    }
    if (count == 5){
        img.src = user[rowIndex].item1.img;
        div1.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item1.name+'</h6> <br><h7>Price: ₱'+ user[rowIndex].item1.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item1.quantity+'</h7>'; 
        img.src = user[rowIndex].item2.img;
        div2.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item2.name+' </h6> <br><h7>Price: ₱'+ user[rowIndex].item2.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item2.quantity+'</h7>'; 
    }
    if (count == 6){
        img.src = user[rowIndex].item1.img;
        div1.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item1.name+'</h6> <br><h7>Price: ₱'+ user[rowIndex].item1.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item1.quantity+'</h7>'; 
        img.src = user[rowIndex].item2.img;
        div2.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item2.name+' </h6> <br><h7>Price: ₱'+ user[rowIndex].item2.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item2.quantity+'</h7>'; 
        img.src = user[rowIndex].item3.img;
        div3.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item3.name+' </h6> <br><h7>Price: ₱'+ user[rowIndex].item3.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item3.quantity+'</h7>'; 
    }
    if (count == 7){
        img.src = user[rowIndex].item1.img;
        div1.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item1.name+'</h6> <br><h7>Price: ₱'+ user[rowIndex].item1.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item1.quantity+'</h7>'; 
        img.src = user[rowIndex].item2.img;
        div2.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item2.name+' </h6> <br><h7>Price: ₱'+ user[rowIndex].item2.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item2.quantity+'</h7>'; 
        img.src = user[rowIndex].item3.img;
        div3.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item3.name+' </h6> <br><h7>Price: ₱'+ user[rowIndex].item3.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item3.quantity+'</h7>'; 
        img.src = user[rowIndex].item4.img;
        div4.innerHTML = '<img src="'+img.src+'" style="width:100%;"/> <h6 style="font-weight:bold">'+ user[rowIndex].item4.name+' </h6> <br><h7>Price: ₱'+ user[rowIndex].item4.price+'</h7> <br><h7>Quantity: '+ user[rowIndex].item4.quantity+'</h7>'; 
    }
    
}

             
function fill1(){
    var price = document.getElementById("price1").value;
    var quantity = document.getElementById("quantity1").value;
    var sub = document.getElementById("subtotal1");
    if ((price == "") || (quantity =="")){

    }
    else{
        sub.value = price * quantity;
    }
}

function fill2(){
    var price = document.getElementById("price2").value;
    var quantity = document.getElementById("quantity2").value;
    var sub = document.getElementById("subtotal2");
    if ((price == "") || (quantity =="")){

    }
    else{
        sub.value = price * quantity;
    }
}

function fill3(){
    var price = document.getElementById("price3").value;
    var quantity = document.getElementById("quantity3").value;
    var sub = document.getElementById("subtotal3");
    if ((price == "") || (quantity =="")){

    }
    else{
        sub.value = price * quantity;
    }
}

function fill4(){
    var price = document.getElementById("price4").value;
    var quantity = document.getElementById("quantity4").value;
    var sub = document.getElementById("subtotal4");
    if ((price == "") || (quantity =="")){

    }
    else{
        sub.value = price * quantity;
    }
}













const choice1 = document.getElementById('choice1')
              let choices = [];
              let chs = [];
              const request =
              'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese'
              const getData = async () => {
                const response = await fetch(request)
                const jsondata = response.json()
                return jsondata
              }
              getData()
              .then((value) =>{
                  let arrchoices = value.meals
                  for (choice of arrchoices){
                      choices.push(choice.strMeal)
                      chs.push(choice.strMealThumb)
                      
                  }
                  pop1()
                  pop2()
                  pop3()
                  pop4()
              }).catch((err) => {
                  console.log(err)
              })
              function pop1(){
                  for (choice of choices){
                    let option= document.createElement('option')
                      option.value = choice
                      option.innerHTML = choice
                      choice1.appendChild(option)
                  }
              }
              function pop2(){
                  for (choice of choices){
                    let option= document.createElement('option')
                      option.value = choice
                      option.innerHTML = choice
                      choice2.appendChild(option)
                  }
              }
              function pop3(){
                  for (choice of choices){
                    let option= document.createElement('option')
                      option.value = choice
                      option.innerHTML = choice
                      choice3.appendChild(option)
                  }
              }
              function pop4(){
                  for (choice of choices){
                    let option= document.createElement('option')
                      option.value = choice
                      option.innerHTML = choice
                      choice4.appendChild(option)
                  }
              }



              
function save(){
    var order = []

    var number = 0;
    var view = "wait";
    var OR = document.getElementById("OR").value;
    var fullname = document.getElementById("name").value;

    var price1 = 0,price2 = 0,price3 = 0,price4 = 0;
    var quantity1 = 0,quantity2 = 0,quantity3 = 0,quantity4 = 0;

    var choice1 = document.getElementById("choice1").value;
    var choice2 = document.getElementById("choice2").value;
    var choice3 = document.getElementById("choice3").value;
    var choice4 = document.getElementById("choice4").value;

    

    if ((OR == "") || (document.getElementById("price1").value =="") && (document.getElementById("price2").value =="") && (document.getElementById("price3").value =="") && (document.getElementById("price4").value =="")){
     alert("incomplete")
     return;
    }

    if (document.getElementById("price1").value.length > 0){
        if (document.getElementById("quantity1").value.length > 0){
            price1 = document.getElementById("price1").value;
            quantity1 = document.getElementById("quantity1").value;
        }
        else{
            alert("Incomplete Input!");
            return;
        }
    }

    if (document.getElementById("price2").value.length > 0){
        if (document.getElementById("quantity2").value.length > 0){
            price2 = document.getElementById("price2").value;
            quantity2 = document.getElementById("quantity2").value;
        }
        else{
            alert("Incomplete Input!");
            return;
        }
    }
    if (document.getElementById("price3").value.length > 0){
        if (document.getElementById("quantity3").value.length > 0){
            price3 = document.getElementById("price3").value;
            quantity3 = document.getElementById("quantity3").value;
        }
        else{
            alert("Incomplete Input!");
            return;
        }
    }
    if (document.getElementById("price4").value.length > 0){
        if (document.getElementById("quantity4").value.length > 0){
            price4 = document.getElementById("price4").value;
            quantity4 = document.getElementById("quantity4").value;
        }
        else{
            alert("Incomplete Input!");
            return;
        }
    }
    var dataobject = {
        fullname: fullname,
        OR: OR,   
    }

    
    if (price1 > 0){
            for (i = 0; i <= choices.length;i++){
                if(choices[i] == choice1){
                    number = i;
                }
            }
            var img = chs[number];
        dataobject = {...dataobject,item1: {img: img, name: choice1, price: price1, quantity: quantity1}};
    }
    if (price2 > 0){
        for (i = 0; i <= choices.length;i++){
            if(choices[i] == choice2){
                number = i;
            }
        }
        var img = chs[number];
        dataobject = {...dataobject,item2: {img: img, name: choice2, price: price2, quantity: quantity2}};
    }
    if (price3 > 0){
        for (i = 0; i <= choices.length;i++){
            if(choices[i] == choice3){
                number = i;
            }
        }
        var img = chs[number];
        dataobject = {...dataobject,item3: {img: img, name: choice3, price: price3, quantity: quantity3}};
    }
    if (price4 > 0){
        for (i = 0; i <= choices.length;i++){
            if(choices[i] == choice4){
                number = i;
            }
        }
        var img = chs[number];
        dataobject = {...dataobject,item4: {img: img, name: choice4, price: price4, quantity: quantity4}};
    }
    
    var total = (price1*quantity1) + (price2*quantity2) + (price3*quantity3) + (price4*quantity4);

    dataobject = {...dataobject,total: total};

    


    if(JSON.parse(localStorage.getItem('order')) === null){
        order.push(dataobject);
        localStorage.setItem("order",JSON.stringify(order));
        
    }
    else{
        const localorder = JSON.parse(localStorage.getItem("order"));
        localorder.map(data=>{
            order.push(data); 
        });
        order.push(dataobject);
        localStorage.setItem('order',JSON.stringify(order));
        
    }
        load();
    }
    







    






    