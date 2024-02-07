let data=[5,120,100,10]
let elements=Array.from(document.querySelectorAll('#compt'))
const affichage = (nombre, e) => {
    let cpt = 0
    var delai = Math.ceil((1 * 1000) / nombre);
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

  