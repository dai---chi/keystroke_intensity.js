(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;f=70,e=10,c=10,b=8,d=1e3,j=new webkitAudioContext,g=j.createAnalyser(),h=[],m=[],a=function(){function a(a){this.timeDomainData=a.timeDomainData,this.freqData=a.freqData}return a}(),function(a){return a.fn.keystroke_intensity=function(c){var d,e;return d={keytouch:function(a,b){return console.log(a,b)},deleteKeyDown:function(a,b){return console.log(a,b)}},e=a.extend(d,c),a(this).on("keydown",function(a){return a.keyCode===b?(setTimeout(function(){return e.deleteKeyDown(a,i())},f),!1):void 0}).on("keypress",function(a){return setTimeout(function(){return e.keytouch(a,i())},f)})}}(jQuery),i=function(){var a,b;return m=h.slice(-e),b=m.map(function(a){return Math.max.apply(null,a.timeDomainData)}),console.log(b),a=Math.max.apply(null,b)-127},setInterval(function(){var b,c;return c=new Uint8Array(g.fftSize),b=new Uint8Array(g.frequencyBinCount),g.getByteTimeDomainData(c),g.getByteFrequencyData(b),h.push(new a({timeDomainData:c,freqData:b})),h.length>d?h.splice(0,d-e):void 0},c),k=function(){return console.log("You may use Chrome 35")},(l=function(){return navigator.webkitGetUserMedia({video:!1,audio:!0},function(a){var b;return b=j.createMediaStreamSource(a),b.connect(g)},function(){return k()})})()}).call(this),function(){$("input").keystroke_intensity({keytouch:function(a,b){var c,d,e;return c=String.fromCharCode(a.keyCode),console.log(c),console.log(b),d=2*b+20,e="<span class='char' style='font-size:"+d+"px;'>"+c+"</span>",$("#chars").append(e)},deleteKeyDown:function(a,b){return b>100?$(".char").remove():$(".char:last").remove(),console.log(b),a.preventDefault()}}),$(".text_input_area input").css({border:"2px solid #e74c3c"}).on("focus",function(){return $(this).attr("placeholder","Type something").css({border:"2px solid #5cb85c"})}).on("blur",function(){return $(this).attr("placeholder","Click here").css({border:"2px solid #e74c3c"})}),$(document).ready(function(){return $(".text_input_area input").focus()})}.call(this);
