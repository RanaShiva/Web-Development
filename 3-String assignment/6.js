function protectEmail(value)
{
    let arr = value.split("@");
    let part1, part2;
    part1 = arr[0];
    part1 = part1.slice(0,part1.length/2);
    part2 = arr[1];
    sub = part1 + "...@" + part2;
    console.log(sub);
}
protectEmail("robin_singh@example.com");