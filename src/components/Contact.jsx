/* eslint-disable jsx-a11y/label-has-associated-control */
import NavBar from "./NavBar";

const Contact = () => {
  // state

  // fonction

  // debug

  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="contact__header__title">Contact</h1>
        <div>
          <NavBar />
        </div>
      </div>
      <div className="contact__text">
        <div className="contact__text__info">
          Vous souhaitez me joindre par<p> - téléphone ? 06 75 91 02 55</p>
          <p>- mail ? asfroitier@gmail.com</p>
        </div>
        <div className="contact__text__form">
          <div>
            Vous pouvez également m&apos;envoyer un message directement pour me
            donner votre ressenti :
          </div>
          <form className="contact__text__form__complet">
            <div className="contact__text__form__complet__label">
              <label
                className="contact__text__form__complet__label__name"
                htmlFor="name"
              >
                Votre nom :
              </label>
              <input
                className="contact__text__form__complet__label__input"
                type="text"
              />
            </div>
            <div>
              <label
                className="contact__text__form__complet__label__name"
                htmlFor="socity"
              >
                Votre entreprise :
              </label>
              <input
                className="contact__text__form__complet__label__input"
                type="text"
              />
            </div>
            <div>
              <label
                className="contact__text__form__complet__label__name"
                htmlFor="text"
              >
                Votre message :
              </label>
              <textarea
                className="contact__text__form__complet__label__input"
                type="message "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
