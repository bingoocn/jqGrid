var cngc = cngc || {};
! function($) {
  'use strict';
  var idattr = '[cngc-div="drag"]';
  $.browser = {
    'isIE': (navigator.userAgent.toUpperCase().indexOf('MSIE') >= 0) && (navigator.userAgent.toUpperCase().indexOf('OPERA') < 0),
    'isFirefox': navigator.userAgent.toUpperCase().indexOf('FIREFOX') >= 0,
    'isOpera': navigator.userAgent.toUpperCase().indexOf('OPERA') >= 0,
    'isSafari': navigator.userAgent.toUpperCase().indexOf('SAFARI') >= 0,
    'isIE6': navigator.userAgent.toUpperCase().indexOf('MSIE 6') >= 0
  };
  /**
   * 按下元素后，计算当前鼠标与对象计算后的坐标.
   * @param  {event} e
   */
  function mousedown(e) {
    var curEle = $(e.target);
    curEle.data('pointdv', e.clientX - curEle.width());
    $(document).on('mousemove', curEle, mouseMove);
    $(document).on('mouseup', mouseUp);
    // 防止默认事件发生
    e.preventDefault();
  }
  /**
   * 移动事件.
   * @param  {event} e
   */
  function mouseMove(e) {
    e.data.width(e.clientX - e.data.data('pointdv'));
  }
  /**
   * 停止事件.
   * @param  {event} e
   */
  function mouseUp() {
    $(window).trigger('resize');
    $(document).off('mousemove', mouseMove);
    $(document).off('mouseup', mouseUp);
  }
  $(document).on('mousedown', idattr, mousedown);

  cngc.utils = {
    open_win: function(url) {
      window.open(url);
    }
  };

  cngc.uiObj = {};

  cngc.uiBase = {
    target: '',
    /**
     * 控件类型：如grid
     */
    uiType: ''
    /**
     *  还可以存放ui组件相关的公关方法，例如从文档中获取指定的DOM元素
     *    getDom:function(id){
     *       if ('string' == typeof id || id instanceof String) {
     *           return document.getElementById(id);
     *       } else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
     *           return id;
     *       }
     *       return null;
     *     }
     * @returns {HTMLElement|null} 获取的元素，查找不到时返回null,如果参数不合法，直接返回参数
     */
  };
  /**
   * html元素模板
   * @return {undefined}
   */
  cngc.ElementModel = function(id) {
    var model = this;
    $.extend(true, model, $($('#' + id).prop('outerHTML')));
  };
  cngc.ElementModel.prototype.getElement = function() {
    return this.children();
  };
  /**
   * 创建一个UI控件类
   * @function
   * @grammar cngc.createUI(constructor, options)
   * @param {Function} constructor ui控件构造器
   * @param {Object} options 选项
   * @return {Object} ui控件
   */
  cngc.createUI = function(constructor, options) {
    options = options || {};
    var i, j, n,
      ui = function(opt) { // 创建新类的真构造器函数
        var me = this,
          finalOpts = {};
        opt = opt || {};
        /*
        if(typeof ($("#"+ opt.id).attr("mainId")) !== "undefined"){
           alert("请勿在id为"+ opt.id + "的元素上重复渲染！");
        } */
        // 扩展静态配置到this上
        $.extend(me, ui.options);
        // 扩展当前options中的项到this上,事件不扩展到me上
        var tempOpt = {};
        for (var i in opt) {
          if (typeof opt[i] !== 'function') tempOpt[i] = opt[i];
        }
        $.extend(me, tempOpt);
        // 执行控件自己的构造器
        if (typeof opt === 'string') {
          return constructor.apply(me, arguments);
        } else {
          var conObj = constructor.apply(me, arguments);
          // 如有返回值则使用返回值，否则与defaults深度合并
          finalOpts = conObj ? conObj : $.extend(true, {}, me.defaults, opt);
        }
        // 如属性值为数组[]，通过$.extend()不能覆盖默认值而是合并，此做特殊处理
        for (var para in opt) {
          if (typeof opt[para] === 'object' && typeof opt[para].splice === 'function' && typeof opt[para].length === 'number' && finalOpts[para] !== opt[para]) finalOpts[para] = opt[para];
        }
        // constructor.apply(me, arguments);
        // 自己的构造器可以往ui.options里存放默认属性
        // opt = $.extend(true,{},me.defaults,opt) ;

        // 初始化组件
        var tempObj = me.init(finalOpts);
        $.extend(me, tempObj);
        // 初始化成功后给渲染元素设定其mainid值，标示已经渲染过
        if (typeof tempObj !== 'undefined') {
          $(finalOpts.id).attr('mainId', $(finalOpts.id).attr('id'));
        } else {
          window.alert('id为' + $(finalOpts.id).attr('id') + '的元素ui渲染有误！');
        }

        // 执行插件的构造器
        for (i = 0, n = ui._addons.length; i < n; i++) {
          ui._addons[i](me);
        }

        // 释放默认属性方法内存
        me.defaults = undefined;
        me.methods = undefined;
        // 把组件对象存放在cngc.uiObj里
        if (opt.id !== 'undefined' && me.uiType !== 'validate') {
          // grid编辑过程中，元素没有append到页面，需通过opt.targetElem获取
          cngc.uiObj[opt.targetElem ? $(opt.targetElem).attr('id') : $(opt.id).attr('id')] = me;
        }
      },
      C = function() {};
    C.prototype = cngc.uiBase;
    ui.prototype = new C();
    ui.prototype.constructor = ui;
    /**
     * 扩展控件的prototype,如果是对象则进行合并，否则覆盖
     * @param {Object} json 要扩展进prototype的对象
     * @return {Object} 扩展后的对象
     */
    ui.extend = function(json) {
      for (i in json) {
        if (typeof json[i] === 'object') {
          ui.prototype[i] = $.extend({}, ui.prototype[i] || {}, json[i]);
          // 如果扩展的是方法，把所有方法绑定到ui对象上
          if (i === 'methods') {
            for (j in json[i]) {
              ui.prototype[j] = json[i][j];
            }
          }
        } else {
          ui.prototype[i] = json[i];
        }
      }
      return ui; // 这个静态方法也返回类对象本身
    };

    // 插件支持
    ui._addons = [];
    ui.register = function(f) {
      if (typeof f === 'function')
        ui._addons.push(f);
    };

    // 静态配置支持
    ui.options = {};

    return ui;
  };

  function _createPickerHtml(setting) {
    var height = (setting.height || 125);
    height = ($.isNumeric(height) ? (height + 'px') : height);
    var width = (setting.width || 139);
    width = ($.isNumeric(width) ? (width + 'px') : width);
    var html = [];
    html.push('<div class=\'picker\' data-ellipsis=\'true\' data-initialize=\'picker\' style=\'width:100%;\'>');
    html.push('<div class=\'form-inline\'>');
    html.push('<div class=\'form-group\' style=\'width:100%;\'>');
    html.push('<input id=\'' + setting.id + '_text_input\' class=\'form-control picker-trigger\' type=\'text\' style=\'width:' + width + ';\' readonly/>');
    html.push('</div>');
    html.push('</div>');
    html.push('<div class=\'picker-change\' style=\'width:' + width + ';\'>');
    html.push('<div class=\'picker-body well\' style=\'height:' + height + ';\'>');
    html.push('<ul id=\'' + setting.id + '_treeContent\' class=\'ztree\'></ul>');
    html.push('</div>');
    html.push('</div>');
    html.push('</div>');
    return html.join('');
  }

  /**
   * 创建一个pickerTree控件,表单中下拉树控件。
   * @function
   * @return {Object} ui控件
   */
  cngc.pickerTree = cngc.createUI(function(options) {
    if (typeof options === 'object') {
      var me = this;
      me.target = '#' + options.id;
      me.uiType = 'pickerTree';
      options.callback = options.callback || {};
      var _onClick = options.callback.onClick;
      var _onCheck = options.callback.onCheck;
      var _onAsyncSuccess = options.callback.onAsyncSuccess;
      options.callback.onClick = function(e, treeId, treeNode) {
        if (!$.fn.zTree.getZTreeObj(treeId).setting.check.enable) {
          $(me.target + '_text_input').val(treeNode.name).trigger('input');
          $(me.target).val(treeNode.id);
        }
        if ($.isFunction(_onClick)) {
          _onClick(e, treeId, treeNode);
        }
      };
      options.callback.onCheck = function(e, treeId, treeNode) {
        var treeObj = $.fn.zTree.getZTreeObj(treeId);
        var nodes = treeObj.getCheckedNodes(true);
        var v = '';
        var n = '';
        for (var i = 0, l = nodes.length; i < l; i++) {
          v += nodes[i].id + ',';
          n += nodes[i].name + ',';
        }
        if (v.length > 0) {
          v = v.substring(0, v.length - 1);
        }
        if (n.length > 0) {
          n = n.substring(0, n.length - 1);
        }
        $(me.target + '_text_input').val(n);
        $(me.target).val(v);
        if ($.isFunction(_onCheck)) {
          _onClick(e, treeId, treeNode);
        }
      };
      options.callback.onAsyncSuccess = function(e, treeId, treeNode, msg) {
        if (!!options.selected) {
          me.setValue(options.selected);
        }
        if ($.isFunction(_onAsyncSuccess)) {
          _onAsyncSuccess(e, treeId, treeNode, msg);
        }
      };
    } else {
      window.alert(options + '设置有误!');
    }
  }).extend({
    init: function(opts) {
      $('body').addClass('fuelux');
      $('#' + opts.id).hide();
      $('#' + opts.id).after(_createPickerHtml($.extend(true, { id: opts.id }, opts)));
      var me = this;
      var treeObj = $.fn.zTree.init($(this.target + '_treeContent'), opts, opts.nodes);
      if (!!opts.selected) {
        me.setValue.call($.extend(true, {}, me, treeObj), opts.selected);
      }
      return treeObj;
    },
    hide: function() {
      $('#'+this.setting.treeId).closest('div.picker').picker('hide');
    },
    getValue: function() {
      return $(this.target).val();
    },
    setValue: function(values) {
      var treeObj = this;
      // checkbox全部反选
      treeObj.checkAllNodes(false);
      // 单选树取消选中节点
      var nodes = treeObj.getSelectedNodes();
      for (var index = 0; index < nodes.length; index++) {
        treeObj.cancelSelectedNode(nodes[index]);
      }

      var name = '';
      var idKeys = $.isArray(values) ? values : String(values).split(',');
      var opts = treeObj.setting;
      var nodeid = opts.valueName ? opts.valueName :
        (opts.data.simpleData.enable ? (opts.data.simpleData.idKey ? opts.data.simpleData.idKey : 'id') :
          opts.data.key.name);
      var nodename = opts.data.key.name ? opts.data.key.name : 'name';
      var $nameEl = $(treeObj.target + '_text_input');
      $(treeObj.target).attr('value', !$.isArray(values) ? values : values.join(','));
      for (var i = 0; i < idKeys.length; i++) {
        var node = treeObj.getNodesByParam(nodeid, idKeys[i], null);
        $.each(node, function(j, n) {
          name = name + node[j][nodename] + (i === (idKeys.length - 1) ? '' : ',');
          if (!!opts.check ? !!opts.check.enable : false) {
            if (i === 0) {
              var checktreenode = treeObj.getCheckedNodes(true);
              $.each(checktreenode, function(n, tempnode) {
                treeObj.checkNode(tempnode, false, true);
              });
            }
            treeObj.checkNode(node[j], true, true);
          } else {
            treeObj.selectNode(node[j], true);
          }
        });
      }
      if (name === '') {
        $nameEl.val(opts.emptyName);
      } else {
        $nameEl.val(name);
      }
    },
    defaults: {
      data: { simpleData: { enable: false, idKey: 'id' }, key: { name: 'name' }, check: { enable: true } },
      valueName: '', // value值字段name，即树节点对象中作为value的字段名
      selected: ''

    }
  });
  cngc.grid = function(options) {
    $.extend(true, this, $(options.id).jqGrid(options));
  };
  cngc.select = function(options) {
    if (options.url !== undefined) {
      options.minimumResultsForSearch = -1;
      $.ajax({
        url: options.url
      }).success(function(data) {
        $.each(data, function(i, item) {
          var option = new Option(item.name, item.value);
          $(options.id).append(option);
        });
        $(options.id).val(options.selected).trigger('change');
      });
    }
    $.extend(true, this, $(options.id).select2(options));
  };
  cngc.success = function(msg) {
    $('#cngc-alert-success div[name="message"]').html(msg);
    $('#cngc-alert-success').modal('show');
  };
  cngc.warn = function(msg) {
    $('#cngc-alert-warn div[name="message"]').html(msg);
    $('#cngc-alert-warn').modal('show');
  };
  cngc.info = function(msg) {
    $('#cngc-alert-info div[name="message"]').html(msg);
    $('#cngc-alert-info').modal('show');
  };
  cngc.danger = function(msg) {
    $('#cngc-alert-danger div[name="message"]').html(msg);
    $('#cngc-alert-danger').modal('show');
  };
}(jQuery);