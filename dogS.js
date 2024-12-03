const breedsSelect = document.getElementById('breeds');
const refreshButton = document.getElementById('refreshButton');
const dogImage = document.getElementById('dogImage');
const dogName = document.getElementById('dogName');
const dogAge = document.getElementById('dogAge');
const dogTypeDetails = document.getElementById('dogTypeDetails');
const placeName = document.getElementById('placeName');
const apiKey = 'live_Zq5WOmolfOddQpqjLyjbK7ssoQOEQeqEkNRtiERxoTVpUtlMgxjo8SF72Rf2lfKf'; 

const getBreedsList = async () => {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const data = await response.json();
    
    data.forEach(breed => {
      const option = new Option(breed.name, breed.id);
      breedsSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching breeds list:', error);
  }
};

const getRandomDogImage = async (breedId) => {
  try {
    let url = 'https://api.thedogapi.com/v1/images/search';
    if (breedId) {
      url += `?breed_id=${breedId}`;
    }
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    });
    const data = await response.json();
    const imageData = data[0];
    const imageUrl = imageData.url;

    // Additional dog information
    const name = imageData.breeds[0]?.name || 'Unknown';
    const age = imageData.breeds[0]?.life_span || 'Unknown';
    const breedDetails = imageData.breeds[0]?.bred_for || 'Unknown';
    const origin = imageData.breeds[0]?.origin || 'Unknown';

    //image source and dog details
    dogImage.src = imageUrl;
    dogName.textContent = name;
    dogAge.textContent = `Age: ${age}`; 
    dogTypeDetails.textContent = `Breed Details: ${breedDetails}`;
    placeName.textContent = `Origin: ${origin}`;
  } catch (error) {
    console.error('Error fetching random dog image:', error);
  }
};

refreshButton.addEventListener('click', () => {
  const selectedBreedId = breedsSelect.value;
  getRandomDogImage(selectedBreedId);
});

getBreedsList(); // Get breeds list on page load
getRandomDogImage(); // Get a random dog image on page load
