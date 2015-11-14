'use strict';

var oo = require('substance/util/oo');
var HtmlImporter = require('substance/model/HtmlImporter');
var noteSchema = require('../note/noteSchema');
var Note = require('../note/Note');

var converters = [
  require('substance/packages/paragraph/ParagraphHtmlConverter'),
  require('substance/packages/heading/HeadingHtmlConverter'),
  require('substance/packages/strong/StrongHtmlConverter'),
  require('substance/packages/emphasis/EmphasisHtmlConverter'),
  require('substance/packages/link/LinkHtmlConverter'),
  require('./MarkHtmlConverter'),
  require('./TodoHtmlConverter')
];

function NoteHtmlImporter() {
  NoteHtmlImporter.super.call(this, {
    schema: noteSchema,
    converters: converters,
    DocumentClass: Note,
    containerId: 'body'
  });
}

NoteHtmlImporter.Prototype = function() {

};

oo.inherit(NoteHtmlImporter, HtmlImporter);
module.exports = NoteHtmlImporter;