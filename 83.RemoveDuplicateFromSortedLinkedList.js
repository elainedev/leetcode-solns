var deleteDuplicates = function(head) {
    // console.log(head)
    let node = head;
    
    while (node) {
        while (node.next && node.val === node.next.val) {
            node.next = node.next.next;
        }
        node = node.next;
    }
    
    return head;
};

// time: O(n)
// space: O(1)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */