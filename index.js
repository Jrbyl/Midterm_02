/*
    Jon Beltzhoover
    Andrew Johnson
    Midterm Project
    Team 02
*/

function fetchAndReplaceImages() {
    // Fetch JSON file
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            // Get div element with id 'img' + i
            const div = document.getElementById('img' + i);
            // Create img element
            const img = document.createElement('img');
            // Set src attribute of img element to image URL from JSON data based on div index
            img.src = data.headlines[i - 1].url;
            // Set alt attribute
            img.alt = data.headlines[i - 1].title;

            img.height = 250;
            img.width = 350;
            // Add img element to div
            div.appendChild(img);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

function fetchAndReplaceDescriptions() {
    // Fetch JSON file
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            
            const div = document.getElementById('desc' + i);
            
            const desc = document.createElement('p');
            desc.style.fontFamily = 'cursive, Arial';

            var textNode = document.createTextNode(data.headlines[i - 1].description);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceHeaders() {
    // Fetch JSON file
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            
            const div = document.getElementById('head' + i);
            
            const desc = document.createElement('h2');
            desc.style.fontFamily = 'cursive, Arial';

            var textNode = document.createTextNode(data.headlines[i - 1].header);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  // Call fetchAndReplaceImages function to initiate fetching and replacing images
  fetchAndReplaceImages();
  // Call fetchAndReplaceDescriptions function to initiate fetching and replacing descriptions
  fetchAndReplaceDescriptions();
  // Call fetchAndReplaceHeaders function to initiate fetching and replacing headers
  fetchAndReplaceHeaders();



  function fetchAndReplaceCaroDesc() {
    // Fetch JSON file
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            
            const div = document.getElementById('cdesc' + i);
            
            const desc = document.createElement('p');
            desc.style.fontFamily = 'cursive, Arial';

            var textNode = document.createTextNode(data.carousel[i - 1].description);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceCaroHead() {
    // Fetch JSON file
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            
            const div = document.getElementById('chead' + i);
            
            const desc = document.createElement('h1');
            desc.style.fontFamily = 'cursive, Arial';

            var textNode = document.createTextNode(data.carousel[i - 1].header);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

fetchAndReplaceCaroDesc();
fetchAndReplaceCaroHead();