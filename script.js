const regForm = document.querySelector('#regForm')
const userName = document.querySelector('#username')
const password = document.querySelector('#password')
const confirmPwd = document.querySelector('#confirmPassword')
const email = document.querySelector('#email')

regForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs()
}) 


function validateInputs()
{
    const uNameVal = userName.value.trim()
    const pwdVal = password.value.trim()
    const cPwdVal = confirmPwd.value.trim()
    const emailVal = email.value.trim()

    if(uNameVal==='')
    {
        setError(userName,'User Name is required')
    }

    else{
        setSuccess(userName)
    }

    
    if(emailVal==='')
    {
        setError(email,'Email is required')
    }

    else if(!validateEmail(emailVal))
    {
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    
    if(pwdVal==='')
    {
        setError(password,'Password is required')
    }

    else if(pwdVal.length<8)
    {
        setError(password,'Password must be atleast 8 characters')
    }

    else{
        setSuccess(password)
    }


    if(cPwdVal==='')
    {
        setError(confirmPwd,'Confirm Password is required')
    }

    else if(cPwdVal!=pwdVal)
    {
        setError(confirmPwd,'confirm password does not matches with password')
    }

    else{
        setSuccess(confirmPwd)
    }
}

function setError(ele,msg){
    const ip = ele.parentElement
    const errorEle = ip.querySelector('.error')

    errorEle.innerText = msg;
    ip.classList.add('error')
}

function setSuccess(ele,msg){
    const ip = ele.parentElement
    const errorEle = ip.querySelector('.error')

    errorEle.innerText = '';
    ip.classList.add('success')
    ip.classList.remove('error')

}

const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}
