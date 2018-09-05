(function() {
    'use strict';
  
    let brush = 'red';
  
    const paintPix = function(pixel) {
      pixel.classList.remove(pixel.classList.item(1));
      pixel.classList.add(brush);
    }
  
    const drawCanvas = function() {
      const canvas = document.querySelector('#canvas');
  
      for (let i = 0; i < 1978; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
      }
  
      canvas.addEventListener('click', (event) => {
        if (event.target === canvas) {
          return;
        }
  
        paintPix(event.target);
      });
    }
  
    const drawPalette = function() {
      const palette = document.querySelector('#palette');
  
      const colorChoices = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'black',
        'grey',
        'white',
        'brown'
       
      ];
  
      for (const colorClass of colorChoices) {
        const color = document.createElement('div');
        color.classList.add('color', colorClass);
        palette.appendChild(color);
      }
  
      const heading = document.createElement('h2');
      heading.textContent = 'Color:';
  
      const brushIndicator = document.createElement('div');
      brushIndicator.classList.add('brushIndicator', brush);
  
      palette.appendChild(heading);
      palette.appendChild(brushIndicator);
  
      palette.addEventListener('click', (event) => {
        if (event.target === palette) {
          return;
        }
  
        brush = event.target.classList.item(1);
  
        brushIndicator.classList.remove(brushIndicator.classList.item(1));
        brushIndicator.classList.add(brush);
      });
    }
  
    drawCanvas();
    drawPalette();
  })();