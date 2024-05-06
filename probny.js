(function() {

    const ourClasses = [
       {
           id: "1",
           title: "MAXFIT",
           description: "MaxFit is an extensive training class that will help your body work at maximum load from the start to the end of your workout to gain the best results faster.",
           image: "img/blog__one.jpg"
       },
       {
           id: "2",
           title: "CAMPFIT",
           description: "Have fun while mixing your interval training, body weight exercises, and strength training!",
           image: "img/blog__two.jpg"
       },
       {
           id: "3",
           title: "POWERFIT",
           description: "PowerFit is a high strength training class which uses barbells/cardio to get maximum results.",            
           image: "img/blog__three.jpg"
       },
       {
           id: "4",
           title: "SPINFIT",
           description: "The members of SpinFit use the stationary bike which imitates the real world bicycle obstacle course with the capacity to burn more than 500 calories per class",            
           image: "img/services_one.jpg"
       },
    ];

    function renderClasses(products) {
       const classesContainer = document.querySelector('.blog_image_container');
       classesContainer.innerHTML = '';
       for (const product of products) {
           classesContainer.innerHTML += `
          <article class="main__img-ball">
          <img
            class="main__picture-ball"
            src="${ourClasses.image}"
            alt="${ourClasses.title}"
          />                  
          <h2 class="main__picture-ball-subtitle">${ourClasses.title}</h2>
          <a class="main__plus-minus">
              <hr class="main__picture-ball-horisontal-line" />
              <hr class="main__picture-ball-vertical-line" />
              <p class="main__picture-ball-text">${ourClasses.description}
          </a>            
        </article>`;    
  }
}

renderClasses(products);

})();






















