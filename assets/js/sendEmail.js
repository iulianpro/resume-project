function sendMail(e){return emailjs.send("gmail","first_test_template",{from_name:e.name.value,from_email:e.emailaddress.value,project_request:e.projectsummary.value}).then(function(e){console.log("SUCCESS",e),alert("Your message was successfully sent!")},function(e){console.log("FAILED",e)}),document.getElementById("submit-button").innerHTML='<img class="spiner" src="assets/images/loading.gif" alt="">',setTimeout(function(){document.getElementById("myForm").reset(),document.getElementById("submit-button").innerHTML="Send"},3e3),!1}function showPhone(){"5061"==prompt("Please enter the PIN to see this information","")?(document.getElementById("personal-phone").innerHTML="+44 7424 693338",document.getElementById("personal-phone").classList.remove("personal-phone-hide"),document.getElementById("personal-phone").classList.add("personal-info-item")):alert("The PIN does not match, please use contact form to ask the PIN")}function showEmail(){"5061"==prompt("Please enter the PIN to see this information","")?(document.getElementById("personal-email").innerHTML="iulian.prodea@outlook.com",document.getElementById("personal-email").classList.remove("personal-email-hide"),document.getElementById("personal-email").classList.add("personal-info-item")):alert("The PIN does not match, please use contact form to ask the PIN")}function showCertificate(){return"5061"==prompt("Please enter the PIN to access this information","")?(document.getElementById("personal-certificate").setAttribute("target","_blank"),document.getElementById("personal-certificate").href="https://www.credential.net/649d93fa-e584-4425-a024-9996c2c4f70c"):(alert("The PIN does not match, please use contact form to ask the PIN"),document.getElementById("personal-certificate").href="contact.html"),!1}function showCV(){return"5061"==prompt("Please enter the PIN to access this information","")?(document.getElementById("personal-CV").setAttribute("target","_blank"),document.getElementById("personal-CV").href="assets/cv/Julian-cv.pdf"):(alert("The PIN does not match, please use contact form to ask the PIN"),document.getElementById("personal-CV").href="contact.html"),!1}function showCVFooter(){return"5061"==prompt("Please enter the PIN to access this information","")?(document.getElementById("personal-CV-footer").setAttribute("target","_blank"),document.getElementById("personal-CV-footer").href="assets/cv/Julian-cv.pdf"):(alert("The PIN does not match, please use contact form to ask the PIN"),document.getElementById("personal-CV-footer").href="contact.html"),!1}shortcut={all_shortcuts:{},add:function(e,t,o){var n={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(o)for(var a in n)void 0===o[a]&&(o[a]=n[a]);else o=n;n=o.target,"string"==typeof o.target&&(n=document.getElementById(o.target)),e=e.toLowerCase(),a=function(n){var a;if(n=n||window.event,!o.disable_in_input||(n.target?a=n.target:n.srcElement&&(a=n.srcElement),3==a.nodeType&&(a=a.parentNode),"INPUT"!=a.tagName&&"TEXTAREA"!=a.tagName)){n.keyCode?code=n.keyCode:n.which&&(code=n.which),a=String.fromCharCode(code).toLowerCase(),188==code&&(a=","),190==code&&(a=".");var s=e.split("+"),r=0,l={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},c={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},i=!1,d=!1,m=!1,u=!1,h=!1,p=!1,f=!1,g=!1;n.ctrlKey&&(u=!0),n.shiftKey&&(d=!0),n.altKey&&(p=!0),n.metaKey&&(g=!0);for(var y=0;k=s[y],y<s.length;y++)"ctrl"==k||"control"==k?(r++,m=!0):"shift"==k?(r++,i=!0):"alt"==k?(r++,h=!0):"meta"==k?(r++,f=!0):1<k.length?c[k]==code&&r++:o.keycode?o.keycode==code&&r++:a==k?r++:l[a]&&n.shiftKey&&(a=l[a])==k&&r++;return r!=s.length||u!=m||d!=i||p!=h||g!=f||(t(n),o.propagate)?void 0:(n.cancelBubble=!0,n.returnValue=!1,n.stopPropagation&&(n.stopPropagation(),n.preventDefault()),!1)}},this.all_shortcuts[e]={callback:a,target:n,event:o.type},n.addEventListener?n.addEventListener(o.type,a,!1):n.attachEvent?n.attachEvent("on"+o.type,a):n["on"+o.type]=a},remove:function(e){e=e.toLowerCase();var t=this.all_shortcuts[e];if(delete this.all_shortcuts[e],t){e=t.event;var o=t.target;t=t.callback,o.detachEvent?o.detachEvent("on"+e,t):o.removeEventListener?o.removeEventListener(e,t,!1):o["on"+e]=!1}}},shortcut.add("Ctrl+U",function(){alert("This action is not allowed")}),shortcut.add("Meta+Alt+U",function(){alert("This action is not allowed")}),shortcut.add("Ctrl+C",function(){alert("This action is not allowed")}),shortcut.add("Meta+C",function(){alert("This action is not allowed")}),shortcut.add("Ctrl+Shift+I",function(){alert("This action is not allowed")}),shortcut.add("F12",function(){alert("This action is not allowed")});