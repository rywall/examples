'use strict';

// var doc = require('./exampleNote');
var $ = window.$ = require('substance/util/jquery');
var Component = require('substance/ui/Component');
var Notepad = require('./Notepad');
var $$ = Component.$$;
var NoteImporter = require('../converter/NoteImporter');
var importer = new NoteImporter();

$(function() {
  var htmlContent = $('#editor_container').html();
  $('#editor_container').empty();
  var doc = importer.importDocument(htmlContent);
  
  console.log('doc', doc.toJSON());

  Component.mount($$(Notepad, {
    doc: doc
  }), $('#editor_container'));
});