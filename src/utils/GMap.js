export function GMap(key) {
    return new Promise(function (resolve, reject) {
        window.init = function () {
            resolve(AMap)//注意这里
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://webapi.amap.com/maps?v=1.3&key=="+key;
        script.onerror = reject;
        document.head.appendChild(script);
    })
}

// webapi.amap.com/loca?v=1.2.1&key=07e23534b69a1ea1dd7b17cc2812142c
// http://webapi.amap.com/maps?v=1.3&key=YOURKEY