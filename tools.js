// hook cookie 方法
(function() {
 
    var cookie_;
    Object.defineProperty(document, 'cookie', {
     
     set: function (val) {
      console.log('set cookie', val);
      debugger;
      cookie_ = val;
     },
     get: function () {
      return cookie_;
     }
    
    });
    
   })()

// 本地调试补环境 hook 环境变量代码
var laowang_proxy = function(obj){
    return new Proxy(obj, {
        set(target, prop, value){
            console.log('set -->', target[Symbol.toStringTag], '-->', prop, '-->', value);
            return Reflect.set(...arguments);
        },
        get(target, prop, receiver){
            console.log('get -->', target[Symbol.toStringTag], '-->', prop, '-->', target[prop]);
            return target[prop];
        }
    })
}
window = {};
// 调试属性
Object.defineProperties(window, {
    [Symbol.toStringTag]: {
        value: 'window',
        configurable: true
    }
})
window = laowang_proxy(window);

// VM 入口正则
// _\$[\$\w]{2} = _\$[\$\w]{2}\[_\$[\$\w]{2}\(\)\]\(_\$[\$\w]{2}\, _\$[\$\w]{2}\);
