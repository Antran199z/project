function Product(){
    this.list=[];
    this.getDataToCreenProduct = function(callback){
        return axios({
            url :'https://nike0403.herokuapp.com/product',
            method:'GET'
        })
        .then(callback)
        .catch((err) => {
            console.log(err);
        });
    }
    this.getDataToCreenProductDetail = function(id ,callback){
        return axios({
            url :`https://nike0403.herokuapp.com/product/${id}`,
            method:'GET'
        })
        .then(callback)
        .catch((err) => {
            console.log(err);
        });
    }
}