console.log("testing works");

function isPrime(num) {
    if ((num <= 1) || (!(num % 2) && num !=2) || (!(num % 3) && num != 3) || (!(num % 5) && num != 5)){ //greater than zero, not divisible by 2, 3, or 5
        return false; // || (Math.sqrt(num) === Math.floor(Math.sqrt(num)) 
    }
    for(let i=3; i <= Math.sqrt(num); i=i+2){
        n = num / i;
        if (n === Math.floor(n)){
            return false;
        }
    }
    return true;
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
testPrime(81)
testPrime(200194201) //factors = 14149