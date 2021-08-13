var prompt=require('prompt-sync')();
var num=prompt();
if (num > 256) {
    console.log("Number should be less than 256");
}
else
{
for (let i = 0; i < num; i++) {
    console.log("2 ^" + i + " = " + Math.pow(2, i));
}
}

