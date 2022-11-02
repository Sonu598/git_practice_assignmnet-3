function Prime(num) {
    let count = 0;
    for (let a=1; a<=num; a++) {
        if(num%a===0) {
            count++;
        }
    } if (count===2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
Prime(17);