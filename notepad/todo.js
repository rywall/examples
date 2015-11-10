var TextNode = require('substance/model/TextNode');

var Todo = TextNode.extend({
  name: "todo",
  properties: {
    done: "bool",
    content: "string"
  }
});

// HtmlImporter

Todo.static.blockType = true;

module.exports = Todo;
