import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Create this file for the CSS

const App = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Our Store</h1>
      <p className="welcome-description">Explore our wide range of products from the best categories.</p>

      <Link to="/home" className="welcome-button">
        View Products
      </Link>
    </div>
  );
};

export default App;










// import React from 'react';
// import { Link } from 'react-router-dom';

// const App = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
//       <p>Explore our wide range of products from the best categories.</p>

//       <Link to="/home" className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded">
//         View Products
//       </Link>
//     </div>
//   );
// };

// export default App;