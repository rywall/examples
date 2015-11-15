'use strict';

var oo = require('substance/util/oo');
var HTMLImporter = require('substance/model/HTMLImporter');
var noteSchema = require('../note/noteSchema');
var Note = require('../note/Note');

var converters = [
  require('substance/packages/paragraph/ParagraphHtmlConverter'),
  require('substance/packages/blockquote/BlockquoteHtmlConverter'),
  require('substance/packages/codeblock/CodeblockHtmlConverter'),
  require('substance/packages/heading/HeadingHtmlConverter'),
  require('substance/packages/strong/StrongHtmlConverter'),
  require('substance/packages/emphasis/EmphasisHtmlConverter'),
  require('substance/packages/link/LinkHtmlConverter'),
  require('./MarkHtmlConverter'),
  require('./TodoHtmlConverter')
];

function NoteHTMLImporter() {
  NoteHTMLImporter.super.call(this, {
    schema: noteSchema,
    converters: converters,
    DocumentClass: Note,
    containerId: 'body'
  });
}

NoteHTMLImporter.Prototype = function() {

};

oo.inherit(NoteHTMLImporter, HTMLImporter);
module.exports = NoteHTMLImporter;