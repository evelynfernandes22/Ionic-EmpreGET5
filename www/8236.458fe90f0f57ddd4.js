"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8236],{8236:(y,d,r)=>{r.r(d),r.d(d,{EditarPrestPageModule:()=>C});var c=r(6895),p=r(433),a=r(4556),l=r(6773),g=r(7582),t=r(8256),u=r(6247),h=r(9426),m=r(529),v=r(1501);const f=[{path:"",component:(()=>{class o{constructor(e,i,n,b,E){this.apiService=e,this.eventService=i,this.http=n,this.navCtrl=b,this.alertController=E,this.prestadores={},this.prestador={id:null,nome:"",endereco:{logradouro:"",numero:null,complemento:"",cep:"",bairro:"",cidade:"",estado:"",pais:""},regiao:"",rg:"",cpf:"",telefone:"",servico:{descricao:"",valor:""},observacao:"",disponibilidade:""}}ngOnInit(){}onClickSalvar(){const e={nome:this.prestador.nome,endereco:{logradouro:this.prestador.endereco.logradouro,numero:this.prestador.endereco.numero,complemento:this.prestador.endereco.complemento,cep:this.prestador.endereco.cep,bairro:this.prestador.endereco.bairro,cidade:this.prestador.endereco.cidade,estado:this.prestador.endereco.estado,pais:this.prestador.endereco.pais},regiao:this.prestador.regiao,rg:this.prestador.rg,cpf:this.prestador.cpf,telefone:this.prestador.telefone,servico:{descricao:this.prestador.servico.descricao,valor:this.prestador.servico.valor},observacao:this.prestador.observacao,disponibilidade:this.prestador.disponibilidade};this.validarFormatoValor()&&this.apiService.putEditarPrestador(e).subscribe(i=>{console.log("Cadastro atualizado!"),this.mostrarAlerta("Cadastro atualizado!"),this.navCtrl.navigateBack("/hello")},i=>{console.error("Erro ao cadastrar: ",i),this.mostrarAlerta("Erro no cadastro. Verifique os dados e tente novamente.")})}mostrarAlerta(e){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Alerta",message:e,buttons:["OK"]})).present()})}onClickCancelar(){console.log(this.isLoggedIn),this.navCtrl.navigateBack("/hello")}validarFormatoValor(){const e=/^\d+(\.\d{1,2})?$/.test(this.prestador.servico.valor);return e||this.mostrarAlerta("O valor do servi\xe7o deve estar no formato ###.##"),e}validarFormatoRG(){const e=/^\d{1,9}$/.test(this.prestador.rg);return e||this.mostrarAlerta("O valor do RG deve ter at\xe9 9 digitos"),e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.s),t.Y36(h.P),t.Y36(m.eN),t.Y36(a.SH),t.Y36(a.Br))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-editar-prest"]],decls:17,vars:1,consts:[["slot","start"],[1,"header"],["src","../../../../assets/images/logo_empreget.png"],["scroll-y","true"],[1,"ion-justify-content-center"],["shape","round","fill","outline",1,"custom-button",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar"),t._UZ(2,"ion-menu-button",0),t.TgZ(3,"div",1),t._UZ(4,"img",2),t.TgZ(5,"ion-title"),t._uU(6),t.qZA()()()(),t.TgZ(7,"ion-content",3),t._UZ(8,"app-editar-prestador"),t.TgZ(9,"ion-grid")(10,"ion-row",4)(11,"ion-col")(12,"ion-button",5),t.NdJ("click",function(){return i.onClickSalvar()}),t._uU(13,"Salvar"),t.qZA()(),t.TgZ(14,"ion-col")(15,"ion-button",5),t.NdJ("click",function(){return i.onClickCancelar()}),t._uU(16,"Cancelar"),t.qZA()()()()()),2&e&&(t.xp6(6),t.Oqu(i.tipoUser))},dependencies:[a.YG,a.wI,a.W2,a.jY,a.Gu,a.fG,a.Nd,a.wd,a.sr,v.f],styles:[".header[_ngcontent-%COMP%]{margin:10px 0;display:flex;align-items:flex-end;text-align:right;max-width:50%}.imgPerfil[_ngcontent-%COMP%]{width:100%}.custom-button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;height:35px;color:rgba(116,114,114,.8);font-size:medium;--background: #FFFF;--background-hover: #9ce0be;--border-color: #ccc;--border-style: solid;--border-width: 1px;--width: 100%;text-transform:none!important}.custom-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-child{margin-right:8px;color:#776f6f;font-size:inherit}.texto[_ngcontent-%COMP%]{color:#000}.texto_titulo[_ngcontent-%COMP%]{color:#000;font-weight:700;padding:0,10,10}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(f),l.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,p.u5,a.Pc,P]}),o})()}}]);