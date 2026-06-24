let products = [
    { id: 1, name: "samsung", price: 19909, image: "../images/samsung.png" },
    { id: 2, name: "vivo", price: 12909, image: "../images/vivo.png" },
    { id: 3, name: "iphone", price: 49909, image: "../images/iphone.png" },
]



function showData() {
    let data = ""
    products.map((v, i) => (
        data += `<div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <img src="${v.image}" height="200px" width="100px" alt="">
                <span>name:${v.name}</span>
                <span>Price:${v.price}</span>
                <button class="btn btn-primary" onclick="cartFun(${v.id})">cart</button>
            </div>
        </div>`
    ))
    document.getElementById("allproduct").innerHTML = data

}
showData()




function searchFun(e) {
    e.preventDefault()
    let searchInput = document.getElementById("input").value
    console.log("searchInput", searchInput);
    let output = products.filter((v, i) => v.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim()) || v.price == searchInput.trim())
    console.log("output", output);
    searchData(output)
}


function searchData(output) {
    let data = ""
    output.map((v, i) => (
        data += `<div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <img src="${v.image}" height="200px" width="100px" alt="">
                <span>name:${v.name}</span>
                <span>Price:${v.price}</span>
            </div>
        </div>`
    ))
    document.getElementById("searchOutput").innerHTML = data

}

var cart = []

function cartFun(proID) {

    let cartData = products.find((v, i) => v.id == proID)
    console.log("cartData", cartData);

    let existing=cart.find((v,i)=>v.id == proID  )


    if(existing){
        cartData.quantity++
        alert("quantity increase")
    }
    else{
        cart.push(cartData)
        cartData.quantity=1
        alert("product added")
    }
    console.log("cart", cart);
    showCart(cart)
}


function showCart(cart) {
    let data = ""
    cart.map((v, i) => (
        data += `
        <tr>
              <td><img src="${v.image}" alt="" height="100px" width="100px"></td>
              <td>${v.name}</td>
              <td>${v.price}</td>
              <td>${v.quantity}</td>
              <td><button class="btn btn-close" onclick="removeFun(${v.id})"></button></td>
            </tr>
        `
    ))
    document.getElementById("cartShow").innerHTML=data
}



function removeFun(proID){

let removeData=cart.find((v,i)=>v.id ==proID)
console.log("removeData",removeData);

if(removeData.quantity > 1){
    removeData.quantity--
}
else{
    cart=cart.filter((v,i)=>v.id != proID)
}


 showCart(cart)
}