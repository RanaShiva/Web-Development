function isString(value)
{
    return typeof value==='string'||value instanceof String;
}

console.log(isString("Graphic era University"));
console.log(isString([1,2,4,0]));