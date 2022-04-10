function string_parameterize(value)
{
    value = value.replace(".","");
    let arr = value.trim().toLowerCase().split(" ");
    let sub="";
    for(let i=0; i<arr.length; i++)
    {
        sub+=arr[i]+"-";
    }
    sub = sub.slice(0,-1);
    console.log(sub);
}
string_parameterize("Robin Singh from India.")