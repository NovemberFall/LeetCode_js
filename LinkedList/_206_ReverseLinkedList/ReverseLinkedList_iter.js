function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    let prev = null;
    let cur = head;
    let next = null;

    while (cur != null) {
        next = cur.next;
        // reverse
        cur.next = prev;
        // advance prev and curr
        prev = cur;
        cur = next;
    }
    return prev;
};

/*********************************************/

function initLinkedList(nums) {
    let head = new ListNode(nums[0]);
    let cur = head;
    for (let i = 1; i < nums.length; i++) {
        cur.next = new ListNode(nums[i]);
        cur = cur.next;
    }
    return head;
}

function printLinkedList(head) {
    let cur = head;
    while (cur != null) {
        console.log(cur.val);
        cur = cur.next;
    }
}



const nums = [1, 2, 3, 4, 5];
const head = initLinkedList(nums);

console.log('Original linked list:');
printLinkedList(head);

const reversedHead = reverseList(head);

console.log('Reversed linked list:');
printLinkedList(reversedHead);