define("arale/select/0.9.4/select",["arale/overlay/1.1.0/overlay","$","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/widget/1.1.0/widget","arale/base/1.1.0/base","arale/class/1.1.0/class","arale/events/1.1.0/events","arale/templatable/0.9.0/templatable","gallery/handlebars/1.0.2/handlebars","./select.handlebars"],function(e,t,s){function a(e,t){var s,a=[],l=e.options,i=l.length,r=!1;for(s=0;i>s;s++){var n,c={},h=l[s],d=["text","value","defaultSelected","selected"];for(n in d){var o=d[n];c[o]=h[o]}c.defaultSelected=h.defaultSelected?"true":"false",h.selected?(c.selected="true",r=!0):c.selected="false",a.push(c)}return r||(newModel[0].selected="true"),{select:a,classPrefix:t}}function l(e,t){var s,a,l,i,r=[],n=[];for(s=0,l=e.length;l>s;s++){var c=e[s];c.selected?(c.selected=c.defaultSelected="true",n.push(s)):c.selected=c.defaultSelected="false",r.push(c)}if(n.length>0)for(n.pop(),a=0,i=n.length;i>a;a++)r[a].selected="false";else r[0].selected="true";return{select:r,classPrefix:t}}function i(e,t){var s;return s=n.isNumeric(e)?e:"string"==typeof e?t.index(t.parent().find(e)):t.index(e)}var r=e("arale/overlay/1.1.0/overlay"),n=e("$"),c=e("arale/templatable/0.9.0/templatable"),h=e("./select.handlebars"),d=r.extend({Implements:c,attrs:{trigger:{value:null,getter:function(e){return n(e).eq(0)}},classPrefix:"ui-select",template:h,align:{baseXY:[0,"100%-1px"]},name:"",value:"",length:0,selectedIndex:-1,multiple:!1,disabled:!1,selectSource:null},events:{"click [data-role=item]":function(e){var t=n(e.currentTarget);this.select(t)},"mouseenter [data-role=item]":function(e){n(e.currentTarget).addClass(this.get("classPrefix")+"-hover")},"mouseleave [data-role=item]":function(e){n(e.currentTarget).removeClass(this.get("classPrefix")+"-hover")}},initAttrs:function(e,t){d.superclass.initAttrs.call(this,e,t);var s=this.get("trigger");if("select"==s[0].tagName.toLowerCase()){var i=s.attr("name");i&&this.set("name",i),this.set("selectSource",s);var r='<a href="#" class="'+this.get("classPrefix")+'-trigger"></a>',c=n(r);this.set("trigger",c),s.after(c).hide(),this.set("model",a(s[0],this.get("classPrefix")))}else{var i=this.get("name");if(i){var h=n("input[name="+i+"]").eq(0);h[0]||(h=n('<input type="hidden" id="select-'+i+'" name="'+i+'" />').insertBefore(s)),this.set("selectSource",h)}this.set("model",l(this.get("model"),this.get("classPrefix")))}},setup:function(){var e=this.get("trigger");this.delegateEvents(e,"click",this._trigger_click),this.delegateEvents(e,"mouseenter",function(){e.addClass(this.get("classPrefix")+"-trigger-hover")}),this.delegateEvents(e,"mouseleave",function(){e.removeClass(this.get("classPrefix")+"-trigger-hover")}),this.options=this.$("[data-role=content]").children(),this.select("[data-selected=true]"),this.set("length",this.options.length),this._tweakAlignDefaultValue(),this._blurHide(e),d.superclass.setup.call(this)},render:function(){return d.superclass.render.call(this),this._setTriggerWidth(),this},_setTriggerWidth:function(){var e=this.get("trigger"),t=this.element.outerWidth(),s=parseInt(e.css("padding-left"),10),a=parseInt(e.css("padding-right"),10),l=parseInt(e.css("border-left-width"),10),i=parseInt(e.css("border-right-width"),10);e.css("width",t-s-a-l-i)},_tweakAlignDefaultValue:function(){var e=this.get("align");"VIEWPORT"===e.baseElement._id&&(e.baseElement=this.get("trigger")),this.set("align",e)},_trigger_click:function(e){var t=this;e.preventDefault(),t.get("disabled")||t.show()},destroy:function(){this.element.remove(),d.superclass.destroy.call(this)},select:function(e){var t=i(e,this.options),s=this.get("selectedIndex");if(this.set("selectedIndex",t),s!==t){var a=this.options.eq(t);this.trigger("change",a)}return this.hide(),this},syncModel:function(e){this.set("model",l(e,this.get("classPrefix"))),this.renderPartial("[data-role=content]"),this.options=this.$("[data-role=content]").children(),this.set("length",this.options.length),this.set("selectedIndex",-1),this.set("value","");var t=i("[data-selected=true]",this.options);return this.get("selectedIndex"),this.set("selectedIndex",t),this._setTriggerWidth(),this},getOption:function(e){var t=i(e,this.options);return this.options.eq(t)},addOption:function(e){var t=this.get("model").select;return t.push(e),this.syncModel(t),this},removeOption:function(e){var t=i(e,this.options),s=this.get("selectedIndex"),a=this.options.eq(t);return a.remove(),this.options=this.$("[data-role=content]").children(),this.set("length",this.options.length),t===s?this.set("selectedIndex",0):s>t&&this.set("selectedIndex",s-1),this},_onRenderSelectedIndex:function(e){if(-1!=e){var t=this.options.eq(e),s=this.currentItem,a=t.attr("data-value");if(!s||t[0]!=s[0]){var l=this.get("selectSource");l&&(l[0].value=a),s&&s.attr("data-selected","false").removeClass(this.get("classPrefix")+"-selected"),t.attr("data-selected","true").addClass(this.get("classPrefix")+"-selected"),this.set("value",a);var i=this.get("trigger"),r=i.find("[data-role=trigger-content]");r.length?r.html(t.html()):i.html(t.html()),this.currentItem=t}}},_onRenderDisabled:function(e){var t=this.get("classPrefix")+"-disabled",s=this.get("trigger");s[e?"addClass":"removeClass"](t);var a=this.options.eq(this.get("selectedIndex"));this.trigger("disabledChange",a,e)}});s.exports=d}),define("arale/select/0.9.4/select.handlebars",["gallery/handlebars/1.0.2/runtime"],function(e,t,s){var a=e("gallery/handlebars/1.0.2/runtime"),l=a.template;s.exports=l(function(e,t,s,a,l){function i(e,t,a){var l,i,r="";return r+='\n        <li data-role="item" class="'+d((l=a.classPrefix,typeof l===h?l.apply(e):l))+'-item" data-value="',(i=s.value)?i=i.call(e,{hash:{},data:t}):(i=e.value,i=typeof i===h?i.apply(e):i),r+=d(i)+'" data-defaultSelected="',(i=s.defaultSelected)?i=i.call(e,{hash:{},data:t}):(i=e.defaultSelected,i=typeof i===h?i.apply(e):i),r+=d(i)+'" data-selected="',(i=s.selected)?i=i.call(e,{hash:{},data:t}):(i=e.selected,i=typeof i===h?i.apply(e):i),r+=d(i)+'">',(i=s.text)?i=i.call(e,{hash:{},data:t}):(i=e.text,i=typeof i===h?i.apply(e):i),(i||0===i)&&(r+=i),r+="</li>\n        "}this.compilerInfo=[3,">= 1.0.0-rc.4"],s=s||{};for(var r in e.helpers)s[r]=s[r]||e.helpers[r];l=l||{};var n,c="",h="function",d=this.escapeExpression,o=this;return c+='<div class="',(n=s.classPrefix)?n=n.call(t,{hash:{},data:l}):(n=t.classPrefix,n=typeof n===h?n.apply(t):n),c+=d(n)+'">\n    <ul class="',(n=s.classPrefix)?n=n.call(t,{hash:{},data:l}):(n=t.classPrefix,n=typeof n===h?n.apply(t):n),c+=d(n)+'-content" data-role="content">\n        ',n=s.each.call(t,t.select,{hash:{},inverse:o.noop,fn:o.programWithDepth(1,i,l,t),data:l}),(n||0===n)&&(c+=n),c+="\n    </ul>\n</div>\n"})});
