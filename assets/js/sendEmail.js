shortcut={all_shortcuts:{},add:function(m,f,C){var e={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(C)for(var t in e)void 0===C[t]&&(C[t]=e[t]);else C=e;e=C.target,"string"==typeof C.target&&(e=document.getElementById(C.target)),m=m.toLowerCase(),t=function(e){var t;if(e=e||window.event,!C.disable_in_input||(e.target?t=e.target:e.srcElement&&(t=e.srcElement),3==t.nodeType&&(t=t.parentNode),"INPUT"!=t.tagName&&"TEXTAREA"!=t.tagName)){e.keyCode?code=e.keyCode:e.which&&(code=e.which),t=String.fromCharCode(code).toLowerCase(),188==code&&(t=","),190==code&&(t=".");var o=m.split("+"),l=0,s={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},n={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},c=!1,a=!1,i=!1,d=!1,u=!1,r=!1,h=!1,p=!1;e.ctrlKey&&(d=!0),e.shiftKey&&(a=!0),e.altKey&&(r=!0),e.metaKey&&(p=!0);for(var w=0;k=o[w],w<o.length;w++)"ctrl"==k||"control"==k?(l++,i=!0):"shift"==k?(l++,c=!0):"alt"==k?(l++,u=!0):"meta"==k?(l++,h=!0):1<k.length?n[k]==code&&l++:C.keycode?C.keycode==code&&l++:(t==k||s[t]&&e.shiftKey&&(t=s[t])==k)&&l++;return l!=o.length||d!=i||a!=c||r!=u||p!=h||(f(e),C.propagate)?void 0:(e.cancelBubble=!0,e.returnValue=!1,e.stopPropagation&&(e.stopPropagation(),e.preventDefault()),!1)}},this.all_shortcuts[m]={callback:t,target:e,event:C.type},e.addEventListener?e.addEventListener(C.type,t,!1):e.attachEvent?e.attachEvent("on"+C.type,t):e["on"+C.type]=t},remove:function(e){e=e.toLowerCase();var t,o=this.all_shortcuts[e];delete this.all_shortcuts[e],o&&(e=o.event,t=o.target,o=o.callback,t.detachEvent?t.detachEvent("on"+e,o):t.removeEventListener?t.removeEventListener(e,o,!1):t["on"+e]=!1)}},shortcut.add("Ctrl+U",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Meta+Alt+U",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+C",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Meta+C",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+Shift+I",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+P",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+L",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Alt+D",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("Ctrl+S",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})}),shortcut.add("F12",function(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"This action is not allowed",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})});function sendMail(e){return emailjs.send("gmail","first_test_template",{from_name:e.name.value,from_email:e.emailaddress.value,project_request:e.projectsummary.value}).then(function(e){console.log("SUCCESS",e),swal("Your message was successfully sent!")},function(e){console.log("FAILED",e)}),document.getElementById("submit-button").innerHTML='<img src="assets/images/loading.gif" alt="">',setTimeout(function(){document.getElementById("myForm").reset(),document.getElementById("submit-button").innerHTML="Send"},3e3),!1}function showPhone(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"Please enter the PIN to access this info:",content:"input"}).then(e=>{he.decode("&#53;&#48;&#54;&#49;")==e?(document.getElementById("personal-phone").innerHTML="&#48;&#55;&#52;&#50;&#52; &#54;&#57;&#51;&#51;&#51;&#56;",document.getElementById("personal-phone").classList.remove("personal-phone-hide"),document.getElementById("personal-phone").classList.add("personal-info-item")):swal({text:"The PIN doesn't match, please use contact form, thank you!",button:{text:"Close",closeModal:!0}})})}function showEmail(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"Please enter the PIN to access this info:",content:"input"}).then(e=>{he.decode("&#53;&#48;&#54;&#49;")==e?(document.getElementById("personal-email").innerHTML="&#105;&#117;&#108;&#105;&#97;&#110;&#46;&#112;&#114;&#111;&#100;&#101;&#97;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;.&#99;&#111;&#109;",document.getElementById("personal-email").classList.remove("personal-email-hide"),document.getElementById("personal-email").classList.add("personal-info-item")):swal({text:"The PIN doesn't match, please use contact form, thank you!",button:{text:"Close",closeModal:!0}})})}function showCertificate(){let e=document.createElement("a");document.body.appendChild(e),e.href="https://credential.net/649d93fa%2De584%2D4425%2Da024%2D9996c2c4f70c",e.click()}function showCV(){swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"Please enter the PIN to access this file:",content:"input"}).then(e=>{if(he.decode("&#53;&#48;&#54;&#49;")==e){let e=document.createElement("a");document.body.appendChild(e),e.href="assets/cv/Julian-cv.pdf",e.click()}else swal({backdrop:!0,allowOutsideClick:!1,closeOnClickOutside:!1,closeOnEsc:!1,text:"The PIN doesn't match, please use contact form, thank you!",button:{text:"Close",closeModal:!0}}).then(e=>{e&&window.close()})})}
