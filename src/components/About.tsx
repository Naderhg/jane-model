import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Jane Doe Portrait" 
                className="w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-2">About Me</h2>
            <div className="w-16 h-px bg-gold mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 8 years of professional modeling experience, I've had the privilege of working with renowned brands and photographers across the globe. My journey began in New York City, where I was discovered at the age of 19, and has since taken me to fashion capitals including Paris, Milan, and Tokyo.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My versatility as a model allows me to excel in various styles, from high fashion editorials to commercial campaigns. I pride myself on my professionalism, adaptability, and ability to bring creative visions to life.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Measurements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Height: 5'11" / 180 cm</li>
                  <li>Bust: 32" / 81 cm</li>
                  <li>Waist: 24" / 61 cm</li>
                  <li>Hips: 34" / 86 cm</li>
                  <li>Shoe: 9 US / 40 EU</li>
                  <li>Hair: Blonde</li>
                  <li>Eyes: Blue</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Vogue Magazine</li>
                  <li>Paris Fashion Week</li>
                  <li>Luxury Brand Campaigns</li>
                  <li>Runway for Top Designers</li>
                  <li>Television Commercials</li>
                  <li>Beauty & Cosmetic Ads</li>
                </ul>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
