import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Johnson",
    role: "Creative Director",
    company: "Vogue Magazine",
    quote: "Jane brings an exceptional presence to every photoshoot. Her professionalism and ability to embody different personas made our editorial shoot a remarkable success.",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Fashion Photographer",
    company: "Studio Elite",
    quote: "Working with Jane has been one of the highlights of my career. Her intuitive understanding of light, angles, and expressions makes my job as a photographer seamless.",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Brand Manager",
    company: "Luxury Fashion House",
    quote: "Jane's versatility and commitment to our brand vision elevated our campaign to new heights. She's not just a model, but a creative partner who brings ideas to the table.",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">Testimonials</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 shadow-sm">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].imageUrl} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-medium">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute -bottom-5 right-8 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white shadow-md hover:bg-gray-50 flex items-center justify-center transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white shadow-md hover:bg-gray-50 flex items-center justify-center transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-12">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;