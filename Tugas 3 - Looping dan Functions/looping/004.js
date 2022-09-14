function makeLadder(sisi) {
    for (let i = 1; i <= sisi; i++) {
        let pagar = ""
        for (let j = 1; j <= i; j++) {
            pagar += "#"
        }
        console.log(pagar);
    }
}

// TEST CASE
makeLadder(7)