import React from 'react';
    import './Home.css';

    function Home() {
      const categories = [
        'All',
        'News',
        'Music',
        'Podcasts',
        'Live',
        'Public transport',
        'Mixes',
        'Reaction videos',
        'Villages',
        'Mutual funds',
        'AI',
        'Marketplaces',
        'Aircraft',
      ];

      return (
        <div className="home-categories">
          {categories.map((category, index) => (
            <button key={index} className="category-button">
              {category}
            </button>
          ))}
        </div>
      );
    }

    export default Home;
