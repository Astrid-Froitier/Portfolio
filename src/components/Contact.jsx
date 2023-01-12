import React from "react";
import networkLinks from "../../data/links";
import cv from "../../public/files/Astrid-FROITIER.pdf";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__text">
        <div className="contact__text__header">
          <p>
            Envie de me rencontrer, d&apos;en savoir un peu plus sur moi ou
            juste de me laisser un commentaire ?
          </p>
          <p>Ça se passe juste en dessous !</p>
        </div>
        <div className="contact__text__links">
          <div className="contact__text__links__socialNetwork">
            <p className="contact__text__links__socialNetwork__title">
              Je vous invite à me suivre sur les réseaux sociaux :
            </p>
            <div className="contact__text__links__socialNetwork__map">
              {networkLinks &&
                networkLinks.map((link, index) => (
                  <div
                    // className="contact__text__links__socialNetwork__map"
                    key={index}
                  >
                    <a
                      className="contact__text__links__socialNetwork__map__a"
                      href={link.url}
                      target="blank"
                    >
                      <img
                        className="contact__text__links__socialNetwork__map__a__img"
                        src={link.img}
                        alt="logo"
                      />
                    </a>
                  </div>
                ))}
            </div>
          </div>

          <div className="contact__text__links__mail">
            <p className="contact__text__links__mail__title">
              Vous voulez en savoir un peu plus ? N&apos;hésitez pas à
              m&apos;écrire !
            </p>
            <a
              className="contact__text__links__mail__a"
              href="mailto: asfroitier@gmail.com"
              target="blank"
            >
              <img
                className="contact__text__links__mail__a__img"
                src="/assets/logo/mail-svgrepo-com.svg"
                alt="logo mail"
              />
            </a>
          </div>

          <div className="contact__text__links__cv">
            <p className="contact__text__links__cv__title">
              Vous pouvez également télécharger mon CV
            </p>
            <a className="contact__text__links__cv__a" href={cv} target="blank">
              <img
                className="contact__text__links__cv__a__img"
                src="/assets/logo/resume-svgrepo-com.svg"
                alt="logo cv"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
