// iterative solution

function isSame(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    return true;
}

var isSameTree = function(p, q) {
    let node1Stack = [p];
    let node2Stack = [q];
    
    while (node1Stack.length) {
        
        let node1 = node1Stack.pop();
        let node2 = node2Stack.pop();
        
        if (! isSame(node1, node2)) {
            return false;
        }
        else {
            if (node1) {
                node1Stack.push(node1.left);
                node1Stack.push(node1.right);
            }
            if (node2) {
                node2Stack.push(node2.left);
                node2Stack.push(node2.right);
            }
        }
    }

    return true;
};

// time: O(n)
// space: O(n)


// recursive solution:
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// time: O(n)
// space: O(lg n) for balanced tree, O(n) for completely unbalanced tree