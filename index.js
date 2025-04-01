document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("list"); 

  const badge = document.getElementById("badge"); 

  const description = document.getElementById("description"); 
  const name = document.getElementById("name"); 
  const height = document.getElementById("height");
  const position = document.getElementById("position");
  const dateOfBirth = document.getElementById("dob");
  const weight = document.getElementById("weight");
  const nationality = document.getElementById("nationality");
  

  
  fetch("db.json")
    .then((response) => response.json()) 
    .then((data) => {
      const manu = data.manu; 
      displayManu(manu); 
    })
    .catch((error) => console.error("Error fetching data:", error));

  document.getElementById("explore").addEventListener("click", () => {
    document.getElementById("list").scrollIntoView({ behavior: "smooth" }); 
  });

  function displayManu(manu) {

    listContainer.innerHTML = "";

    manu.forEach((club) => {
     
      const clubItem = document.createElement("li"); 
      clubItem.textContent = club.name; 
      clubItem.classList.add("club-item"); 

      clubItem.setAttribute("data-league", club.league);

      clubItem.addEventListener("click", () => displayDetails(club));

      listContainer.appendChild(clubItem);
    });
  }


  function displayDetails(club) {
    badge.src = club.badge;
    name.textContent = manu.name;
    description.textContent = club.description;
    
    
  }
});


document.getElementById("search").addEventListener("input", searchClubs);
