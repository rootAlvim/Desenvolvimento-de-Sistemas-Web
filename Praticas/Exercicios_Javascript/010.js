function fibonacci(termo) {
    let string = " ";
    let a = 0;
    let b = 1;
    for (let cont = 0; cont < termo; cont++) {
        string += a + " ";
        let c = a + b;
        a = b;
        b = c;
        
    }
    return string
}
console.log(fibonacci(11))