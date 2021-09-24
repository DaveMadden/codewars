console.log("testing works");

function isPrime(num) {
    if ((num <= 1) || !num%2 || !num%3 || !num%5){ //greater than zero, not divisible by 2, 3, or 5
        return false;
    }
    for(let i=0; i<Math.sqrt(num); i++){
        console.log("in the for loop")
    }
  }

//tests
function testPrime(num){
    console.log(`is ${num} prime? ${isPrime(num)}`);
}

testPrime(1)
testPrime(2)
testPrime(3)
testPrime(-1)
testPrime(0)
testPrime(10)
testPrime(73)