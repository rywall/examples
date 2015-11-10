'use strict';

var $ = require('substance/util/jquery');
var ProseEditor = require('./ProseEditor');
var Article = require('./Article');
var Component = require('substance/ui/Component');
var $$ = Component.$$;

$(function() { 
  var htmlContent = $('#editor_container').html();
  var doc = new Article();
  doc.loadHtml(htmlContent);
  var $$proseEditor = $$(ProseEditor, {
    doc: doc
  });
  $('#editor_container').empty();
  Component.mount($$proseEditor, $('#editor_container'));
});
