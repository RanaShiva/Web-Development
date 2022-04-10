function isBlank(value)
{
    value=value.trim();
    if(value.length===0)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}
isBlank("");
isBlank('abc');