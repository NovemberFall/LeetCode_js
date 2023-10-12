function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head == null || head.next == null || head.next.next == null) return head; // <= 2 size
    let mid = findMidNode(head);
    let second = reverse(mid.next);
    mid.next = null;
    head = merge(head, second);
};

var findMidNode = function(tmpHead) {
    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

var reverse = function(secondHead) {
    let cur = secondHead;
    let prev = null;
    let next = null;
    while (cur != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

var merge = function(one, two) {
    let dummy = new ListNode(0);
    let cur = dummy;
    while (one != null || two != null) {
        if (one != null) {
            cur.next = one;
            cur = cur.next;
            one = one.next;
        }
        if (two != null) {
            cur.next = two;
            cur = cur.next;
            two = two.next;
        }
    }
    return dummy.next;
};