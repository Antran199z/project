function Cart() {
    this.list = []
    this.saveCartToLocal = function () {
        localStorage.setItem('cart', JSON.stringify(this.list))
    }
    this.getCartfromlocal = function () {
        const data = JSON.parse(localStorage.getItem('cart'))
        if (data) this.list = data;
    }
    this.checkShoeDuplicate = (id, size) => {
        return this.list.findIndex(
            (item) => item.id === id && item.size === size
        )
    };
    this.addTocart = function (item) {
        const check = this.checkShoeDuplicate(item.id, item.size)
        if (check !== -1) {
            this.list[check].quantity++
        } else {
            this.list.push(item);
        }
        this.saveCartToLocal();
    }
    this.MoreTheCart = function (item) {
        // console.log(item);   
        const check = this.checkShoeDuplicate(item.id, item.size)
        if (check !== -1) {
            this.list[check].quantity++
        }
        this.saveCartToLocal();
    }
    // this.MinusTheCart = function () {
    //     const check = this.checkShoeDuplicate(item.id, item.size)
    //     if (check !== -1) {
    //         this.list[check].quantity++
    //     }
    //     this.saveCartToLocal();
    // }
    this.rendercartQuanlity = (value) => {
        const id = document.getElementById(value);
        id.innerHTML = this.list.length
    }   
    this.pushToCartAPI= function(callback){
        const data={product:this.list}
        const token= JSON.parse(localStorage.getItem("token"))
        axios({
            url :'https://nike0403.herokuapp.com/cart/create',
            data:data,
            method:"POST",
            headers:{authorization:`Bearer ${token}`}
        })  
        .then(callback)
            
        .catch((err) => {
            alert("loi roi")
        });
    }
}   