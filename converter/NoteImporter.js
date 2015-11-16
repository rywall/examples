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

function NoteImporter() {
  NoteImporter.super.call(this, {
    schema: noteSchema,
    converters: converters,
    DocumentClass: Note,
    containerId: 'body'
  });
}

NoteImporter.Prototype = function() {

};

// Expose converters so we can reuse them in NoteHtmlExporter
NoteImporter.converters = converters;

oo.inherit(NoteImporter, HTMLImporter);
module.exports = NoteImporter;