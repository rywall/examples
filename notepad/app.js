'use strict';

var doc = require('./exampleNote');
var $ = window.$ = require('substance/util/jquery');
var Component = require('substance/ui/Component');
var Notepad = require('./Notepad');
var $$ = Component.$$;

$(function() {
  // var htmlContent = $('#editor_container').html();
  // $('#editor_container').empty();
  // var htmlContent = $('#editor_container').html();
  // var doc = new Article();

  Component.mount($$(Notepad, {
    doc: doc
  }), $('#editor_container'));
});