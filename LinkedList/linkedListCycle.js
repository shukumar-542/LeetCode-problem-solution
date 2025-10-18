class ListNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

function hasCycle(head) {

    console.log(head)
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Create Linked List
const n1 = new ListNode(3)
const n2 = new ListNode(2)
const n3 = new ListNode(0)
const n4 = new ListNode(-4)



// add Node
n1.next = n2
n2.next = n3
n3.next = n4

const result = hasCycle(n1)
console.log(result)
