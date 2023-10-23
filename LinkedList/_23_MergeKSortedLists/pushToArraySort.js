function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists == null || lists.length === 0) {
        return null;
    }
    let arr = [], dummy = new ListNode(-1);

    lists.forEach(list => {
        let cur = list;
        while (cur != null) {
            arr.push(cur.val);
            cur = cur.next;
        }
    });

    let res = dummy;
    arr.sort((a, b) => a - b)
        .forEach(n => {
            res.next = new ListNode(n);
            res = res.next;
        });

    return dummy.next;
};