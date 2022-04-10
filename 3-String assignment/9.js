function capitalize_Words(value)
{
    let arr = value.trim().split(" ");
    let sub="";
    for(let i=0; i<arr.length; i++)
    {
        sub+=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        sub+=" ";
    }
    sub = sub.trim();
    console.log(sub);
}
capitalize_Words("js string exercises");