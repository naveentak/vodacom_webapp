function hello(name)
{
    var greeting = "Hello";
    return greeting + ' ' + name;

   
    
}
console.log('hello world');
console.log(hello("Node"));
//console.log(hello.greeting);

{
    var num1 = 45;
    {
        var num2 = 43;
    }
}
console.log(num1);
console.log(num2);