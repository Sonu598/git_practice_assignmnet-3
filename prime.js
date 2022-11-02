function Prime(num) {
    let factor = 0;
    for (let a=1; a<=num; a++) {
        if(num%a===0) {
            factor++;
        }
    } if (factor===2) {
        console.log("PRIME");
    } else {
        console.log("NOT PRIME");
    }
}
Prime(17);