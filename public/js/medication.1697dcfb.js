(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["medication"],{1148:function(e,t,i){"use strict";var a=i("a691"),s=i("1d80");e.exports="".repeat||function(e){var t=String(s(this)),i="",n=a(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(i+=t);return i}},"19d1":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("instructionsLabel")}},[i("b-input",{attrs:{name:"instruction",id:"instruction",icon:"info",required:e.isRequired,placeholder:"For client reference - this text will be displayed to client","validation-message":"Please enter a valid reference - only dssfdsfd is allowed",pattern:"[A-Za-z0-9\\s.,?()]*"},model:{value:e.value.instruction,callback:function(t){e.$set(e.value,"instruction",t)},expression:"value.instruction"}})],1)},s=[],n={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}}},o=n,l=i("2877"),d=Object(l["a"])(o,a,s,!1,null,null,null);t["a"]=d.exports},"2dc7":function(e){e.exports=JSON.parse('[{"id":0,"name":"No missed alert","value":0},{"id":1,"name":"after 1 hour","value":1},{"id":2,"name":"after 2 hours","value":2},{"id":3,"name":"after 3 hours","value":3},{"id":4,"name":"after 4 hour","value":4},{"id":5,"name":"after 5 hours","value":5},{"id":6,"name":"after 6 hours","value":6},{"id":7,"name":"after 7 hours","value":7},{"id":8,"name":"after 8 hours","value":8}]')},"363d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("promptTimeLabel")}},[i("b-timepicker",{attrs:{name:"prompt_time",id:"prompt_time","hour-format":e.hourFormat,editable:"",required:e.isRequired,"validation-message":"Please choose a prompt time",incrementMinutes:5,icon:"clock-o"},model:{value:e.value.prompt_time,callback:function(t){e.$set(e.value,"prompt_time",t)},expression:"value.prompt_time"}}),i("b-field",[i("b-radio-button",{attrs:{name:"12","native-value":"12"},model:{value:e.hourFormat,callback:function(t){e.hourFormat=t},expression:"hourFormat"}},[e._v(" 12 hr ")]),i("b-radio-button",{attrs:{name:"24","native-value":"24"},model:{value:e.hourFormat,callback:function(t){e.hourFormat=t},expression:"hourFormat"}},[e._v(" 24 hr ")])],1)],1)},s=[],n={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}},data:function(){return{hourFormat:"12"}}},o=n,l=i("2877"),d=Object(l["a"])(o,a,s,!1,null,null,null);t["a"]=d.exports},"38cf":function(e,t,i){var a=i("23e7"),s=i("1148");a({target:"String",proto:!0},{repeat:s})},"47b2":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("referenceLabel")}},[i("b-input",{attrs:{name:"reference",id:"reference",required:e.isRequired,icon:"info",placeholder:"For your reference - this text is not displayed to client","validation-message":"Please enter a valid reference - only dssfdsfd is allowed",pattern:"[A-Za-z0-9\\s.,?()]*"},model:{value:e.value.reference,callback:function(t){e.$set(e.value,"reference",t)},expression:"value.reference"}})],1)},s=[],n={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}}},o=n,l=i("2877"),d=Object(l["a"])(o,a,s,!1,null,null,null);t["a"]=d.exports},"4e4e":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("repeatLabel")}},[i("b-select",{attrs:{name:"repeat",id:"repeat",icon:"repeat",expanded:"",required:e.isRequired,"validation-message":"Please choose a repeat option"},model:{value:e.value.repeat,callback:function(t){e.$set(e.value,"repeat",t)},expression:"value.repeat"}},e._l(e.repeats,(function(t){return i("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0)],1)},s=[],n=i("58e9"),o={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}},data:function(){return{repeats:n}}},l=o,d=i("2877"),r=Object(d["a"])(l,a,s,!1,null,null,null);t["a"]=r.exports},"58e9":function(e){e.exports=JSON.parse('[{"id":0,"name":"Never","value":"Never"},{"id":1,"name":"Daily","value":"Daily"},{"id":2,"name":"Every Other Day","value":"Every Other Day"},{"id":3,"name":"Weekly","value":"Weekly"}]')},"957d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"medication"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-10 is-offset-1"},[i("div",{staticClass:"box"},[i("div",[i("h1",[e._v(" "+e._s(e.$t("medicationTitle"))+" "),i("a",{staticClass:"button is-primary is-medium is-pulled-right",on:{click:function(t){return e.showAddModal()}}},[e._m(0),i("span",[e._v("Add New Medication")])])])]),e.medications.length?i("table",{staticClass:"table is-hoverable is-fullwidth is-striped"},[i("thead",[i("tr",[i("th",[e._v(e._s(e.$t("referenceLabel")))]),i("th",[e._v(e._s(e.$t("instructionsLabel")))]),i("th",[e._v(e._s(e.$t("promptTimeLabel")))]),i("th",[e._v(e._s(e.$t("startDateLabel")))]),i("th",[e._v(e._s(e.$t("endDateLabel")))]),i("th",[e._v(e._s(e.$t("repeatLabel")))]),i("th",[e._v(e._s(e.$t("missedAlertLabel")))]),i("th",[e._v(e._s(e.$t("actionsLabel")))])])]),i("tbody",e._l(e.medications,(function(t,a){return i("tr",{key:t.id},[i("td",[e._v(e._s(t.reference)+" ")]),i("td",[e._v(e._s(t.instruction))]),i("td",[e._v(e._s(t.prompt_time)+" ")]),i("td",[e._v(e._s(t.start_date))]),i("td",[e._v(e._s(t.end_date)+" ")]),i("td",[e._v(e._s(t.repeat))]),i("td",[e._v(e._s(t.alert_time))]),i("td",[i("div",{staticClass:"buttons"},[i("b-button",{attrs:{type:"is-success","icon-left":"edit",title:"Edit"},on:{click:function(t){return e.showEditModal(a)}}}),i("b-button",{attrs:{type:"is-info","icon-left":"copy",title:"Duplicate"},on:{click:function(t){return e.showCopyModal(a)}}}),i("b-button",{attrs:{type:"is-danger","icon-left":"trash",title:"Delete"},on:{click:function(t){return e.showDeleteModal(a)}}})],1)])])})),0)]):e._e()])]),e._v(" "),i("b-modal",{attrs:{scroll:"keep","can-cancel":!1},model:{value:e.isModalVisible,callback:function(t){e.isModalVisible=t},expression:"isModalVisible"}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[e.isAddModal?i("p",{staticClass:"modal-card-title"},[e._v("Schedule New Medication")]):e._e(),e.isCopyModal?i("p",{staticClass:"modal-card-title"},[e._v("Schedule Duplicate Medication")]):e._e(),e.isEditModal?i("p",{staticClass:"modal-card-title"},[e._v("Edit Medication")]):e._e(),e.isDeleteModal?i("p",{staticClass:"modal-card-title"},[e._v("Delete Medication")]):e._e(),i("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){return e.closeModal()}}})]),e.isDeleteModal?i("section",{staticClass:"modal-card-body"},[i("p",[e._v("Are you sure you want to delete this medication?")])]):e._e(),e.isAddModal||e.isEditModal||e.isCopyModal?i("section",{staticClass:"modal-card-body"},[e.errors.length>0?i("div",{staticClass:"message is-danger"},[i("div",{staticClass:"message-body"},[i("ul",e._l(e.errors,(function(t){return i("li",{key:t.id},[e._v(e._s(t))])})),0)])]):e._e(),i("field-reference",{attrs:{"is-required":""},model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}}),i("field-instructions",{attrs:{"is-required":""},model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}}),i("field-start-date",{attrs:{"is-required":""},model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}}),i("field-end-date",{model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}}),i("field-prompt-time",{attrs:{"is-required":""},model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}}),i("field-repeat",{attrs:{"is-required":""},model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}}),i("field-missed-alert",{attrs:{"is-required":""},model:{value:e.medication,callback:function(t){e.medication=t},expression:"medication"}})],1):e._e(),i("footer",{staticClass:"modal-card-foot"},[e.isAddModal||e.isCopyModal?i("button",{staticClass:"button is-success",on:{click:e.addMedication}},[e._v("Add Medication")]):e._e(),e.isEditModal?i("button",{staticClass:"button is-success",on:{click:e.updateMedication}},[e._v("Save Changes")]):e._e(),e.isDeleteModal?i("button",{staticClass:"button is-danger",on:{click:e.deleteMedication}},[e._v("Delete Medication")]):e._e(),i("button",{staticClass:"button",on:{click:function(t){return e.closeModal()}}},[e._v("Cancel")])])])])],1)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fa fa-plus"})])}],n=(i("38cf"),i("47b2")),o=i("19d1"),l=i("f3d0"),d=i("e269"),r=i("363d"),c=i("4e4e"),u=i("d1b0"),m={components:{FieldReference:n["a"],FieldInstructions:o["a"],FieldStartDate:l["a"],FieldEndDate:d["a"],FieldPromptTime:r["a"],FieldRepeat:c["a"],FieldMissedAlert:u["a"]},data:function(){return{medications:[],medication:{},errors:[],isModalVisible:!1,isAddModal:!1,isEditModal:!1,isCopyModal:!1,isDeleteModal:!1}},mounted:function(){this.getMedications()},methods:{closeModal:function(){this.medication.id=null,this.medication.reference="",this.medication.instruction="",this.medication.start_date=null,this.medication.end_date=null,this.medication.prompt_time=null,this.medication.repeat="",this.medication.alert_time=null,this.isModalVisible=!1,this.isAddModal=!1,this.isEditModal=!1,this.isCopyModal=!1,this.isDeleteModal=!1},showAddModal:function(){this.medication.start_date=new Date,this.medication.alert_time=1,this.isAddModal=!0,this.isModalVisible=!0},showEditModal:function(e){this.medication.id=this.medications[e].id,this.medication.reference=this.medications[e].reference,this.medication.instruction=this.medications[e].instruction,this.medication.repeat=this.medications[e].repeat,this.medication.alert_time=this.medications[e].alert_time,this.medication.start_date=new Date(this.medications[e].start_date),this.medication.end_date=this.medications[e].end_date?new Date(this.medications[e].end_date):null,this.medication.prompt_time=new Date("1970-01-01T"+this.medications[e].prompt_time),this.isEditModal=!0,this.isModalVisible=!0},showCopyModal:function(e){this.medication.reference=this.medications[e].reference+" (copy)",this.medication.instruction=this.medications[e].instruction,this.medication.repeat=this.medications[e].repeat,this.medication.alert_time=this.medications[e].alert_time,this.medication.start_date=new Date(this.medications[e].start_date),this.medication.end_date=this.medications[e].end_date?new Date(this.medications[e].end_date):null,this.medication.prompt_time=new Date("1970-01-01T"+this.medications[e].prompt_time),this.isCopyModal=!0,this.isModalVisible=!0},showDeleteModal:function(e){this.medication.id=this.medications[e].id,this.isDeleteModal=!0,this.isModalVisible=!0},getMedications:function(){var e=this;this.$http.get("medication_schedules").then((function(t){e.medications=t.data}))},addMedication:function(){var e=this,t=this.medication;t.prompt_time=t.prompt_time.toLocaleString(),console.log(t.prompt_time),this.$http.post("medication_schedules",t).then((function(t){console.log(t.data),e.closeModal(),e.getMedications()})).catch((function(e){console.log(e)}))},updateMedication:function(){var e=this,t=this.medication;t.prompt_time=t.prompt_time.toLocaleString(),this.$http.put("medication_schedules/"+t.id,t).then((function(t){console.log(t.data),e.closeModal(),e.getMedications()})).catch((function(e){console.log(e)}))},deleteMedication:function(){var e=this,t=this.medication.id;this.$http.delete("medication_schedules/"+t).then((function(t){console.log(t.data),e.closeModal(),e.getMedications()})).catch((function(e){console.log(e)}))}}},h=m,p=i("2877"),v=Object(p["a"])(h,a,s,!1,null,null,null);t["default"]=v.exports},d1b0:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("missedAlertLabel")}},[i("b-select",{attrs:{name:"use_alert",id:"use_alert",icon:"bell",required:e.isRequired,"validation-message":"Please choose an option"},model:{value:e.value.alert_time,callback:function(t){e.$set(e.value,"alert_time",t)},expression:"value.alert_time"}},e._l(e.missedAlerts,(function(t){return i("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0)],1)},s=[],n=i("2dc7"),o={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}},data:function(){return{missedAlerts:n}}},l=o,d=i("2877"),r=Object(d["a"])(l,a,s,!1,null,null,null);t["a"]=r.exports},e269:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("endDateLabel")}},[i("b-datepicker",{attrs:{name:"end_date",id:"end_date",editable:"",required:e.isRequired,icon:"calendar"},model:{value:e.value.end_date,callback:function(t){e.$set(e.value,"end_date",t)},expression:"value.end_date"}})],1)},s=[],n={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}}},o=n,l=i("2877"),d=Object(l["a"])(o,a,s,!1,null,null,null);t["a"]=d.exports},f3d0:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-field",{attrs:{horizontal:"",label:e.$t("startDateLabel")}},[i("b-datepicker",{attrs:{name:"start_date",id:"start_date",editable:"",required:e.isRequired,icon:"calendar","validation-message":"Please choose a start date"},model:{value:e.value.start_date,callback:function(t){e.$set(e.value,"start_date",t)},expression:"value.start_date"}})],1)},s=[],n={props:{isRequired:Boolean,value:{type:Object,required:!0}},watch:{value:function(){this.$emit("input",this.value)}}},o=n,l=i("2877"),d=Object(l["a"])(o,a,s,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=medication.1697dcfb.js.map