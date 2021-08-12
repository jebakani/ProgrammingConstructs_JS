//P1-Finding lasgest amoung 5 numbers
let min=1000;
let max=100;
for(let i=0;i<5;i++)
{
    //generate the random value
    let num=Math.floor(Math.random()*900)+100;
    if(num<min)
    {
        min=num;
    }
    else if(num>max)
    {
        max=num;
    }   
}
console.log("Min of 5 number is:"+min+"\nMax of 5 number is:"+max);

//P4-Coin flip
const HEAD=1;
let coinFlip=Math.floor(Math.random()*10)%2;
if(coinFlip==HEAD)
{
    console.log("Head");
}
else
{
    console.log("Tail");
}