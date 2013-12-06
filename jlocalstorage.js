/*
 * Store date on the browser side. 
 * Supporting: IE8+, Firefox3.5+, Safari4+, Chrome4+, Opera 10.5+, Iphone 2+, Android 2+
 *
 * Author: artur.karaznevic@gmail.com
 */

(function(){
    
    var 
        _is_storage_works = false,
        _storage_object = {},
        _storage_size = 0;
        
    function _init() {
        if("localStorage" in window) {
            try {
                window.localStorage["_test"] = "1";
                _is_storage_works = true;
                window.localStorage.removeItem("_test");
            }
            catch (e) {}
        }
        if (_is_storage_works) {
            try {
                if(window.localStorage) {
                    _storage_object = window.localStorage;
                }
            } 
            catch (e) {
                return false;
            }
        }
        
        return _is_storage_works;
    }
    
    function _checkKey(key) {
        if(!key || (typeof key != "string" && typeof key != "number")) {
            throw new TypeError("Key name must be string or numeric");
        }
        return true;
    }
    
    function _bytesToSize(bytes) {
       var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
       if (bytes == 0) {
           return '0 Bytes';
       }
       var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
       return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    }
    
    jLocalStorage = {
            
        set: function (key, value) {
            _checkKey(key);
            
            if(typeof value == "function") {
                return false;
            }
            else if(value && typeof value == "object") {
                value = JSON.stringify(value);
            }
            _storage_object[key] = value;
        },
        
        get: function (key) {
            _checkKey(key);
            
            return _storage_object[key];
        },
        
        unset: function (key) {
            _checkKey(key);
            
            if(key in _storage_object) {
                delete _storage_object[key];
            }
        },
        
        usedSize: function() {
            for(k in _storage_object) {
                _storage_size += _storage_object[k].length;
            }
            return _bytesToSize(_storage_size);
        },
        
        isSupport: function() {
            return _is_storage_works;
        },
    };
    
    _init();
})();