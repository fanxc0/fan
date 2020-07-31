(function(){
    //定义一些默认参数
    var _options={
        default_word:"default hello"
    }

    //定义一些api
    var _plugin_api = {
        firstFunc:function(str = _options.default_word){
            alert(str);
            // return this;//返回当前方法
        },
        secondFunc:function(){
            alert("secondFunc");
            // return this;//返回当前方法
        }
    }
    //这里确定了插件的名称
    this.CJPlugin = _plugin_api;
})();

CJPlugin.firstFunc("hello");//hello
CJPlugin.firstFunc();//default hello
CJPlugin.secondFunc();//secondFunc