function swapcase(value)
{
    arr = value.split("");
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==arr[i].toUpperCase())
        {
            arr[i]=arr[i].toLowerCase();
        }
        else if(arr[i]==arr[i].toLowerCase())
        {
            arr[i]=arr[i].toUpperCase();
        }
    }
    let sub = arr.join("");
    console.log(sub);
}
swapcase('AaBbc');