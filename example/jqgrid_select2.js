var grid;
+ function() {
    'use strict';
    $(function() {
        var mydata = [{
            nodeId: '1',
            nodeNm: '学习',
            orgCode: '1996-07-11'
        }];
        var select2_data = [{"attr":{"id":"9956000","pId":"9955952"},"code":"0245","orgCode":"89","text":"245厂"},{"attr":{"id":"9956009","pId":"9955950"},"code":"2210","orgCode":"79","text":"210所"},{"attr":{"id":"9956023","pId":"9955990"},"code":"2404","orgCode":"54","text":"服务中心"},{"attr":{"id":"9955949","pId":"9955947"},"code":"8000","orgCode":"71","text":"集团公司"},{"attr":{"id":"9956001","pId":"9955951"},"code":"8018","orgCode":"84","text":"万宝工程"},{"attr":{"id":"9956015","pId":"9955961"},"code":"8315","orgCode":"137","text":"218厂"},{"attr":{"id":"9956016","pId":"9955965"},"code":"8357","orgCode":"3520","text":"包头北方创业股份"},{"attr":{"id":"9956017","pId":"9955967"},"code":"8383","orgCode":"3557","text":"内蒙古北方重型汽车"},{"attr":{"id":"9956018","pId":"9955968"},"code":"8399","orgCode":"3578","text":"凌云工业股份"},{"attr":{"id":"9956019","pId":"9955973"},"code":"8443","orgCode":"3640","text":"晋西车轴股份"},{"attr":{"id":"9956020","pId":"9955974"},"code":"8521","orgCode":"3674","text":"湖南江南红箭股份"},{"attr":{"id":"9956021","pId":"9955982"},"code":"8535","orgCode":"37","text":"华锦股份"},{"attr":{"id":"9955947","pId":""},"code":"A000","orgCode":"70","text":"兵器工业集团"},{"attr":{"id":"9956004","pId":"9955952"},"code":"0255","orgCode":"90","text":"255厂"},{"attr":{"id":"9956010","pId":"9955950"},"code":"2219","orgCode":"78","text":"标准所"},{"attr":{"id":"9956024","pId":"9955990"},"code":"2521","orgCode":"55","text":"521所"},{"attr":{"id":"9956002","pId":"9955951"},"code":"8027","orgCode":"85","text":"振华石油"},{"attr":{"id":"9956022","pId":"9955982"},"code":"8541","orgCode":"38","text":"北沥"},{"attr":{"id":"9955950","pId":"9955947"},"code":"A001","orgCode":"72","text":"兵科院"},{"attr":{"id":"9956005","pId":"9955952"},"code":"0375","orgCode":"91","text":"375厂"},{"attr":{"id":"9956011","pId":"9955950"},"code":"2220","orgCode":"80","text":"推广所"},{"attr":{"id":"9956025","pId":"9955990"},"code":"2522","orgCode":"56","text":"522医院"},{"attr":{"id":"9956003","pId":"9955951"},"code":"8073","orgCode":"86","text":"万宝矿产"},{"attr":{"id":"9955951","pId":"9955947"},"code":"A002","orgCode":"82","text":"北方公司"},{"attr":{"id":"9956006","pId":"9955952"},"code":"0805","orgCode":"92","text":"805厂"},{"attr":{"id":"9956012","pId":"9955950"},"code":"2225","orgCode":"81","text":"档案馆"},{"attr":{"id":"9956026","pId":"9955990"},"code":"2503","orgCode":"58","text":"昆辽"},{"attr":{"id":"9956013","pId":"9955951"},"code":"8104","orgCode":"3149","text":"銀華國際"},{"attr":{"id":"9955952","pId":"9955947"},"code":"A003","orgCode":"87","text":"北化集团"},{"attr":{"id":"9956007","pId":"9955952"},"code":"0845","orgCode":"93","text":"845厂"},{"attr":{"id":"9956027","pId":"9955990"},"code":"2501","orgCode":"57","text":"兴辽"},{"attr":{"id":"9955953","pId":"9955947"},"code":"A004","orgCode":"98","text":"物资集团"},{"attr":{"id":"9956008","pId":"9955952"},"code":"0908","orgCode":"94","text":"908厂"},{"attr":{"id":"9956028","pId":"9955990"},"code":"3030","orgCode":"59","text":"北方房地产"},{"attr":{"id":"9955954","pId":"9955947"},"code":"A005","orgCode":"99","text":"财务公司"},{"attr":{"id":"9956014","pId":"9955952"},"code":"8178","orgCode":"97","text":"硝化棉"},{"attr":{"id":"9956029","pId":"9955990"},"code":"8581","orgCode":"60","text":"阳光物业"},{"attr":{"id":"9955996","pId":"9955947"},"code":"A048","orgCode":"1019","text":"201所"},{"attr":{"id":"9955997","pId":"9955947"},"code":"A049","orgCode":"1020","text":"202所"},{"attr":{"id":"9955998","pId":"9955947"},"code":"A050","orgCode":"1021","text":"203所"},{"attr":{"id":"9955999","pId":"9955947"},"code":"A051","orgCode":"1022","text":"204所"},{"attr":{"id":"9955955","pId":"9955947"},"code":"A006","orgCode":"100","text":"动力集团"},{"attr":{"id":"9955956","pId":"9955947"},"code":"A007","orgCode":"105","text":"微机电集团"},{"attr":{"id":"9955957","pId":"9955947"},"code":"A008","orgCode":"110","text":"特能集团"},{"attr":{"id":"9955958","pId":"9955947"},"code":"A009","orgCode":"117","text":"材料院"},{"attr":{"id":"9955959","pId":"9955947"},"code":"A010","orgCode":"123","text":"光电集团"},{"attr":{"id":"9955960","pId":"9955947"},"code":"A011","orgCode":"129","text":"信息集团"},{"attr":{"id":"9955961","pId":"9955947"},"code":"A012","orgCode":"134","text":"导航集团"},{"attr":{"id":"9955962","pId":"9955947"},"code":"A013","orgCode":"139","text":"夜视集团"},{"attr":{"id":"9955963","pId":"9955947"},"code":"A014","orgCode":"144","text":"激光集团"},{"attr":{"id":"9955964","pId":"9955947"},"code":"A015","orgCode":"148","text":"电子集团"},{"attr":{"id":"9955965","pId":"9955947"},"code":"A016","orgCode":"152","text":"一机集团"},{"attr":{"id":"9955966","pId":"9955947"},"code":"A017","orgCode":"156","text":"哈一机集团"},{"attr":{"id":"9955967","pId":"9955947"},"code":"A018","orgCode":"160","text":"北重集团"},{"attr":{"id":"9955968","pId":"9955947"},"code":"A019","orgCode":"163","text":"凌云集团"},{"attr":{"id":"9955969","pId":"9955947"},"code":"A020","orgCode":"3614","text":"北方车辆集团"},{"attr":{"id":"9955970","pId":"9955947"},"code":"A021","orgCode":"3621","text":"江麓集团"},{"attr":{"id":"9955971","pId":"9955947"},"code":"A022","orgCode":"3626","text":"铁马集团"},{"attr":{"id":"9955972","pId":"9955947"},"code":"A023","orgCode":"3632","text":"江山重工集团"},{"attr":{"id":"9955973","pId":"9955947"},"code":"A024","orgCode":"174","text":"晋西集团"},{"attr":{"id":"9955974","pId":"9955947"},"code":"A025","orgCode":"19","text":"豫西集团"},{"attr":{"id":"9955975","pId":"9955947"},"code":"A026","orgCode":"3","text":"辽沈集团"},{"attr":{"id":"9955976","pId":"9955947"},"code":"A027","orgCode":"4","text":"淮海集团"},{"attr":{"id":"9955977","pId":"9955947"},"code":"A028","orgCode":"8","text":"西北工业集团"},{"attr":{"id":"9955978","pId":"9955947"},"code":"A029","orgCode":"14","text":"东北工业集团"},{"attr":{"id":"9955979","pId":"9955947"},"code":"A030","orgCode":"18","text":"华安集团"},{"attr":{"id":"9955980","pId":"9955947"},"code":"A031","orgCode":"3778","text":"江南工业集团"},{"attr":{"id":"9955981","pId":"9955947"},"code":"A032","orgCode":"3786","text":"山东工业集团"},{"attr":{"id":"9955982","pId":"9955947"},"code":"A033","orgCode":"35","text":"华锦集团"},{"attr":{"id":"9955983","pId":"9955947"},"code":"A034","orgCode":"3807","text":"规划院"},{"attr":{"id":"9955984","pId":"9955947"},"code":"A035","orgCode":"3811","text":"信息中心"},{"attr":{"id":"9955985","pId":"9955947"},"code":"A036","orgCode":"41","text":"五洲设计院"},{"attr":{"id":"9955986","pId":"9955947"},"code":"A037","orgCode":"45","text":"六院"},{"attr":{"id":"9955987","pId":"9955947"},"code":"A038","orgCode":"3843","text":"试验院"},{"attr":{"id":"9955988","pId":"9955947"},"code":"A039","orgCode":"50","text":"人才学院"},{"attr":{"id":"9955989","pId":"9955947"},"code":"A040","orgCode":"3851","text":"兵工学会"},{"attr":{"id":"9955990","pId":"9955947"},"code":"A041","orgCode":"52","text":"置业集团"},{"attr":{"id":"9955991","pId":"9955947"},"code":"A042","orgCode":"61","text":"北方投资公司"},{"attr":{"id":"9955992","pId":"9955947"},"code":"A043","orgCode":"62","text":"节能环保公司"},{"attr":{"id":"9955993","pId":"9955947"},"code":"A044","orgCode":"67","text":"武重集团"},{"attr":{"id":"9955994","pId":"9955947"},"code":"A046","orgCode":"69","text":"指挥控制学会"},{"attr":{"id":"9955995","pId":"9955947"},"code":"A047","orgCode":"3912","text":"中兵投资"},{"attr":{"id":"9955948","pId":"9955947"},"code":"A052","orgCode":"1023","text":"中兵北斗"}];
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
                label: '组织编码',
                name: 'orgCode',
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
                }
              }
            ],
            onCellSelect: function(){
              debugger;
              return false;
            }
        };
        grid = $('#jqGrid').jqGrid(options);
    });
}();
