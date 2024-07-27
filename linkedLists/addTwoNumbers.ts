function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var addTwoNumbers = function (l1, l2) {
//   const digits1 = recursion(l1);
//   const digits2 = recursion(l2);
//   const digits = Number(digits1) + Number(digits2);

//   const digitsList = digits.toString().split("");
//   console.log(digitsList);

//   let root = null;
//   for (let i = digitsList.length - 1; i >= 0; i--) {
//     root = insert(root, Number(digitsList[i]));
//   }

//   return root;
// };

// function insert(root, item) {
//   var temp = new ListNode();
//   var ptr;
//   temp.val = item;
//   temp.next = null;

//   if (root == null) root = temp;
//   else {
//     ptr = root;
//     while (ptr.next != null) ptr = ptr.next;
//     ptr.next = temp;
//   }
//   return root;
// }

// const recursion = (listNode, digits = "") => {
//   digits = `${digits}${listNode.val}`;
//   if (listNode.next == null) {
//     return digits;
//   }
//   return recursion(listNode.next, digits);
// };

// https://leetcode.com/problems/add-two-numbers/solutions/3077723/only-4-lines-of-code-high-level-solution-explained-all-coding-steps/

var addTwoNumbers = function (l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null;

  var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt((total / 10).toString());
  return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};

let a = new ListNode(2, null);
a.next = new ListNode(4, null);
a.next.next = new ListNode(3, null);

let b = new ListNode(5, null);
b.next = new ListNode(6, null);
b.next.next = new ListNode(4, null);

// console.log(addTwoNumbers(a, b));
