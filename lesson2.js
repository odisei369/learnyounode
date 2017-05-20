var sum = 0;
for (var a = 2; a < process.argv.length; a++)
{
    sum += parseInt(process.argv[a]);
}
console.log(sum);