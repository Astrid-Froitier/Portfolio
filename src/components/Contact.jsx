import React from "react";

const Contact = () => {
  // state

  // fonction

  // debug

  return (
    <div className="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__text">
        <div className="contact__text__header">
          Envie de me rencontrer, d&apos;en savoir un peu plus sur moi ou juste
          de me laisser un commentaire ?<p>Ça se passe juste en dessous !</p>
        </div>
        <form className="contact__text__complet">
          <div className="contact__text__">
            <div className="contact__text__complet">
              <label
                className="contact__text__complet__label__name"
                htmlFor="name"
              >
                Votre nom :{" "}
                <input
                  className="contact__text__complet__label__input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label
                className="contact__text__complet__label__name"
                htmlFor="enterprise"
              >
                Votre entreprise :{" "}
                <input
                  className="contact__text__complet__label__input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label
                className="contact__text__complet__label__name"
                htmlFor="text"
              >
                Votre message :{" "}
                <textarea
                  className="contact__text__complet__label__input"
                  type="message "
                />
              </label>
            </div>
          </div>

          <div className="">
            <button type="button">envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
