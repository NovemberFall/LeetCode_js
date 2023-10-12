function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let head = dummy;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }

    if (list1 != null) {
        head.next = list1;
    }
    if (list2 != null) {
        head.next = list2;
    }

    return dummy.next;
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
        // console.log(cur.val);
        process.stdout.write(cur.val + ' ');
        cur = cur.next;
    }
    console.log();
}


const nums1 = [1, 2, 3, 4, 5];
const list1 = initLinkedList(nums1);
const nums2 = [0, 2, 9, 11, 17];
const list2 = initLinkedList(nums2);

console.log('Original linked list1:');
printLinkedList(list1);
console.log('Original linked list2:');
printLinkedList(list2);

console.log();
console.log('merged two linked lists:');
const mergeTwoList = mergeTwoLists(list1, list2);
printLinkedList(mergeTwoList);

























