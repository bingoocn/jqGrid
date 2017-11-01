var grid;
+ function() {
    'use strict';
    $(function() {
        var mydata = [{
            nodeId: '1',
            nodeNm: '学习',
            nodeNm2: '1996-07-11'
        }];
        var options = {
            id: '#jqGrid',
            datatype: 'local',
            data: mydata,
            pager: '#jqGridPager',
            cellEdit: true,
            cellsubmit: 'clientArray',
            width: 760,
            colModel: [{
                name: 'nodeId',
                key: true,
                hidden: true
            }, {
                label: '名称',
                name: 'nodeNm',
                width: 150,
                editable: true,
                editrules: {
                    integer: true,
                    custom_message: function(type, val) {
                        return '类型:' + type + '值:' + val;
                    }
                },
                edittype: 'text'
            }, {
                label: '名称2',
                name: 'nodeNm2',
                width: 150,
                editable: true,
                editrules: {
                    required: true
                },
                edittype: 'text'
              }
            ]
        };
        grid = $('#jqGrid').jqGrid(options);
    });
}();
