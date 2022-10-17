const cart = new Cart()
const user = new User()
cart.getCartfromlocal();
const getID = (id) => {
    return document.getElementById(id)
}
const MoreTheShoe = (item) => {
    const config = JSON.parse(atob(item))
    cart.MoreTheCart(config)
    addShoesToCart()
}
const addShoesToCart = () => {

    const displaycart = getID('display')

    let content = ""
    cart.list.map((item, index) => {
        const config = btoa(JSON.stringify(item))

        return (content += `<div class='cartItem' key=${index}>
        <img src=${item.img} alt='nike'/>
        <div> ${item.name} </div>
        <div> ${(+item.price).toLocaleString()} </div>
        <div>
            ${item.quantity}
            <button onclick='MoreTheShoe("${config}")'>+</button>
        </div>
        <div> ${(item.quantity * item.price).toLocaleString()} </div>
        </div>`);
    })

    displaycart.innerHTML = content

}
const pushCartToAPI=()=>{
   const token= user.getToken();
   const cart = localStorage.getItem("cart")
    if(!token) return window.location.replace("/views/login.html")
    if(!cart) return alert("them vao vo hang")     
    cart.pushToCartAPI(()=>{
        alert("mua hang roi")
        cart.list=[]
        localStorage.removeItem('cart')
        addShoesToCart()
    })
}
addShoesToCart()
// PushCartToAPI()
