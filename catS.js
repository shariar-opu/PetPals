const breedsSelect = document.getElementById('breeds');
const refreshButton = document.getElementById('refreshButton');
const catImage = document.getElementById('catImage');
const catName = document.getElementById('catName');
const catAge = document.getElementById('catAge');
const catTypeDetails = document.getElementById('catTypeDetails');
const placeName = document.getElementById('placeName');
const apiKey = 'live_ldAu2sBdx6odUuZHFo14MI5DP08uxuNW4ehkIins3eMglLIOf5XLmqM6VyQxn8kG'; 

const getBreedsList = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    
    data.forEach(breed => {
      const option = new Option(breed.name, breed.id);
      breedsSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching breeds list:', error);
  }
};

const getRandomCatImage = async (breedId) => {
  try {
    let url = 'https://api.thecatapi.com/v1/images/search';
    if (breedId) {
      url += `?breed_ids=${breedId}`;
    }
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    });
    const data = await response.json();
    const imageData = data[0];
    const imageUrl = imageData.url;

    // Additional cat information
    const name = imageData.breeds[0]?.name || 'Unknown';
    const age = imageData.breeds[0]?.life_span || 'Unknown';
    const breedDetails = imageData.breeds[0]?.description || 'Unknown';
    const origin = imageData.breeds[0]?.origin || 'Unknown';

    // Update image source and cat details
    catImage.src = imageUrl;
    catName.textContent = name;
    catAge.textContent = `Age: ${age}`;
    catTypeDetails.textContent = `Breed Details: ${breedDetails}`;
    placeName.textContent = `Origin: ${origin}`;
  } catch (error) {
    console.error('Error fetching random cat image:', error);
  }
};

refreshButton.addEventListener('click', () => {
  const selectedBreedId = breedsSelect.value;
  getRandomCatImage(selectedBreedId);
});

getBreedsList(); // Get breeds list on page load
getRandomCatImage(); // Get a random cat image on page load
