function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            break;
        }
    }

    let tortoise = 0;
    while (true) {
        tortoise = nums[tortoise];
        slow = nums[slow];
        if (tortoise === slow) {
            break;
        }
    }
    return slow;
};