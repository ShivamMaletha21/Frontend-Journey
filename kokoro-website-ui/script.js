// animated counter

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){

      const counter = entry.target;
      const target = +counter.dataset.target;

      let count = 0;

      const updateCounter = () => {
        const increment = target / 100;

        if(count < target){
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        }else{
          counter.innerText = target + "+";
        }
      };

      updateCounter();
      observer.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});