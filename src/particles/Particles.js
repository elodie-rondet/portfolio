// Complete React Code
import React from 'react';
import Particles from 'react-particles-js';
   
function App() {
  return (
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
   
  );
}

export default App;