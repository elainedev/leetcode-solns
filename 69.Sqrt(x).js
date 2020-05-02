var mySqrt = function(x) {
    let start = 1;
    let end = x;
    
    if (x === 0) return 0;
    
    while (start <= end) {  // also works if just do while(true)
        let middle = parseInt((start + end) / 2);
        let product = middle * middle;
        
        if (product > x) {
            end = middle;
        }
        else if (product < x) {
            if (Math.pow(middle + 1, 2) > x) return middle;
            start = middle;
        }
        else if (product === x) {
            return middle;
        }
    }
};