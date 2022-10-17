// const url = "https://nike0403.herokuapp.com"
const product = new Product()
const user = new User()
const modelCart = new Cart()
const getID = (id) => {
    return document.querySelector(id)
}
let ShoesDetail = {}
let sizeChoose = ""

const handleChooseSize = (value) => {
    sizeChoose = value
}

const renderSize = (value) => {
    let content = ''
    value.map((item, index) =>
        {content += `<button  onclick="handleChooseSize(${item.size})" key=${index}>${item.size}</button>`}
    )
    return content
}
const checksizeUserChoose = () => {
    if (sizeChoose === '') {
        alert(' chọn size đi ')
    }
}
const addShoesToCart = () => {
    let data = {
        id: ShoesDetail._id,
        quantity: 1,
        name: ShoesDetail.name,
        price: ShoesDetail.price,
        size: sizeChoose,
        img: ShoesDetail.img,
        color: ShoesDetail.color,
    }
    checksizeUserChoose();
    modelCart.addTocart(data)
    modelCart.rendercartQuanlity("cartCount")
    modelCart.getCartfromlocal()
}
modelCart.getCartfromlocal()
modelCart.rendercartQuanlity("cartCount")
user.renderusername("header")
const getAPItocreen = () => {
    const href = window.location.search
    const urlparam = new URLSearchParams(href);
    const id = urlparam.get('id');
    const img = getID('.img_product')
    const name = getID('.name')
    const des = getID('.description')
    const price = getID('.price')
    const sizes = getID('#sizes')
    // project.getDataToCreenProduct()  
    // let content = ''
    product.getDataToCreenProductDetail(id, (res) => {
        // console.log(res.data);
        ShoesDetail=res.data
        img.src = res.data.img
        name.innerHTML = res.data.name
        des.innerHTML = res.data.description
        price.innerHTML = res.data.price
        sizes.innerHTML = renderSize(res.data.sizes)
    })

}
getAPItocreen()
