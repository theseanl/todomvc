var b;var h=angular;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function k(a,c,e,f){var d=arguments.length,g=3>d?c:null===f?f=Object.getOwnPropertyDescriptor(c,e):f,m;if("object"===typeof Reflect&&Reflect&&"function"===typeof Reflect.decorate)g=Reflect.decorate(a,c,e,f);else for(var n=a.length-1;0<=n;n--)if(m=a[n])g=(3>d?m(g):3<d?m(c,e,g):m(c,e))||g;3<d&&g&&Object.defineProperty(c,e,g)};function l(a){this.title=a;this.completed=!1};function p(){};function q(a,c,e,f){var d=this;this.$scope=a;this.l=e;this.j=f;this.todos=a.todos=e.get();a.newTodo="";a.editedTodo=null;a.vm=this;a.$watch("todos",function(){d.$scope.remainingCount=d.j(d.todos,{completed:!1}).length;d.$scope.doneCount=d.todos.length-d.$scope.remainingCount;d.$scope.allChecked=!d.$scope.remainingCount;d.l.put(d.todos)},!0);a.$watch("location.path()",function(g){d.$scope.statusFilter="/active"===g?{completed:!1}:"/completed"===g?{completed:!0}:{}});""===c.path()&&c.path("/");a.location=
c}b=q.prototype;b.b=function(){var a=this.$scope.newTodo.trim();a.length&&(this.todos.push(new l(a)),this.$scope.newTodo="")};b.g=function(a){this.$scope.editedTodo=a;this.$scope.originalTodo=h.extend({},a)};b.i=function(a){this.todos[this.todos.indexOf(a)]=this.$scope.originalTodo;this.$scope.reverted=!0};b.f=function(a){this.$scope.editedTodo=null;this.$scope.originalTodo=null;this.$scope.reverted?this.$scope.reverted=null:(a.title=a.title.trim(),a.title||this.a(a))};
b.a=function(a){this.todos.splice(this.todos.indexOf(a),1)};b.c=function(){this.$scope.todos=this.todos=this.todos.filter(function(a){return!a.completed})};b.h=function(a){this.todos.forEach(function(c){c.completed=a})};q.prototype.markAll=q.prototype.h;q.prototype.clearDoneTodos=q.prototype.c;q.prototype.removeTodo=q.prototype.a;q.prototype.doneEditing=q.prototype.f;q.prototype.revertEdits=q.prototype.i;q.prototype.editTodo=q.prototype.g;q.prototype.addTodo=q.prototype.b;k([p],q.prototype,"b",null);
k([p],q.prototype,"g",null);k([p],q.prototype,"i",null);k([p],q.prototype,"f",null);k([p],q.prototype,"a",null);k([p],q.prototype,"c",null);k([p],q.prototype,"h",null);function r(a){return{link:function(c,e,f){c.$watch(f.s,function(d){d&&a(function(){return e[0].focus()},0,!1)})}}}r.$inject=["$timeout"];function t(){}t.prototype.get=function(){return JSON.parse(window.localStorage.getItem("todos-angularjs-typescript")||"[]")};t.prototype.put=function(a){window.localStorage.setItem("todos-angularjs-typescript",JSON.stringify(a))};h.module("todomvc",[]).controller("todoCtrl",q).directive("todoBlur",function(){return{link:function(a,c,e){c.bind("blur",function(){a.$apply(e.m)});a.$on("$destroy",function(){c.unbind("blur")})}}}).directive("todoFocus",r).directive("todoEscape",function(){return{link:function(a,c,e){c.bind("keydown",function(f){27===f.keyCode&&a.$apply(e.o)});a.$on("$destroy",function(){c.unbind("keydown")})}}}).service("todoStorage",t);
//# sourceMappingURL=Application.js.map
