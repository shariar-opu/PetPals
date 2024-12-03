const speciesSelect = document.getElementById('species');
const refreshButton = document.getElementById('refreshButton');
const birdImage = document.getElementById('birdImage');
const birdName = document.getElementById('birdName');
const birdAge = document.getElementById('birdAge');
const birdTypeDetails = document.getElementById('birdTypeDetails');
const placeName = document.getElementById('placeName');
const apiKey = '3544p3dvi7aq';

const getSpeciesList = async () => {
  try {
    const response = await fetch(' http://ebird.org/ws1.0');
    const data = await response.json();
    
    data.forEach(species => {
      const option = new Option(species.name, species.id);
      speciesSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching species list:', error);
  }
};

const getRandomBirdImage = async (speciesId) => {
  try {
    let url = ' http://ebird.org/ws1.0';
    if (speciesId) {
      url += `?species_id=${speciesId}`;
    }
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    });
    const data = await response.json();
    const imageData = data[0];
    const imageUrl = imageData.url;

    // Additional bird information
    const name = imageData.species?.name || 'Unknown';
    const age = imageData.species?.lifespan || 'Unknown';
    const typeDetails = imageData.species?.description || 'Unknown';
    const origin = imageData.species?.origin || 'Unknown';

    // Update image source and bird details
    birdImage.src = imageUrl;
    birdName.textContent = name;
    birdAge.textContent = `Lifespan: ${age}`;
    birdTypeDetails.textContent = `Description: ${typeDetails}`;
    placeName.textContent = `Origin: ${origin}`;
  } catch (error) {
    console.error('Error fetching random bird image:', error);
  }
};

refreshButton.addEventListener('click', () => {
  const selectedSpeciesId = speciesSelect.value;
  getRandomBirdImage(selectedSpeciesId);
});

getSpeciesList(); // Get species list on page load
getRandomBirdImage(); // Get a random bird image on page load
