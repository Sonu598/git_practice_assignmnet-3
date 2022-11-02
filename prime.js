function Prime(num) {
    let count = 0;
    for (let a=0; a<num; a++) {
        if(a%2===0) {
            count++;
        }
    } if (count===2) {
        console.log("Yes");
    } else {
        console.log();
    }
}
function.prime(17);