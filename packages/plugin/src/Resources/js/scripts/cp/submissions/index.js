!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=167)}({167:function(e,t){$((function(){var e=$("#status-menu-btn"),t=e.data("menubtn");t&&t.setSettings({onOptionSelect:function(t){var a=$(t).data("id"),n=$(t).data("name"),r=$(t).data("color"),o=$("#status-menu-select");$("#statusId").val(a);var i="<span class='status "+r+"'></span>"+Craft.uppercaseFirst(n);e.html(i),o.find("li a.sel").removeClass("sel"),o.find("li a[data-id="+a+"]").addClass("sel")}});var a=$("form#asset_download");$("#content").on({click:function(){var e=$(this).data().assetId;$("input[name=assetId]",a).val(e),a.submit()}},"a[data-asset-id]"),$("canvas[data-image]").each((function(){var e=$(this)[0],t=new window.Image;t.addEventListener("load",(function(){e.getContext("2d").drawImage(t,0,0)})),t.setAttribute("src",$(this).data("image"))}));var n=$(".download-signature-links");$("a[data-type]",n).on("click",(function(){var e=$(this).parents(".signature-wrapper").find("canvas:first")[0],t=$(this).data("type"),a=document.createElement("a");return a.download="signature.".concat(t),a.href=e.toDataURL("image/".concat(t)).replace("image/".concat(t),"image/octet-stream"),a.click(),!1})),$("#export-btn").remove(),$("#delete-button").on("click",(function(){if(confirm(Craft.t("freeform","Are you sure you want to delete this?"))){$(this).attr("disabled",!0).addClass("disabled").text("Deleting...");var e,t,a,n=$(this).data("id");$.ajax({type:"post",url:Craft.getCpUrl("freeform/spam/delete"),dataType:"json",data:(e={id:n},t=Craft.csrfTokenName,a=Craft.csrfTokenValue,t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e),success:function(e){e.success?window.location.href=Craft.getCpUrl("freeform/spam"):console.error("Could not delete spam submission")}})}}))}))}});