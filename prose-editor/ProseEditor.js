var Component = require('substance/ui/Component');
var $$ = Component.$$;

var Controller = require('substance/ui/Controller');
var ContainerEditor = require('substance/ui/ContainerEditor');
var Icon = require('substance/ui/FontAwesomeIcon');

var Toolbar = require('substance/ui/Toolbar');
var UndoTool = require('substance/ui/UndoTool');
var RedoTool = require('substance/ui/RedoTool');
var SwitchTextTypeTool = require('substance/packages/text/SwitchTextTypeTool');
var StrongTool = require('substance/packages/strong/StrongTool');
var EmphasisTool = require('substance/packages/emphasis/EmphasisTool');
var LinkTool = require('substance/packages/link/LinkTool');

var ProseEditor = Controller.extend({
  // Editor configuration
  static: {
    config: {
      // Controller specific configuration (required!)
      controller: {
        // Component registry
        components: {
          'paragraph': require('substance/packages/paragraph/ParagraphComponent'),
          'heading': require('substance/packages/heading/HeadingComponent'),
          'blockquote': require('substance/packages/blockquote/BlockquoteComponent'),
          'codeblock': require('substance/packages/codeblock/CodeblockComponent'),
          'link': require('substance/packages/link/LinkComponent')
        },
        // Controller commands
        commands: [
          require('substance/ui/UndoCommand'),
          require('substance/ui/RedoCommand'),
          require('substance/ui/SaveCommand')
        ]
      },
      // Custom configuration (required!)
      bodyEditor: {
        commands: [
          require('substance/packages/text/SwitchTextTypeCommand'),
          require('substance/packages/strong/StrongCommand'),
          require('substance/packages/emphasis/EmphasisCommand'),
          require('substance/packages/link/LinkCommand')
        ],
        textTypes: [
          {name: 'paragraph', data: {type: 'paragraph'}},
          {name: 'heading1',  data: {type: 'heading', level: 1}},
          {name: 'heading2',  data: {type: 'heading', level: 2}},
          {name: 'heading3',  data: {type: 'heading', level: 3}},
          {name: 'codeblock', data: {type: 'codeblock'}},
          {name: 'blockquote', data: {type: 'blockquote'}}
        ]
      }
    },
  },
  
  // Custom Render method for your editor
  render: function() {
    var config = this.getConfig();
    return $$('div').addClass('sc-prose-editor').append(
      $$(Toolbar).append(
        $$(Toolbar.Group).append(
          $$(SwitchTextTypeTool, {'title': this.i18n.t('switch_text')}),
          $$(UndoTool).append($$(Icon, {icon: 'fa-undo'})),
          $$(RedoTool).append($$(Icon, {icon: 'fa-repeat'})),
          $$(StrongTool).append($$(Icon, {icon: 'fa-bold'})),
          $$(EmphasisTool).append($$(Icon, {icon: 'fa-italic'})),
          $$(LinkTool).append($$(Icon, {icon: 'fa-link'}))
        )
      ),
      $$(ContainerEditor, {
        doc: this.props.doc,
        containerId: 'body',
        name: 'bodyEditor',
        commands: config.bodyEditor.commands,
        textTypes: config.bodyEditor.textTypes
      }).ref('bodyEditor')
    );
  }
});

module.exports = ProseEditor;