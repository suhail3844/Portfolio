import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

   emailjs.sendForm(
      'service_cmvq674',    // replace with actual service ID
      'template_a46y9kb',   // replace with actual template ID
      formRef.current,
      'J5EZOYlgHRAXAC_6R'     // replace with actual public key
    )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message. Try again.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="pt-20 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>

        <div className="flex justify-center gap-6 text-3xl mb-8 text-gray-700">
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/suhail-nazir-taili-a97b752b8/" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
          <a href="https://github.com/suhail3844" target="_blank" rel="noreferrer" className="hover:text-black"><FaGithub /></a>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 gap-4 bg-white p-6 rounded shadow-md">
          <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="p-2 border rounded" />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"></path>
              </svg>
            ) : null}
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

