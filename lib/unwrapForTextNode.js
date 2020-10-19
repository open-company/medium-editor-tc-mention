const { _mediumEditor2 } = require("./index");
function unwrapForTextNode(el, doc) {
  var parentNode = el.parentNode;
  _mediumEditor2.default.util.unwrap(el, doc);
  // Merge textNode
  var currentNode = parentNode.lastChild;
  var prevNode = currentNode.previousSibling;
  while (prevNode) {
    if (currentNode.nodeType === 3 && prevNode.nodeType === 3) {
      prevNode.textContent += currentNode.textContent;
      parentNode.removeChild(currentNode);
    }
    currentNode = prevNode;
    prevNode = currentNode.previousSibling;
  }
}
