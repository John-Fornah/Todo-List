(()=>{"use strict";var e={15:(e,t,o)=>{o.d(t,{Z:()=>d});const d=e=>{(void 0).todos=[];return{title:e,add:(e,t)=>todos.add(((e,t)=>((void 0).title=e,(void 0).description=t,(void 0).dueDate,(void 0).priority,{editTitle:t=>e=t,editDiscription:e=>t=e,editDue:e=>dueDate=e,editPriority:e=>priority=e}))(e,t)),remove:e=>todos.splice(e,1)}}}},t={};function o(d){var n=t[d];if(void 0!==n)return n.exports;var r=t[d]={exports:{}};return e[d](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var d in t)o.o(t,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(15);let t=document.createElement("div");t.id="content",document.body.append(t);const d=[];let n=document.createElement("div"),r=document.createElement("button");r.textContent="Create New Project",r.addEventListener("click",(()=>{let t=prompt("Enter a title for your new project"),o=(0,e.Z)(t);d.push(o)})),n.append(r);let i=document.createElement("div"),a=document.createElement("button");a.textContent="Add New Todo",a.addEventListener("click",(function(){let e=prompt("Please enter a title for the todo."),t=prompt("Please add a description for the todo.");this.parentnode.add(e,t)})),i.append(a),t.append(n),t.append(i),(()=>{for(let e=0;e<d.length;e++){let t=document.createElement("div"),o=document.createElement("h2");o.textContent=d[e].title,t.setAttribute("data-index",e),t.appendChild(o),n.appendChild(t)}})()})()})();