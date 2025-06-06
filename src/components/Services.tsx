import React from 'react';
import { Camera, Users, Video, Award } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-gold">{icon}</div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">Services</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          I offer professional modeling services for various projects and campaigns.
          With years of experience in the industry, I bring both versatility and professionalism to every shoot.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Fashion Photography" 
            description="Editorial, commercial, and campaign shoots for fashion brands, magazines, and lookbooks."
            icon={<Camera size={28} />}
          />
          <ServiceCard 
            title="Runway Modeling" 
            description="Professional runway appearances for fashion shows, designer presentations, and showrooms."
            icon={<Users size={28} />}
          />
          <ServiceCard 
            title="Video Production" 
            description="Commercial work, promotional videos, fashion films, and brand campaigns."
            icon={<Video size={28} />}
          />
          <ServiceCard 
            title="Brand Ambassador" 
            description="Long-term partnerships with brands for campaigns, events, and social media representation."
            icon={<Award size={28} />}
          />
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            INQUIRE NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;