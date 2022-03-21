import React, { useRef } from "react";
import Sectiontitle from "../section-title";
import "./style.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7kwtnro",
        "template_n4aegba",
        form.current,
        "FPcumI_xnuL-jmvQp"
      )
      .then(
        (result) => {
          alert("obrigado, sua presença foi confirmada");
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <Sectiontitle section={"Sois notre invité"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="rsvp-wrap">
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-form form-style">
                  <div className="col-12 col-sm-12">
                    <input
                      id="name"
                      type="text"
                      name="user_name"
                      placeholder="Votre nom*"
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <input
                      id="email"
                      type="email"
                      name="user_email"
                      placeholder="Votre Email*"
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <input
                      id="rvsp"
                      type="text"
                      name="user_convidados"
                      placeholder="nombre d'invités*"
                    />
                  </div>
                  <p></p>
                  <div className="col-12 col-sm-12 text-center">
                    <select className="form-control" name="event" id="cars">
                      <option value="tous les évènements">
                        tous les évènements
                      </option>
                      <option value="la cérémonie">la cérémonie</option>
                      <option value="fête">fête</option>
                    </select>
                  </div>
                  <div className="col-12 text-center">
                    <button id="submit" type="submit" className="submit">
                      Confirmer la présence
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
