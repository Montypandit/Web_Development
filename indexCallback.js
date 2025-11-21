function sum(n1,n2){
    console.log('sum='+(n1+n2));
    // console.log(`sum=${n1+n2}`);
}

// sum(2,3);

const mul=(n1,n2)=> {
    // console.log('mul='+(n1*n2));
    console.log(`mul=${n1*n2}`);
}
// mul(2,3);

// callback function which call sum and mul function
// function calculator(n1,n2,callback){
//     callback(n1,n2);
// }

// calculator(5,6,sum);
// calculator(5,6,mul);

function calc(calculate){
    calculate(7,8);
    console.log('calculation done');
}
calc(sum);
calc(mul);