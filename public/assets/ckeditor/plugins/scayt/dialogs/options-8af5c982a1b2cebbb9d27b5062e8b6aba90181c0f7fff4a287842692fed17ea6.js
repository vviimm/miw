CKEDITOR.dialog.add("scaytDialog",function(e){var t=e.scayt,n='<p><img src="'+t.getLogo()+'" /></p><p>'+t.getLocal("version")+t.getVersion()+"</p><p>"+t.getLocal("text_copyrights")+"</p>",i=CKEDITOR.document,o={isChanged:function(){return null!==this.newLang&&this.currentLang!==this.newLang},currentLang:t.getLang(),newLang:null,reset:function(){this.currentLang=t.getLang(),this.newLang=null},id:"lang"},n=[{id:"options",label:t.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var e,n=t.getApplicationConfig(),i=[],o={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"};for(e in n)n={type:"checkbox"},n.id=e,n.label=t.getLocal(o[e]),i.push(n);return i}(),onShow:function(){this.getChild();for(var t=e.scayt,n=0;n<this.getChild().length;n++)this.getChild()[n].setValue(t.getApplicationConfig()[this.getChild()[n].id])}}]},{id:"langs",label:t.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;margin-bottom:15px;",html:'<div><div style="float:left;width:45%;margin-left:5px;" id="left-col-'+e.name+'"></div><div style="float:left;width:45%;margin-left:15px;" id="right-col-'+e.name+'"></div></div>',onShow:function(){var t=e.scayt.getLang();i.getById("scaytLang_"+e.name+"_"+t).$.checked=!0}},{type:"html",id:"graytLanguagesHint",html:'<div style="margin:5px auto; width:95%;white-space:normal;" id="'+e.name+'graytLanguagesHint"><span style="width:10px;height:10px;display: inline-block; background:#02b620;vertical-align:top;margin-top:2px;"></span> - This languages are supported by Grammar As You Type(GRAYT).</div>',onShow:function(){var t=i.getById(e.name+"graytLanguagesHint");e.config.grayt_autoStartup||(t.$.style.display="none")}}]}]},{id:"dictionaries",label:t.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:t.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(t){var n=t.sender,i=e.scayt;setTimeout(function(){n.getContentElement("dictionaries","dictionaryNote").getElement().setText(""),null!=i.getUserDictionaryName()&&""!=i.getUserDictionaryName()&&n.getContentElement("dictionaries","dictionaryName").setValue(i.getUserDictionaryName())},0)}},{type:"hbox",id:"notExistDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"createDic",label:t.getLocal("btn_createDic"),title:t.getLocal("btn_createDic"),onClick:function(){var t=this.getDialog(),n=r,i=e.scayt,o=t.getContentElement("dictionaries","dictionaryName").getValue();i.createUserDictionary(o,function(i){i.error||n.toggleDictionaryButtons.call(t,!0),i.dialog=t,i.command="create",i.name=o,e.fire("scaytUserDictionaryAction",i)},function(n){n.dialog=t,n.command="create",n.name=o,e.fire("scaytUserDictionaryActionError",n)})}},{type:"button",id:"restoreDic",label:t.getLocal("btn_restoreDic"),title:t.getLocal("btn_restoreDic"),onClick:function(){var t=this.getDialog(),n=e.scayt,i=r,o=t.getContentElement("dictionaries","dictionaryName").getValue();n.restoreUserDictionary(o,function(n){n.dialog=t,n.error||i.toggleDictionaryButtons.call(t,!0),n.command="restore",n.name=o,e.fire("scaytUserDictionaryAction",n)},function(n){n.dialog=t,n.command="restore",n.name=o,e.fire("scaytUserDictionaryActionError",n)})}}]},{type:"hbox",id:"existDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"removeDic",label:t.getLocal("btn_deleteDic"),title:t.getLocal("btn_deleteDic"),onClick:function(){var t=this.getDialog(),n=e.scayt,i=r,o=t.getContentElement("dictionaries","dictionaryName"),a=o.getValue();n.removeUserDictionary(a,function(n){o.setValue(""),n.error||i.toggleDictionaryButtons.call(t,!1),n.dialog=t,n.command="remove",n.name=a,e.fire("scaytUserDictionaryAction",n)},function(n){n.dialog=t,n.command="remove",n.name=a,e.fire("scaytUserDictionaryActionError",n)})}},{type:"button",id:"renameDic",label:t.getLocal("btn_renameDic"),title:t.getLocal("btn_renameDic"),onClick:function(){var t=this.getDialog(),n=e.scayt,i=t.getContentElement("dictionaries","dictionaryName").getValue();n.renameUserDictionary(i,function(n){n.dialog=t,n.command="rename",n.name=i,e.fire("scaytUserDictionaryAction",n)},function(n){n.dialog=t,n.command="rename",n.name=i,e.fire("scaytUserDictionaryActionError",n)})}}]},{type:"html",id:"dicInfo",html:'<div id="dic_info_editor1" style="margin:5px auto; width:95%;white-space:normal;">'+t.getLocal("text_descriptionDic")+"</div>"}]}]},{id:"about",label:t.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div><div id="scayt_about_">'+n+"</div></div>"}]}];e.on("scaytUserDictionaryAction",function(e){var t,n=SCAYT.prototype.UILib,i=e.data.dialog,o=i.getContentElement("dictionaries","dictionaryNote").getElement(),r=e.editor.scayt;void 0===e.data.error?(t=r.getLocal("message_success_"+e.data.command+"Dic"),t=t.replace("%s",e.data.name),o.setText(t),n.css(o.$,{color:"blue"})):(""===e.data.name?o.setText(r.getLocal("message_info_emptyDic")):(t=r.getLocal("message_error_"+e.data.command+"Dic"),t=t.replace("%s",e.data.name),o.setText(t)),n.css(o.$,{color:"red"}),null!=r.getUserDictionaryName()&&""!=r.getUserDictionaryName()?i.getContentElement("dictionaries","dictionaryName").setValue(r.getUserDictionaryName()):i.getContentElement("dictionaries","dictionaryName").setValue(""))}),e.on("scaytUserDictionaryActionError",function(e){var t,n=SCAYT.prototype.UILib,i=e.data.dialog,o=i.getContentElement("dictionaries","dictionaryNote").getElement(),r=e.editor.scayt;""===e.data.name?o.setText(r.getLocal("message_info_emptyDic")):(t=r.getLocal("message_error_"+e.data.command+"Dic"),t=t.replace("%s",e.data.name),o.setText(t)),n.css(o.$,{color:"red"}),null!=r.getUserDictionaryName()&&""!=r.getUserDictionaryName()?i.getContentElement("dictionaries","dictionaryName").setValue(r.getUserDictionaryName()):i.getContentElement("dictionaries","dictionaryName").setValue("")});var r={title:t.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:340,minHeight:260,onLoad:function(){if(0!=e.config.scayt_uiTabs[1]){var t=r,n=t.getLangBoxes.call(this);n.getParent().setStyle("white-space","normal"),t.renderLangList(n),this.definition.minWidth=this.getSize().width,this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){o.reset()},onHide:function(){e.unlockSelection()},onShow:function(){if(e.fire("scaytDialogShown",this),0!=e.config.scayt_uiTabs[2]){var t=e.scayt,n=this.getContentElement("dictionaries","dictionaryName"),i=this.getContentElement("dictionaries","existDic").getElement().getParent(),o=this.getContentElement("dictionaries","notExistDic").getElement().getParent();i.hide(),o.hide(),null!=t.getUserDictionaryName()&&""!=t.getUserDictionaryName()?(this.getContentElement("dictionaries","dictionaryName").setValue(t.getUserDictionaryName()),i.show()):(n.setValue(""),o.show())}},onOk:function(){var t=r,n=e.scayt;this.getContentElement("options","scaytOptions"),t=t.getChangedOption.call(this),n.commitOption({changedOptions:t})},toggleDictionaryButtons:function(e){var t=this.getContentElement("dictionaries","existDic").getElement().getParent(),n=this.getContentElement("dictionaries","notExistDic").getElement().getParent();e?(t.show(),n.hide()):(t.hide(),n.show())},getChangedOption:function(){var t={};if(1==e.config.scayt_uiTabs[0])for(var n=this.getContentElement("options","scaytOptions").getChild(),i=0;i<n.length;i++)n[i].isChanged()&&(t[n[i].id]=n[i].getValue());return o.isChanged()&&(t[o.id]=e.config.scayt_sLang=o.currentLang=o.newLang),t},buildRadioInputs:function(t,n,i){var r=new CKEDITOR.dom.element("div"),a="scaytLang_"+e.name+"_"+n,s=CKEDITOR.dom.element.createFromHtml('<input id="'+a+'" type="radio"  value="'+n+'" name="scayt_lang" />'),l=new CKEDITOR.dom.element("label"),c=e.scayt;return r.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"}),s.on("click",function(e){o.newLang=e.sender.getValue()}),l.appendText(t),l.setAttribute("for",a),i&&e.config.grayt_autoStartup&&l.setStyles({color:"#02b620"}),r.append(s),r.append(l),n===c.getLang()&&(s.setAttribute("checked",!0),s.setAttribute("defaultChecked","defaultChecked")),r},renderLangList:function(n){var i=n.find("#left-col-"+e.name).getItem(0);n=n.find("#right-col-"+e.name).getItem(0);var o,r=t.getScaytLangList(),a=t.getGraytLangList(),s={},l=[],c=0,u=!1;for(o in r.ltr)s[o]=r.ltr[o];for(o in r.rtl)s[o]=r.rtl[o];for(o in s)l.push([o,s[o]]);for(l.sort(function(e,t){var n=0;return e[1]>t[1]?n=1:e[1]<t[1]&&(n=-1),n}),s={},u=0;u<l.length;u++)s[l[u][0]]=l[u][1];l=Math.round(l.length/2);for(o in s)c++,u=o in a.ltr||o in a.rtl,this.buildRadioInputs(s[o],o,u).appendTo(l>=c?i:n)},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},contents:function(e,t){var n=[],i=t.config.scayt_uiTabs;if(!i)return e;for(var o in i)1==i[o]&&n.push(e[o]);return n.push(e[e.length-1]),n}(n,e)};return r});