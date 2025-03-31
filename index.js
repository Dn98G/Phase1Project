document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("list");

  const badge = document.getElementById("badge");

  const description = document.getElementById("description");
  const name = document.getElementById("name");
  const league = document.getElementById("league");
  const position = document.getElementById("position");
  const captain = document.getElementById("captain");
  const founded = document.getElementById("founded");
  const ucl = document.getElementById("ucl");
  const coach = document.getElementById("coach");
  const players = document.getElementById("players");
  const stadium = document.getElementById("stadium");

  
  fetch("db.json")
    .then((response) => response.json()) 
    .then((data) => {
      const clubs = data.clubs; 
      displayClubs(clubs); 
    })
    .catch((error) => console.error("Error fetching data:", error));

  document.getElementById("explore").addEventListener("click", () => {
    document.getElementById("list").scrollIntoView({ behavior: "smooth" }); /
  });

  function displayClubs(clubs) {
    
    listContainer.innerHTML = "";

    clubs.forEach((club) => {
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
    name.textContent = club.name;
    description.textContent = club.description;
    league.textContent = club.league;
    position.textContent = club.position;
    captain.textContent = club.captain;
    founded.textContent = club.founded;
    titles.textContent = club.league_titles;
    ucl.textContent = club.ucl_titles;
    coach.textContent = club.coach;
    players.textContent = club.key_players;
    stadium.textContent = club.stadium;
  }
});

function searchClubs() {
  const searchInput = document.getElementById("search").value; 

  document.querySelectorAll(".club-item").forEach((clubItem) => {
    clubItem.style.display = clubItem.textContent.includes(searchInput) 
      ? "block" 
      : "none"; 
  });
}
document.getElementById("search").addEventListener("input", searchClubs);

function filter() {
  const league = document.getElementById("filter").value; 
  document.querySelectorAll(".club-item").forEach((clubItem) => {
    const clubLeague = clubItem.getAttribute("data-league");

    clubItem.style.display =
      league === "All" || clubLeague === league ? "block" : "none";
  });
}

document.getElementById("filter").addEventListener("change", filter);