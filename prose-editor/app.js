'use strict';

var $ = require('jquery');
var Article = require('substance/article');
var Component = require('substance/ui/component');
var $$ = Component.$$;
var Controller = require('substance/ui/controller');
var ContainerEditor = require('substance/ui/surface/container_editor');
var Icon = require('substance/ui/font_awesome_icon');

// Tools
// --------------

var UndoTool = require('substance/ui/tools/undo_tool');
var RedoTool = require('substance/ui/tools/redo_tool');
var TextTool = require('substance/ui/tools/text_tool');
var StrongTool = require('substance/ui/tools/strong_tool');
var EmphasisTool = require('substance/ui/tools/emphasis_tool');
var LinkTool = require('substance/ui/tools/link_tool');

// Customized Controller
// --------------
// 
// Extending from ui.Controller creates a context for editing components,
// such as ContainerEditor, TextProperty etc.
// Controller also keeps track of the focused editing surface etc.
// Customize by modifying the config object

var ProseEditor = Controller.extend({
  // Editor configuration
  static: {
    config: {
      // Controller specific configuration (required!)
      controller: {
        // Controller commands
        commands: [
          require('substance/ui/commands/undo'),
          require('substance/ui/commands/redo'),
          require('substance/ui/commands/save')
        ],
        // Component registry
        components: {
          "paragraph": require('substance/ui/nodes/paragraph_component'),
          "heading": require('substance/ui/nodes/heading_component'),
          "blockquote": require('substance/ui/nodes/blockquote_component'),
          "codeblock": require('substance/ui/nodes/codeblock_component'),
          "link": require('substance/ui/nodes/link_component')
        }
      },
      // Custom configuration (required!)
      bodyEditor: {
        commands: [
          // Used to determine the text tool state (is never executed)
          require('substance/ui/commands/switch_text_type'),
          require('substance/ui/commands/make_paragraph'),
          require('substance/ui/commands/make_heading1'),
          require('substance/ui/commands/make_heading2'),
          require('substance/ui/commands/make_heading3'),
          require('substance/ui/commands/make_blockquote'),
          require('substance/ui/commands/make_codeblock'),
          require('substance/ui/commands/toggle_strong'),
          require('substance/ui/commands/toggle_emphasis'),
          require('substance/ui/commands/toggle_link'),
          require('substance/ui/commands/select_all')
        ]
      }
    },
  },

  // Custom Render method for your editor
  render: function() {
    var config = this.constructor.static.config;

    return $$('div').addClass('editor-component').append(
      $$('div').addClass('toolbar').append(
        $$(TextTool, {'title': this.i18n.t('switch_text')}),
        $$(UndoTool).append($$(Icon, {icon: "fa-undo"})),
        $$(RedoTool).append($$(Icon, {icon: "fa-repeat"})),
        $$(StrongTool).append($$(Icon, {icon: "fa-bold"})),
        $$(EmphasisTool).append($$(Icon, {icon: "fa-italic"})),
        $$(LinkTool).append($$(Icon, {icon: "fa-link"}))
      ),
      $$(ContainerEditor, {
        doc: this.props.doc,
        containerId: 'body',
        name: 'bodyEditor',
        // Use default surface commands
        commands: config.bodyEditor.commands
      }).ref('bodyEditor')
    );
  }
});

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
