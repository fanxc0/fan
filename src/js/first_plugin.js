function pluginaa(){};
pluginaa.prototype.str = "default paras";
pluginaa.prototype.firfunc = function(){
    var t = typeof arguments[0]=='undefined' ? '111':arguments[0]
    alert(t);
}

