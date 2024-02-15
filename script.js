let data=[5,120,100,10]
let elements=Array.from(document.querySelectorAll('#compt'))
const affichage = (nombre, e) => {
    let cpt = 0
    var delai = Math.ceil((1 * 1000) / 100);
    function count() {
      e.innerHTML = ++cpt;
      if( cpt < nombre ) { 
         setTimeout(count, delai);
      }
    }
    setTimeout(count, delai);
  };
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            elements.forEach((e)=>{
                affichage(data[elements.indexOf(e)],e)
            })
        }
      });
    },
    { threshold: 0.5 }
  );
  const target = document.querySelector('#middlesection'); 
  observer.observe(target);

  function dropfunction(){
    document.getElementById('dropped').classList.toggle("dropdown-showed");
}



window.onclick=function(event){
    if (event.target.id!=='menubtn'){
        var dropdownDiv=document.getElementById('dropped');
        if (dropdownDiv.classList.contains('dropdown-showed')){
            dropdownDiv.classList.remove('dropdown-showed');
        }
    }
}

function Resto_logo_Animate(){
    document.addEventListener("DOMContentLoaded", function() {
        // Animation pour le logo
        anime({
          targets: '#my-logo',
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1500,
          delay:300
        });
    
        // Animation pour le nom du restaurant
        anime({
          targets: '.nom-restaurant',
          translateX: [-50, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1500,
          delay: 500 // 
        });
    
        anime({
            targets: '#plat-header',
            translateX: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 800 // 
          });
      });
}

Resto_logo_Animate();



  document.addEventListener("scroll", function() {
    var header = document.querySelector('header'); 
    var scrollPo = window.scrollY;
    if (scrollPo > 100) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
// _________________________animation pour les images_______________________


    var imagesContainer = document.querySelector('.my-images');
    var screenHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition < 100) {
      imagesContainer.classList.add('animate-up');

      anime({
        targets: '#top',
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: 'easeInQuad',
        duration: 500,
      });

    }
  });



  