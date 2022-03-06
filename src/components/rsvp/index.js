import React from "react";
import Sectiontitle from "../section-title";
import "./style.css";

import { useForm } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mgedynbk");
  if (state.succeeded) {
    return <Sectiontitle section={"Convidado Confirmado"} />;
  }
  return (
    <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <Sectiontitle section={"Seja Nosso Convidado"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="rsvp-wrap">
              <form onSubmit={handleSubmit}>
                <div className="contact-form form-style">
                  <div className="col-12 col-sm-12">
                    <input
                      id="name"
                      type="name"
                      name="name"
                      placeholder="Seu Nome*"
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Seu Email*"
                    />
                  </div>
                  <div className="col-12 col-sm-12">
                    <input
                      id="rvsp"
                      type="rvsp"
                      name="Convidados"
                      placeholder="Numero de convidados*"
                    />
                  </div>
                  <p></p>
                  <div className="col-12 col-sm-12 text-center">
                    <select className="form-control" name="event" id="cars">
                      <option value="Todos eventos">Todos eventos</option>
                      <option value="cerimonia">Cerimonia</option>
                      <option value="festa">festa</option>
                    </select>
                  </div>
                  <div className="col-12 text-center">
                    <button id="submit" type="submit" className="submit">
                      Send Invitation
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
}
function App() {
  return <ContactForm />;
}
export default App;
