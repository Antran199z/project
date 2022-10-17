function User() {
    this.loginUser = function (dataDom, callback) {
        axios({
            url: 'https://nike0403.herokuapp.com/users/login ',
            method: 'POST',
            data: dataDom
        })
            .then(callback)
            .catch((err) => {
                alert('Dang nhap lai')
            });
    }
    this.getToken = function () {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            return token;
        } else return false;
    }
    this.getUser = function () {
        const user = JSON.parse(localStorage.getItem('user'));
        // chuyen doi kieu du lieu json> ban dau
        if (user) {
            return user;
        } else return false;
    }
    this.redirectwhenuserlogin = function () {
        const token = this.getToken();
        token && window.location.replace('/');

    }
    this.registerUser = function (dataDom, callback) {
        axios({
            url: 'https://nike0403.herokuapp.com/users/create',
            method: 'POST',
            data: dataDom
        })
            .then(callback)
            .catch((err) => {
                alert(err.message.data)
            });
    }

    this.renderusername = function (id) {
        // const header=getID('header')
        const user = this.getUser()
        const DomID = document.getElementById(id)
        if (user) {
            DomID.innerHTML = `<button>${user.name}</button>
            <button onclick='logout()'>logout</button>`
        } else {
            DomID.innerHTML = `
            <a href="./views/login.html">login</a>
            <a href="./views/register.html">re</a>
            
            `
        }
    }
}