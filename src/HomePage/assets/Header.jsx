import { Button } from "@mui/material";
import React from "react";
import instagram from "./icons/instagram.svg";
import vk from "./icons/vk.svg";
import gitHub from "./icons/gitHub.svg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Смотри новые Аниме вместе с нами</strong>
          </h1>
          <Button>Новые Аниме</Button>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <p>
                Аниме — это японская анимация, которая характеризуется своим
                уникальным стилем, разнообразием жанров и сюжетных линий. Оно
                охватывает широкий спектр тем и часто включает элементы
                фантастики, приключений, романтики, ужасов, комедии и других
                жанров. Аниме может быть адаптацией манги (японских комиксов),
                видеоигр, новелл или оригинальных сценариев.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>

              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2024 3team@JS23.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
