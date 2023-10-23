function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeSortLinkedLists(lists, left, right) {
    if (left === right) {
        return lists[left];
    }

    // Divide the lists into two halves.
    const mid = parseInt(left + (right - left >> 2));
    const leftList = mergeSortLinkedLists(lists, left, mid);
    const rightList = mergeSortLinkedLists(lists, mid + 1, right);

    // Merge the two sorted halves.
    return mergeLinkedLists(leftList, rightList);
}

function mergeLinkedLists(leftHead, rightHead) {
    if (leftHead == null) {
        return rightHead;
    }
    if (rightHead == null) {
        return leftHead;
    }

    // Create a new head for the merged list.
    const mergedHead = new ListNode(-1);
    let cur = mergedHead;

    // Merge the two lists into the new list.
    while (leftHead != null && rightHead != null) {
        if (leftHead.val <= rightHead.val) {
            cur.next = leftHead;
            leftHead = leftHead.next;
        } else {
            cur.next = rightHead;
            rightHead = rightHead.next;
        }

        cur = cur.next;
    }

    // Add any remaining nodes from the left list to the merged list.
    if (leftHead != null) {
        cur.next = leftHead;
    }

    // Add any remaining nodes from the right list to the merged list.
    if (rightHead != null) {
        cur.next = rightHead;
    }

    // Return the head of the merged list.
    return mergedHead.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists == null || lists.length === 0) {
        return null;
    }
    // Recursively merge the lists into a single sorted list.
    return mergeSortLinkedLists(lists, 0, lists.length - 1);
};




