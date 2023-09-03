import './ContactForm.css';
const ContactForm = () => {
  return (
    <div className="login-box w-80 sm:w-96">
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <center>
          <a href="#">
            LET'S TALK
            <span></span>
          </a>
        </center>
      </form>
    </div>
  );
};

export default ContactForm;
