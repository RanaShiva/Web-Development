function abbrev_name(value)
{
    let arr=value.trim().split(" ");
    sub=arr[0];
    for(i=1; i<arr.length; i++)
    {
        sub+=" ";
        sub+=arr[i].charAt(0);
        sub+="."
    }
    sub = sub.trim();
    console.log(sub);
}
abbrev_name("Robin Singh Chaturvedi");