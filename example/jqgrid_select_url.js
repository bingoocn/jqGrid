var grid;
+ function() {
    'use strict';
    $(function() {
        var mydata = [{
            nodeId: '1',
            nodeNm: '学习',
            select: 'A'
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
                edittype: 'text'
            }, {
                label: '下拉框',
                name: 'select',
                edittype: 'select',
                editable: true,
                width: 150,
                editoptions: {
                    /*dataUrl : "http://localhost:8080/data/select_data.json"*/
                    value: 'A:数字;B:学奥数'
                }
              }
            ]
        };
        grid = $('#jqGrid').jqGrid(options);
    });
}();
