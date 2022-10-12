import React from "react";
import Heading from "./Heading";
import "./contact.css";
import Forms from "./Forms";

const Contact = () => {
  return (
    <>
      <section className="contact colors" id="Contact">
        <div className="container">
          <Heading h2="contact" data="Contact Me" />
          <form>
            <div className="row">
              <Forms title="First Name" label="fname" type="text" />
              <Forms title="Last Name" label="lname" type="text" />
              <Forms title="Email" label="email" type="email" />
              <Forms title="Password" label="pwd" type="password" />
            </div>
            <button className="btn btn-primary d-flex align-items-center justify-content-center">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
