'use strict';

var SurfaceTool = require('substance/ui/SurfaceTool');

var TodoTool = SurfaceTool.extend({
  static: {
    name: 'todo',
    command: 'todo'
  }



  // performAction: function() {
  //   var cmd = this.getCommand();
  //   cmd.execute();
  // }

});

module.exports = TodoTool;
