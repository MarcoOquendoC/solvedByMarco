const deleteDuplicates = function (head) {
  let current = head;
  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
      continue;
    }
    current = current.next;
  }
  return head;
};
console.log('smile');
