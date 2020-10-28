'use strict';
// const linkedlist = require('./linkedlist');

// linkedlist = {
// head: node1,
// tail: node33
// }

// node1= {
//   value: 1,
//   previous: null,
//   next: node2
// }

//Complete this algo
const isLoop = (linkedlist) => {
  let slowCurrentNode = linkedlist.head;
  let fastCurrentNode = linkedlist.head;

  while (slowCurrentNode.next && fastCurrentNode.next.next) {
    slowCurrentNode = slowCurrentNode.next;
    fastCurrentNode = fastCurrentNode.next.next;
    if (!slowCurrentNode || !fastCurrentNode.next) {
      return false;
    }
    if (slowCurrentNode === fastCurrentNode) {
      return true;
    }
  }
  return false;

  //while slow.next && fast.next.next
  // slowCurrentNode=slowCurrentNode.next
  //fastCurrentNode= fastCurrentNode.next.next
  //if (slowCurrentNode===fastCurrentNode), return true
};

//if fast pointer overlaps slow, it is a loop
//is not loop: when current has no next, or when next is null

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
