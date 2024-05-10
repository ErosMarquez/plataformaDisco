const favoriteRecords = ["disco1", "disco2"];

function addFavorites(favorites) {
    const imgs = document.querySelectorAll("img");
  
    imgs.forEach((img) => {
      if (favorites.includes(img.getAttribute ('name'))) {
        const icon = document.createElement("i");
        icon.classList.add("fa-regular");
        icon.classList.add("fa-star");
        img.parentNode.appendChild(icon);
        img.parentElement.classList.add("favorite");
        
      }
    });
  }
  
  let star = document.querySelectorAll('i')
  star.forEach((i)=>{
      i.addEventListener("click", function(change) {
          change.preventDefault();
            i.classList.toggle("fa-solid");
        });
  })
  
  addFavorites (favoriteRecords);