function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    let count = 0;
    while (l1 || l2) {
        if (l1) {
            count += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            count += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(count % 10);

        // the division operation `/` performs floating-point division. To correct this,
        // you should use Math.floor(count / 10) to get the integer
        count = Math.floor(count / 10);
        cur = cur.next;
    }
    if (count !== 0) {
        cur.next = new ListNode(count);
        cur = cur.next;
    }
    return dummy.next;
};