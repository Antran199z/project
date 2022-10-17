const user = new User()
const getID = (id) => {
    return document.getElementById(id)
}
const registerUser = () => {
    event.preventDefault()
    const name = getID('txt-name').value
    const email = getID('txt-email').value
    const password = getID('txt-password').value
    const age = getID('txt-age').value
    const data = { name: name, email: email, password: password, age: age, userType:'user' }
    // console.log(data);
    user.registerUser(data, res => {
        console.log(res.data);
    })
}
// registerUser()User.redirectwhenuserlogin()
user.redirectwhenuserlogin()