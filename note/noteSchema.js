'use strict';

var DocumentSchema = require('substance/model/DocumentSchema');
var TextNode = require('substance/model/TextNode');
var Annotation = require('substance/model/Annotation');

/**
  Simple mark for highlighting text in a note
*/
var Mark = Annotation.extend({
  name: 'mark'
});

/**
  Todo item represented with annotated text (content) and boolean flag (done).
*/
var Todo = TextNode.extend({
  name: 'todo',
  properties: {
    done: 'bool',
    content: "string"
  }
});
Todo.static.blockType = true;

/**
  Schema instance
*/
var schema = new DocumentSchema('substance-note', '1.0.0');
schema.getDefaultTextType = function() {
  return 'paragraph';
};

schema.addNodes([
  require('substance/packages/paragraph/Paragraph'),
  // require('substance/packages/heading/Heading'),
  require('substance/packages/emphasis/Emphasis'),
  require('substance/packages/strong/Strong'),
  require('substance/packages/link/Link'),
  Todo,
  Mark
]);

module.exports = schema;
