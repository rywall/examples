'use strict';

var OO = require('substance/util/oo');
// var Document = require('substance/model/Document');
var DocumentSchema = require('substance/model/DocumentSchema');
var Article = require('../prose-editor/Article');

// Custom schema
// -----------------

var schema = new DocumentSchema('substance-note', '1.0.0');
schema.getDefaultTextType = function() {
  return 'paragraph';
};

schema.addNodes([
  require('substance/packages/paragraph/Paragraph'),
  require('substance/packages/emphasis/Emphasis'),
  require('substance/packages/strong/Strong'),
  require('substance/packages/link/Link'),
  require('./todo'),
  require('./mark')
]);

// Article class definition
// -----------------

var Note = function() {
  Article.call(this, schema);
};

Note.Prototype = function() {
  
};

OO.inherit(Note, Article);

module.exports = Note;