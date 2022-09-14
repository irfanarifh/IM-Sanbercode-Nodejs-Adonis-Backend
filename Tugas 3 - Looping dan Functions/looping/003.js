function makeRectangle(panjang, lebar) {
    for (let i = 1; i <= lebar; i++) {
        let pagar = ""
        for (let j = 1; j <= panjang; j++) {
            pagar += "#"
        }
        console.log(pagar);
    }
}

// TEST CASE

makeRectangle(8, 4)