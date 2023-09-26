import './ContactForm.css';

import Send from '../../utils/Icons/send.png';
const ContactForm = () => {
  return (
    <div className="flex flex-col p-6 col-span-4 sm:col-span-2 lg:col-span-1 mx-auto sm:m-5  ">
      <div className="flex flex-col my-5">
        <label className="text-red-400 text-lg">Name</label>
        <input
          type="text"
          placeholder="Ehtesham Zahid"
          className="input input-bordered input-error w-full max-w-xs text-white "
        />
      </div>
      <div className="flex flex-col my-5">
        <label className="text-red-400 text-lg">Email</label>
        <input
          type="text"
          placeholder="ehteshamzahid@gmail.com"
          className="input input-bordered input-error w-full max-w-xs text-white "
        />
      </div>
      <div className="flex flex-col my-5">
        <label className="text-red-400 text-lg">Message</label>
        <textarea
          type="text"
          placeholder="Type your message..."
          className="input input-bordered input-error w-full max-w-xs text-white p-2 h-24"
        />
      </div>
      <div className="flex justify-center md:justify-start">
        <button className="btn btn-error text-lg rounded-full hover:bg-white">
          Send
          <img src={Send} className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
