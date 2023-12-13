import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Review from './Task 4/Review';

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <div style={{
          backgroundImage: `url('/pictures/Catur (1).jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height : '40vw',
          width: '90vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div className='text-2xl font-bold text-teal-600 p-7'>
            <TypeAnimation
              sequence={[
                'Lets Learn Chess',
                1000, 
                'Lets Learn Together',
                1000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: '2em', display: 'inline-block', color: 'white' }} // You might want to change the text color so it's visible on the image
              repeat={Infinity}
            />
          </div>
        </div>

        <div className='italic text-lg items-center font-normal text px-4 py-4'>
          <p>
            “Life is a chess match. Every decision that you make has a consequence to it. <br/> - P.K. Subban "
          </p>     
        </div>  

        <Review/>
      </div>
    </React.Fragment>
  );
};

export default Home;
