import Navbar from '../../Components/Navbar/Navbar';
import ContactMeSection from '../../Components/ContactMeSection/ContactMeSection';
import Footer from '../../Components/Footer/Footer';

const ContactMe = () => {
  return (
    <div className="font-balooBhai flex h-screen flex-col justify-between">
      <Navbar />
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export default ContactMe;
