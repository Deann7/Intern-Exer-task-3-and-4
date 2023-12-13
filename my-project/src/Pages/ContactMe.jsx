import React, { useState } from 'react';

const ContactMe = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const countCharacters = (text) => {
    const characters = text.match(/[a-zA-Z0-9]/g);
    return characters ? characters.length : 0;
  };

  const validateForm = () => {
    const subjectLength = countCharacters(subject);
    const messageLength = countCharacters(message);

    if (subjectLength < 5 || subjectLength > 20) {
      alert("Subject must be between 5 and 20 characters");
      return false;
    }

    if (messageLength < 20 || messageLength > 540) {
      alert("Message must be between 20 and 540 characters");
      return false;
    }

    window.location.href = "https://mail.google.com/mail/u/1/#inbox";
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    validateForm();
  };

  return (
    <div>
      <section id="ContactMe" className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              You can contact me by submitting this form
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text--600">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={subject}
                    onChange={handleSubjectChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder='Write your subject here.....'
                    maxLength={20}
                    minLength={5}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder='Enter your message here..'
                    maxLength={540}
                    minLength={20}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleSubmit}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
