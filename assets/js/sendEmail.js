shortcut={all_shortcuts:{},add:function(t,e,o){var a={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(o)for(var n in a)void 0===o[n]&&(o[n]=a[n]);else o=a;a=o.target,"string"==typeof o.target&&(a=document.getElementById(o.target)),t=t.toLowerCase(),n=function(a){var n;if(a=a||window.event,!o.disable_in_input||(a.target?n=a.target:a.srcElement&&(n=a.srcElement),3==n.nodeType&&(n=n.parentNode),"INPUT"!=n.tagName&&"TEXTAREA"!=n.tagName)){a.keyCode?code=a.keyCode:a.which&&(code=a.which),n=String.fromCharCode(code).toLowerCase(),188==code&&(n=","),190==code&&(n=".");var c=t.split("+"),r=0,l={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},s={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},i=!1,d=!1,h=!1,u=!1,p=!1,f=!1,g=!1,v=!1;a.ctrlKey&&(u=!0),a.shiftKey&&(d=!0),a.altKey&&(f=!0),a.metaKey&&(v=!0);for(var w=0;k=c[w],w<c.length;w++)"ctrl"==k||"control"==k?(r++,h=!0):"shift"==k?(r++,i=!0):"alt"==k?(r++,p=!0):"meta"==k?(r++,g=!0):1<k.length?s[k]==code&&r++:o.keycode?o.keycode==code&&r++:n==k?r++:l[n]&&a.shiftKey&&(n=l[n])==k&&r++;return r!=c.length||u!=h||d!=i||f!=p||v!=g||(e(a),o.propagate)?void 0:(a.cancelBubble=!0,a.returnValue=!1,a.stopPropagation&&(a.stopPropagation(),a.preventDefault()),!1)}},this.all_shortcuts[t]={callback:n,target:a,event:o.type},a.addEventListener?a.addEventListener(o.type,n,!1):a.attachEvent?a.attachEvent("on"+o.type,n):a["on"+o.type]=n},remove:function(t){t=t.toLowerCase();var e=this.all_shortcuts[t];if(delete this.all_shortcuts[t],e){t=e.event;var o=e.target;e=e.callback,o.detachEvent?o.detachEvent("on"+t,e):o.removeEventListener?o.removeEventListener(t,e,!1):o["on"+t]=!1}}},shortcut.add("Ctrl+U",function(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Meta+Alt+U",function(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+C",function(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Meta+C",function(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+Shift+I",function(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("F12",function(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}); function sendMail(e){return emailjs.send("gmail","first_test_template",{from_name:e.name.value,from_email:e.emailaddress.value,project_request:e.projectsummary.value}).then(function(e){console.log("SUCCESS",e),swal("Your message was successfully sent!")},function(e){console.log("FAILED",e)}),document.getElementById("submit-button").innerHTML='<img src="assets/images/loading.gif" alt="">',setTimeout(function(){document.getElementById("myForm").reset(),document.getElementById("submit-button").innerHTML="Send"},3e3),!1}function showPhone(){swal("Please enter the PIN to access this information:",{content:"input"}).then(e=>{"5061"==e?(document.getElementById("personal-phone").innerHTML="0&#160;7424&#160;693338",document.getElementById("personal-phone").classList.remove("personal-phone-hide"),document.getElementById("personal-phone").classList.add("personal-info-item")):swal("The PIN doesn't match, use contact form to ask the PIN")})}function showEmail(){swal("Please enter the PIN to access this information:",{content:"input"}).then(e=>{"5061"==e?(document.getElementById("personal-email").innerHTML="iulian.prodea@outlook.com",document.getElementById("personal-email").classList.remove("personal-email-hide"),document.getElementById("personal-email").classList.add("personal-info-item")):swal("The PIN doesn't match, use contact form to ask the PIN")})}function showCertificate(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"Please enter the PIN to access this file:",content:"input"}).then(e=>{if("5061"==e){let e=document.createElement("a");document.body.appendChild(e),e.href="https://credential.net/649d93fa%2De584%2D4425%2Da024%2D9996c2c4f70c",e.click()}else swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"The PIN doesn't match, use contact form to ask the PIN",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})})}function showCV(){swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"Please enter the PIN to access this file:",content:"input"}).then(e=>{if("5061"==e){let e=document.createElement("a");document.body.appendChild(e),e.href="assets/cv/Julian-cv.pdf",e.click()}else swal({backdrop:true,allowOutsideClick:false,closeOnClickOutside:false,allowEscapeKey:false,closeOnEsc: false,text:"The PIN doesn't match, use contact form to ask the PIN",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})})}
