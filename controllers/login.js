const user = new User()
const getID=(id)=>{
    return document.getElementById(id)
}
getID('login').addEventListener('submit',()=>{
    event.preventDefault()
    // console.log('dasd');
    const email = getID('email').value 
    // console.log(email);
    const password = getID('password').value
    const data={email:email,password:password}
    user.loginUser(
        data,res=>{
            console.log(res.data);
        localStorage.setItem('token',JSON.stringify(res.data.token))
        localStorage.setItem('user',JSON.stringify(res.data.user))
        user.redirectwhenuserlogin()
        }       
        )       
})
user.redirectwhenuserlogin()