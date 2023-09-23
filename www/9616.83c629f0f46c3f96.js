"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9616],{9616:(x,d,a)=>{a.r(d),a.d(d,{GerenciarFotoPageModule:()=>A});var u=a(6895),m=a(433),i=a(4556),g=a(6773),t=a(8256),p=a(6247),h=a(9426),f=a(7582),F=a(529);function v(n,s){if(1&n&&(t.TgZ(0,"ul")(1,"ion-avatar",5),t._UZ(2,"img",6),t.qZA()()),2&n){const e=s.$implicit,o=t.oxw();t.xp6(2),t.Q6J("src",e.imgUrl?e.imgUrl:o.defaultPhotoUrl,t.LSH)}}let P=(()=>{class n{constructor(e,o,r,l){this.apiService=e,this.eventService=o,this.http=r,this.alertController=l,this.defaultPhotoUrl="assets/images/default-photo.jpg",this.fotoAtualizadaSubscription=this.eventService.fotoAtualizada$.subscribe(()=>{this.readPrestador()})}ngOnInit(){this.prestadorId=this.apiService.readId(),this.readPrestador()}ngOnDestroy(){this.fotoAtualizadaSubscription.unsubscribe()}onChange(e){this.selectedFiles=e.srcElement.files}onUpload(){if(this.selectedFiles){const e=new FormData;e.append("arquivo",this.selectedFiles[0],this.selectedFiles[0].name),this.apiService.putFotos(e).subscribe(o=>{this.eventService.emitFotoAtualizada(),this.mostrarAlerta("Sua foto foi atualizada!")},o=>{console.error("Erro ao cadastrar: ",o),this.mostrarAlerta("Erro! Verifique os dados e tente novamente!")})}else this.mostrarAlerta("Por favor, selecione uma foto para atualizar.")}onExcluirFoto(){this.apiService.delFotos().subscribe(e=>{this.eventService.emitFotoAtualizada(),this.mostrarAlerta("Sua foto foi exclu\xedda!")},e=>{console.error("Erro ao cadastrar: ",e),this.mostrarAlerta("Erro! Verifique os dados e tente novamente.")})}mostrarAlerta(e){return(0,f.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"",message:e,buttons:["OK"]})).present()})}readPrestador(){this.apiService.getDataPerfisPrestadores().subscribe(e=>{this.prestadores=e;for(const o of this.prestadores.conteudo)this.getImagemUrl(o.id)},e=>{console.error("Erro ao obter dados dos prestadores:",e)})}getImagemUrl(e){this.apiService.getFotoByIdListaPrestadores(e).subscribe(o=>{if(console.log("Nome do arquivo da foto:",o.nomeArquivo),o&&404===o.status){const r=this.defaultPhotoUrl,l=this.prestadores.conteudo.find(c=>c.id===e);l&&(l.imgUrl=r)}else{this.foto=o;const r=this.foto?`assets/images/${o.nomeArquivo}`:this.defaultPhotoUrl;console.log("URL da imagem completa:",r);const l=this.prestadores.conteudo.find(c=>c.id===e);l&&(l.imgUrl=r)}},o=>{console.error("Erro ao obter dados da foto",o)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.s),t.Y36(h.P),t.Y36(F.eN),t.Y36(i.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-atualizar-foto"]],decls:7,vars:3,consts:[[4,"ngFor","ngForOf"],["type","file","id","customFile",3,"change"],[2,"margin-top","10px"],["shape","round",3,"disabled","click"],["shape","round",3,"click"],["slot","end"],["alt","Silhouette of a person's head",3,"src"]],template:function(e,o){1&e&&(t.YNc(0,v,3,1,"ul",0),t.TgZ(1,"ion-input",1),t.NdJ("change",function(l){return o.onChange(l)}),t.qZA(),t._UZ(2,"div",2),t.TgZ(3,"ion-button",3),t.NdJ("click",function(){return o.onUpload()}),t._uU(4,"Atualize minha foto"),t.qZA(),t.TgZ(5,"ion-button",4),t.NdJ("click",function(){return o.onExcluirFoto()}),t._uU(6),t.qZA()),2&e&&(t.Q6J("ngForOf",null==o.prestadores?null:o.prestadores.conteudo),t.xp6(3),t.Q6J("disabled",!o.selectedFiles),t.xp6(3),t.hij("Delete minha foto ",o.prestadorId,""))},dependencies:[u.sg,i.BJ,i.YG,i.pK,i.j9],styles:["ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-grid[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}ion-button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;height:25px;width:100%;font-size:x-small}.header[_ngcontent-%COMP%]{display:flex;align-items:flex-end;text-align:right;max-width:50%}"]}),n})();const b=[{path:"",component:(()=>{class n{constructor(e,o,r,l){this.apiService=e,this.navCtrl=o,this.eventService=r,this.alertController=l}ngOnInit(){this.tipoUser=this.apiService.getUserRole()}ngOnChanges(e){}onChange(e){console.log(e),this.selectedFiles=e.srcElement.files,console.log(this.selectedFiles)}onClickVoltar(){this.navCtrl.navigateBack("/hello")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.s),t.Y36(i.SH),t.Y36(h.P),t.Y36(i.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-gerenciar-foto"]],features:[t.TTD],decls:20,vars:1,consts:[[1,"header"],["src","../../../../assets/images/logo_empreget.png"],["slot","start"],["color","light"],[2,"padding","20px 10px"],["shape","round","fill","outline",1,"custom-button",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0),t._UZ(3,"img",1),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()(),t._UZ(6,"ion-menu-button",2),t.qZA()(),t._UZ(7,"br"),t.TgZ(8,"ion-card",3)(9,"ion-card-header")(10,"ion-card-subtitle")(11,"h3"),t._uU(12,"Atualize sua Foto:"),t.qZA()()(),t.TgZ(13,"ion-card-content"),t._UZ(14,"app-atualizar-foto"),t.qZA()(),t.TgZ(15,"ion-grid")(16,"ion-row")(17,"ion-col",4)(18,"ion-button",5),t.NdJ("click",function(){return o.onClickVoltar()}),t._uU(19," Voltar "),t.qZA()()()()),2&e&&(t.xp6(5),t.Oqu(o.tipoUser))},dependencies:[i.YG,i.PM,i.FN,i.Zi,i.tO,i.wI,i.jY,i.Gu,i.fG,i.Nd,i.wd,i.sr,P],styles:["ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-grid[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}ion-button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;height:25px;width:100%;font-size:x-small}.header[_ngcontent-%COMP%]{margin:10px 0;display:flex;align-items:flex-end;text-align:right;max-width:50%}.custom-button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;height:35px;color:rgba(116,114,114,.8);font-size:medium;--background: #FFFF;--background-hover: #9ce0be;--border-color: #ccc;--border-style: solid;--border-width: 1px;--width: 100%;text-transform:none!important}.custom-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-child{margin-right:8px;color:#776f6f;font-size:inherit}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(b),g.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,m.u5,i.Pc,C]}),n})()}}]);