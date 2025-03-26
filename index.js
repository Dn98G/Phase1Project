document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("list"); //selects the list id to display footbal clubs

  const badge = document.getElementById("badge"); //selects the element id'd as badge

  const description = document.getElementById("description"); //selects description element
  const name = document.getElementById("name"); //selects name element
  const league = document.getElementById("league");
  const position = document.getElementById("position");
  const captain = document.getElementById("captain");
  const founded = document.getElementById("founded");
  const titles = document.getElementById("titles");
  const ucl = document.getElementById("ucl");
  const coach = document.getElementById("coach");
  const players = document.getElementById("players");
  const stadium = document.getElementById("stadium");

  // Fetch clubs from db.json file
  fetch("db.json")
    .then((response) => response.json()) //converts response to objects
    .then((data) => {
      const clubs = data.clubs; //fetches data
      displayClubs(clubs); //club data to be displayed
    })
    .catch((error) => console.error("Error fetching data:", error));

  document.getElementById("explore").addEventListener("click", () => {
    document.getElementById("list").scrollIntoView({ behavior: "smooth" }); //to make my club list scroll into view when the explore button is clicked
  });

  function displayClubs(clubs) {
    // Function to display clubs list
    listContainer.innerHTML = ""; //clears the list before adding a new list

    clubs.forEach((club) => {
      //for each loops through each club
      const clubItem = document.createElement("li"); //creates a new li element
      clubItem.textContent = club.name; //introduces club name into the list
      clubItem.classList.add("club-item"); //adds a class for styling

      clubItem.setAttribute("data-league", club.league); //sets league name to data attribute in order to filter the clubs easily

      clubItem.addEventListener("click", () => displayDetails(club)); //function to show details

      listContainer.appendChild(clubItem); //adds a new li item to club list
    });
  }

  // Function to display club details
  function displayDetails(club) {
    badge.src = club.badge; //sets the text contents to their club properties in the objects
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
  const searchInput = document.getElementById("search").value; //gets the input value from id #search

  document.querySelectorAll(".club-item").forEach((clubItem) => {
    //selects all club elements and compares if the values match with the searched item
    clubItem.style.display = clubItem.textContent.includes(searchInput) //I used a ternary operator instead of if/else because it is shorter,,,,I used .style to easily change visibility without CSS
      ? "block" //if yes it is displayed     //I  also used .include instead of === to make it live-search friendly
      : "none"; //if not it is hidden
  });
}

document.getElementById("search").addEventListener("input", searchClubs); //calls searchClubs every time there  is an input

function filter() {
  const league = document.getElementById("filter").value; //gets the selected league from #filter
  document.querySelectorAll(".club-item").forEach((clubItem) => {
    //loops through all clubs
    const clubLeague = clubItem.getAttribute("data-league"); //gets each clubs league using the attribute value I set earlier

    clubItem.style.display =
      league === "All" || clubLeague === league ? "block" : "none"; //If the selected league is "All" it shows all clubs,,,,otherwise it shows the clubs matching selected leagues
  });
}

document.getElementById("filter").addEventListener("change", filter); //I tried adding an event listener to "league" in line 80 but it did not work,,then I did some research and found out that its because its not a DOM element
//we add an event listener to filter because we want to know when a user selects a new league,,therefore we are listening to "change" event
