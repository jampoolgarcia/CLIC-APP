"use strict";(self.webpackChunkclic_app=self.webpackChunkclic_app||[]).push([[313],{4313:(ae,S,m)=>{m.r(S),m.d(S,{RedesModule:()=>se});var c=m(6895),s=m(433),v=m(818),u=m(5861),e=m(8256),_=m(8613),Z=m(1135),C=m(6671);let p=(()=>{class o{static getdate(t){return`${t.getFullYear()}-${("0"+(t.getMonth()+1)).slice(-2)}-${("0"+t.getDate()).slice(-2)}`}static hoursMinutesNow(){const t=new Date;let n=t.getHours()+1,i=t.getMinutes();return`${n<10?0:""}${n}:${i<10?0:""}${i}`}}return o.dateNow=()=>o.getdate(new Date),o.hoursNow=()=>(new Date).getHours(),o})(),A=(()=>{class o{constructor(t){this._user=t,this.TABLE="cite",this.list=[],this.$list=new Z.X(this.list),this.supabase=C.u.getInstance(),this.handleRealtimeUpdates(),this.getAllForUserAndDate()}add(t){var n=this;return(0,u.Z)(function*(){return yield n.supabase.from(n.TABLE).insert({...t}).single()})()}getAll(){var t=this;return(0,u.Z)(function*(){try{const{error:n,data:i,status:a}=yield t.supabase.from("cites").select("*");if(n&&406!==a)throw n;i&&t.$list.next(i)}catch(n){n instanceof Error&&alert(n.message)}})()}getAllForUserAndDate(t=p.dateNow()){var n=this;return(0,u.Z)(function*(){try{const{id:i}=n._user.user||"",{error:a,data:l,status:g}=yield n.supabase.from("cites").select("*").match({user:i,date:t});if(a&&406!==g)throw a;l&&n.$list.next(l)}catch(i){i instanceof Error&&alert(i.message)}})()}getAllForRedes(t){return(0,u.Z)(function*(){return new Promise((n,i)=>{n("test")})})()}handleRealtimeUpdates(){this.supabase.channel(`RealTime ${this.TABLE}`).on("postgres_changes",{event:"*",schema:"public",table:this.TABLE},t=>{this.realtimeList(t)}).subscribe()}realtimeList(t){var n=this;return(0,u.Z)(function*(){yield n.getAllForUserAndDate(),console.log("payload: ",t)})()}signOut(){return this.supabase.auth.signOut()}get List(){return this.$list.asObservable()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(_.K))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();class T{constructor(){this.filter=new s.NI("",{nonNullable:!0}),this.page=1,this.pageSize=5}}var d=m(3218);let U=(()=>{class o{transform(t,n,i){let a=[];return 0===n.length||0===i.length||null===t?t:(a=t.filter(l=>this.coincidence(l,i,n)),a)}coincidence(t,n,i){let a=!1;return n.every(l=>(a=t[l].toLowerCase().includes(i.toLowerCase()),!a)),a}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"filter",type:o,pure:!0}),o})();function N(o,r){if(1&o&&(e.TgZ(0,"tr")(1,"th",18),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA()()),2&o){const t=r.$implicit,n=r.index,i=e.oxw(2);e.xp6(2),e.Oqu(5*(i.page-1)+(n+1)),e.xp6(2),e.hij(" ",t.client,""),e.xp6(2),e.Oqu(t.hour),e.xp6(2),e.Oqu(t.phone),e.xp6(2),e.Oqu(e.xi3(11,8,t.date,"shortDate")),e.xp6(3),e.Oqu(t.email),e.xp6(2),e.Oqu(t.service),e.xp6(2),e.Oqu(t.observation)}}const O=function(){return["firstName","lastName"]};function J(o,r){if(1&o&&(e.ynx(0),e.TgZ(1,"form")(2,"div",9)(3,"label",10),e._uU(4,"Buscar"),e.qZA(),e.TgZ(5,"div",11),e._UZ(6,"input",12,13),e.qZA()()(),e.TgZ(8,"div",14)(9,"table",15)(10,"thead")(11,"tr")(12,"th",16),e._uU(13,"#"),e.qZA(),e.TgZ(14,"th",16),e._uU(15,"Cliente"),e.qZA(),e.TgZ(16,"th",16),e._uU(17,"Hora"),e.qZA(),e.TgZ(18,"th",16),e._uU(19,"Telefono"),e.qZA(),e.TgZ(20,"th",16),e._uU(21,"Fecha"),e.qZA(),e.TgZ(22,"th",16),e._uU(23,"Correo"),e.qZA(),e.TgZ(24,"th",16),e._uU(25,"Servicio"),e.qZA(),e.TgZ(26,"th",16),e._uU(27,"Observacion"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,N,18,11,"tr",17),e.ALo(30,"slice"),e.ALo(31,"filter"),e.ALo(32,"async"),e.qZA()()(),e.BQk()),2&o){const t=e.MAs(7),n=e.oxw();e.xp6(6),e.Q6J("formControl",n.filter),e.xp6(23),e.Q6J("ngForOf",e.Dn7(30,2,e.Dn7(31,6,e.lcZ(32,10,n.cites$),t.value,e.DdM(12,O)),(n.page-1)*n.pageSize,n.page*n.pageSize))}}function I(o,r){1&o&&(e.TgZ(0,"h1",19),e._uU(1,"No se encuentran registradas citas el dia de hoy..."),e.qZA())}function $(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",20)(1,"ngb-pagination",21),e.NdJ("pageChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.page=i)}),e.ALo(2,"async"),e.qZA()()}if(2&o){const t=e.oxw();let n;e.xp6(1),e.Q6J("page",t.page)("pageSize",t.pageSize)("collectionSize",(null==(n=e.lcZ(2,3,t.cites$))?null:n.length)||0)}}let z=(()=>{class o extends T{constructor(t){super(),this._service=t}ngOnInit(){this.cites$=this._service.List}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(A))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-cites"]],features:[e.qOj],decls:13,vars:7,consts:[[1,"row","mx-auto","d-flex","justify-content-center","w-100"],[1,"col-sm-12"],[1,"card","shadow","mb-4"],[1,"card-header","py-3"],[1,"m-0","font-weight-bold","card-title"],[1,"card-body"],[4,"ngIf","ngIfElse"],["NoData",""],["class","card-footer",4,"ngIf"],[1,"mb-3","row"],["for","table-filtering-search",1,"col-xs-3","col-sm-auto","col-form-label"],[1,"col-xs-3","col-sm-auto"],["id","table-filtering-search","type","text",1,"form-control",3,"formControl"],["search",""],[1,"row","table-responsive"],[1,"table","table-borderless"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"card-text","text-white"],[1,"card-footer"],[1,"d-flex","justify-content-end",3,"page","pageSize","collectionSize","pageChange"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Lista de citas"),e.qZA()(),e.TgZ(6,"div",5),e.YNc(7,J,33,13,"ng-container",6),e.ALo(8,"async"),e.YNc(9,I,2,0,"ng-template",null,7,e.W1O),e.qZA(),e.YNc(11,$,3,5,"div",8),e.ALo(12,"async"),e.qZA()()()),2&t){const i=e.MAs(10);e.xp6(7),e.Q6J("ngIf",e.lcZ(8,3,n.cites$))("ngIfElse",i),e.xp6(4),e.Q6J("ngIf",e.lcZ(12,5,n.cites$))}},dependencies:[c.sg,c.O5,s._Y,s.Fj,s.JJ,s.JL,s.oH,d.N9,c.Ov,c.OU,c.uU,U],styles:[".card-body[_ngcontent-%COMP%]{min-height:346px}"]}),o})();var x=m(4849);const Y=o=>{const r=o.get("hour"),{date:t}=o.value,n={todayHours:!0};if(r&&t){if(t===p.dateNow()){const i=r?.value.substring(0,2);if(Number(i)<=p.hoursNow())return void r?.setErrors(n)}r?.setErrors(null)}else r?.setErrors(n)};var y=m(6504);let q=(()=>{class o{constructor(t){this._user=t,this.list=[],this.$clientList=new Z.X(this.list),this.TABLE="client",this.supabase=C.u.getInstance(),this.handleRealtimeUpdates(),this.getAllForUser()}getAll(){var t=this;return(0,u.Z)(function*(){try{let{data:n,error:i,status:a}=yield t.supabase.from(t.TABLE).select("*");if(i&&406!==a)throw i;n&&t.$clientList.next(n)}catch(n){n instanceof Error&&alert(n.message)}})()}getAllForUser(){var t=this;return(0,u.Z)(function*(){try{const{id:n}=t._user.user||"";let{data:i,error:a,status:l}=yield t.supabase.from(t.TABLE).select("*").eq("user_id",n);if(a&&406!==l)throw a;i&&t.$clientList.next(i)}catch(n){n instanceof Error&&alert(n.message)}})()}add(t){var n=this;return(0,u.Z)(function*(){return yield n.supabase.from(n.TABLE).insert({...t}).single()})()}update(t){return null}delete(t){return null}handleRealtimeUpdates(){this.supabase.channel(`RealTime ${this.TABLE}`).on("postgres_changes",{event:"*",schema:"public",table:this.TABLE},t=>{this.realtimeList(t)}).subscribe()}realtimeList(t){switch(t.eventType){case y.dY.INSERT:console.log("insert logic");const{user_id:n}=this._user.referenData;t.new.user_id===n&&this.$clientList.getValue().push(t.new);break;case y.dY.UPDATE:console.log("update logic");break;case y.dY.DELETE:console.log("DELETE logic");const i=this.$clientList.getValue().filter(a=>a.id!=t.old.id);this.$clientList.next(i)}console.log("payload: ",t)}get List(){return this.$clientList.asObservable()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(_.K))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),E=(()=>{class o{constructor(){this.list=[],this.$list=new Z.X(this.list),this.TABLE="cite-service",this.supabase=C.u.getInstance(),this.getAll()}getAll(){var t=this;return(0,u.Z)(function*(){try{let{data:n,error:i,status:a}=yield t.supabase.from(t.TABLE).select("*");if(i&&406!==a)throw i;n&&t.$list.next(n)}catch(n){n instanceof Error&&alert(n.message)}})()}get List(){return this.$list.asObservable()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=m(9154);function M(o,r){if(1&o&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij("- ",t.client.firstName,"")}}function H(o,r){if(1&o&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}const h=function(o,r){return{"is-invalid":o,"is-valid":r}};let G=(()=>{class o extends x.l{constructor(t,n,i,a,l,g,F){super(),this._amodal=t,this.fb=n,this._cites=i,this._modalService=a,this._client=l,this._citeServices=g,this._toast=F}ngOnInit(){this.client$=this._client.List,this.services$=this._citeServices.List,this.buildingForm()}buildingForm(){this.form=this.fb.group({dateGroup:this.fb.group({date:[this.date,s.kI.required],hour:[p.hoursMinutesNow(),s.kI.required]},{validator:Y}),service_id:["",s.kI.required],observation:""})}onSubmit(){var t=this;return(0,u.Z)(function*(){t.save()})()}save(){var t=this;return(0,u.Z)(function*(){const n=t.getFormValues();console.log(n);try{const{error:i}=yield t._cites.add(n);if(i)return t._toast.show(`Obss, Ha acorrido un error al momento de guardar. Error: ${i.message}`,"danger"),console.log(`Error in ${i.message}`);t._toast.show("Se ha guardado exitosamente.","success")}catch{t._toast.show("Obss, Ha acorrido un error al momento de guardar.","danger")}finally{t.resetForm(),t._amodal.close()}})()}resetForm(){this.form.reset(),this.getControl("date")?.setValue(this.date),this.getControl("hour")?.setValue(p.hoursMinutesNow)}getFormValues(){const{dateGroup:{date:t,hour:n},observation:i,service_id:a}=this.form.value,{id:l,user_id:g,room_id:F}=this.client;return{date:t,hour:n,observation:i,service_id:a,client_id:l,user_id:g,room_id:F}}get date(){return p.dateNow()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.Kz),e.Y36(s.qu),e.Y36(A),e.Y36(d.FF),e.Y36(q),e.Y36(E),e.Y36(f.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-form-cites"]],inputs:{client:"client"},features:[e.qOj],decls:36,vars:23,consts:[[1,"modal-header","py-3"],[1,"modal-title","m-0","font-weight-bold"],[4,"ngIf"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"row","g-3",3,"formGroup"],["formGroupName","dateGroup"],[1,"col-md-12"],["for","date",1,"form-label"],["type","date","placeholder","Fecha","id","date","formControlName","date","required","",1,"form-control",3,"min","ngClass"],["for","hour",1,"form-label"],["type","time","id","hour","placeholder","Hora","formControlName","hour","aria-describedby","hour",1,"form-control",3,"ngClass"],["for","confirmation",1,"form-label"],[1,"input-group","mb-3"],["id","service","formControlName","service_id","aria-describedby","service","required","",1,"form-select",3,"ngClass"],["selected","","disabled","","value",""],[3,"value",4,"ngFor","ngForOf"],["for","observation",1,"form-label"],["placeholder","Observacion","formControlName","observation","id","observation","rows","2",1,"form-control",3,"ngClass"],[1,"modal-footer"],[1,"col-12","text-end"],["aria-label","Close","type","button",1,"btn","btn-secondary","mx-2",3,"click"],["type","submit",1,"btn","btn-dark",3,"disabled","click"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"REGISTRA CITA "),e.YNc(3,M,2,1,"strong",2),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return n._amodal.dismiss("Cross click")}),e.qZA()(),e.TgZ(5,"div",4)(6,"form",5),e.ynx(7,6),e.TgZ(8,"div",7)(9,"label",8),e._uU(10,"Fecha"),e.qZA(),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",7)(13,"label",10),e._uU(14,"Hora"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.BQk(),e.TgZ(16,"div",7)(17,"label",12),e._uU(18,"Servicios"),e.qZA(),e.TgZ(19,"div",13)(20,"select",14)(21,"option",15),e._uU(22,"Seleccionar..."),e.qZA(),e.YNc(23,H,2,2,"option",16),e.ALo(24,"async"),e.qZA()()(),e.TgZ(25,"div",7)(26,"label",17),e._uU(27,"Observacion"),e.qZA(),e.TgZ(28,"textarea",18),e._uU(29,"       "),e.qZA()()()(),e.TgZ(30,"div",19)(31,"div",20)(32,"button",21),e.NdJ("click",function(){return n._amodal.dismiss()}),e._uU(33,"Volver"),e.qZA(),e.TgZ(34,"button",22),e.NdJ("click",function(){return n.onSubmit()}),e._uU(35,"Guardar"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",n.client),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(5),e.Q6J("min",n.date)("ngClass",e.WLB(11,h,n.isInvalid("dateGroup.date"),n.isValid("dateGroup.date"))),e.xp6(4),e.Q6J("ngClass",e.WLB(14,h,n.isInvalid("dateGroup.hour"),n.isValid("dateGroup.hour"))),e.xp6(5),e.Q6J("ngClass",e.WLB(17,h,n.isInvalid("service_id"),n.isValid("service_id"))),e.xp6(3),e.Q6J("ngForOf",e.lcZ(24,9,n.services$)),e.xp6(5),e.Q6J("ngClass",e.WLB(20,h,n.isInvalid("observation"),n.isValid("observation"))),e.xp6(6),e.Q6J("disabled",n.form.invalid))},dependencies:[c.mk,c.sg,c.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.Q7,s.sg,s.u,s.x0,c.Ov],encapsulation:2}),o})();const b=function(o,r){return{"is-invalid":o,"is-valid":r}};function Q(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"h4",4),e._uU(2,"Nuevo cliente"),e.qZA(),e.TgZ(3,"button",5),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.dismiss())}),e.qZA()(),e.TgZ(4,"div",6)(5,"form",7)(6,"div",8)(7,"label",9),e._uU(8,"Nombre"),e.qZA(),e._UZ(9,"input",10),e.qZA(),e.TgZ(10,"div",8)(11,"label",11),e._uU(12,"Apellido"),e.qZA(),e._UZ(13,"input",12),e.qZA(),e.TgZ(14,"div",8)(15,"label",13),e._uU(16,"Correo"),e.qZA(),e._UZ(17,"input",14),e.qZA(),e.TgZ(18,"div",8)(19,"label",15),e._uU(20,"Telefono"),e.qZA(),e._UZ(21,"input",16),e.qZA()()(),e.TgZ(22,"div",17)(23,"div",18)(24,"button",19),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.dismiss())}),e._uU(25,"Volver"),e.qZA(),e.TgZ(26,"button",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit())}),e._uU(27,"Guardar"),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(5),e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("ngClass",e.WLB(6,b,t.isInvalid("firstName"),t.isValid("firstName"))),e.xp6(4),e.Q6J("ngClass",e.WLB(9,b,t.isInvalid("lastName"),t.isValid("lastName"))),e.xp6(4),e.Q6J("ngClass",e.WLB(12,b,t.isInvalid("email"),t.isValid("email"))),e.xp6(4),e.Q6J("ngClass",e.WLB(15,b,t.isInvalid("phone"),t.isValid("phone"))),e.xp6(5),e.Q6J("disabled",t.form.invalid)}}let B=(()=>{class o extends x.l{constructor(t,n,i,a,l){super(),this.fb=t,this._modal=n,this._user=i,this._client=a,this._toast=l,this.seleted=null}ngOnInit(){this.buildingForm()}open(t){this._modal.open(t)}onSubmit(){null===this.seleted?this.save():this.update()}buildingForm(){this.form=this.fb.group({firstName:["",[s.kI.required,s.kI.minLength(2),s.kI.maxLength(30),s.kI.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],lastName:["",[s.kI.required,s.kI.minLength(2),s.kI.maxLength(30),s.kI.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],email:["",[s.kI.required,s.kI.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],phone:["",[s.kI.required,s.kI.minLength(3),s.kI.pattern(/^[0-9]{7,11}$/)]]})}getFormValues(){const t=this.form.value,{user_id:n,room_id:i}=this._user.referenData;return{...t,room_id:i,user_id:n}}update(){var t=this;return(0,u.Z)(function*(){t.seleted=t.getFormValues();try{yield t._client.update(t.seleted),t.seleted=null,t.form.reset(),t._toast.show("Se ha actualizado exitosamente.","success")}catch(n){console.log(n),t._toast.show("Obss, Ha acorrido un error al momento de actualizado.","danger")}})()}save(){var t=this;return(0,u.Z)(function*(){const n=t.getFormValues();try{const{error:i}=yield t._client.add(n);if(i)return t._toast.show(`Obss, Ha acorrido un error al momento de guardar. Error: ${i.message}`,"danger"),console.log(`Error in ${i.message}`);t._toast.show("Se ha guardado exitosamente.","success")}catch(i){i instanceof Error&&(console.log(i),t._toast.show(`Obss, Ha acorrido un error al momento de guardar. Error: ${i.message}`,"danger"))}finally{t.form.reset(),t._modal.dismissAll()}})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.qu),e.Y36(d.FF),e.Y36(_.K),e.Y36(q),e.Y36(f.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-form-client"]],features:[e.qOj],decls:6,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"],[1,"fa-solid","fa-user-plus","me-1"],["content",""],[1,"modal-header"],[1,"card-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"row","g-3",3,"formGroup"],[1,"form-group"],["for","firstName",1,"form-label"],["type","text","formControlName","firstName","placeholder","Nombre","id","firstName","required","",1,"form-control",3,"ngClass"],["for","validationServer02",1,"form-label"],["type","text","formControlName","lastName","placeholder","Apellido","id","lastName","required","",1,"form-control",3,"ngClass"],["for","email",1,"form-label"],["type","email","id","email","placeholder","Correo","formControlName","email","aria-describedby","email","required","",1,"form-control",3,"ngClass"],["for","phone",1,"form-label"],["type","text","name","Telefono","placeholder","Telefono","id","phone","aria-describedby","phone","formControlName","phone","required","",1,"form-control",3,"ngClass"],[1,"modal-footer"],[1,"col-12","text-end"],["aria-label","Close","type","button",1,"btn","btn-secondary","mx-2",3,"click"],["type","button",1,"btn","btn-dark",3,"disabled","click"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){e.CHM(i);const l=e.MAs(5);return e.KtG(n.open(l))}),e._UZ(1,"i",1),e.TgZ(2,"span"),e._uU(3,"Agregar"),e.qZA()(),e.YNc(4,Q,28,18,"ng-template",null,2,e.W1O)}},dependencies:[c.mk,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u],encapsulation:2}),o})();function j(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"th",15),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"button",16),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.openFormCite(a))}),e._UZ(11,"i",17),e.qZA()()()}if(2&o){const t=r.$implicit,n=r.index,i=e.oxw();e.xp6(2),e.Oqu(5*(i.page-1)+(n+1)),e.xp6(2),e.AsE(" ",t.firstName," ",t.lastName," "),e.xp6(2),e.Oqu(t.phone),e.xp6(2),e.Oqu(t.email)}}const k=function(){return["firstName","lastName"]};let D=(()=>{class o extends T{constructor(t,n){super(),this._client=t,this._modal=n,this.$clients=t.List}openFormCite(t){this._modal.open(G).componentInstance.client=t}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(q),e.Y36(d.FF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-client"]],features:[e.qOj],decls:36,vars:23,consts:[[1,"card","shadow","mb-4"],[1,"card-header","py-3","d-flex","justify-content-between"],[1,"m-0","font-weight-bold","d-inline"],[1,"card-body"],[1,"mb-3","row"],["for","table-filtering-search",1,"col-xs-3","col-sm-auto","col-form-label"],[1,"col-xs-3","col-sm-auto"],["id","table-filtering-search","type","text",1,"form-control",3,"formControl"],["search",""],[1,"table-responsive-xl"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[1,"card-footer"],[1,"d-flex","justify-content-end",3,"page","pageSize","collectionSize","pageChange"],["scope","row"],["type","button",1,"btn","btn-dark",3,"click"],[1,"fa-solid","fa-file-pen"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3,"Lista de Clientes"),e.qZA(),e._UZ(4,"app-form-client"),e.qZA(),e.TgZ(5,"div",3)(6,"form")(7,"div",4)(8,"label",5),e._uU(9,"Buscar"),e.qZA(),e.TgZ(10,"div",6),e._UZ(11,"input",7,8),e.qZA()()(),e.TgZ(13,"div",9)(14,"table",10)(15,"thead")(16,"tr")(17,"th",11),e._uU(18,"#"),e.qZA(),e.TgZ(19,"th",11),e._uU(20,"Nombre y Apellido"),e.qZA(),e.TgZ(21,"th",11),e._uU(22,"Telefono"),e.qZA(),e.TgZ(23,"th",11),e._uU(24,"Correo"),e.qZA(),e.TgZ(25,"th",11),e._uU(26,"Acciones"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,j,12,5,"tr",12),e.ALo(29,"slice"),e.ALo(30,"filter"),e.ALo(31,"async"),e.qZA()()()(),e.TgZ(32,"div",13)(33,"ngb-pagination",14),e.NdJ("pageChange",function(a){return n.page=a}),e.ALo(34,"filter"),e.ALo(35,"async"),e.qZA()()()),2&t){const i=e.MAs(12);e.xp6(11),e.Q6J("formControl",n.filter),e.xp6(17),e.Q6J("ngForOf",e.Dn7(29,5,e.Dn7(30,9,e.lcZ(31,13,n.$clients),i.value,e.DdM(21,k)),(n.page-1)*n.pageSize,n.page*n.pageSize)),e.xp6(5),e.Q6J("page",n.page)("pageSize",n.pageSize)("collectionSize",e.Dn7(34,15,e.lcZ(35,19,n.$clients),i.value,e.DdM(22,k)).length||0)}},dependencies:[c.sg,s._Y,s.Fj,s.JJ,s.JL,s.oH,d.N9,B,c.Ov,c.OU,U],styles:[".card-body[_ngcontent-%COMP%]{min-height:414.8px!important}"]}),o})();const V=[{path:"cites",component:(()=>{class o{constructor(t,n,i){this._user=t,this._service=n,this._router=i}ngOnInit(){this.$user=this._user.currentUser}singOut(){var t=this;return(0,u.Z)(function*(){yield t._service.signOut().then(()=>t._router.navigate(["/"])).catch(n=>console.log(n.message))})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.K),e.Y36(A),e.Y36(v.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cites"]],decls:18,vars:0,consts:[[1,"navbar","navbar-expand-lg","mb-4","bg-body-tertiary"],[1,"container-fluid"],["href","#",1,"navbar-brand","d-flex","align-items-center"],["src","assets/img/logo-bg.png","alt","Logo","width","50","height","50",1,"d-inline-block","align-text-top"],[1,"d-none","d-sm-block","text-white","align-middle","ml-4","sm-hide"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","Cerrar Sesion",1,"nav-link",3,"click"],[1,"fa-solid","fa-right-from-bracket"],[1,"ms-2"],[1,"container"]],template:function(t,n){1&t&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.TgZ(4,"Strong",4),e._uU(5,"Perfil de Redes"),e.qZA()(),e.TgZ(6,"button",5),e._UZ(7,"span",6),e.qZA(),e.TgZ(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),e.NdJ("click",function(){return n.singOut()}),e._UZ(12,"i",11),e.TgZ(13,"span",12),e._uU(14,"Cerrar Sesion"),e.qZA()()()()()()(),e.TgZ(15,"section",13),e._UZ(16,"app-list-client")(17,"app-list-cites"),e.qZA())},dependencies:[z,D],encapsulation:2}),o})()},{path:"",pathMatch:"full",redirectTo:"cites"}];let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v.Bz.forChild(V),v.Bz]}),o})();var L=m(9751);let R=(()=>{class o{constructor(){}add(t){return null}getAll(){return new L.y}update(t){return null}delete(t){return null}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function W(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"th",16),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"button",17)(7,"i",18),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.edit(a))}),e.qZA()(),e.TgZ(8,"button",19),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.delete(a.id))}),e._UZ(9,"i",20),e.qZA()()()}if(2&o){const t=r.$implicit,n=r.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.name)}}const X=function(o,r){return{"is-invalid":o,"is-valid":r}};function P(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"h3",4),e._uU(2,"Confirmacion"),e.qZA(),e.TgZ(3,"button",5),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.dismiss())}),e.qZA()(),e.TgZ(4,"div",6)(5,"div",7),e._UZ(6,"input",8),e.TgZ(7,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit())}),e._UZ(8,"i",1),e.qZA()(),e.TgZ(9,"table",10)(10,"thead")(11,"tr")(12,"th",11),e._uU(13,"#"),e.qZA(),e.TgZ(14,"th",11),e._uU(15,"Nombre"),e.qZA(),e.TgZ(16,"th",11),e._UZ(17,"i",12),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,W,10,2,"tr",13),e.ALo(20,"slice"),e.ALo(21,"async"),e.qZA()()(),e.TgZ(22,"div",14)(23,"ngb-pagination",15),e.NdJ("pageChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.page=i)}),e.ALo(24,"async"),e.qZA()()}if(2&o){const t=e.oxw();let n;e.xp6(6),e.Q6J("formControl",t.name)("ngClass",e.WLB(15,X,t.isInvalid(),t.isValid())),e.xp6(1),e.Q6J("disabled",t.name.invalid),e.xp6(12),e.Q6J("ngForOf",e.Dn7(20,7,e.lcZ(21,11,t.confirmations$),(t.page-1)*t.pageSize,t.page*t.pageSize)),e.xp6(4),e.Q6J("page",t.page)("pageSize",t.pageSize)("collectionSize",(null==(n=e.lcZ(24,13,t.confirmations$))?null:n.length)||0)}}let ee=(()=>{class o extends T{constructor(t,n,i,a){super(),this.activeModal=t,this._toastService=n,this._modalService=i,this._service=a,this.seleted=null,this.buildingForm()}ngOnInit(){this.confirmations$=this._service.getAll()}open(t){this._modalService.open(t)}buildingForm(){this.name=new s.NI("",[s.kI.required,s.kI.minLength(2),s.kI.maxLength(30),s.kI.pattern(/^[A-Za-z\s\xF1\xD1]+$/)])}onSubmit(){null===this.seleted?this.save():this.update()}delete(t){var n=this;return(0,u.Z)(function*(){try{yield n._service.delete(t),n._toastService.show("Se ha eliminado exitosamente.","success")}catch(i){n._toastService.show("Obss, Ha acorrido un error al momento de guardar.","danger"),console.log(i)}})()}edit(t){this.seleted=t,this.name.setValue(t.name)}update(){var t=this;return(0,u.Z)(function*(){t.seleted.name=t.name.value;try{yield t._service.update(t.seleted),t.seleted=null,t.name.reset(),t._toastService.show("Se ha actualizado exitosamente.","success")}catch(n){console.log(n),t._toastService.show("Obss, Ha acorrido un error al momento de actualizado.","danger")}})()}save(){var t=this;return(0,u.Z)(function*(){const n={name:t.name.value};try{(yield t._service.add(n))&&(t.name.reset(),t._toastService.show("Se ha guardado exitosamente.","success"))}catch(i){console.log(i),t._toastService.show("Obss, Ha acorrido un error al momento de guardar.","danger")}})()}isInvalid(){return this.name.errors&&this.name.dirty}isValid(){return!this.name.errors}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.Kz),e.Y36(f.k),e.Y36(d.FF),e.Y36(R))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirmation"]],standalone:!0,features:[e._Bn([d.NM,d.FF]),e.qOj,e.jDz],decls:4,vars:0,consts:[["type","button","id","confimation",1,"btn","btn-outline-secondary","btn-group-style",3,"click"],[1,"fa-sharp","fa-solid","fa-plus"],["content",""],[1,"modal-header","py-3"],[1,"modal-title","text-primary","font-weight-bold"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"input-group","mb-3"],["type","text","aria-label","Recipient's username","aria-describedby","button-addon2",1,"form-control",3,"formControl","ngClass"],["type","button","id","button-addon2",1,"btn","btn-outline-secondary",3,"disabled","click"],[1,"table"],["scope","col"],[1,"fa-solid","fa-gears"],[4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"d-flex","justify-content-end",3,"page","pageSize","collectionSize","pageChange"],["scope","row"],["type","button",1,"btn","btn-outline-info","mx-2"],[1,"fa-sharp","fa-solid","fa-pen",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){e.CHM(i);const l=e.MAs(3);return e.KtG(n.open(l))}),e._UZ(1,"i",1),e.qZA(),e.YNc(2,P,25,18,"ng-template",null,2,e.W1O)}},dependencies:[d.jF,d.N9,s.UX,s.Fj,s.JJ,s.oH,c.ez,c.mk,c.sg,c.Ov,c.OU],styles:[".btn-group-style[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.modal-body[_ngcontent-%COMP%]{min-height:414px}"]}),o})(),te=(()=>{class o{constructor(){}add(t){return null}getAll(){return new L.y}update(t){return null}delete(t){return null}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function ne(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"th",18),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"button",19)(9,"i",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.edit(a))}),e.qZA()(),e.TgZ(10,"button",21),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.delete(a.id))}),e._UZ(11,"i",22),e.qZA()()()}if(2&o){const t=r.$implicit,n=r.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.hij("",t.commission,"%")}}const w=function(o,r){return{"is-invalid":o,"is-valid":r}};function oe(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"h3",4),e._uU(2,"Servecios"),e.qZA(),e.TgZ(3,"button",5),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.dismiss())}),e.qZA()(),e.TgZ(4,"div",6)(5,"form",7)(6,"div",8),e._UZ(7,"input",9)(8,"input",10),e.TgZ(9,"button",11),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit())}),e._UZ(10,"i",1),e.qZA()()(),e.TgZ(11,"table",12)(12,"thead")(13,"tr")(14,"th",13),e._uU(15,"#"),e.qZA(),e.TgZ(16,"th",13),e._uU(17,"Nombre"),e.qZA(),e.TgZ(18,"th",13),e._uU(19,"%"),e.qZA(),e.TgZ(20,"th",13),e._UZ(21,"i",14),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,ne,12,3,"tr",15),e.ALo(24,"slice"),e.ALo(25,"async"),e.qZA()()(),e.TgZ(26,"div",16)(27,"ngb-pagination",17),e.NdJ("pageChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.page=i)}),e.ALo(28,"async"),e.qZA()()}if(2&o){const t=e.oxw();let n;e.xp6(5),e.Q6J("formGroup",t.form),e.xp6(2),e.Q6J("ngClass",e.WLB(16,w,t.isInvalid("name"),t.isValid("name"))),e.xp6(1),e.Q6J("ngClass",e.WLB(19,w,t.isInvalid("commission"),t.isValid("commission"))),e.xp6(1),e.Q6J("disabled",t.form.invalid),e.xp6(14),e.Q6J("ngForOf",e.Dn7(24,8,e.lcZ(25,12,t.services$),(t.page-1)*t.pageSize,t.page*t.pageSize)),e.xp6(4),e.Q6J("page",t.page)("pageSize",t.pageSize)("collectionSize",(null==(n=e.lcZ(28,14,t.services$))?null:n.length)||0)}}let ie=(()=>{class o extends x.l{constructor(t,n,i,a,l){super(),this.activeModal=t,this.fb=n,this._toastService=i,this._modalService=a,this._service=l,this.page=1,this.pageSize=5,this.seleted=null,this.buildingForm()}ngOnInit(){this.services$=this._service.getAll()}open(t){this._modalService.open(t)}buildingForm(){this.form=this.fb.group({name:["",[s.kI.required,s.kI.minLength(2),s.kI.maxLength(30),s.kI.pattern(/^[A-Za-z+/0-9\s\xF1\xD1]+$/)]],commission:["",[s.kI.required,s.kI.pattern(/^[0-9]+$/)]]})}onSubmit(){const t=this.getFormValues();null===this.seleted?this.save(t):this.update(t)}delete(t){var n=this;return(0,u.Z)(function*(){try{yield n._service.delete(t),n._toastService.show("Se ha eliminado exitosamente.","success")}catch(i){n._toastService.show("Obss, Ha acorrido un error al momento de guardar.","danger"),console.log(i)}})()}edit(t){this.seleted=t,this.form.patchValue(t)}update(t){var n=this;return(0,u.Z)(function*(){t.id=n.seleted?.id;try{yield n._service.update(t),n.seleted=null,n.form.reset(),n._toastService.show("Se ha actualizado exitosamente.","success")}catch(i){console.log(i),n._toastService.show("Obss, Ha acorrido un error al momento de actualizado.","danger")}})()}save(t){var n=this;return(0,u.Z)(function*(){try{(yield n._service.add(t))&&(n.form.reset(),n._toastService.show("Se ha guardado exitosamente.","success"))}catch(i){console.log(i),n._toastService.show("Obss, Ha acorrido un error al momento de guardar.","danger")}})()}getFormValues(){const{name:t,commission:n}=this.form.value;return{name:t,commission:n}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.Kz),e.Y36(s.qu),e.Y36(f.k),e.Y36(d.FF),e.Y36(te))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-services"]],standalone:!0,features:[e._Bn([d.NM,d.FF]),e.qOj,e.jDz],decls:4,vars:0,consts:[["type","button","id","confimation",1,"btn","btn-outline-secondary","btn-group-style",3,"click"],[1,"fa-sharp","fa-solid","fa-plus"],["content",""],[1,"modal-header"],[1,"modal-title","text-primary","font-weight-bold"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup"],[1,"input-group","mb-3"],["type","text","formControlName","name","placeholder","Nombre","aria-label","Recipient's name",1,"form-control",3,"ngClass"],["type","number","formControlName","commission","placeholder","Comision","aria-label","Recipient's commission",1,"form-control",3,"ngClass"],["type","button","id","button-addon2",1,"btn","btn-outline-secondary",3,"disabled","click"],[1,"table"],["scope","col"],[1,"fa-solid","fa-gears"],[4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"d-flex","justify-content-end",3,"page","pageSize","collectionSize","pageChange"],["scope","row"],["type","button",1,"btn","btn-outline-info","mx-2"],[1,"fa-sharp","fa-solid","fa-pen",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){e.CHM(i);const l=e.MAs(3);return e.KtG(n.open(l))}),e._UZ(1,"i",1),e.qZA(),e.YNc(2,oe,29,22,"ng-template",null,2,e.W1O)}},dependencies:[d.jF,d.N9,s.UX,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,c.ez,c.mk,c.sg,c.Ov,c.OU],encapsulation:2}),o})();var re=m(4466);let se=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[d.Kz],imports:[c.ez,K,s.UX,d.jF,re.m,ee,ie]}),o})()}}]);