import React from "react";

const Contact = () => {
  // state

  // fonction

  // debug

  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="contact__header__title">Contact</h1>
      </div>
      <div className="contact__text">
        <div className="contact__text__form">
          <div className="contact__text__form__header">
            Envie de me rencontrer, d&apos;en savoir un peu plus sur moi ou
            juste de me laisser un commentaire ?
            <p>Ça se passe juste en dessous !</p>
          </div>
          <form className="contact__text__form__complet">
            <div className="contact__text__form__complet">
              <label
                className="contact__text__form__complet__label__name"
                htmlFor="name"
              >
                Votre nom :
                <input
                  className="contact_text__form__complet__label__input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label
                className="contact__text__form__complet__label__name"
                htmlFor="enterprise"
              >
                Votre entreprise :
                <input
                  className="contact__text__form__complet__label__input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label
                className="contact__text__form__complet__label__name"
                htmlFor="text"
              >
                Votre message :
                <textarea
                  className="contact__text__form__complet__label__input"
                  type="message "
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
