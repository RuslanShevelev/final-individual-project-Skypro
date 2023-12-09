import styles from '../../css/main.module.css'

console.log(styles);
export const MainPage = () => {
    return(
        <div className={styles.wrapper}>
  <div className={styles.container}>
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <button className={styles.header__btn_main_enter}
        //  styles.btn-hov01}
          id="btnMainEnter">
          Вход в личный кабинет
        </button>
      </nav>
    </header>
    <main 
    // className={styles.main}
    >
      <div className={styles.main__search}>
        <a className={styles.search__logo_link} href="#" target="_blank">
          <img className={styles.search__logo_img} src="img/logo.png" alt="logo" />
        </a>
        <a className={styles.search__logo_mob_link} href="#" target="_blank">
          <img
            className={styles.search__logo_mob_img}
            src="img/logo-mob.png"
            alt="logo"
          />
        </a>
        <form className={styles.search__form} action="#">
          <input
            className={styles.search__text}
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <input
            className={styles.search__text_mob}
            type="search"
            placeholder="Поиск"
            name="search-mob"
          />
          <button className="styles.search__btn styles.btn-hov02">Найти</button>
        </form>
      </div>
      <div className="main__container">
        <h2 className="main__h2">Объявления</h2>
        <div className="main__content">
          <div className="content__cards cards">
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="cards__card card">
                <div className="card__image">
                  <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">
                      Ракетка для большого тенниса Triumph Pro ST
                    </h3>
                  </a>
                  <p className="card__price">2&nbsp;200&nbsp;₽</p>
                  <p className="card__place">Санкт Петербург</p>
                  <p className="card__date">Сегодня в&nbsp;10:45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_01.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_02.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_03.png" alt="home" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</div>

    )
}