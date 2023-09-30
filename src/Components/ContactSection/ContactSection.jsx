import ContactAnimation from '../ContactAnimation/ContactAnimation';
import ContactDetails from '../ContactDetails/ContactDetails';
import ContactForm from '../ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <div id="Contact" className="my-20">
      <p className="text-red-600 font-black text-center text-5xl  mt-20 sm:mb-10">
        Contact Me
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-3  gap-4 ">
        <ContactForm />
        <ContactDetails />
        <ContactAnimation />
      </div>
    </div>
  );
};

export default ContactSection;
