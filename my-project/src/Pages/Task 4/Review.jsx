import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=6')
      .then(res => {

        const myQuotes = [
        'Setelah mempelajari konsep bermain catur di website ini, saya dapat meningkatkan kemampuan bermain catur saya',
        'Semenjak 2 bulan saya mempelajari konsep dasar catur disini, rating elo saya sudah meningkat dengan baik',
        'saya sangat senang dengan website ini karena saya dapat mengalahkan teman saya untuk pertama kalinya',
        'menurut saya pribadi, website ini cocok untuk pemula karena metode pengajarannya yang menyenangkan',
        'Salah satu tempat yang recomended menurut saya untuk tempat bermain catur secara gratis adalah website ini', 
        'Terimakasih kepada website LetsLearnChess, karena telah meningkatkan rating saya dari 800 hingga 1100 dalam kurun waktu 3 minggu',
        ];

        const apiTestimonials = res.data.results.map((result, index) => ({
        name: result.name.first,
        avatar: result.picture.medium,
        testimonial: myQuotes[index], // Replace with the corresponding quote
        // Unique identifier for each testimonial
        }));

        setTestimonials(apiTestimonials);

      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className='p-20 bg-gray-100'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8 text-blue-400'>Testimoni Review</h2>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-8 rounded-md shadow-md md:w-full lg:w-3/4 xl:w-2/3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='bg-pink-200 p-6 shadow-md rounded-md'>
                  <div className='md-4'>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='w-20 h-20 object-cover rounded-full mx-auto mb-4'
                    />
                  </div>
                  <p className='text-gray-800 mb-4'>{testimonial.testimonial}</p>
                  <p className='text-blue-500 font-bold'>{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
