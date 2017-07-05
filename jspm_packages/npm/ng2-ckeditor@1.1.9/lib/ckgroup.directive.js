/* */ 
"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var core_1 = require('@angular/core');
var ckbutton_directive_1 = require('./ckbutton.directive');
var CKGroupDirective = (function() {
  function CKGroupDirective() {}
  CKGroupDirective.prototype.ngAfterContentInit = function() {
    var _this = this;
    this.toolbarButtons.forEach(function(button) {
      return button.toolbar = _this.name;
    });
  };
  CKGroupDirective.prototype.initialize = function(editor) {
    editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
    this.toolbarButtons.forEach(function(button) {
      button.initialize(editor);
    });
  };
  return CKGroupDirective;
}());
CKGroupDirective.decorators = [{
  type: core_1.Directive,
  args: [{selector: 'ckgroup'}]
}];
CKGroupDirective.ctorParameters = function() {
  return [];
};
CKGroupDirective.propDecorators = {
  'name': [{type: core_1.Input}],
  'previous': [{type: core_1.Input}],
  'subgroupOf': [{type: core_1.Input}],
  'toolbarButtons': [{
    type: core_1.ContentChildren,
    args: [ckbutton_directive_1.CKButtonDirective]
  }]
};
exports.CKGroupDirective = CKGroupDirective;
