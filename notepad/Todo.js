var TextNode = require('substance/model/TextNode');

var Todo = TextNode.extend({
  name: "todo",
  properties: {
    done: "bool",
    content: "string"
  }
});
Todo.static.blockType = true;

module.exports = Todo;
