var be=Object.defineProperty,ge=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var le=(e,l,b)=>l in e?be(e,l,{enumerable:!0,configurable:!0,writable:!0,value:b}):e[l]=b,M=(e,l)=>{for(var b in l||(l={}))ye.call(l,b)&&le(e,b,l[b]);if(ee)for(var b of ee(l))Ce.call(l,b)&&le(e,b,l[b]);return e},L=(e,l)=>ge(e,ve(l));import{x as O,t as N,r as G,a as W,A as J,s as S,e as d,Q as Y,f as D,h as _,i,G as t,w as B,F as Z,E as H,k as v,P as K,l as P,D as U,j as Q,J as De,o as _e}from"./vendor.c08e96cf.js";import{A as F}from"./Api.7190d43f.js";import{_ as Ve}from"./SshTerminal.f1bd6805.js";import{E as ie}from"./Enum.2b540114.js";import{n as X}from"./assert.6143fd7f.js";import{_ as te}from"./codemirror.0620304e.js";import{g as Ie,c as ne}from"./index.01696ebf.js";const T={list:F.create("/machines","get"),info:F.create("/machines/{id}/sysinfo","get"),stats:F.create("/machines/{id}/stats","get"),closeCli:F.create("/machines/{id}/close-cli","delete"),saveMachine:F.create("/machines","post"),del:F.create("/machines/{id}","delete"),scripts:F.create("/machines/{machineId}/scripts","get"),runScript:F.create("/machines/{machineId}/scripts/{scriptId}/run","get"),saveScript:F.create("/machines/{machineId}/scripts","post"),deleteScript:F.create("/machines/{machineId}/scripts/{scriptId}","delete"),files:F.create("/machines/{id}/files","get"),lsFile:F.create("/machines/{machineId}/files/{fileId}/read-dir","get"),rmFile:F.create("/machines/{machineId}/files/{fileId}/remove","delete"),uploadFile:F.create("/machines/files/upload","post"),fileContent:F.create("/machines/{machineId}/files/{fileId}/read","get"),updateFileContent:F.create("/machines/{machineId}/files/{id}/write","post"),addConf:F.create("/machines/{machineId}/files","post"),delConf:F.create("/machines/{machineId}/files/{id}","delete"),terminal:F.create("/api/machines/{id}/terminal","get")};var R={scriptTypeEnum:new ie().add("RESULT","\u6709\u7ED3\u679C",1).add("NO_RESULT","\u65E0\u7ED3\u679C",2).add("REAL_TIME","\u5B9E\u65F6\u4EA4\u4E92",3),FileTypeEnum:new ie().add("DIRECTORY","\u76EE\u5F55",1).add("FILE","\u6587\u4EF6",2)},oe=O({name:"ScriptEdit",components:{codemirror:te},props:{visible:{type:Boolean},data:{type:Object},title:{type:String},machineId:{type:Number},isCommon:{type:Boolean}},setup(e,{emit:l}){const{isCommon:b,machineId:a}=N(e),$=G(null),y=W({dialogVisible:!1,submitDisabled:!1,form:{id:null,name:"",machineId:0,description:"",script:"",params:null,type:null},btnLoading:!1});J(e,g=>{g.data?y.form=M({},g.data):(y.form={},y.form.script=""),y.dialogVisible=g.visible});const u=()=>{y.form.machineId=b.value?9999999:a.value,console.log("machineid:",a),$.value.validate(g=>{if(g)X(y.form.name,"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),X(y.form.description,"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),X(y.form.script,"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),T.saveScript.request(y.form).then(()=>{S.success("\u4FDD\u5B58\u6210\u529F"),l("submitSuccess"),y.submitDisabled=!1,h()},()=>{y.submitDisabled=!1});else return!1})},h=()=>{l("update:visible",!1),l("cancel")};return L(M({},N(y)),{enums:R,mockDataForm:$,btnOk:u,cancel:h})}}),Ml=`#content .CodeMirror {
  height: 300px !important;
}`;const Fe={class:"mock-data-dialog"},$e={class:"dialog-footer"},we=v("\u4FDD \u5B58"),ke=v("\u5173 \u95ED");function Ee(e,l,b,a,$,y){const u=d("el-input"),h=d("el-form-item"),g=d("el-option"),o=d("el-select"),C=d("codemirror"),s=d("el-form"),V=d("el-button"),w=d("el-dialog"),f=Y("auth");return D(),_("div",Fe,[i(w,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[7]||(l[7]=c=>e.dialogVisible=c),"close-on-click-modal":!1,"before-close":e.cancel,"show-close":!0,"destroy-on-close":!0,width:"800px"},{footer:t(()=>[i("div",$e,[B(i(V,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"mini",disabled:e.submitDisabled},{default:t(()=>[we]),_:1},8,["loading","onClick","disabled"]),[[f,"machine:script:save"]]),i(V,{onClick:l[6]||(l[6]=c=>e.cancel()),disabled:e.submitDisabled,size:"mini"},{default:t(()=>[ke]),_:1},8,["disabled"])])]),default:t(()=>[i(s,{model:e.form,ref:"mockDataForm","label-width":"70px",size:"small"},{default:t(()=>[i(h,{prop:"method",label:"\u540D\u79F0"},{default:t(()=>[i(u,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=c=>e.form.name=c),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),i(h,{prop:"description",label:"\u63CF\u8FF0"},{default:t(()=>[i(u,{modelValue:e.form.description,"onUpdate:modelValue":l[2]||(l[2]=c=>e.form.description=c),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),i(h,{prop:"type",label:"\u7C7B\u578B"},{default:t(()=>[i(o,{modelValue:e.form.type,"onUpdate:modelValue":l[3]||(l[3]=c=>e.form.type=c),"default-first-option":"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"},{default:t(()=>[(D(!0),_(Z,null,H(e.enums.scriptTypeEnum,c=>(D(),_(g,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(h,{prop:"params",label:"\u53C2\u6570"},{default:t(()=>[i(u,{modelValue:e.form.params,"onUpdate:modelValue":l[4]||(l[4]=c=>e.form.params=c),modelModifiers:{trim:!0},placeholder:"\u53C2\u6570\u6570\u7EC4json\uFF0C\u82E5\u65E0\u53EF\u4E0D\u586B"},null,8,["modelValue"])]),_:1}),i(h,{prop:"script",label:"\u5185\u5BB9",id:"content"},{default:t(()=>[i(C,{ref:"cmEditor",modelValue:e.form.script,"onUpdate:modelValue":l[5]||(l[5]=c=>e.form.script=c),language:"shell"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue","before-close"])])}oe.render=Ee;var ae=O({name:"ServiceManage",components:{ScriptEdit:oe,SshTerminal:Ve},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,l){const b=G(null),a=W({dialogVisible:!1,type:0,currentId:null,currentData:null,editDialog:{visible:!1,data:null,title:"",machineId:9999999},scriptTable:[],scriptParamsDialog:{visible:!1,params:{},paramsFormItem:[]},resultDialog:{visible:!1,result:""},terminalDialog:{visible:!1,cmd:"",machineId:0}});J(e,f=>{e.machineId&&$(),a.dialogVisible=f.visible});const $=async()=>{a.currentId=null,a.currentData=null;const f=a.type==0?e.machineId:9999999,c=await T.scripts.request({machineId:f});a.scriptTable=c.list},y=async f=>{if(f.params){a.scriptParamsDialog.paramsFormItem=JSON.parse(f.params),a.scriptParamsDialog.visible=!0;return}h(f)},u=async f=>{a.scriptParamsDialog.visible&&b.value.validate(c=>{if(c)h(f),a.scriptParamsDialog.params={},a.scriptParamsDialog.visible=!1,b.value.resetFields();else return!1})},h=async f=>{const c=f.type==R.scriptTypeEnum.NO_RESULT.value;if(f.type==R.scriptTypeEnum.RESULT.value||c){const m=await T.runScript.request({machineId:e.machineId,scriptId:f.id,params:a.scriptParamsDialog.params});if(c){S.success("\u6267\u884C\u5B8C\u6210");return}a.resultDialog.result=m,a.resultDialog.visible=!0;return}if(f.type==R.scriptTypeEnum.REAL_TIME.value){a.terminalDialog.cmd=f.script,a.terminalDialog.visible=!0,a.terminalDialog.machineId=e.machineId;return}},g=()=>{a.terminalDialog.visible=!1,a.terminalDialog.machineId=0},o=f=>{!f||(a.currentId=f.id,a.currentData=f)},C=f=>{a.editDialog.machineId=e.machineId,a.editDialog.data=f,f?a.editDialog.title="\u67E5\u770B\u7F16\u8F91\u811A\u672C":a.editDialog.title="\u65B0\u589E\u811A\u672C",a.editDialog.visible=!0},s=()=>{$()},V=f=>{K.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${f.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{T.deleteScript.request({machineId:e.machineId,scriptId:f.id}).then(()=>{$()})})},w=()=>{l.emit("update:visible",!1),l.emit("update:machineId",null),l.emit("cancel"),a.scriptTable=[]};return L(M({},N(a)),{paramsForm:b,enums:R,getScripts:$,runScript:y,hasParamsRun:u,closeTermnial:g,choose:o,editScript:C,submitSuccess:s,deleteRow:V,handleClose:w})}}),ql="";const Be={class:"file-manage"},Te={class:"toolbar"},Ue={style:{float:"left"}},Se={style:{float:"right"}},Ae=v("\u67E5\u770B"),ze=v("\u6DFB\u52A0"),Me=v("\u5220\u9664"),qe=i("i",null,null,-1),Le=v("\u786E\u5B9A"),Ne=v("\u6267\u884C"),Pe={class:"dialog-footer"},Re=v("\u786E \u5B9A"),je={style:{"white-space":"pre-line",padding:"10px",color:"#000000"}};function Oe(e,l,b,a,$,y){const u=d("el-option"),h=d("el-select"),g=d("el-button"),o=d("el-radio"),C=d("el-table-column"),s=d("el-table"),V=d("el-dialog"),w=d("el-input"),f=d("el-form-item"),c=d("el-form"),m=d("ssh-terminal"),k=d("script-edit"),p=Y("auth");return D(),_("div",Be,[i(V,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[6]||(l[6]=n=>e.dialogVisible=n),"destroy-on-close":!0,"show-close":!0,"before-close":e.handleClose,width:"60%"},{default:t(()=>[i("div",Te,[i("div",Ue,[i(h,{modelValue:e.type,"onUpdate:modelValue":l[1]||(l[1]=n=>e.type=n),onChange:e.getScripts,size:"mini",placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[i(u,{key:0,label:"\u79C1\u6709",value:0}),i(u,{key:1,label:"\u516C\u5171",value:1})]),_:1},8,["modelValue","onChange"])]),i("div",Se,[i(g,{onClick:l[2]||(l[2]=n=>e.editScript(e.currentData)),disabled:e.currentId==null,type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},{default:t(()=>[Ae]),_:1},8,["disabled"]),B(i(g,{type:"primary",onClick:l[3]||(l[3]=n=>e.editScript(null)),icon:"el-icon-plus",size:"mini",plain:""},{default:t(()=>[ze]),_:1},512),[[p,"machine:script:save"]]),B(i(g,{disabled:e.currentId==null,type:"danger",onClick:l[4]||(l[4]=n=>e.deleteRow(e.currentData)),icon:"el-icon-delete",size:"mini",plain:""},{default:t(()=>[Me]),_:1},8,["disabled"]),[[p,"machine:script:del"]])])]),i(s,{data:e.scriptTable,onCurrentChange:e.choose,stripe:"",border:"",size:"mini",style:{width:"100%"}},{default:t(()=>[i(C,{label:"\u9009\u62E9",width:"55px"},{default:t(n=>[i(o,{modelValue:e.currentId,"onUpdate:modelValue":l[5]||(l[5]=A=>e.currentId=A),label:n.row.id},{default:t(()=>[qe]),_:2},1032,["modelValue","label"])]),_:1}),i(C,{prop:"name",label:"\u540D\u79F0","min-width":70}),i(C,{prop:"description",label:"\u63CF\u8FF0","min-width":100,"show-overflow-tooltip":""}),i(C,{prop:"name",label:"\u7C7B\u578B","min-width":50},{default:t(n=>[v(P(e.enums.scriptTypeEnum.getLabelByValue(n.row.type)),1)]),_:1}),i(C,{label:"\u64CD\u4F5C"},{default:t(n=>[n.row.id==null?(D(),_(g,{key:0,onClick:A=>e.addFiles(n.row),type:"success",icon:"el-icon-success",size:"mini",plain:""},{default:t(()=>[Le]),_:2},1032,["onClick"])):U("",!0),n.row.id!=null?B((D(),_(g,{key:1,onClick:A=>e.runScript(n.row),type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},{default:t(()=>[Ne]),_:2},1032,["onClick"])),[[p,"machine:script:run"]]):U("",!0)]),_:1})]),_:1},8,["data","onCurrentChange"])]),_:1},8,["title","modelValue","before-close"]),i(V,{title:"\u811A\u672C\u53C2\u6570",modelValue:e.scriptParamsDialog.visible,"onUpdate:modelValue":l[8]||(l[8]=n=>e.scriptParamsDialog.visible=n),width:"400px"},{footer:t(()=>[i("span",Pe,[i(g,{type:"primary",onClick:l[7]||(l[7]=n=>e.hasParamsRun(e.currentData)),size:"mini"},{default:t(()=>[Re]),_:1})])]),default:t(()=>[i(c,{ref:"paramsForm",model:e.scriptParamsDialog.params,"label-width":"70px",size:"mini"},{default:t(()=>[(D(!0),_(Z,null,H(e.scriptParamsDialog.paramsFormItem,n=>(D(),_(f,{key:n.name,prop:n.model,label:n.name,required:""},{default:t(()=>[i(w,{modelValue:e.scriptParamsDialog.params[n.model],"onUpdate:modelValue":A=>e.scriptParamsDialog.params[n.model]=A,placeholder:n.placeholder,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","label"]))),128))]),_:1},8,["model"])]),_:1},8,["modelValue"]),i(V,{title:"\u6267\u884C\u7ED3\u679C",modelValue:e.resultDialog.visible,"onUpdate:modelValue":l[10]||(l[10]=n=>e.resultDialog.visible=n),width:"50%"},{default:t(()=>[i("div",je,[i(w,{modelValue:e.resultDialog.result,"onUpdate:modelValue":l[9]||(l[9]=n=>e.resultDialog.result=n),rows:20,type:"textarea"},null,8,["modelValue"])])]),_:1},8,["modelValue"]),e.terminalDialog.visible?(D(),_(V,{key:0,title:"\u7EC8\u7AEF",modelValue:e.terminalDialog.visible,"onUpdate:modelValue":l[11]||(l[11]=n=>e.terminalDialog.visible=n),width:"70%","close-on-click-modal":!1,modal:!1,onClose:e.closeTermnial},{default:t(()=>[i(m,{ref:"terminal",cmd:e.terminalDialog.cmd,machineId:e.terminalDialog.machineId,height:"600px"},null,8,["cmd","machineId"])]),_:1},8,["modelValue","onClose"])):U("",!0),i(k,{visible:e.editDialog.visible,"onUpdate:visible":l[12]||(l[12]=n=>e.editDialog.visible=n),data:e.editDialog.data,"onUpdate:data":l[13]||(l[13]=n=>e.editDialog.data=n),title:e.editDialog.title,machineId:e.editDialog.machineId,"onUpdate:machineId":l[14]||(l[14]=n=>e.editDialog.machineId=n),isCommon:e.type==1,onSubmitSuccess:e.submitSuccess},null,8,["visible","data","title","machineId","isCommon","onSubmitSuccess"])])}ae.render=Oe;var se=O({name:"FileManage",components:{codemirror:te},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,{emit:l}){const b=T.addConf,a=T.delConf,$=T.updateFileContent,y=T.files,u=G(null),h=Ie("token"),g={tabSize:2,mode:"text/x-sh",theme:"panda-syntax",line:!0,lint:!0,gutters:["CodeMirror-lint-markers"],indentWithTabs:!0,smartIndent:!0,matchBrackets:!0,autofocus:!0,styleSelectedText:!0,styleActiveLine:!0,foldGutter:!0,hintOptions:{completeSingle:!0}},o=W({dialogVisible:!1,form:{id:null,type:null,name:"",remark:""},fileTable:[],btnLoading:!1,fileContent:{fileId:0,content:"",contentVisible:!1,dialogTitle:"",path:"",type:"shell"},tree:{title:"",visible:!1,folder:{id:0},node:{childNodes:[]},resolve:{}},props:{label:"name",children:"zones",isLeaf:"leaf"}});J(e,r=>{r.machineId&&C(),o.dialogVisible=r.visible});const C=async()=>{const r=await y.request({id:e.machineId});o.fileTable=r.list},s=()=>{o.fileTable=[{}].concat(o.fileTable)},V=async r=>{r.machineId=e.machineId,await b.request(r),S.success("\u6DFB\u52A0\u6210\u529F"),C()},w=(r,I)=>{I.id?K.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${I.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{a.request({machineId:e.machineId,id:I.id}).then(()=>{o.fileTable.splice(r,1)})}):o.fileTable.splice(r,1)},f=r=>{if(r.type==1){o.tree.folder=r,o.tree.title=r.name,n(o.tree.node,o.tree.resolve),o.tree.visible=!0;return}c(r.id,r.path)},c=async(r,I)=>{const E=await T.fileContent.request({fileId:r,path:I,machineId:e.machineId});o.fileContent.content=E,o.fileContent.fileId=r,o.fileContent.dialogTitle=I,o.fileContent.path=I,o.fileContent.type=m(I),o.fileContent.contentVisible=!0},m=r=>r.endsWith(".sh")?"shell":r.endsWith("js")||r.endsWith("json")?"javascript":r.endsWith("Dockerfile")?"dockerfile":r.endsWith("nginx.conf")?"nginx":r.endsWith("yaml")||r.endsWith("yml")?"yaml":r.endsWith("xml")||r.endsWith("html")?"html":"text",k=async()=>{await $.request({content:o.fileContent.content,id:o.fileContent.fileId,path:o.fileContent.path,machineId:e.machineId}),S.success("\u4FEE\u6539\u6210\u529F"),o.fileContent.contentVisible=!1,o.fileContent.content=""},p=()=>{l("update:visible",!1),l("update:machineId",null),l("cancel"),o.fileTable=[],o.tree.folder={id:0}},n=async(r,I)=>{if(typeof I!="function")return;const E=o.tree.folder;if(r.level===0){o.tree.node=r,o.tree.resolve=I;const j=E?E.path:"/";return I([{name:j,type:"d",path:j}])}let q;const z=r.data;!z||z.name==z.path?q=E.path:q=z.path;const x=await T.lsFile.request({fileId:E.id,machineId:e.machineId,path:q});for(const j of x)j.type!="d"&&(j.leaf=!0);return I(x)},A=(r,I)=>{const E=I.path;K.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${E}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{T.rmFile.request({fileId:o.tree.folder.id,path:E,machineId:e.machineId}).then(()=>{S.success("\u5220\u9664\u6210\u529F"),u.value.remove(r)})}).catch(()=>{})},ue=(r,I)=>{const E=document.createElement("a");E.setAttribute("href",`${ne.baseApiUrl}/machines/${e.machineId}/files/${o.tree.folder.id}/read?type=1&path=${I.path}&token=${h}`),E.click()},me=()=>`${ne.baseApiUrl}/machines/${e.machineId}/files/${o.tree.folder.id}/upload?token=${h}`,pe=r=>{r.code!==200&&S.error(r.msg)},ce=r=>{S.success(`'${r.name}' \u4E0A\u4F20\u4E2D,\u8BF7\u5173\u6CE8\u7ED3\u679C\u901A\u77E5`)},fe=r=>{const I=r.path;return["/","//","/usr","/usr/","/usr/bin","/opt","/run","/etc","/proc","/var","/mnt","/boot","/dev","/home","/media","/root"].indexOf(I)!=-1},he=r=>{const I=Number(r);if(r&&!isNaN(I)){const E=["B","KB","MB","GB","TB","PB","EB","ZB","YB","BB"];let q=0,z=I;if(I>=1024)for(;z>1024;)z=z/1024,q++;return`${z.toFixed(2)}${E[q]}`}return"-"};return L(M({},N(o)),{fileTree:u,enums:R,token:h,cmOptions:g,add:s,getFiles:C,addFiles:V,deleteRow:w,getConf:f,getFileContent:c,updateContent:k,handleClose:p,loadNode:n,deleteFile:A,downloadFile:ue,getUploadFile:me,beforeUpload:ce,uploadSuccess:pe,dontOperate:fe,formatFileSize:he})}}),Ll="";const We={class:"file-manage"},Ge={class:"toolbar"},Je={style:{float:"right"}},Ye=v("\u6DFB\u52A0"),Ke=v("\u786E\u5B9A"),Qe=v("\u67E5\u770B"),Ze=v("\u5220\u9664"),He={style:{height:"45vh",overflow:"auto"}},Xe={class:"custom-tree-node"},xe={key:0},el=i("i",{class:"el-icon-folder"},null,-1),ll={key:1},il=i("i",{class:"el-icon-folder-opened"},null,-1),tl={key:2},nl=i("i",{class:"el-icon-document"},null,-1),ol={style:{display:"inline-block",width:"430px"}},al={key:0,style:{color:"#67c23a"}},sl={class:"dialog-footer"},rl=v("\u4FDD \u5B58"),dl=v("\u5173 \u95ED");function ul(e,l,b,a,$,y){const u=d("el-button"),h=d("el-input"),g=d("el-table-column"),o=d("el-option"),C=d("el-select"),s=d("el-table"),V=d("el-dialog"),w=d("el-link"),f=d("el-upload"),c=d("el-tree"),m=d("codemirror"),k=Y("auth");return D(),_("div",We,[i(V,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[1]||(l[1]=p=>e.dialogVisible=p),"show-close":!0,"before-close":e.handleClose,width:"800px"},{default:t(()=>[i("div",Ge,[i("div",Je,[B(i(u,{type:"primary",onClick:e.add,icon:"el-icon-plus",size:"mini",plain:""},{default:t(()=>[Ye]),_:1},8,["onClick"]),[[k,"machine:file:add"]])])]),i(s,{data:e.fileTable,stripe:"",style:{width:"100%"}},{default:t(()=>[i(g,{prop:"name",label:"\u540D\u79F0",width:""},{default:t(p=>[i(h,{modelValue:p.row.name,"onUpdate:modelValue":n=>p.row.name=n,size:"mini",disabled:p.row.id!=null,clearable:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),i(g,{prop:"name",label:"\u7C7B\u578B","min-width":"50px"},{default:t(p=>[i(C,{disabled:p.row.id!=null,size:"mini",modelValue:p.row.type,"onUpdate:modelValue":n=>p.row.type=n,style:{width:"100px"},placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(D(!0),_(Z,null,H(e.enums.FileTypeEnum,n=>(D(),_(o,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])]),_:1}),i(g,{prop:"path",label:"\u8DEF\u5F84",width:""},{default:t(p=>[i(h,{modelValue:p.row.path,"onUpdate:modelValue":n=>p.row.path=n,disabled:p.row.id!=null,size:"mini",clearable:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),i(g,{label:"\u64CD\u4F5C",width:""},{default:t(p=>[p.row.id==null?(D(),_(u,{key:0,onClick:n=>e.addFiles(p.row),type:"success",icon:"el-icon-success",size:"mini",plain:""},{default:t(()=>[Ke]),_:2},1032,["onClick"])):U("",!0),p.row.id!=null?(D(),_(u,{key:1,onClick:n=>e.getConf(p.row),type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},{default:t(()=>[Qe]),_:2},1032,["onClick"])):U("",!0),B(i(u,{type:"danger",onClick:n=>e.deleteRow(p.$index,p.row),icon:"el-icon-delete",size:"mini",plain:""},{default:t(()=>[Ze]),_:2},1032,["onClick"]),[[k,"machine:file:del"]])]),_:1})]),_:1},8,["data"])]),_:1},8,["title","modelValue","before-close"]),i(V,{title:e.tree.title,modelValue:e.tree.visible,"onUpdate:modelValue":l[3]||(l[3]=p=>e.tree.visible=p),"close-on-click-modal":!1,width:"680px"},{default:t(()=>[i("div",He,[e.tree.visible?(D(),_(c,{key:0,ref:"fileTree",load:e.loadNode,props:e.props,lazy:"","node-key":"id","expand-on-click-node":!1},{default:t(({node:p,data:n})=>[i("span",Xe,[n.type=="d"&&!p.expanded?(D(),_("span",xe,[el])):U("",!0),n.type=="d"&&p.expanded?(D(),_("span",ll,[il])):U("",!0),n.type=="-"?(D(),_("span",tl,[nl])):U("",!0),i("span",ol,[v(P(p.label)+" ",1),n.type=="-"?(D(),_("span",al,"\xA0\xA0["+P(e.formatFileSize(n.size))+"]",1)):U("",!0)]),i("span",null,[n.type=="-"&&n.size<1*1024*1024?(D(),_(w,{key:0,onClick:Q(A=>e.getFileContent(e.tree.folder.id,n.path),["prevent"]),type:"info",icon:"el-icon-view",underline:!1},null,8,["onClick"])):U("",!0),i(f,{"before-upload":e.beforeUpload,"on-success":e.uploadSuccess,headers:{token:e.token},data:{fileId:e.tree.folder.id,path:n.path,machineId:e.machineId},action:e.getUploadFile({path:n.path}),"show-file-list":!1,name:"file",multiple:"",limit:100,style:{display:"inline-block","margin-left":"2px"}},{default:t(()=>[n.type=="d"?B((D(),_(w,{key:0,onClick:l[2]||(l[2]=Q(()=>{},["prevent"])),icon:"el-icon-upload",underline:!1},null,512)),[[k,"machine:file:upload"]]):U("",!0)]),_:2},1032,["before-upload","on-success","headers","data","action"]),n.type=="-"?B((D(),_(w,{key:1,onClick:Q(A=>e.downloadFile(p,n),["prevent"]),type:"danger",icon:"el-icon-download",underline:!1,style:{"margin-left":"2px"}},null,8,["onClick"])),[[k,"machine:file:write"]]):U("",!0),e.dontOperate(n)?U("",!0):B((D(),_(w,{key:2,onClick:Q(A=>e.deleteFile(p,n),["prevent"]),type:"danger",icon:"el-icon-delete",underline:!1,style:{"margin-left":"2px"}},null,8,["onClick"])),[[k,"machine:file:rm"]])])])]),_:1},8,["load","props"])):U("",!0)])]),_:1},8,["title","modelValue"]),i(V,{"destroy-on-close":!0,title:e.fileContent.dialogTitle,modelValue:e.fileContent.contentVisible,"onUpdate:modelValue":l[6]||(l[6]=p=>e.fileContent.contentVisible=p),"close-on-click-modal":!1,top:"5vh",width:"70%"},{footer:t(()=>[i("div",sl,[B(i(u,{type:"primary",onClick:e.updateContent,size:"mini"},{default:t(()=>[rl]),_:1},8,["onClick"]),[[k,"machine:file:write"]]),i(u,{onClick:l[5]||(l[5]=p=>e.fileContent.contentVisible=!1),size:"mini"},{default:t(()=>[dl]),_:1})])]),default:t(()=>[i("div",null,[i(m,{"can-change-mode":!0,ref:"cmEditor",modelValue:e.fileContent.content,"onUpdate:modelValue":l[4]||(l[4]=p=>e.fileContent.content=p),language:e.fileContent.type},null,8,["modelValue","language"])])]),_:1},8,["title","modelValue"])])}se.render=ul;var re=O({name:"MachineEdit",props:{visible:{type:Boolean},machine:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:l}){const b=G(null),a=W({dialogVisible:!1,form:{id:null,name:null,port:22,username:null,password:null},btnLoading:!1,rules:{projectId:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE",trigger:["change","blur"]}],envId:[{required:!0,message:"\u8BF7\u9009\u62E9\u73AF\u5883",trigger:["change","blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u522B\u540D",trigger:["change","blur"]}],ip:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E3B\u673Aip",trigger:["change","blur"]}],port:[{required:!0,message:"\u8BF7\u8F93\u5165\u7AEF\u53E3",trigger:["change","blur"]}],username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["change","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["change","blur"]}]}});J(e,async u=>{a.dialogVisible=u.visible,u.machine?a.form=M({},u.machine):a.form={port:22}});const $=async()=>{b.value.validate(u=>{if(u)T.saveMachine.request(a.form).then(()=>{S.success("\u4FDD\u5B58\u6210\u529F"),l("val-change",a.form),a.btnLoading=!0,setTimeout(()=>{a.btnLoading=!1},1e3),y()});else return S.error("\u8BF7\u6B63\u786E\u586B\u5199\u4FE1\u606F"),!1})},y=()=>{l("update:visible",!1),l("cancel"),setTimeout(()=>{b.value.resetFields(),a.form={}},200)};return L(M({},N(a)),{machineForm:b,btnOk:$,cancel:y})}}),Nl="";const ml={class:"dialog-footer"},pl=v("\u786E \u5B9A"),cl=v("\u53D6 \u6D88");function fl(e,l,b,a,$,y){const u=d("el-input"),h=d("el-form-item"),g=d("el-form"),o=d("el-button"),C=d("el-dialog");return D(),_("div",null,[i(C,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":l[7]||(l[7]=s=>e.dialogVisible=s),"show-close":!1,"before-close":e.cancel,width:"35%"},{footer:t(()=>[i("div",ml,[i(o,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"mini"},{default:t(()=>[pl]),_:1},8,["loading","onClick"]),i(o,{onClick:l[6]||(l[6]=s=>e.cancel()),size:"mini"},{default:t(()=>[cl]),_:1})])]),default:t(()=>[i(g,{model:e.form,ref:"machineForm",rules:e.rules,"label-width":"85px",size:"small"},{default:t(()=>[i(h,{prop:"name",label:"\u540D\u79F0:",required:""},{default:t(()=>[i(u,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=s=>e.form.name=s),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u673A\u5668\u522B\u540D","auto-complete":"off"},null,8,["modelValue"])]),_:1}),i(h,{prop:"ip",label:"ip:",required:""},{default:t(()=>[i(u,{modelValue:e.form.ip,"onUpdate:modelValue":l[2]||(l[2]=s=>e.form.ip=s),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u4E3B\u673Aip","auto-complete":"off"},null,8,["modelValue"])]),_:1}),i(h,{prop:"port",label:"port:",required:""},{default:t(()=>[i(u,{type:"number",modelValue:e.form.port,"onUpdate:modelValue":l[3]||(l[3]=s=>e.form.port=s),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3"},null,8,["modelValue"])]),_:1}),i(h,{prop:"username",label:"\u7528\u6237\u540D:",required:""},{default:t(()=>[i(u,{modelValue:e.form.username,"onUpdate:modelValue":l[4]||(l[4]=s=>e.form.username=s),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),i(h,{prop:"password",label:"\u5BC6\u7801:",required:""},{default:t(()=>[i(u,{type:"password","show-password":"",modelValue:e.form.password,"onUpdate:modelValue":l[5]||(l[5]=s=>e.form.password=s),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","before-close"])])}re.render=fl;var de=O({name:"MachineList",components:{ServiceManage:ae,FileManage:se,MachineEdit:re},setup(){const e=De(),l=W({params:{pageNum:1,pageSize:10,host:null,clusterId:null},data:{list:[],total:10},currentId:null,currentData:null,infoDialog:{visible:!1,info:""},serviceDialog:{visible:!1,machineId:0,title:""},fileDialog:{visible:!1,machineId:0,title:""},monitorDialog:{visible:!1,machineId:0},machineEditDialog:{visible:!1,data:null,title:"\u65B0\u589E\u673A\u5668"}});_e(()=>{C()});const b=s=>{!s||(l.currentId=s.id,l.currentData=s)},a=s=>{const{href:V}=e.resolve({path:"/machine/terminal",query:{id:s.id,name:s.name}});window.open(V,"_blank")},$=async s=>{await T.closeCli.request({id:s.id}),S.success("\u5173\u95ED\u6210\u529F"),C()},y=s=>{let V;s?(l.machineEditDialog.data=l.currentData,V="\u7F16\u8F91\u673A\u5668"):(l.machineEditDialog.data={port:22},V="\u6DFB\u52A0\u673A\u5668"),l.machineEditDialog.title=V,l.machineEditDialog.visible=!0},u=async s=>{try{await K.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u673A\u5668\u4FE1\u606F? \u8BE5\u64CD\u4F5C\u5C06\u540C\u65F6\u5220\u9664\u811A\u672C\u53CA\u6587\u4EF6\u914D\u7F6E\u4FE1\u606F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await T.del.request({id:s}),S.success("\u64CD\u4F5C\u6210\u529F"),l.currentId=null,l.currentData=null,C()}catch(V){}},h=s=>{l.serviceDialog.machineId=s.id,l.serviceDialog.visible=!0,l.serviceDialog.title=`${s.name} => ${s.ip}`},g=()=>{l.currentId=null,l.currentData=null,C()},o=s=>{l.fileDialog.visible=!0,l.fileDialog.machineId=s.id,l.fileDialog.title=`${s.name} => ${s.ip}`},C=async()=>{const s=await T.list.request(l.params);l.data=s};return L(M({},N(l)),{choose:b,showTerminal:a,openFormDialog:y,deleteMachine:u,closeCli:$,serviceManager:h,submitSuccess:g,fileManage:o,search:C})}}),Pl=`
.el-dialog__body {
    padding: 2px 2px;
}
`;const hl={class:"toolbar"},bl={style:{float:"left"}},gl=v("\u6DFB\u52A0"),vl=v("\u7F16\u8F91"),yl=v("\u5220\u9664"),Cl=v("\u6587\u4EF6"),Dl={style:{float:"right"}},_l=i("i",null,null,-1),Vl=v("\u811A\u672C"),Il=v("\u7EC8\u7AEF"),Fl=v("\u5173\u95ED\u8FDE\u63A5");function $l(e,l,b,a,$,y){const u=d("el-button"),h=d("el-input"),g=d("el-radio"),o=d("el-table-column"),C=d("el-table"),s=d("el-pagination"),V=d("machine-edit"),w=d("service-manage"),f=d("file-manage"),c=Y("auth");return D(),_("div",null,[i("div",hl,[i("div",bl,[B(i(u,{type:"primary",icon:"el-icon-plus",size:"mini",onClick:l[1]||(l[1]=m=>e.openFormDialog(!1)),plain:""},{default:t(()=>[gl]),_:1},512),[[c,"machine:add"]]),B(i(u,{type:"primary",icon:"el-icon-edit",size:"mini",disabled:e.currentId==null,onClick:l[2]||(l[2]=m=>e.openFormDialog(e.currentData)),plain:""},{default:t(()=>[vl]),_:1},8,["disabled"]),[[c,"machine:update"]]),B(i(u,{disabled:e.currentId==null,onClick:l[3]||(l[3]=m=>e.deleteMachine(e.currentId)),type:"danger",icon:"el-icon-delete",size:"mini"},{default:t(()=>[yl]),_:1},8,["disabled"]),[[c,"machine:del"]]),B(i(u,{type:"success",icon:"el-icon-files",disabled:e.currentId==null,onClick:l[4]||(l[4]=m=>e.fileManage(e.currentData)),size:"mini",plain:""},{default:t(()=>[Cl]),_:1},8,["disabled"]),[[c,"machine:file"]])]),i("div",Dl,[i(h,{placeholder:"host",size:"mini",style:{width:"140px"},modelValue:e.params.host,"onUpdate:modelValue":l[5]||(l[5]=m=>e.params.host=m),onClear:e.search,plain:"",clearable:""},null,8,["modelValue","onClear"]),i(u,{onClick:e.search,type:"success",icon:"el-icon-search",size:"mini"},null,8,["onClick"])])]),i(C,{data:e.data.list,border:"",stripe:"",style:{width:"100%"},onCurrentChange:e.choose},{default:t(()=>[i(o,{label:"\u9009\u62E9",width:"55px"},{default:t(m=>[i(g,{modelValue:e.currentId,"onUpdate:modelValue":l[6]||(l[6]=k=>e.currentId=k),label:m.row.id},{default:t(()=>[_l]),_:2},1032,["modelValue","label"])]),_:1}),i(o,{prop:"name",label:"\u540D\u79F0",width:""}),i(o,{prop:"ip",label:"ip:port","min-width":"160"},{default:t(m=>[v(P(`${m.row.ip}:${m.row.port}`),1)]),_:1}),i(o,{prop:"ip",label:"hasCli","min-width":"60"},{default:t(m=>[v(P(`${m.row.hasCli?"\u662F":"\u5426"}`),1)]),_:1}),i(o,{prop:"username",label:"\u7528\u6237\u540D","min-width":55}),i(o,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"160"},{default:t(m=>[v(P(e.$filters.dateFormat(m.row.createTime)),1)]),_:1}),i(o,{prop:"creator",label:"\u521B\u5EFA\u8005","min-width":"55"}),i(o,{label:"\u64CD\u4F5C","min-width":"260"},{default:t(m=>[i(u,{type:"success",onClick:k=>e.serviceManager(m.row),size:"mini",plain:""},{default:t(()=>[Vl]),_:2},1032,["onClick"]),B(i(u,{type:"primary",onClick:k=>e.showTerminal(m.row),size:"mini",plain:""},{default:t(()=>[Il]),_:2},1032,["onClick"]),[[c,"machine:terminal"]]),i(u,{disabled:!m.row.hasCli,type:"danger",onClick:k=>e.closeCli(m.row),size:"mini",plain:""},{default:t(()=>[Fl]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data","onCurrentChange"]),i(s,{style:{"text-align":"center"},background:"",layout:"prev, pager, next, total, jumper",total:e.data.total,"current-page":e.params.pageNum,"onUpdate:current-page":l[7]||(l[7]=m=>e.params.pageNum=m),"page-size":e.params.pageSize},null,8,["total","current-page","page-size"]),i(V,{title:e.machineEditDialog.title,visible:e.machineEditDialog.visible,"onUpdate:visible":l[8]||(l[8]=m=>e.machineEditDialog.visible=m),machine:e.machineEditDialog.data,"onUpdate:machine":l[9]||(l[9]=m=>e.machineEditDialog.data=m),onValChange:e.submitSuccess},null,8,["title","visible","machine","onValChange"]),i(w,{title:e.serviceDialog.title,visible:e.serviceDialog.visible,"onUpdate:visible":l[10]||(l[10]=m=>e.serviceDialog.visible=m),machineId:e.serviceDialog.machineId,"onUpdate:machineId":l[11]||(l[11]=m=>e.serviceDialog.machineId=m)},null,8,["title","visible","machineId"]),i(f,{title:e.fileDialog.title,visible:e.fileDialog.visible,"onUpdate:visible":l[12]||(l[12]=m=>e.fileDialog.visible=m),machineId:e.fileDialog.machineId,"onUpdate:machineId":l[13]||(l[13]=m=>e.fileDialog.machineId=m)},null,8,["title","visible","machineId"])])}de.render=$l;export default de;