//TEMPLATE SYSTEM
!function(e){"use strict";var n=function(e,t){var c=/[^\w\-\.:]/.test(e)?new Function(n.arg+",tmpl","var _e=tmpl.encode"+n.helper+",_s='"+e.replace(n.regexp,n.func)+"';return _s;"):n.cache[e]=n.cache[e]||n(n.load(e));return t?c(t,n):function(e){return c(e,n)}};n.cache={},n.load=function(e){return document.getElementById(e).innerHTML},n.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,n.func=function(e,n,t,c,r,u){return n?{"\n":"\\n","\r":"\\r","  ":"\\t"," ":" "}[n]||"\\"+n:t?"="===t?"'+_e("+c+")+'":"'+("+c+"==null?'':"+c+")+'":r?"';":u?"_s+='":void 0},n.encReg=/[<>&"'\x00]/g,n.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},n.encode=function(e){return(null==e?"":""+e).replace(n.encReg,function(e){return n.encMap[e]||""})},n.arg="o",n.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}","function"==typeof define&&define.amd?define(function(){return n}):e.tmpl=n}(this);

// FLIP
!function(e){if("function"==typeof bootstrap)bootstrap("flippant",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeFlippant=e}else"undefined"!=typeof window?window.flippant=e():global.flippant=e()}(function(){var define,ses,bootstrap,module,exports;return function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i}({1:[function(require,module,exports){exports.flip=flip;function flip(flipper,content,type,class_name,timeout){var position,back,style_func;timeout=timeout||400;type=type||"card";if(type==="modal"){class_name=class_name||"flippant-modal-dark";position="fixed";style_func=null_styles}if(type==="card"){class_name=class_name||"flippant-modal-light";position="absolute";style_func=card_styles}back=document.createElement("div");document.body.appendChild(back);set_styles(back,flipper,position);back.innerHTML=content;flipper.classList.add("flippant");back.classList.add("flippant-back");back.classList.add(class_name);if(position=="absolute"){style_func(back)}else{window.setTimeout(function(){style_func(back)},0)}window.setTimeout(function(){back.classList.add("flipper");back.classList.add("flipped");flipper.classList.add("flipped")},0);back.addEventListener("close",close);back.close=close;function close(){set_styles(back,flipper,position);back.classList.remove("flipped");back.classList.remove("flipped");flipper.classList.remove("flipped");window.setTimeout(function(){back.classList.remove(class_name);document.body.removeChild(back)},timeout)}return back}function set_styles(back,front,position){back.style.position=position;back.style.top=front.offsetTop+"px";back.style.left=front.offsetLeft+"px";back.style["min-height"]=front.offsetHeight+"px";back.style.width=front.offsetWidth+"px";back.style["z-index"]=9999}function null_styles(back){back.style.top=null;back.style.left=null;back.style.height=null;back.style.width=null}function card_styles(back){back.style.height="auto"}},{}]},{},[1])(1)});

$( document ).ready(function() {
  var chapters = [
  	{
  		'title':'Se llama nicolas maduro',
  		'time':'29:08',
  		'category':'Politica',
  		'image':'img/chapters/1.jpg',
        'category_slug':'politica',
        'id':'nicolas-maduro',
        'rback':'img/bg/1.gif'
  	},
    {
        'title':'Por aqui paso comprade',
        'time':'29:08',
        'category':'Cultura',
        'image':'img/chapters/2.jpg',
        'category_slug':'cultura',
        'id':'paso-compadre',
        'rback':'img/bg/2.gif'
    },
    {
        'title':'Proyecto canaima',
        'time':'29:08',
        'category':'Ciencia',
        'image':'img/chapters/3.jpg',
        'category_slug':'ciencia',
        'id':'proyecto-canaima',
        'rback':'img/bg/3.gif'
    },
    {
        'title':'Marineleda el sueno comunista de europa',
        'time':'29:08',
        'category':'Entre fronteras',
        'image':'img/chapters/4.jpg',
        'category_slug':'entre-fronteras',
        'id':'sueno-comunista',
        'rback':'img/bg/4.gif'
    },
    {
        'title':'la nueva izquierda del viejo mundo',
        'time':'29:08',
        'category':'Economia',
        'image':'img/chapters/5.jpg',
        'category_slug':'economia',
        'rback':'img/bg/5.gif'
    },
    {
        'title':'Se llama nicolas maduro',
        'time':'29:08',
        'category':'Politica',
        'image':'img/chapters/1.jpg',
        'category_slug':'politica',
        'rback':'img/bg/1.gif'
    },
    {
        'title':'Por aqui paso comprade',
        'time':'29:08',
        'category':'Cultura',
        'image':'img/chapters/2.jpg',
        'category_slug':'cultura',
        'rback':'img/bg/2.gif'
    },
    {
        'title':'Proyecto canaima',
        'time':'29:08',
        'category':'Ciencia',
        'image':'img/chapters/3.jpg',
        'category_slug':'ciencia',
        'rback':'img/bg/3.gif'
    },
    {
        'title':'Marineleda el sueno comunista de europa',
        'time':'29:08',
        'category':'Entre fronteras',
        'image':'img/chapters/4.jpg',
        'category_slug':'entre-fronteras',
        'rback':'img/bg/4.gif'
    },
    {
        'title':'la nueva izquierda del viejo mundo',
        'time':'29:08',
        'category':'Economia',
        'image':'img/chapters/5.jpg',
        'category_slug':'economia',
        'rback':'img/bg/5.gif'
    },
  ]



  var chapter_tmpl = tmpl("<div class='chapter-item {%=o.category_slug%}' data-rback='{%=o.rback%}'>\
    <div class='wrapper'>\
      <div class='image-container'>\
        <div class='image'>\
          <img src='{%=o.image%}' />\
          <img class='play-small' src='img/play-icon-small.png'>\
        </div>\
      </div>\
    </div>\
    <div class='chapter-footer'>\
      <div>\
        <span class='time'>{%=o.time%}</span> \
        <span class='category'>{%=o.category%}</span> \
      </div>\
      <h3 class='title'>{%=o.title%}</h3>\
    </div>\
  </div>");


  $.each(chapters, function(i, item){
      $(chapter_tmpl(item)).appendTo($('#chapter-selector'));
  });
    var deck = bespoke.horizontal.from('#chapter-selector');
    deck.on('activate', function(event){
        var b = $(event.slide).data('rback');
        $('#rotating-background .background').attr('src', b);
    });

  
    // FLIP METHOD
    $('.chapter-item').click(function(){
        var flip = flippant.flip($(this)[0], $('#overlaytemplate').html(), 'modal');
        $(document).keyup(function(e) {
            // enter || esc
            if (e.keyCode == 13 || e.keyCode == 27) { 
                flip.close();
            }
        });
    });

    $('#top-bar').click(function(){
        $('.st-container').addClass('st-menu-open');
    });

    $(document).keyup(function(e) {
            // enter || esc
            if (e.keyCode == 13 || e.keyCode == 27) { 
                $('.st-container').removeClass('st-menu-open');
            }
        });
});
