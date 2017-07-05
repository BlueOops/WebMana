/* */ 
(function(process) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var core_1 = require('@angular/core');
  var forms_1 = require('@angular/forms');
  var ckbutton_directive_1 = require('./ckbutton.directive');
  var ckgroup_directive_1 = require('./ckgroup.directive');
  var CKEditorComponent = (function() {
    function CKEditorComponent(zone) {
      this.change = new core_1.EventEmitter();
      this.ready = new core_1.EventEmitter();
      this.blur = new core_1.EventEmitter();
      this.focus = new core_1.EventEmitter();
      this._value = '';
      this.zone = zone;
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(v) {
        if (v !== this._value) {
          this._value = v;
          this.onChange(v);
        }
      },
      enumerable: true,
      configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function(changes) {
      if (changes.readonly && this.instance) {
        this.instance.setReadOnly(changes.readonly.currentValue);
      }
    };
    CKEditorComponent.prototype.ngOnDestroy = function() {
      var _this = this;
      if (this.instance) {
        setTimeout(function() {
          _this.instance.removeAllListeners();
          CKEDITOR.instances[_this.instance.name].destroy();
          _this.instance.destroy();
          _this.instance = null;
        });
      }
    };
    CKEditorComponent.prototype.ngAfterViewInit = function() {
      this.ckeditorInit(this.config || {});
    };
    CKEditorComponent.prototype.updateValue = function(value) {
      var _this = this;
      this.zone.run(function() {
        _this.value = value;
        _this.onChange(value);
        _this.onTouched();
        _this.change.emit(value);
      });
    };
    CKEditorComponent.prototype.ckeditorInit = function(config) {
      var _this = this;
      if (typeof CKEDITOR === 'undefined') {
        console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
      } else {
        if (this.readonly) {
          config.readOnly = this.readonly;
        }
        this.instance = CKEDITOR.replace(this.host.nativeElement, config);
        this.instance.setData(this.value);
        this.instance.on('instanceReady', function(evt) {
          _this.ready.emit(evt);
        });
        this.instance.on('change', function() {
          _this.onTouched();
          var value = _this.instance.getData();
          if (_this.debounce) {
            if (_this.debounceTimeout)
              clearTimeout(_this.debounceTimeout);
            _this.debounceTimeout = setTimeout(function() {
              _this.updateValue(value);
              _this.debounceTimeout = null;
            }, parseInt(_this.debounce));
          } else {
            _this.updateValue(value);
          }
        });
        this.instance.on('blur', function(evt) {
          _this.blur.emit(evt);
        });
        this.instance.on('focus', function(evt) {
          _this.focus.emit(evt);
        });
        this.toolbarGroups.forEach(function(group) {
          group.initialize(_this);
        });
        this.toolbarButtons.forEach(function(button) {
          button.initialize(_this);
        });
      }
    };
    CKEditorComponent.prototype.writeValue = function(value) {
      this._value = value;
      if (this.instance)
        this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function(_) {};
    CKEditorComponent.prototype.onTouched = function() {};
    CKEditorComponent.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    CKEditorComponent.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    return CKEditorComponent;
  }());
  CKEditorComponent.decorators = [{
    type: core_1.Component,
    args: [{
      selector: 'ckeditor',
      providers: [{
        provide: forms_1.NG_VALUE_ACCESSOR,
        useExisting: core_1.forwardRef(function() {
          return CKEditorComponent;
        }),
        multi: true
      }],
      template: "<textarea #host></textarea>"
    }]
  }];
  CKEditorComponent.ctorParameters = function() {
    return [{type: core_1.NgZone}];
  };
  CKEditorComponent.propDecorators = {
    'config': [{type: core_1.Input}],
    'readonly': [{type: core_1.Input}],
    'debounce': [{type: core_1.Input}],
    'change': [{type: core_1.Output}],
    'ready': [{type: core_1.Output}],
    'blur': [{type: core_1.Output}],
    'focus': [{type: core_1.Output}],
    'host': [{
      type: core_1.ViewChild,
      args: ['host']
    }],
    'toolbarButtons': [{
      type: core_1.ContentChildren,
      args: [ckbutton_directive_1.CKButtonDirective]
    }],
    'toolbarGroups': [{
      type: core_1.ContentChildren,
      args: [ckgroup_directive_1.CKGroupDirective]
    }],
    'value': [{type: core_1.Input}]
  };
  exports.CKEditorComponent = CKEditorComponent;
})(require('process'));
