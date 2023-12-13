import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen bg-gray-900 max-xl:">
      <div className="mb-8 dark:bg-gray-900">
        <h1 className="text-3xl font-bold bg-gray-900 dark:text-gray-100">
          About Me
        </h1>
      </div>

      <section className="flex flex-col lg:flex-row w-full bg-gray-50 dark:bg-gray-900 justify-between items-center px-4 py-4">
        <div className="lg:w-1/2 bg-gray-900 dark:bg-gray-800 p-4 flex items-center justify-center">
          <img
            src="/pictures/Foto formal 1.jpg"
            alt="Deandro Najwan"
            className="h-80 p-4 rounded-full object-scale-down"
          />
        </div>
        <div className="flex flex-col justify-between w-full max-w-2xl px-8 mx-auto py-8 lg:w-1/2">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-sm md:text-2xl">
            Hi, My name is Deandro Najwan Ahmad Syahbanna
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            I am an Undergraduate Computer Engineering student at the University of Indonesia who is interested in learning new things about computer technologies such as software and hardware. I enjoy being a member of a team and also love to work with my friends to solve difficulties.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
