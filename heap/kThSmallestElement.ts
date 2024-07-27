// Given an array arr[] of N distinct elements and a number K, where K is smaller than the size of the array. Find the K’th smallest element in the given array.

// https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array/

// K’th Smallest Element in Unsorted Array

// naive approach: sort
const kThSmallestElementNaive = (array: number[], k: number): number => {
  array.sort((a, b) => a - b);

  // Return k'th element in the sorted array
  return array[k - 1];
};

console.log(kThSmallestElementNaive([7, 10, 4, 3, 20, 15], 3));

// Using priority Queue
function kthSmallest(arr: any, K: any) {
  // Create a max heap (priority queue)
  let pq = new MaxHeap();

  // Iterate through the array elements
  for (let i = 0; i < arr.length; i++) {
    // Push the current element onto the max heap
    pq.push(arr[i]);

    // If the size of the max heap exceeds K, remove the largest element
    if (pq.size() > K) pq.pop();
  }

  // Return the Kth smallest element (top of the max heap)
  return pq.top();
}

// MaxHeap class definition
class MaxHeap {
  heap: any[];
  constructor() {
    this.heap = [];
  }

  push(val: any) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return root;
  }

  top() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(index: any) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown(index: any) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (index !== largestIndex) {
      this.swap(index, largestIndex);
      this.heapifyDown(largestIndex);
    }
  }

  swap(i: any, j: any) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

// Driver's code:
const arr = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10];
const K = 4;

// Function call
console.log("Kth Smallest Element is: " + kthSmallest(arr, K));
