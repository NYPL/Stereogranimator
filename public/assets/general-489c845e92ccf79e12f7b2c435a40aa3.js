(function(){var a;a=function(){function a(){this.idle_id=-1,this.refreshMobileClick(),window.location.pathname!=="/create_pe"&&this.idleTimeout()}return a.prototype.refreshMobileClick=function(){var a,b,c,d,e;b=[".dim a",".stereograph a",".genericButtonLink"],e=[];for(c=0,d=b.length;c<d;c++)a=b[c],e.push(this.mobileClick(a));return e},a.prototype.mobileClick=function(a){var b;return b=$(a),b.click(function(a){return a.preventDefault(),window.location.href=a.currentTarget.href})},a.prototype.idleTimeout=function(){return window.addEventListener("mousemove",this.resetTimer,!1),window.addEventListener("mousedown",this.resetTimer,!1),window.addEventListener("keypress",this.resetTimer,!1),window.addEventListener("DOMMouseScroll",this.resetTimer,!1),window.addEventListener("mousewheel",this.resetTimer,!1),window.addEventListener("touchmove",this.resetTimer,!1),window.addEventListener("MSPointerMove",this.resetTimer,!1)},a.prototype.resetTimer=function(){var a;return a=this,this.idle_id!==-1&&clearTimeout(this.idle_id),this.idle_id=setTimeout(function(){return a.isIdle()},12e4),console.log("timer reset",this.idle_id)},a.prototype.isIdle=function(){return console.log("idle... redirecting"),window.location.href="/create_pe"},a}(),$(function(){return window._gen=new a})}).call(this);