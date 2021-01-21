

 let langToggleRu = document.querySelector('.ru-flag');
 let langToggleEng = document.querySelector('.eng-flag');

 let langEng = document.querySelectorAll('.lang-eng');
 let langRu = document.querySelectorAll('.lang-ru');

langToggleRu.addEventListener('click', function(){
   for(let i=0;i<langEng.length; i++){
      langEng[i].classList.add('hide');
   }
   for(let i=0;i<langRu.length; i++){
      langRu[i].classList.remove('hide');
   }
});

langToggleEng.addEventListener('click', function(){
   for(let i=0;i<langEng.length; i++){
      langEng[i].classList.remove('hide');
   }
   for(let i=0;i<langRu.length; i++){
      langRu[i].classList.add('hide');
   }
 });