export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  return null;
}

// O(n) and O(n)
function reverseLinkedList(head: ListNode | null, prev: ListNode | null = null): any {
  if (head === null) return prev;

  console.log("prev", prev);
  console.log("head", head);
  const next = head.next;
  head.next = prev; // here the reason

  return reverseLinkedList(next, head)
}

// easier to read solution

function reverseList2(head: ListNode | null): ListNode | null {
  if (!head) return head;

  function reverse(curr: ListNode, parent: ListNode | null): ListNode {
    const next = curr.next;

    curr = new ListNode(curr.val, parent); // create list node

    if (!next) return curr;
    return reverse(next, curr);
  }

  return reverse(head, null);
};

// or here: 

// the idea is create new list node with the next item is the tail of the original input list node
function reverseListBest(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);

console.log(reverseLinkedList(a))