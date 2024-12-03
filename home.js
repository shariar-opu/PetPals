window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

function displayAnimalDetails(category, name, description) {
  const animalDetails = document.getElementById('animalDetails');
  animalDetails.innerHTML = `
    <h2>${category} Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Description:</strong> ${description}</p>
  `;
}
