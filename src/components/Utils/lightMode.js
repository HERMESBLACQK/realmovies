// utils/lightMode.js

// Function to toggle the light mode
export const toggleLightMode = () => {
          const body = document.querySelector('body');
          body.classList.toggle('light-mode');
        
          // Save the light mode preference to localStorage or Vuex if needed
        };
        
        // Function to initialize the light mode based on the user preference
        export const initializeLightMode = () => {
          const isLightMode = localStorage.getItem('lightMode') === 'true';
        
          if (isLightMode) {
            const body = document.querySelector('body');
            body.classList.add('light-mode');
          }
        };
        