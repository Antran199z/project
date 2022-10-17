const product = new Product()
const modelUser = new User()
const getID=(id)=>{
    return document.getElementById(id)
}
const getAPItocreen=()=>{
    const listShoes = getID('listShoes')
    // project.getDataToCreenProduct()  
    let content = ''
    product.getDataToCreenProduct((res) => {
        (res.data.map(
            (item) => (
                content += `<a href='/views/detail.html?id=${item._id}' class='shoes' key=${item.name} class='card'>
                <img src='${item.img}'/>
                <a>`
            )
        ))
        listShoes.innerHTML = content
    })
    
}
const logout=function(){
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    // this.renderusername('header')clg
    // console.log('asdasd');
    modelUser.renderusername('header')
}
getAPItocreen()

modelUser.renderusername('header')