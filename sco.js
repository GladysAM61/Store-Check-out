//SCO stands for Store Check Out
var carito = document.getElementById("cartt")
var scan = document.getElementById("ScanBarcode")
var button = document.getElementById("addtocart")
var productos = document.getElementById("produuctsdiv")
var inputquality = document.getElementById("Quantity")
var total= document.getElementById("total")
var taxtotal=document.getElementById("tax")
var tot=0;
var taxbutton=document.getElementById("checkout")

// Storing all of the words in one variable and calling it codigos 
const codigos ={
    "689145740844":{
        name:"JavaScript Textbook",
        price :34.95
    },
    "4549292070248" :{
        name: "Xerox Paper",
        price: 10.99         
    },
    "092265222983" :{
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J" :{
        name: "Box of Pencils (50ct.)",
        price: 15.99  
    },
    "686024002468" :{
        name: "Sanitizing Wipes",
        price: 10.99
    },
    "860004186236" : {
        name: "N95 Face Masks",
        price: 15.99 
    },
    "036000214000" :{
        name: "Kleenex",
        price: 3.99
    },
    "8809693254156" :{
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480": {
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877" :{
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T" :{
        name: "Multiport Adapter",
        price: 25.99 
    },
    "B07G6JT1XS" : {
        name: "Scissors (20ct.)",
        price: 23.99
    },
    "9780134682334" :{
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759" :{
        name: "Spiral Notebook",
        price: 1.99
    },

}

function scanner(){
    var scannerrr = scan.value;
    
    // creating an if statement that says that if the barcode is inside the barcode input,run this code
    if(codigos.hasOwnProperty(scannerrr)){
        let itemInfo = codigos[scannerrr]
        
        let itemInCart = revisar(itemInfo)
         console.log(itemInCart)

        //  this if statement says that if an item is already in cart change the quality value
        if(itemInCart){
            let quant = itemInCart.querySelector(".cantidadDeItems");
            quant.innerText= parseInt(quant.innerText) + parseInt(inputquality.value);
            tot += parseInt(inputquality.value) * parseFloat(itemInfo.price)

            total.innerText = "Total: " + "$" +   tot.toFixed(2);
            console.log("amount entered: " + inputquality.value)
            return;
        }
       
        // creating a variable thats a p element
        let item= document.createElement("p")
        // storing the iteminfo,which is name of the item scanned, inside of the p element created 
        item.innerText= itemInfo.name
        item.classList.add("itemcontainer")

        let itemprice= document.createElement("p")
         // storing the the price of the item inside of another p element  
        itemprice.innerText= itemInfo.price
        itemprice.classList.add("elprecio")

        let itemquantity= document.createElement("p")
         // storing the the amount of products inside of another p element  
        itemquantity.innerText = inputquality.value
        itemquantity.classList.add("cantidadDeItems")
    
        // joining all the p elements into a div
        var divv=document.createElement("div")
        divv.appendChild(item)
        divv.appendChild(itemprice)
        divv.appendChild(itemquantity)
        divv.classList.add("itemDiv")
        productos.appendChild(divv);

        // storing the total price inside the variable created earlier
        tot += parseInt(inputquality.value) * parseFloat(itemInfo.price)

        // to fixed maked the decimals appear a certain amount. For example, the 2 means there could only be decimals two spaces
        total.innerText = "Total: " + "$" +   tot.toFixed(2);
        console.log("hola")
      
    


    }
}
button.addEventListener("click",scanner);

// function to check if the item is already in the cart, if so just update the quality amount
// item info in parentheses to pass through the info
function revisar(itemInfo){
    console.log("looking for item")
    let cartItems = document.querySelectorAll(".itemDiv")
    console.log(itemInfo.name);
    
     
    for(let i=0 ; i<cartItems.length ; i++){

        let itemName = cartItems[i].querySelector(".itemcontainer").innerText;
        if(itemInfo.name === itemName){
            return cartItems[i];
        }
    }
    
    return null;
}

// function to fix the tax 
function tax(){
    let taxx = tot * 0.0925;
    taxtotal.innerText = "Your grand total (including tax, 9.25%) is $" + (taxx + tot).toFixed(2)
}

taxbutton.addEventListener("click",tax);