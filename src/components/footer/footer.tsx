function FooterComponent() {
  return (
    <>
      <div className="footer__bg"></div>
      <div className="footer container">
        <div className="footer__row-1">
          <div className="footer__sidebar-1">
            <div className="footer__logo">
              <img src="assets/images/footer-logo.svg" alt="" />
              <p>Beautice</p>
            </div>
            <div className="footer__content">
              <p className="footer__description">
                Beautice <span>is a Beauty Clinic WordPress Theme.</span>
              </p>
              <address className="footer__address">
                Baker Steet 101, NY, United States.
              </address>
              <div className="footer__bonus">
                <p className="footer__phone">+521 569 8966.</p>
                <p className="footer__mail">mail@company.com</p>
              </div>
            </div>
          </div>
          <div className="footer__sidebar-2">
            <p className="footer__text-1">Pages</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallary</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
          <div className="footer__sidebar-3">
            <p className="footer__text-2">Informations</p>
            <ul>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__row-2">
          <div className="footer__social">
            <img src="assets/images/facebook-f.svg" alt="" />
            <img src="assets/images/twitter.svg" alt="" />
            <img src="assets/images/linkedin-in.svg" alt="" />
            <img src="assets/images/youtube.svg" alt="" />
            <img src="assets/images/instagram.svg" alt="" />
          </div>
          <div className="footer__text-3">
            © AltDesain Studio 2021 - All right reserved.
          </div>
        </div>
        <a href="#top">
          <img
            src="assets/images/to-top-button.svg"
            className="to-top__btn"
            alt=""
          />
        </a>
      </div>
      <div className="footer__img"></div>
    </>
  );
}

export default FooterComponent;
