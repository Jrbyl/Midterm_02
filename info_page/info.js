/*
    Jon Beltzhoover
    Andrew Johnson
    Midterm Project
    Team 02
*/

function fetchAndReplaceDescriptions() {
    // Fetch JSON file
    fetch('./infoData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 10; i++) {
            
            const div = document.getElementById('desc' + i);
            
            const desc = document.createElement('p');
            desc.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.tips[i - 1].description);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceHeaders() {
    // Fetch JSON file
    fetch('./infoData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 10; i++) {
            
            const div = document.getElementById('head' + i);
            
            const h3 = document.createElement('h3');
            h3.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.tips[i - 1].header);
            h3.appendChild(textNode);
            // Add img element to div
            div.appendChild(h3);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceFacts() {
    // Fetch JSON file
    fetch('./infoData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 5; i++) {
            
            const div = document.getElementById('fact' + i);
            
            const desc = document.createElement('p');
            desc.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.facts[i - 1].description);
            desc.appendChild(textNode);
            // Add img element to div
            div.appendChild(desc);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceVidTitle() {
    // Fetch JSON file
    fetch('./infoData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            
            const div = document.getElementById('vid' + i);
            
            const h6 = document.createElement('h6');
            h6.style.fontFamily = 'cursive, Arial';
            
            var textNode = document.createTextNode(data.videos[i - 1].title + ", \n" + data.videos[i - 1].author);
            h6.appendChild(textNode);
            // Add img element to div
            div.appendChild(h6);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceButtons() {
    // Fetch JSON file
    fetch('./infoData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            
            const div = document.getElementById('link' + i);
            
            const a = document.createElement('a');

            a.href = data.videos[i - 1].url;
            a.target = "_blank";
            a.textContent = "Watch Here";
            a.style.color = "black"; 
            a.style.textDecoration = "none"; 
            // Add img element to div
            div.appendChild(a);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  function fetchAndReplaceImages() {
    // Fetch JSON file
    fetch('./infoData.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over each headline div and replace with image
        for (let i = 1; i <= 3; i++) {
            // Get div element with id 'img' + i
            const div = document.getElementById('img' + i);
            // Create img element
            const img = document.createElement('img');
            // Set src attribute of img element to image URL from JSON data based on div index
            img.src = data.videos[i - 1].image;
            // Set alt attribute
            img.alt = data.videos[i - 1].url;

            img.height = 200;
            img.width = 300;
            // Add img element to div
            div.appendChild(img);
          }
      })
      .catch(error => console.error('Error fetching images:', error));
  }

  fetchAndReplaceDescriptions();
  fetchAndReplaceHeaders();
  fetchAndReplaceFacts();
  fetchAndReplaceVidTitle();
  fetchAndReplaceButtons();
  fetchAndReplaceImages();