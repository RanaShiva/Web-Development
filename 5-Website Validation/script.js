function storeDetails()
{
    var password = document.getElementById("password").value;
    sessionStorage.setItem("password",password);

    var email = document.getElementById("email").value;
    sessionStorage.setItem("uname",email);

    alert("User registered!");
}

function checkDetails()
{
    var password = document.getElementById("password").value;

    var name = document.getElementById("name").value;

    if(sessionStorage.getItem("password")==password && sessionStorage.getItem("uname") == name)
    {
        alert("User logged in!");
    }
    else
    {
        alert("Invalid Credentials!");
    }
}