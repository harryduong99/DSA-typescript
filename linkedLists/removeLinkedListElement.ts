/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// MUST READ: https://stackoverflow.com/questions/66016981/understanding-linkedlists-references
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// let temp: ListNode | null = null;
function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head != null && head.val == val) {
    // ignore head that match val and jump to next head
    head = head.next;
  }
  if (head == null) {
    // the stop point, where the recursion stop and final result returned
    return null;
  }
  return new ListNode(head.val, removeElements(head.next, val)); // using recursion to build the link list
}

// another solution 
// https://leetcode.com/problems/remove-linked-list-elements/solutions/2893717/two-pointers-o-n/
// function removeElements2(head: ListNode | null, val: number): ListNode | null {
//   if (!head) {
//     return head;
//   }

//   // Keep a pointer to the previous element
//   let prev = null, curr = head;
//   while (curr) {
//     if (curr.val === val) {
//       if (!prev) {
//         // we're just at the beginning and found a value already
//         // we just move the head
//         head = head?.next;
//         curr = head;
//         continue;
//       } else {
//         // we skip the current node
//         prev.next = curr.next;
//       }
//     } else {
//       // no value found, we move forward
//       prev = curr;
//     }

//     curr = curr.next;
//   }

//   return head;
// };

let a = new ListNode(6);
let b = new ListNode(5, a);
let c = new ListNode(4, b);
let d = new ListNode(3, c);
let e = new ListNode(6, d);
let f = new ListNode(2, e);
let k = new ListNode(1, f);

console.log(removeElements(k, 6));
