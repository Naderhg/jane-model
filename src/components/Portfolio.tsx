import React, { useState } from 'react';

type Category = 'all' | 'editorial' | 'commercial' | 'runway';

interface PortfolioItem {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'editorial',
    imageUrl: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Vogue Summer Editorial'
  },
  {
    id: 2,
    category: 'commercial',
    imageUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Designer Fragrance Campaign'
  },
  {
    id: 3,
    category: 'runway',
    imageUrl: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Paris Fashion Week'
  },
  {
    id: 4,
    category: 'editorial',
    imageUrl: 'https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Harper\'s Bazaar Cover Shoot'
  },
  {
    id: 5,
    category: 'commercial',
    imageUrl: 'https://images.pexels.com/photos/2060241/pexels-photo-2060241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Luxury Watch Brand'
  },
  {
    id: 6,
    category: 'runway',
    imageUrl: 'https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Milan Fashion Week'
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">Portfolio</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-12"></div>
        
        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 md:space-x-8 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 transition-colors duration-300 ${
                activeCategory === 'all' ? 'text-gold border-b border-gold' : 'text-gray-600 hover:text-gold'
              }`}
            >
              ALL
            </button>
            <button 
              onClick={() => setActiveCategory('editorial')}
              className={`px-4 py-2 transition-colors duration-300 ${
                activeCategory === 'editorial' ? 'text-gold border-b border-gold' : 'text-gray-600 hover:text-gold'
              }`}
            >
              EDITORIAL
            </button>
            <button 
              onClick={() => setActiveCategory('commercial')}
              className={`px-4 py-2 transition-colors duration-300 ${
                activeCategory === 'commercial' ? 'text-gold border-b border-gold' : 'text-gray-600 hover:text-gold'
              }`}
            >
              COMMERCIAL
            </button>
            <button 
              onClick={() => setActiveCategory('runway')}
              className={`px-4 py-2 transition-colors duration-300 ${
                activeCategory === 'runway' ? 'text-gold border-b border-gold' : 'text-gray-600 hover:text-gold'
              }`}
            >
              RUNWAY
            </button>
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                <div className="w-full p-4 bg-white bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;