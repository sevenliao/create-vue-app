export function TMap(key) {
  return new Promise(function (resolve, reject) {
          window.init = function () {
               resolve(qq)//注意这里
          }
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key="+key;
          script.onerror = reject;
          document.head.appendChild(script);
     })
}

// window.init = function () {
//      var script = document.createElement("script");
//      script.type = "text/javascript";
//      script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key=IOHBZ-EV2R3-4BU3N-YEQN7-AQMYF-7XFF4";
//      script.onerror = reject;
//      document.head.appendChild(script);
// }