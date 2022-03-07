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
        "service_ompk8ns",
        "template_uiyacu9",
        form.current,
        "O-yqbmXNmWRVcGZRT"
      )
      .then(
        (result) => {
          alert("Danke, Ihre Anwesenheit wurde bestätigt");
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <Sectiontitle section={"Sei unser Gast"} />
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
                      placeholder="Dein Name*"
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <input
                      id="email"
                      type="email"
                      name="user_email"
                      placeholder="Deine E-Mail*"
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <input
                      id="rvsp"
                      type="text"
                      name="user_convidados"
                      placeholder="Anzahl der Gäste*"
                    />
                  </div>
                  <p></p>
                  <div className="col-12 col-sm-12 text-center">
                    <select className="form-control" name="event" id="cars">
                      <option value="alle Veranstaltungen">
                        alle Veranstaltungen
                      </option>
                      <option value="Zeremonie">Zeremonie</option>
                      <option value="Gruppe">Gruppe</option>
                    </select>
                  </div>
                  <div className="col-12 text-center">
                    <button id="submit" type="submit" className="submit">
                      Anwesenheit bestätigen
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
