//bottom-up

var climbStairs = function(n) {
    if (n <= 1) return 1;
    
    let prevPrev = 1;
    let prev = 1;
    let result;
    
    for (let i = 2; i <= n; i++) {
        result = prevPrev + prev;
        prevPrev = prev;
        prev = result;
    }
    
    return result;
};
// time: O(n)
// space: O(1)


// recursive with memoization
const memo = [];

var climbStairs = function(n) {
    if (n <= 1) return 1;
    
    if (memo[n]) {
        return memo[n];
    }
    else {        
        memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
        return memo[n];
    }
}
// time: O(n) - size of recursion tree can go up to n
// space: O(n)