define("moe/onceTip/0.0.1/onceTip-debug", [ "moe/cookieStore/0.0.8/cookieStore-debug" ], function(require, exports, module) {
    var $ = window.jQuery;
    var onceTip;
    var cookieStorage = require("moe/cookieStore/0.0.8/cookieStore-debug");
    var currentHost = document.location.host, mainHost = document.location.host.split(".").splice(1).join("."), currentDomainName = document.location.host.split(".").splice(0, 1);
    var getScope = function(scope) {
        if (!scope) {
            return currentHost;
        }
        if (scope.indexOf(".") !== -1) {
            return scope;
        }
        switch (scope) {
          case "current":
            return currentHost;
            break;

          case "all":
            return mainHost;
            break;

          default:
            return scope + "." + mainHost;
            break;
        }
    };
    var init = function(option) {
        option = option || {};
        var scopeGetter = option.scopeMap || getScope;
        var $blocks = $('[data-action="show-once"]');
        if (!$blocks.length) {
            return;
        }
        $blocks.each(function(index, item) {
            // get trigger element
            var $item = $(item);
            var triggerEle = $item.data("trigger");
            var $trigger = triggerEle ? $item.find(triggerEle) : $item;
            // get cooke domain
            var scope = $item.data("scope") || currentDomainName;
            var cookieScope = scopeGetter($item.data("scope"));
            // get cookie name
            var cookieName = $item.data("label");
            // initialize cookieStore
            var cookieStore = new cookieStorage("fe_" + scope + "_", {
                domain: cookieScope,
                expires: 365
            });
            if (cookieStore.get(cookieName) === "1") {
                $item.hide();
            } else {
                $item.show();
                $trigger.click(function(e) {
                    e.preventDefault();
                    $item.hide();
                    cookieStore.put(cookieName, "1");
                });
            }
        });
    };
    module.exports = {
        init: init
    };
});
