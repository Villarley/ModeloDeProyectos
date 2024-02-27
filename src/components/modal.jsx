import React, { useState } from 'react';

const Modal = ({ examples }) => { // Destructura `examples` de `props`
  const [isOpen, setIsOpen] = useState(false);
    console.log(examples)
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center">
      <button onClick={toggleModal} className="bg-white border-2 border-black hover:bg-gray-100 text-black p-3">
        Ver ejemplos
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="px-6 py-4">
                <div className="flex justify-end">
                  <button onClick={toggleModal} className="text-gray-400 hover:text-gray-800 focus:outline-none">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                  {examples.map((example, index) => (
                    <div key={index} className="mt-4">
                      <h3 className="text-lg font-bold">{example.title}</h3>
                      <p className="text-gray-600">{example.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
