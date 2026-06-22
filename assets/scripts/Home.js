let products = [
    { id: 1, name: "samsung", price: 19909, image: "../images/samsung.png" },
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
    let output = products.filter((v, i) => v.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim()) || v.price==searchInput.trim())
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



