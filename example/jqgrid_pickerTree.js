var grid;
+ function() {
    'use strict';
    $(function() {
        var zNodesClassical = [{
            id: 1,
            pId: 0,
            name: '通知类别',
            open: true
        }, {
            id: 101,
            pId: 1,
            name: '1'
        }, {
            id: 102,
            pId: 1,
            name: '2'
        }, {
            id: 103,
            pId: 1,
            name: '3'
        }, {
            id: 104,
            pId: 1,
            name: '4'
        }, {
            id: 105,
            pId: 1,
            name: '5'
        }];
        var mydata = [{
            nodeId: '1',
            nodeNm: 'xxxxx',
            nodeType: '101'
        }];
        var options = {
            id: '#jqGrid',
            pager: '#jqGridPager',
            cellsubmit: 'clientArray',
            datatype: 'local',
            data: mydata,
            viewrecords: true,
            rowNum: 10,
            rowList: [10, 20, 30],
            width: 760,
            colModel: [{
                name: 'nodeId',
                key: true,
                hidden: true
            }, {
                label: '节点名称',
                name: 'nodeNm',
                editable: true,
                edittype: 'text',
                align: 'center'
            }, {
                label: '节点类型',
                name: 'nodeType',
                edittype: 'pickerTree',
                stype:'pickerTree',
                editable: true,
                align: 'center',
                editoptions: {
                    id: 'nodeType',
                    nodes: zNodesClassical,
                    check: {
                        enable: false
                    },
                    view: {
                        dblClickExpand: false,
                        showLine: true,
                        selectedMulti: false
                    },
                    data: {
                        simpleData: {
                            enable: true,
                            idKey: 'id',
                            pIdKey: 'pId',
                            rootPId: ''
                        }
                    }
                }
            }, {
                label: '时间',
                name: 'orderDate',
                edittype: 'text',
                editable: true,
                width: 150,
                editoptions: {
                    dataInit: function(element) {
                      $(element).datepicker({
                        autoclose: true,
                        format: 'yyyy-mm-dd',
                        orientation: 'auto bottom'
                      });
                    }
                },
                searchoptions: {
                    dataInit: function(element) {
                      $(element).datepicker({
                        autoclose: true,
                        format: 'yyyy-mm-dd',
                        orientation: 'auto bottom'
                      });
                    }
                }
              }
            ],
            height: 300,
            cellEdit: true
        };
        grid = $('#jqGrid').jqGrid(options);
        $('#jqGrid').navGrid('#jqGridPager', {
                search: true, // show search button on the toolbar
                add: false,
                edit: false,
                del: false,
                refresh: false
            },
            {}, // edit options
            {}, // add options
            {}, // delete options
            {multipleSearch: true, multipleGroup: true, showQuery: true} // search options - define multiple search
            );
    });
}();
