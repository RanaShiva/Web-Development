function storeDetails()
{
    let password = document.getElementById("password").value;
    sessionStorage.setItem("password",password);

    let email = document.getElementById("email").value;
    sessionStorage.setItem("uname",email);

    alert("User registered!");
}

function checkDetails()
{
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpass").value;
    if(password != cpassword)
    {
        alert("Password does not match!");
        return false;
    }

    let name = document.getElementById("name").value;

    if(sessionStorage.getItem("password")==password && sessionStorage.getItem("uname") == name)
    {
        alert("User logged in!");
    }
    else
    {
        alert("Invalid Credentials!");
        return false;
    }
}
function formValidate()
{
    //Name validation
    let uname = document.getElementById("uname").value;
    let namePattern = /[A-Za-z]{3,25}/;
    if(uname.match(namePattern)==null){
        alert("Name should have more than 2 characters and less than 25.");
        return false;
    }

    //Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /[A-Za-z0-9.+_-]+@[A-Za-z0-9.]/;
    if(email.match(emailPattern)==null)
    {
        alert("Invalid email format!");
        return false;
    }

    //Password validation
    /*8 characters long
    must contain an uppercase, lowercase and a number*/

    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpass").value;
    if(password != cpassword)
    {
        alert("Password does not match!");
        return false;
    }
    let passwordPattern = /[A-Z]+[a-z]+[0-9]/g;
    if(password.match(passwordPattern)==null && password.length <8)
    {
        alert("Password must contain one uppercase, one lowercase and one number at least and should have atleast a length of 8");
        return false;
    }

    //Captcha validation
    
    let captcha = document.getElementById("code").value;
    if(captcha!=document.getElementById("captcha").innerHTML)
    {
        alert("Captcha did not match, try again!");
        return false;
    }

    storeDetails();
}
function captchaGenerator()
{
    let random = Math.floor(Math.random()*8999)+1000;
    document.getElementById("captcha").innerHTML=random;
}

function paymentValidation()
{
    if(document.getElementById("acc").value.length!=16)
    {
        alert("Length should be 16. Invalid!");
        return false;
    }
    let cdate = new Date().getDate();
    let cmonth = new Date().getMonth()+1;
    let cyear = new Date().getFullYear();
    let date = document.getElementById("dd").value;
    let month = document.getElementById("mm").value;
    let year = document.getElementById("yy").value;

    console.log("in");
    if(cyear%100 >= year)
    {
        if(cmonth >= month)
        {
            if(cdate >= date)
            {
                return true;
            }
            else
            {
                alert("Card has expired!");
                return false;
            }
        }
        else
        {
            alert("Card has expired!");
            return false;
        }
    }
    else
    {
        alert("Card has expired!");
        return false;
    }
}