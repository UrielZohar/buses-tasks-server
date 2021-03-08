(this["webpackJsonpbuses-tasks-client"]=this["webpackJsonpbuses-tasks-client"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},157:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var r=n(19),s=n(0),a=n.n(s),c=n(22),i=n.n(c),o=(n(131),n(132),n(25)),u=n(24),d={isSpinnerOn:!0,usersSpinner:0},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TURN_ON_SPINNER":return Object(u.a)(Object(u.a)({},e),{},{usersSpinner:e.usersSpinner+1});case"TURN_OFF_SPINNER":return Object(u.a)(Object(u.a)({},e),{},{usersSpinner:e.usersSpinner-1>=0?e.usersSpinner-1:0});default:return e}},f=n(233),j=function(){f.a.success({message:"Assigment succeeded",placement:"bottomRight"})},O=n(232),b=n(121),p=n(78),T=n.n(p),k=n(107),v=n(108),I=function(){function e(){Object(k.a)(this,e)}return Object(v.a)(e,null,[{key:"assignTaskToDriver",value:function(t,n){return"".concat(e.ROOT,"/tasks/").concat(t,"/assign?driverId=").concat(n)}},{key:"getDrivers",get:function(){return"".concat(e.ROOT,"/drivers")}},{key:"getTasks",get:function(){return"".concat(e.ROOT,"/tasks")}}]),e}();I.ROOT="http://localhost:8080";var E=I,h={drivers:[],driversMap:{},tasksMap:{},tasks:[]},N=function(e,t){return function(n){return T.a.put(E.assignTaskToDriver(e,t)).then((function(){n({type:"UPDATE_TASKS",data:{taskId:e,driverId:t}})})).catch((function(){return window.alert("Error from server"),"error"}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_DATA":return Object(u.a)(Object(u.a)({},e),{},{drivers:t.data.drivers,tasks:t.data.tasks,tasksMap:t.data.tasksMap,driversMap:t.data.driversMap});case"UPDATE_TASKS":var n=Object(u.a)({},e.tasksMap);return n[t.data.taskId].assignTo=t.data.driverId,n[t.data.taskId].assignToName=e.driversMap[t.data.driverId].name,Object(u.a)(Object(u.a)({},e),{},{tasksMap:n,tasks:Object(b.a)(e.tasks)});case"CLEAR_SELECTED":return Object(u.a)(Object(u.a)({},e),{},{selectedDriverId:null,selectedTaskId:null});case"SET_SELECTED_DRIVER_ID":return Object(u.a)(Object(u.a)({},e),{},{selectedDriverId:t.data.selectedDriverId});case"SET_SELECTED_TASK_ID":return Object(u.a)(Object(u.a)({},e),{},{selectedTaskId:t.data.selectedTaskId});default:return e}},D=(n(157),[{title:"Name",dataIndex:"name",key:"name"},{title:"Id",dataIndex:"id",key:"id"}]),S=function(){var e=Object(o.b)(),t=Object(s.useCallback)((function(t){e(function(e){return function(t){return t({type:"SET_SELECTED_DRIVER_ID",data:{selectedDriverId:e}})}}(t))}),[]),n=Object(o.c)((function(e){return e.root.drivers})),a=Object(o.c)((function(e){return e.root.selectedDriverId})),c=Object(o.c)((function(e){return e.root.selectedTaskId})),i=Object(s.useCallback)((function(t,n){e((function(e){return e({type:"TURN_ON_SPINNER"})})),e(N(t,n)).then((function(t){e((function(e){return e({type:"TURN_OFF_SPINNER"})})),"error"!=t&&(j(),e((function(e){return e({type:"CLEAR_SELECTED"})})))}))}),[]);return Object(r.jsx)("div",{className:"DriversGrid",children:Object(r.jsx)(O.a,{columns:D,dataSource:n,pagination:!1,rowClassName:function(e,t){return"driver-row ".concat(e.id==a?"selected-row":"")},onRow:function(e,n){return{onClick:function(n){t(e.id),c&&i(c,e.id)}}}})})},g=(n(228),[{title:"Driver",dataIndex:"assignTo",key:"assignTo",render:function(e,t,n){return t.assignTo?t.assignToName:Object(r.jsx)("span",{className:"assign-cell",children:"+ Driver"})}},{title:"Task Id",dataIndex:"lineId",key:"lineId",render:function(e,t,n){return t.lineDisplayId}},{title:"Day 1",render:function(e,t,n){return t.tasks[0].type}},{title:"Day 2",render:function(e,t,n){return t.tasks[1].type}},{title:"Day 3",render:function(e,t,n){return t.tasks[2].type}},{title:"Day 4",render:function(e,t,n){return t.tasks[3].type}},{title:"Day 5",render:function(e,t,n){return t.tasks[4].type}},{title:"Day 6",render:function(e,t,n){return t.tasks[5].type}},{title:"Day 7",render:function(e,t,n){return t.tasks[6].type}}]),_=function(){var e=Object(o.b)(),t=Object(s.useCallback)((function(t){e(function(e){return function(t){return t({type:"SET_SELECTED_TASK_ID",data:{selectedTaskId:e}})}}(t))})),n=Object(s.useCallback)((function(t,n){e((function(e){return e({type:"TURN_ON_SPINNER"})})),e(N(t,n)).then((function(t){e((function(e){return e({type:"TURN_OFF_SPINNER"})})),"error"!=t&&(j(),e((function(e){return e({type:"CLEAR_SELECTED"})})))}))})),a=Object(o.c)((function(e){return e.root.tasks})),c=Object(o.c)((function(e){return e.root.selectedTaskId})),i=Object(o.c)((function(e){return e.root.selectedDriverId}));return Object(r.jsx)("div",{className:"TasksGrid",children:Object(r.jsx)(O.a,{columns:g,dataSource:a,pagination:!1,rowClassName:function(e,t){return"task-row ".concat(e.lineId==c?"selected-row":"")},onRow:function(e,r){return{onClick:function(r){t(e.lineId),i&&n(e.lineId,i)}}}})})},R=n(116),m=(n(229),function(){var e=Object(o.c)((function(e){return e.spinner.usersSpinner}));return Object(r.jsx)("div",{className:"spinner-wrapper "+(e?"show-spinner":"hide-spinner"),children:Object(r.jsx)("div",{className:"spinner",children:Object(r.jsx)(R.a,{})})})}),x=n(234),w=n(235),C=function(){var e=Object(o.b)();return Object(s.useEffect)((function(){e((function(e){return e({type:"TURN_ON_SPINNER"})})),e((function(e){return Promise.all([T.a.get(E.getDrivers),T.a.get(E.getTasks)]).then((function(t){var n=t[1].data,r=t[0].data,s={},a={};n.forEach((function(e){s[e.lineId]=e})),r.forEach((function(e){a[e.id]=e})),n.forEach((function(e){e.assignTo&&(e.assignToName=a[e.assignTo].name)})),e({type:"INIT_DATA",data:{drivers:r,tasks:n,tasksMap:s,driversMap:a}})})).catch((function(e){return window.alert("Error from server"),"error"}))})).then((function(){e((function(e){return e({type:"TURN_OFF_SPINNER"})}))}))}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{}),Object(r.jsxs)(x.a,{type:"flex",style:{height:"100vh"},children:[Object(r.jsx)(w.a,{span:6,style:{height:"100%",overflowY:"scroll",borderRight:"2px solid"},children:Object(r.jsx)(S,{})}),Object(r.jsx)(w.a,{span:18,style:{height:"100%",overflowY:"scroll",borderLeft:"2px solid"},children:Object(r.jsx)(_,{})})]})]})},A=n(118),M=n(53),L=Object(M.c)({spinner:l,root:y}),P=Object(M.d)(L,Object(M.a)(A.a));i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(o.a,{store:P,children:Object(r.jsx)(C,{})})}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.77fa92aa.chunk.js.map