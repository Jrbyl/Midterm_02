/*
    Jon Beltzhoover
    Andrew Johnson
    Midterm Project
    Team 02
*/

function fetchAndReplaceImages() {
    // Fetch JSON file
    fetch('./productData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 9; i++) {
            // Get div element with id 'img' + i
            const div = document.getElementById('img' + i);
            // Create img element
            const img = document.createElement('img');
            // Set src attribute of img element to image URL from JSON data based on div index
            img.src = data.items[i - 1].image;
            // Set alt attribute
            img.alt = data.items[i - 1].id;

            img.width = 300;
            img.height = 200;

            // Add img element to div
            div.appendChild(img);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

function fetchAndReplaceDescriptions() {
    // Fetch JSON file
    fetch('./productData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 9; i++) {
            
            const div = document.getElementById('desc' + i);
            
            const desc = document.createElement('p');
            desc.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.items[i - 1].product);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceButtons() {
    // Fetch JSON file
    fetch('./productData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 9; i++) {
            
            const div = document.getElementById('link' + i);
            
            const a = document.createElement('a');

            a.href = data.items[i - 1].url;
            a.target = "_blank";
            a.textContent = "View " + data.items[i - 1].id + " Here";
            a.style.color = "inherit"; 
            a.style.textDecoration = "none"; 
            // Add img element to div
            div.appendChild(a);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  // Call fetchAndReplaceImages function to initiate fetching and replacing images
  fetchAndReplaceImages();
  // Call fetchAndReplaceDescriptions function to initiate fetching and replacing descriptions
  fetchAndReplaceDescriptions();
  // Call fetchAndReplaceHeaders function to initiate fetching and replacing headers
  fetchAndReplaceButtons();


  function fetchAndReplaceHeadDesc() {
    // Fetch JSON file
    fetch('./productData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
            
            const div = document.getElementById('cdesc');
            
            const desc = document.createElement('p');
            desc.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.header[0].description);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceHeadTitle() {
    // Fetch JSON file
    fetch('./productData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        
            const div = document.getElementById('chead');
            
            const desc = document.createElement('h1');
            desc.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.header[0].header);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
      })
      .catch(error => console.error('Error fetching images:', error));
  }



  fetchAndReplaceHeadTitle();
  fetchAndReplaceHeadDesc();

  function fetchAndReplacePrice() {
    // Fetch JSON file
    fetch('./productData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 9; i++) {
            
            const div = document.getElementById('price' + i);
            
            const desc = document.createElement('p');
            
            var textNode = document.createTextNode(data.items[i - 1].price);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  fetchAndReplacePrice();