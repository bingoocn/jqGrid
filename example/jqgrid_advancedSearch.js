var grid;
+ function() {
    'use strict';
    $(function() {
        var data = [{'OrderID': '1', 'CustomerID': 'WILMK', 'OrderDate': '1996-07-04', 'Freight': '32.3800', 'ShipName': 'Vins et alcools Chevalier'}, {'OrderID': '2', 'CustomerID': 'TRADH', 'OrderDate': '1996-07-05', 'Freight': '11.6100', 'ShipName': null}, {'OrderID': '3', 'CustomerID': 'HANAR', 'OrderDate': '1996-07-08', 'Freight': '65.8300', 'ShipName': 'Hanari Carnes'}, {'OrderID': '4', 'CustomerID': 'VICTE', 'OrderDate': '1996-07-08', 'Freight': '41.3400', 'ShipName': 'Victuailles en stock'}, {'OrderID': '5', 'CustomerID': 'SUPRD', 'OrderDate': '1996-07-09', 'Freight': '51.3000', 'ShipName': null}, {'OrderID': '6', 'CustomerID': 'HANAR', 'OrderDate': '1996-07-10', 'Freight': '58.1700', 'ShipName': 'Hanari Carnes'}, {'OrderID': '7', 'CustomerID': 'CHOPS', 'OrderDate': '1996-07-11', 'Freight': '22.9800', 'ShipName': 'Chop-suey Chinese'}, {'OrderID': '8', 'CustomerID': 'RICSU', 'OrderDate': '1996-07-12', 'Freight': '148.3300', 'ShipName': 'Richter Supermarkt'}, {'OrderID': '9', 'CustomerID': 'WELLI', 'OrderDate': '1996-07-15', 'Freight': '13.9700', 'ShipName': 'Wellington Importadora'}, {'OrderID': '10', 'CustomerID': 'HILAA', 'OrderDate': '1996-07-16', 'Freight': '81.9100', 'ShipName': null}, {'OrderID': '11', 'CustomerID': 'ERNSH', 'OrderDate': '1996-07-17', 'Freight': '140.5100', 'ShipName': 'Ernst Handel'}, {'OrderID': '12', 'CustomerID': 'CENTC', 'OrderDate': '1996-07-18', 'Freight': '3.2500', 'ShipName': 'Centro comercial Moctezuma'}, {'OrderID': '13', 'CustomerID': 'OLDWO', 'OrderDate': '1996-07-19', 'Freight': '55.0900', 'ShipName': null}, {'OrderID': '14', 'CustomerID': 'QUEDE', 'OrderDate': '1996-07-19', 'Freight': '3.0500', 'ShipName': null}, {'OrderID': '15', 'CustomerID': 'RATTC', 'OrderDate': '1996-07-22', 'Freight': '48.2900', 'ShipName': 'Rattlesnake Canyon Grocery'}, {'OrderID': '16', 'CustomerID': 'ERNSH', 'OrderDate': '1996-07-23', 'Freight': '146.0600', 'ShipName': 'Ernst Handel'}, {'OrderID': '17', 'CustomerID': 'FOLKO', 'OrderDate': '1996-07-24', 'Freight': '3.6700', 'ShipName': null}, {'OrderID': '18', 'CustomerID': 'BLONP', 'OrderDate': '1996-07-25', 'Freight': '55.2800', 'ShipName': null}, {'OrderID': '19', 'CustomerID': 'WARTH', 'OrderDate': '1996-07-26', 'Freight': '25.7300', 'ShipName': 'Wartian Herkku'}, {'OrderID': '20', 'CustomerID': 'FRANK', 'OrderDate': '1996-07-29', 'Freight': '208.5800', 'ShipName': 'Frankenversand'}];
        var options = {
            id: '#jqGrid',
            datatype: 'local',
                mtype: 'GET',
                data: data,
                colModel: [
                    {label: 'OrderID', name: 'OrderID', searchoptions: {
                        sopt: ['eq']
                    }, key: true, width: 75},
                    {label: 'Customer ID', name: 'CustomerID', searchoptions: {
                        sopt: ['cn']
                    }, width: 150},
                    {label: 'Order Date', name: 'OrderDate', searchoptions: {
                        sopt: ['gt', 'le'],
                        dataInit: function(element) {
                           $(element).datepicker({
                                autoclose: true,
                                format: 'yyyy-mm-dd',
                                orientation: 'bottom'
                            });
                       }
                    }, width: 150},
                    {label: 'Freight', name: 'Freight', searchoptions: {
                        sopt: ['gt', 'le']
                    }, width: 150},
                    {label: 'Ship Name', name: 'ShipName', searchoptions: {
                        sopt: ['cn']
                    }, width: 150}
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
        $('#jqGrid').jqGrid('filterToolbar', {
            searchOperators: true,
            stringResult: true
        });
    });
}();