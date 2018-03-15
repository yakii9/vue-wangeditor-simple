!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("wangeditor")):"function"==typeof define&&define.amd?define(["wangeditor"],e):A.main=e(A.wangeditor)}(this,function(A){"use strict";A=A&&A.hasOwnProperty("default")?A.default:A,function(A,e){if("undefined"==typeof document)return e;A=A||"";var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.appendChild(n),n.styleSheet?n.styleSheet.cssText=A:n.appendChild(document.createTextNode(A))}('@font-face{font-family:w-icon;src:url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAA1EAAwAAAAADPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABHAAAAYAAAAGA4Zbj9k9TLzIAAAKcAAAAYAAAAGAPEgdsY21hcAAAAvwAAADEAAAAxL7TwtlnYXNwAAADwAAAAAgAAAAIAAAAEGdseWYAAAPIAAAGeAAABnjO8r8caGVhZAAACkAAAAA2AAAANhCeVXdoaGVhAAAKeAAAACQAAAAkB8ID5mhtdHgAAAqcAAAAlAAAAJQiAABCbG9jYQAACzAAAABMAAAATBDoElhtYXhwAAALfAAAACAAAAAgACsAVm5hbWUAAAucAAABhgAAAYaZSgn7cG9zdAAADSQAAAAgAAAAIAADAAAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACgAAAAEAFAAHACYAkAC0APwBDgEkATwAAQAHAAkACwAMABcAGAAaACQABQAMABgAKAA6AFwAIAAFABYAFAAXABcAIwAHABQAEwAXABQAEQALAB8ACAAUABEAEQAIABUAFwALACIAEAARAAsACAAWAAQADAAUABYAEgAIABgAGAAPABMADQAgAAYACAATAAkACwARAAIABgAUAB4ABgAbABUACAATAAoAHgAHABMAEQAIABYADQALAAQACgAYACYAMgAhAAYAGQATABMACwARACEABgAPABEAGAALABYAHQAFAA8AEQALAAYAHQAKAA8AEQALAAQACwASABUAGAAcAAEABAAfAAYADgAWAA8AEwAQAAEABAAjAAgACwAWABIADwATAAgAEQABAAQAIgAJABwAFwAPABoAHAANAAUABwABAAQAIwACACQAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADqggPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAqAAAACYAIAAEAAYAAQAgAC0AMQAzADcAYQBpAHAAdQB56STpiuoP6lvqb+qC//3//wAAAAAAIAAtADEAMwA3AGEAYwBrAHIAd+kk6YnqD+pb6m/qgf/9//8AAf/j/9f/1P/T/9D/p/+m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) format("woff");font-weight:400;font-style:normal}[class*=" w-icon-"],[class^=w-icon-]{font-family:w-icon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;font-feature-settings:"liga",normal,"dlig";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures}.w-e-droplist{z-index:5}.w-e-menu{z-index:2!important}.w-e-text-container{z-index:1!important}.w-e-text-container .w-e-text h1{font-size:24px;margin:22px 0;font-weight:700}.w-e-text-container .w-e-text h2{font-size:22px;margin:20px 0;font-weight:700}.w-e-text-container .w-e-text h3{font-size:20px;margin:18px 0;font-weight:700}.w-e-text-container .w-e-text h4{font-size:18px;margin:16px 0;font-weight:700}.w-e-text-container .w-e-text h5{font-size:16px;margin:14px 0;font-weight:700}.w-e-text-container .w-e-text table td,.w-e-text-container .w-e-text table th{text-align:center}.w-e-text-container .w-e-text ul li{list-style-type:disc}.w-e-text-container .w-e-text ol li{list-style-type:decimal}.w-e-text-container .w-e-text b{font-weight:800}.w-e-text-container .w-e-text a{color:#2196f3;text-decoration:underline}.w-e-toolbar{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-lines:multiple}.w-icon-enlarge:before{content:"\\e989"}.w-icon-shrink:before{content:"\\e98a"}.w-icon-filter:before{content:"\\ea5b"}.w-icon-clear-formatting:before{content:"\\ea6f"}.w-icon-file-empty:before{content:"\\e924"}.w-icon-file-class-code:before{content:"\\ea81"}.fullscreen-editor{position:fixed!important;height:100%!important;left:0!important;top:0!important;background-color:#fff;z-index:3}.fullscreen-editor,.fullscreen-editor .w-e-toolbar{width:100%!important}.fullscreen-editor .w-e-text-container{width:100%!important;height:95%!important}.code_pannel{position:absolute;top:0;left:50%;z-index:4;height:280px;width:600px;padding:5px 10px;margin-left:-300px;background:#fff;-webkit-box-shadow:1px 1px 8px rgba(0,0,0,.3);box-shadow:1px 1px 8px rgba(0,0,0,.3);display:none;overflow:hidden}.code_pannel #closePannel{position:absolute;top:10px;right:10px;width:15px;height:15px;color:#999;cursor:pointer}.code_pannel #closePannel:hover{color:#000}.code_pannel>h2{width:100%;height:30px;font-size:14px;line-height:30px;color:#333;border-bottom:1px solid #f1f1f1}.code_pannel #pannelInput{width:100%;height:30px;margin-top:5px;padding:0 10px;border:0;border-bottom:1px solid #f1f1f1;background:#fff;outline:0;font-size:14px;line-height:50px}.code_pannel #pannelTextarea{width:100%;height:145px;margin-top:10px;padding:5px;border:1px solid #f1f1f1;background:#fff;outline:0;font-size:14px;line-height:20px}.code_pannel #pannelInput:focus,.code_pannel #pannelTextarea:focus{border-color:#1e88e5}.code_pannel #pannelSubmit{float:right;font-size:14px;color:#1e88e5;border:0;padding:5px 10px;background:#fff;cursor:pointer;border-radius:3px;margin:5px 0}.code_pannel #pannelSubmit:hover{background:#f1f1f1}',void 0);var e={render:function(){var A=this.$createElement;return(this._self._c||A)("div",{attrs:{id:this.id}})},staticRenderFns:[],name:"VueWangeditor",mixins:[{methods:{initFullscreen:function(){var A=this,e='<i title="全屏" class="w-icon-enlarge"></i>',t=!1,n=this.createBtn(e);this.toolbar.appendChild(n),n.addEventListener("click",function(i){A.editorEle.className=t?"":"fullscreen-editor",n.innerHTML=t?e:'<i title="全屏" class="w-icon-shrink"></i>',t=!t},!1)}}},{methods:{initClearStyle:function(){var A=this,e=this.createBtn('<i title="一键过滤文字样式" class="w-icon-filter"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){var t=A.clearStyle();A.setContent(t),A.editor.txt.html(t)},!1)},clearStyle:function(){var A=this.textWrap.getElementsByTagName("*");return Array.from(A).map(function(A){A.style&&A.removeAttribute("style"),A.className&&A.removeAttribute("class")}),this.editor.txt.html().replace(/ style=\"(.*?)\"/gi,"").replace(/ style=\'(.*?)\'/gi,"").replace(/ class=\"(.*?)\"/gi,"").replace(/ class=\'(.*?)\'/gi,"").replace(/ lang=\"(.*?)\"/gi,"").replace(/ face=\"(.*?)\"/gi,"").replace(/ size=\"(.*?)\"/gi,"").replace(/ align=\"(.*?)\"/gi,"").replace(/ color=\"(.*?)\"/gi,"").replace(/ border=\"(.*?)\"/gi,"").replace(/<style>[\s\S]*?<\/style>/gi,"").replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/<!--[\s\S]*?-->/gi,"")}}},{methods:{clearFormat:function(){return this.content_.split(/(<[^>]*>([\s\S]*?)|<[^>]*><\/[^>]*>)/).filter(function(A){return""!==A&&!A.includes("</")}).filter(function(A){return!A.includes("<")||A.startsWith("<img")}).map(function(A){return"<p>"+A+"</p>"}).join("")},initClearFormat:function(){var A=this,e=this.createBtn('<i title="一键清除文字格式" class="w-icon-clear-formatting"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){var t=A.clearFormat();A.setContent(t),A.editor.txt.html(t)},!1)}}},{methods:{initClearAll:function(){var A=this,e=this.createBtn('<i title="一键清空编辑器" class="w-icon-file-empty"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){A.clearAll()},!1)},clearAll:function(){this.editor.txt.clear(),this.setContent("<p><br></p>")}}},{methods:{initInsertCode:function(){var A=this,e=this.createBtn('<i title="插入带类名的代码块" class="w-icon-file-class-code"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){e.stopPropagation(),e.preventDefault();var t=document.querySelector("#codePannel");t?t.style.display="block":A.createPannel(),A.bindEvents()},!1)},bindEvents:function(){var A=this,e=document.querySelector("#codePannel"),t=document.querySelector("#closePannel"),n=document.querySelector("#pannelInput"),i=document.querySelector("#pannelTextarea"),o=document.querySelector("#pannelSubmit");t.addEventListener("click",function(A){A.stopPropagation(),e.style.display="none",n.value=""},!1),o.addEventListener("click",function(t){t.stopPropagation(),n.value&&i.value?(A.insertCode(n.value,i.value),e.style.display="none",n.value="",i.value=""):(e.style.display="none",n.value="",i.value="")},!1)},createPannel:function(){var A=document.createElement("div"),e=document.createElement("i"),t=document.createElement("h2"),n=document.createElement("input"),i=document.createElement("textarea"),o=document.createElement("button");A.id="codePannel",e.id="closePannel",n.id="pannelInput",i.id="pannelTextarea",n.setAttribute("placeholder","className"),i.setAttribute("placeholder","code"),o.id="pannelSubmit",o.innerText="插入",t.innerText="插入带类名的代码：",e.className="w-e-icon-close w-e-panel-close",A.appendChild(e),A.appendChild(t),A.appendChild(n),A.appendChild(i),A.appendChild(o),A.className="code_pannel",this.container.appendChild(A),A.style.display="block"},replaceHtmlSymbol:function(A){return null==A?"":A.replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;")},insertCode:function(A,e){this.editor.cmd.do("insertHTML",'<pre class="'+A+'"><code class="'+A+'">'+this.replaceHtmlSymbol(e)+"</code></pre><p><br></p>")}}}],props:{options:{type:Object,default:function(A){return{}}},id:String,value:String},data:function(){return{isInit:!1,editor:{},content_:""}},watch:{value:function(A){this.editor.txt.html(A)}},computed:{editorEle:function(){if(document.querySelector("#"+this.id))return document.querySelector("#"+this.id)},toolbar:function(){if(document.querySelector("#"+this.id+" .w-e-toolbar"))return document.querySelector("#"+this.id+" .w-e-toolbar")},container:function(){if(document.querySelector("#"+this.id+" .w-e-text-container"))return document.querySelector("#"+this.id+" .w-e-text-container")},textWrap:function(){if(document.querySelector("#"+this.id+" .w-e-text"))return document.querySelector("#"+this.id+" .w-e-text")}},methods:{setContent:function(A){this.content_=A},createBtn:function(A){var e=document.createElement("div");return e.className="w-e-menu",e.style.zIndex="10001",e.innerHTML=A,e},initSize:function(){this.options.width&&(this.container.style.width=this.options.width,this.toolbar.style.width=this.options.width),this.options.height&&(this.container.style.height=this.options.height)}},mounted:function(){var e=this;this.editor=new A("#"+this.id),this.editor.customConfig.onchange=function(A){e.content_=A,e.$emit("input",A),e.$emit("update:text",e.editor.txt.text())},Object.keys(this.options).map(function(A){e.editor.customConfig[A]=e.options[A]}),this.editor.create(),this.initSize(),this.options.menus&&this.options.menus.includes("clearStyle")&&this.initClearStyle(),this.options.menus&&this.options.menus.includes("clearFormat")&&this.initClearFormat(),this.options.menus&&this.options.menus.includes("clearAll")&&this.initClearAll(),this.options.menus&&this.options.menus.includes("insertCode")&&this.initInsertCode(),this.options.menus&&this.options.menus.includes("fullscreen")&&this.initFullscreen()}};return e.install=function(A){A.component(e.name,e)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(e),e});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXdhbmdlZGl0b3Itc2ltcGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZWRpdG9yLnZ1ZSIsIi4uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4uanMiLCIuLi9zcmMvcGx1Z2lucy9jbGVhclN0eWxlLmpzIiwiLi4vc3JjL3BsdWdpbnMvY2xlYXJGb3JtYXQuanMiLCIuLi9zcmMvcGx1Z2lucy9jbGVhckFsbC5qcyIsIi4uL3NyYy9wbHVnaW5zL2luc2VydENvZGUuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxkaXYgOmlkPVwiaWRcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRSBmcm9tICd3YW5nZWRpdG9yJ1xuaW1wb3J0ICcuL2VkaXRvci5jc3MnXG5pbXBvcnQgeyBmdWxsc2NyZWVuIH0gZnJvbSAnLi9wbHVnaW5zL2Z1bGxzY3JlZW4nXG5pbXBvcnQgeyBjbGVhclN0eWxlIH0gZnJvbSAnLi9wbHVnaW5zL2NsZWFyU3R5bGUnXG5pbXBvcnQgeyBjbGVhckZvcm1hdCB9IGZyb20gJy4vcGx1Z2lucy9jbGVhckZvcm1hdCdcbmltcG9ydCB7IGNsZWFyQWxsIH0gZnJvbSAnLi9wbHVnaW5zL2NsZWFyQWxsJ1xuaW1wb3J0IHsgaW5zZXJ0Q29kZSB9IGZyb20gJy4vcGx1Z2lucy9pbnNlcnRDb2RlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVnVlV2FuZ2VkaXRvcicsXG4gIG1peGluczogW2Z1bGxzY3JlZW4sIGNsZWFyU3R5bGUsIGNsZWFyRm9ybWF0LCBjbGVhckFsbCwgaW5zZXJ0Q29kZV0sXG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogIF8gPT4geyByZXR1cm4ge30gfVxuICAgIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICB2YWx1ZTogU3RyaW5nXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luaXQ6IGZhbHNlLFxuICAgICAgZWRpdG9yOiB7fSxcbiAgICAgIGNvbnRlbnRfOiAnJ1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICAvLyBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICAvLyAgIC8vIGluaXQgY29udGVudF9cbiAgICAgIC8vICAgdGhpcy5lZGl0b3IudHh0Lmh0bWwodmFsKVxuICAgICAgLy8gICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuZWRpdG9yLnR4dC5odG1sKHZhbClcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZWRpdG9yRWxlICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApXG4gICAgICB9XG4gICAgfSxcbiAgICB0b29sYmFyICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfSAudy1lLXRvb2xiYXJgKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10b29sYmFyYClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lciAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10ZXh0LWNvbnRhaW5lcmApKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfSAudy1lLXRleHQtY29udGFpbmVyYClcbiAgICAgIH1cbiAgICB9LFxuICAgIHRleHRXcmFwICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfSAudy1lLXRleHRgKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10ZXh0YClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRDb250ZW50IChodG1sKSB7XG4gICAgICB0aGlzLmNvbnRlbnRfID0gaHRtbFxuICAgIH0sXG4gICAgY3JlYXRlQnRuIChidG5IdG1sKSB7XG4gICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJ0bi5jbGFzc05hbWUgPSAndy1lLW1lbnUnXG4gICAgICBidG4uc3R5bGUuekluZGV4ID0gJzEwMDAxJ1xuICAgICAgYnRuLmlubmVySFRNTCA9IGJ0bkh0bWxcbiAgICAgIHJldHVybiBidG5cbiAgICB9LFxuICAgIGluaXRTaXplICgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGhcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLndpZHRoXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhlaWdodCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBFKCcjJyArIHRoaXMuaWQpXG5cbiAgICAvLyBpbml0IGNoYW5nZSBldmVudFxuICAgIHRoaXMuZWRpdG9yLmN1c3RvbUNvbmZpZy5vbmNoYW5nZSA9IGh0bWwgPT4ge1xuICAgICAgdGhpcy5jb250ZW50XyA9IGh0bWxcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaHRtbClcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTp0ZXh0JywgdGhpcy5lZGl0b3IudHh0LnRleHQoKSlcbiAgICB9XG5cbiAgICAvLyBpbml0IHByb3BzIG9wdGlvbnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMpLm1hcChwcm9wZXJ0eSA9PiB7XG4gICAgICB0aGlzLmVkaXRvci5jdXN0b21Db25maWdbcHJvcGVydHldID0gdGhpcy5vcHRpb25zW3Byb3BlcnR5XVxuICAgIH0pXG5cbiAgICAvLyBjcmVhdGUgdGhlIGVkaXRvclxuICAgIHRoaXMuZWRpdG9yLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmluaXRTaXplKClcblxuICAgIC8vIGNsZWFyU3R5bGVcbiAgICBpZiAodGhpcy5vcHRpb25zLm1lbnVzICYmIHRoaXMub3B0aW9ucy5tZW51cy5pbmNsdWRlcygnY2xlYXJTdHlsZScpKSB7XG4gICAgICB0aGlzLmluaXRDbGVhclN0eWxlKClcbiAgICB9XG5cbiAgICAvLyBjbGVhckZvcm1hdFxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVudXMgJiYgdGhpcy5vcHRpb25zLm1lbnVzLmluY2x1ZGVzKCdjbGVhckZvcm1hdCcpKSB7XG4gICAgICB0aGlzLmluaXRDbGVhckZvcm1hdCgpXG4gICAgfVxuXG4gICAgLy8gY2xlYXJBbGxcbiAgICBpZiAodGhpcy5vcHRpb25zLm1lbnVzICYmIHRoaXMub3B0aW9ucy5tZW51cy5pbmNsdWRlcygnY2xlYXJBbGwnKSkge1xuICAgICAgdGhpcy5pbml0Q2xlYXJBbGwoKVxuICAgIH1cblxuICAgIC8vIGluc2VydENvZGVcbiAgICBpZiAodGhpcy5vcHRpb25zLm1lbnVzICYmIHRoaXMub3B0aW9ucy5tZW51cy5pbmNsdWRlcygnaW5zZXJ0Q29kZScpKSB7XG4gICAgICB0aGlzLmluaXRJbnNlcnRDb2RlKClcbiAgICB9XG5cbiAgICAvLyBmdWxsc2NyZWVuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZW51cyAmJiB0aGlzLm9wdGlvbnMubWVudXMuaW5jbHVkZXMoJ2Z1bGxzY3JlZW4nKSkge1xuICAgICAgdGhpcy5pbml0RnVsbHNjcmVlbigpXG4gICAgfVxuXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGNvbnN0IGZ1bGxzY3JlZW4gPSB7XG4gIG1ldGhvZHM6IHtcbiAgICBpbml0RnVsbHNjcmVlbiAoKSB7XG4gICAgICBsZXQgZW5sYXJnZSA9ICc8aSB0aXRsZT1cIuWFqOWxj1wiIGNsYXNzPVwidy1pY29uLWVubGFyZ2VcIj48L2k+J1xuICAgICAgbGV0IHNocmluayA9ICc8aSB0aXRsZT1cIuWFqOWxj1wiIGNsYXNzPVwidy1pY29uLXNocmlua1wiPjwvaT4nXG4gICAgICBsZXQgaXNGdWxsc2NyZWVuID0gZmFsc2VcbiAgICAgIGxldCBmdWxsc2NyZWVuQnRuID0gdGhpcy5jcmVhdGVCdG4oZW5sYXJnZSlcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChmdWxsc2NyZWVuQnRuKVxuICAgICAgZnVsbHNjcmVlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xuICAgICAgICB0aGlzLmVkaXRvckVsZS5jbGFzc05hbWUgPSBpc0Z1bGxzY3JlZW4gPyAnJyA6ICdmdWxsc2NyZWVuLWVkaXRvcidcbiAgICAgICAgZnVsbHNjcmVlbkJ0bi5pbm5lckhUTUwgPSBpc0Z1bGxzY3JlZW4gPyBlbmxhcmdlIDogc2hyaW5rXG4gICAgICAgIGlzRnVsbHNjcmVlbiA9ICFpc0Z1bGxzY3JlZW5cbiAgICAgIH0sIGZhbHNlKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyU3R5bGUgPSB7XG4gIG1ldGhvZHM6IHtcbiAgICBpbml0Q2xlYXJTdHlsZSAoKSB7XG4gICAgICBsZXQgY2xlYXJTdHlsZUJ0biA9IHRoaXMuY3JlYXRlQnRuKCc8aSB0aXRsZT1cIuS4gOmUrui/h+a7pOaWh+Wtl+agt+W8j1wiIGNsYXNzPVwidy1pY29uLWZpbHRlclwiPjwvaT4nKVxuICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGNsZWFyU3R5bGVCdG4pXG4gICAgICBjbGVhclN0eWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICAgICAgIGxldCBodG1sID0gdGhpcy5jbGVhclN0eWxlKClcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KGh0bWwpXG4gICAgICAgIHRoaXMuZWRpdG9yLnR4dC5odG1sKGh0bWwpXG4gICAgICB9LCBmYWxzZSlcbiAgICB9LFxuICAgIGNsZWFyU3R5bGUgKCkge1xuICAgICAgLy8gZWRpdG9yLnR4dC5odG1sKCnojrflj5bnmoTlhoXlrrnml6Dms5XmuIXpmaQ8c3R5bGU+5qCH562+55qE5qC35byPXG4gICAgICAvLyDmiYDku6XopoHmuIXpmaQ8c3R5bGU+5qCH562+XG4gICAgICAvLyBlZGl0b3IudHh0Lmh0bWwoKeacieaXtuWAmeiOt+WPlueahEhUTUzkvJrluKbmoLflvI/vvIzmiYDku6Xov5jmmK/lho3ov4fmu6TkuIDmrKFcbiAgICAgIGxldCBhcnIgPSB0aGlzLnRleHRXcmFwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylcbiAgICAgIEFycmF5LmZyb20oYXJyKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnN0eWxlKSB7XG4gICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8g5Zug5Li65pyJ55qEc3R5bGXlsZ7mgKfmsqHmnInov4fmu6TliLDvvIzmiYDku6XopoHnlKjkuIrpnaLnmoRyZW1vdmVBdHRyaWJ1dGXljrvmjolcbiAgICAgIHJldHVybiB0aGlzLmVkaXRvci50eHQuaHRtbCgpLy8gdGV4dFdyYXAuaW5uZXJIVE1MXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBzdHlsZT1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIHN0eWxlPVxcJyguKj8pXFwnL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIGNsYXNzPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gY2xhc3M9XFwnKC4qPylcXCcvaWcsICcnKVxuICAgICAgICAgICAgIC8vIHdvcmTmlofmoaPlpI3liLbov4fmnaXnmoTmoLflvI9cbiAgICAgICAgICAgICAucmVwbGFjZSgvIGxhbmc9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBmYWNlPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gc2l6ZT1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIGFsaWduPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gY29sb3I9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBib3JkZXI9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLzxzdHlsZT5bXFxzXFxTXSo/PFxcL3N0eWxlPi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLzxvOnA+W1xcc1xcU10qPzxcXC9vOnA+L2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvPCEtLVtcXHNcXFNdKj8tLT4vaWcsICcnKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyRm9ybWF0ID0ge1xuICBtZXRob2RzOiB7XG4gICAgY2xlYXJGb3JtYXQgKCkge1xuICAgICAgbGV0IHN0ciA9IHRoaXMuY29udGVudF9cbiAgICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoLyg8W14+XSo+KFtcXHNcXFNdKj8pfDxbXj5dKj48XFwvW14+XSo+KS8pXG5cbiAgICAgIC8vIOWOu+mZpOepuuWtl+espuS4su+8jOe7k+adn+agh+etvlxuICAgICAgbGV0IG5ld0NvbnRlbnQgPSBhcnIuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gJycgJiYgIWl0ZW0uaW5jbHVkZXMoJzwvJylcbiAgICAgIH0pLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgLy8g5Y675o6J6LW35aeL5qCH562+XG4gICAgICAgIHJldHVybiAhaXRlbS5pbmNsdWRlcygnPCcpIHx8IGl0ZW0uc3RhcnRzV2l0aCgnPGltZycpXG4gICAgICB9KS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBgPHA+JHtpdGVtfTwvcD5gXG4gICAgICB9KS5qb2luKCcnKVxuICAgICAgLy8gY29uc29sZS5sb2cobmV3Q29udGVudClcbiAgICAgIHJldHVybiBuZXdDb250ZW50XG4gICAgfSxcbiAgICBpbml0Q2xlYXJGb3JtYXQgKCkge1xuICAgICAgbGV0IGNsZWFyRm9ybWF0QnRuID0gdGhpcy5jcmVhdGVCdG4oJzxpIHRpdGxlPVwi5LiA6ZSu5riF6Zmk5paH5a2X5qC85byPXCIgY2xhc3M9XCJ3LWljb24tY2xlYXItZm9ybWF0dGluZ1wiPjwvaT4nKVxuICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGNsZWFyRm9ybWF0QnRuKVxuICAgICAgY2xlYXJGb3JtYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcbiAgICAgICAgbGV0IGZvcm1hdENvbnRlbnQgPSB0aGlzLmNsZWFyRm9ybWF0KClcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KGZvcm1hdENvbnRlbnQpXG4gICAgICAgIHRoaXMuZWRpdG9yLnR4dC5odG1sKGZvcm1hdENvbnRlbnQpXG4gICAgICB9LCBmYWxzZSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjbGVhckFsbCA9IHtcbiAgbWV0aG9kczoge1xuICAgIGluaXRDbGVhckFsbCAoKSB7XG4gICAgICBsZXQgY2xlYXJBbGxCdG4gPSB0aGlzLmNyZWF0ZUJ0bignPGkgdGl0bGU9XCLkuIDplK7muIXnqbrnvJbovpHlmahcIiBjbGFzcz1cInctaWNvbi1maWxlLWVtcHR5XCI+PC9pPicpXG4gICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoY2xlYXJBbGxCdG4pXG4gICAgICBjbGVhckFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xuICAgICAgICB0aGlzLmNsZWFyQWxsKClcbiAgICAgIH0sIGZhbHNlKVxuICAgIH0sXG4gICAgY2xlYXJBbGwgKCkge1xuICAgICAgdGhpcy5lZGl0b3IudHh0LmNsZWFyKClcbiAgICAgIHRoaXMuc2V0Q29udGVudCgnPHA+PGJyPjwvcD4nKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGluc2VydENvZGUgPSB7XG4gIG1ldGhvZHM6IHtcbiAgICBpbml0SW5zZXJ0Q29kZSAoKSB7XG4gICAgICBsZXQgaW5zZXJ0Q29kZUJ0biA9IHRoaXMuY3JlYXRlQnRuKCc8aSB0aXRsZT1cIuaPkuWFpeW4puexu+WQjeeahOS7o+eggeWdl1wiIGNsYXNzPVwidy1pY29uLWZpbGUtY2xhc3MtY29kZVwiPjwvaT4nKVxuICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGluc2VydENvZGVCdG4pXG4gICAgICBpbnNlcnRDb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBwYW5uZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29kZVBhbm5lbCcpXG4gICAgICAgIGlmICghcGFubmVsKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVQYW5uZWwoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbm5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpXG4gICAgICB9LCBmYWxzZSlcbiAgICB9LFxuICAgIGJpbmRFdmVudHMgKCkge1xuICAgICAgbGV0IHBhbm5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2RlUGFubmVsJylcbiAgICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZVBhbm5lbCcpXG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFubmVsSW5wdXQnKVxuICAgICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhbm5lbFRleHRhcmVhJylcbiAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFubmVsU3VibWl0JylcbiAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgcGFubmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgfSwgZmFsc2UpXG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgJiYgdGV4dGFyZWEudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmluc2VydENvZGUoaW5wdXQudmFsdWUsIHRleHRhcmVhLnZhbHVlKVxuICAgICAgICAgIHBhbm5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9ICcnXG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKVxuICAgIH0sXG4gICAgY3JlYXRlUGFubmVsICgpIHtcbiAgICAgIGxldCBwYW5uZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHBhbm5lbC5pZCA9ICdjb2RlUGFubmVsJ1xuICAgICAgY2xvc2UuaWQgPSAnY2xvc2VQYW5uZWwnXG4gICAgICBpbnB1dC5pZCA9ICdwYW5uZWxJbnB1dCdcbiAgICAgIHRleHRhcmVhLmlkID0gJ3Bhbm5lbFRleHRhcmVhJ1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjbGFzc05hbWUnKVxuICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjb2RlJylcbiAgICAgIHN1Ym1pdC5pZCA9ICdwYW5uZWxTdWJtaXQnXG4gICAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ+aPkuWFpSdcbiAgICAgIGgyLmlubmVyVGV4dCA9ICfmj5LlhaXluKbnsbvlkI3nmoTku6PnoIHvvJonXG4gICAgICBjbG9zZS5jbGFzc05hbWUgPSAndy1lLWljb24tY2xvc2Ugdy1lLXBhbmVsLWNsb3NlJ1xuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKGgyKVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKHRleHRhcmVhKVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICAgIHBhbm5lbC5jbGFzc05hbWUgPSAnY29kZV9wYW5uZWwnXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5uZWwpXG4gICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9LFxuICAgIHJlcGxhY2VIdG1sU3ltYm9sKGh0bWwpIHtcbiAgICAgIGlmIChodG1sID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC88L2dtLCAnJmx0OycpLnJlcGxhY2UoLz4vZ20sICcmZ3Q7JykucmVwbGFjZSgvXCIvZ20sICcmcXVvdDsnKVxuICAgIH0sXG4gICAgaW5zZXJ0Q29kZSAoY2xhc3NOYW1lLCBjb2RlKSB7XG4gICAgICB0aGlzLmVkaXRvci5jbWQuZG8oJ2luc2VydEhUTUwnLCBgPHByZSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPjxjb2RlIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLnJlcGxhY2VIdG1sU3ltYm9sKGNvZGUpfTwvY29kZT48L3ByZT48cD48YnI+PC9wPmApXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVnVlV2FuZ2VkaXRvciBmcm9tICcuL2VkaXRvci52dWUnXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5WdWVXYW5nZWRpdG9yLmluc3RhbGwgPSBmdW5jdGlvbiAoVnVlKSB7XG4gIFZ1ZS5jb21wb25lbnQoVnVlV2FuZ2VkaXRvci5uYW1lLCBWdWVXYW5nZWRpdG9yKVxufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlV2FuZ2VkaXRvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVnVlV2FuZ2VkaXRvclxuIl0sIm5hbWVzIjpbInJlbmRlciIsImVubGFyZ2UiLCJpc0Z1bGxzY3JlZW4iLCJmdWxsc2NyZWVuQnRuIiwidGhpcyIsImNyZWF0ZUJ0biIsInRvb2xiYXIiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlZGl0b3JFbGUiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJjbGVhclN0eWxlQnRuIiwiaHRtbCIsIl90aGlzIiwiY2xlYXJTdHlsZSIsInNldENvbnRlbnQiLCJlZGl0b3IiLCJ0eHQiLCJhcnIiLCJ0ZXh0V3JhcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJvbSIsIm1hcCIsIml0ZW0iLCJzdHlsZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjb250ZW50XyIsInNwbGl0IiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwiam9pbiIsImNsZWFyRm9ybWF0QnRuIiwiZm9ybWF0Q29udGVudCIsImNsZWFyRm9ybWF0IiwiY2xlYXJBbGxCdG4iLCJjbGVhckFsbCIsImNsZWFyIiwiaW5zZXJ0Q29kZUJ0biIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwicGFubmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheSIsImNyZWF0ZVBhbm5lbCIsImJpbmRFdmVudHMiLCJjbG9zZSIsImlucHV0IiwidGV4dGFyZWEiLCJzdWJtaXQiLCJ2YWx1ZSIsImluc2VydENvZGUiLCJjcmVhdGVFbGVtZW50IiwiaDIiLCJpZCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImNvbnRhaW5lciIsImNvZGUiLCJjbWQiLCJkbyIsInJlcGxhY2VIdG1sU3ltYm9sIiwiT2JqZWN0IiwiU3RyaW5nIiwidmFsIiwiYnRuSHRtbCIsImJ0biIsInpJbmRleCIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsIkUiLCJjdXN0b21Db25maWciLCJvbmNoYW5nZSIsIiRlbWl0IiwidGV4dCIsImtleXMiLCJwcm9wZXJ0eSIsImNyZWF0ZSIsImluaXRTaXplIiwibWVudXMiLCJpbml0Q2xlYXJTdHlsZSIsImluaXRDbGVhckZvcm1hdCIsImluaXRDbGVhckFsbCIsImluaXRJbnNlcnRDb2RlIiwiaW5pdEZ1bGxzY3JlZW4iLCJWdWVXYW5nZWRpdG9yIiwiaW5zdGFsbCIsIlZ1ZSIsImNvbXBvbmVudCIsIm5hbWUiLCJ3aW5kb3ciLCJ1c2UiXSwibWFwcGluZ3MiOiIybFFBWWdCQSwwSEFDUix1RUNWRUMsRUFBVSw0Q0FFVkMsR0FBZSxFQUNmQyxFQUFnQkMsS0FBS0MsVUFBVUosUUFDOUJLLFFBQVFDLFlBQVlKLEtBQ1hLLGlCQUFpQixRQUFTLGNBQ2pDQyxVQUFVQyxVQUFZUixFQUFlLEdBQUssc0JBQ2pDUyxVQUFZVCxFQUFlRCxFQU45Qiw4Q0FPS0MsSUFDZixxRENUQ1UsRUFBZ0JSLEtBQUtDLFVBQVUsdURBQzlCQyxRQUFRQyxZQUFZSyxLQUNYSixpQkFBaUIsUUFBUyxnQkFDbENLLEVBQU9DLEVBQUtDLGVBQ1hDLFdBQVdILEtBQ1hJLE9BQU9DLElBQUlMLEtBQUtBLEtBQ3BCLDhCQU1DTSxFQUFNZixLQUFLZ0IsU0FBU0MscUJBQXFCLGtCQUN2Q0MsS0FBS0gsR0FBS0ksSUFBSSxZQUNkQyxFQUFLQyxTQUNGQyxnQkFBZ0IsU0FFbkJGLEVBQUtkLGFBQ0ZnQixnQkFBZ0IsV0FJbEJ0QixLQUFLYSxPQUFPQyxJQUFJTCxPQUNmYyxRQUFRLHFCQUFzQixJQUM5QkEsUUFBUSxxQkFBc0IsSUFDOUJBLFFBQVEscUJBQXNCLElBQzlCQSxRQUFRLHFCQUFzQixJQUU5QkEsUUFBUSxvQkFBcUIsSUFDN0JBLFFBQVEsb0JBQXFCLElBQzdCQSxRQUFRLG9CQUFxQixJQUM3QkEsUUFBUSxxQkFBc0IsSUFDOUJBLFFBQVEscUJBQXNCLElBQzlCQSxRQUFRLHNCQUF1QixJQUMvQkEsUUFBUSw2QkFBOEIsSUFDdENBLFFBQVEseUJBQTBCLElBQ2xDQSxRQUFRLG9CQUFxQiwrQ0NwQzNCdkIsS0FBS3dCLFNBQ0RDLE1BQU0sd0NBR0NDLE9BQU8sa0JBQ1YsS0FBVE4sSUFBZ0JBLEVBQUtPLFNBQVMsUUFDcENELE9BQU8sbUJBRUFOLEVBQUtPLFNBQVMsTUFBUVAsRUFBS1EsV0FBVyxVQUM3Q1QsSUFBSSx3QkFDUUMsV0FDWlMsS0FBSywyQ0FLSkMsRUFBaUI5QixLQUFLQyxVQUFVLGlFQUMvQkMsUUFBUUMsWUFBWTJCLEtBQ1YxQixpQkFBaUIsUUFBUyxnQkFDbkMyQixFQUFnQnJCLEVBQUtzQixnQkFDcEJwQixXQUFXbUIsS0FDWGxCLE9BQU9DLElBQUlMLEtBQUtzQixLQUNwQixtREN0QkNFLEVBQWNqQyxLQUFLQyxVQUFVLDBEQUM1QkMsUUFBUUMsWUFBWThCLEtBQ2I3QixpQkFBaUIsUUFBUyxjQUMvQjhCLGFBQ0osNkJBR0VyQixPQUFPQyxJQUFJcUIsYUFDWHZCLFdBQVcsaUVDUlp3QixFQUFnQnBDLEtBQUtDLFVBQVUsaUVBQzlCQyxRQUFRQyxZQUFZaUMsS0FDWGhDLGlCQUFpQixRQUFTLGNBQ3BDaUMsb0JBQ0FDLHFCQUNFQyxFQUFTQyxTQUFTQyxjQUFjLGVBQy9CRixJQUdJbEIsTUFBTXFCLFFBQVUsVUFGbEJDLGlCQUlGQyxlQUNKLHFDQUdDTCxFQUFTQyxTQUFTQyxjQUFjLGVBQ2hDSSxFQUFRTCxTQUFTQyxjQUFjLGdCQUMvQkssRUFBUU4sU0FBU0MsY0FBYyxnQkFDL0JNLEVBQVdQLFNBQVNDLGNBQWMsbUJBQ2xDTyxFQUFTUixTQUFTQyxjQUFjLG1CQUM5QnJDLGlCQUFpQixRQUFTLGNBQzVCaUMsb0JBQ0toQixNQUFNcUIsUUFBVSxTQUNqQk8sTUFBUSxLQUNiLEtBQ0k3QyxpQkFBaUIsUUFBUyxjQUM3QmlDLGtCQUNFUyxFQUFNRyxPQUFTRixFQUFTRSxTQUNyQkMsV0FBV0osRUFBTUcsTUFBT0YsRUFBU0UsU0FDL0I1QixNQUFNcUIsUUFBVSxTQUNqQk8sTUFBUSxLQUNMQSxNQUFRLE9BRVY1QixNQUFNcUIsUUFBVSxTQUNqQk8sTUFBUSxLQUNMQSxNQUFRLE1BRWxCLGdDQUdDVixFQUFTQyxTQUFTVyxjQUFjLE9BQ2hDTixFQUFRTCxTQUFTVyxjQUFjLEtBQy9CQyxFQUFLWixTQUFTVyxjQUFjLE1BQzVCTCxFQUFRTixTQUFTVyxjQUFjLFNBQy9CSixFQUFXUCxTQUFTVyxjQUFjLFlBQ2xDSCxFQUFTUixTQUFTVyxjQUFjLFlBQzdCRSxHQUFLLGVBQ05BLEdBQUssZ0JBQ0xBLEdBQUssZ0JBQ0ZBLEdBQUssbUJBQ1JDLGFBQWEsY0FBZSxlQUN6QkEsYUFBYSxjQUFlLFVBQzlCRCxHQUFLLGlCQUNMRSxVQUFZLE9BQ2hCQSxVQUFZLGNBQ1RqRCxVQUFZLG1DQUNYSCxZQUFZMEMsS0FDWjFDLFlBQVlpRCxLQUNaakQsWUFBWTJDLEtBQ1ozQyxZQUFZNEMsS0FDWjVDLFlBQVk2QyxLQUNaMUMsVUFBWSxtQkFDZGtELFVBQVVyRCxZQUFZb0MsS0FDcEJsQixNQUFNcUIsUUFBVSxvQ0FFUGpDLFVBQ0osTUFBUkEsRUFDSyxHQUVGQSxFQUFLYyxRQUFRLE1BQU8sUUFBUUEsUUFBUSxNQUFPLFFBQVFBLFFBQVEsTUFBTywrQkFFL0RqQixFQUFXbUQsUUFDaEI1QyxPQUFPNkMsSUFBSUMsR0FBRyw0QkFBNkJyRCxvQkFBMkJBLE9BQWNOLEtBQUs0RCxrQkFBa0JILHdETDFEMUdJLGVBQ0ksMEJBRVJDLGFBQ0dBLHVDQUlHLHFCQUVFLDJCQUlMQyxRQU1BbEQsT0FBT0MsSUFBSUwsS0FBS3NELHVDQUtqQnZCLFNBQVNDLGtCQUFrQnpDLEtBQUtxRCxXQUMzQmIsU0FBU0Msa0JBQWtCekMsS0FBS3FELDJCQUlyQ2IsU0FBU0Msa0JBQWtCekMsS0FBS3FELDJCQUMzQmIsU0FBU0Msa0JBQWtCekMsS0FBS3FELDZDQUlyQ2IsU0FBU0Msa0JBQWtCekMsS0FBS3FELGtDQUMzQmIsU0FBU0Msa0JBQWtCekMsS0FBS3FELG1EQUlyQ2IsU0FBU0Msa0JBQWtCekMsS0FBS3FELHdCQUMzQmIsU0FBU0Msa0JBQWtCekMsS0FBS3FELGdEQUsvQjVDLFFBQ0xlLFNBQVdmLHNCQUVQdUQsT0FDTEMsRUFBTXpCLFNBQVNXLGNBQWMsZ0JBQzdCN0MsVUFBWSxhQUNaZSxNQUFNNkMsT0FBUyxVQUNmM0QsVUFBWXlELEVBQ1RDLHVCQUdIakUsS0FBS21FLFFBQVFDLGFBQ1ZaLFVBQVVuQyxNQUFNK0MsTUFBUXBFLEtBQUttRSxRQUFRQyxXQUNyQ2xFLFFBQVFtQixNQUFNK0MsTUFBUXBFLEtBQUttRSxRQUFRQyxPQUV0Q3BFLEtBQUttRSxRQUFRRSxjQUNWYixVQUFVbkMsTUFBTWdELE9BQVNyRSxLQUFLbUUsUUFBUUUsNkNBSzFDeEQsT0FBUyxJQUFJeUQsRUFBRSxJQUFNdEUsS0FBS3FELFNBRzFCeEMsT0FBTzBELGFBQWFDLFNBQVcsY0FDN0JoRCxTQUFXZixJQUNYZ0UsTUFBTSxRQUFTaEUsS0FDZmdFLE1BQU0sY0FBZS9ELEVBQUtHLE9BQU9DLElBQUk0RCxnQkFJckNDLEtBQUszRSxLQUFLbUUsU0FBU2hELElBQUksY0FDdkJOLE9BQU8wRCxhQUFhSyxHQUFZbEUsRUFBS3lELFFBQVFTLFVBSS9DL0QsT0FBT2dFLGNBRVBDLFdBR0Q5RSxLQUFLbUUsUUFBUVksT0FBUy9FLEtBQUttRSxRQUFRWSxNQUFNcEQsU0FBUyxvQkFDL0NxRCxpQkFJSGhGLEtBQUttRSxRQUFRWSxPQUFTL0UsS0FBS21FLFFBQVFZLE1BQU1wRCxTQUFTLHFCQUMvQ3NELGtCQUlIakYsS0FBS21FLFFBQVFZLE9BQVMvRSxLQUFLbUUsUUFBUVksTUFBTXBELFNBQVMsa0JBQy9DdUQsZUFJSGxGLEtBQUttRSxRQUFRWSxPQUFTL0UsS0FBS21FLFFBQVFZLE1BQU1wRCxTQUFTLG9CQUMvQ3dELGlCQUlIbkYsS0FBS21FLFFBQVFZLE9BQVMvRSxLQUFLbUUsUUFBUVksTUFBTXBELFNBQVMsb0JBQy9DeUQsMEJNMUhYQyxFQUFjQyxRQUFVLFNBQVVDLEtBQzVCQyxVQUFVSCxFQUFjSSxLQUFNSixJQUVkLG9CQUFYSyxRQUEwQkEsT0FBT0gsWUFDbkNBLElBQUlJLElBQUlOIn0=
