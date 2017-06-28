var grid;
+ function() {
    'use strict';
    $(function() {
        var options = {
            id: '#jqGrid',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
                mtype: 'GET',
                datatype: 'jsonp',
                colModel: [
                    {label: 'OrderID', name: 'OrderID', key: true, width: 75},
                    {label: 'Customer ID', name: 'CustomerID', width: 150},
                    {label: 'Order Date', name: 'OrderDate', width: 150},
                    {label: 'Freight', name: 'Freight', width: 150},
                    {label: 'Ship Name', name: 'ShipName', width: 150}
                ],
                viewrecords: true,
                height: 250,
                rowNum: 20,
                rowList: [10, 20, 30],
                prmNames: {page: 'page', rows: 'rows', sort: 'sort', order: 'order'},
                width: 1000,
                pager: '#jqGridPager'
        };
        grid = $('#jqGrid').jqGrid(options);
    });
}();
