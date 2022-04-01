import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Troy Wiegel</h5>
            <p className="grey-text text-lighten-4">
              I'm excited you are here! Feel free to look around and get to know
              me.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a
                  href="https://github.com/troywiegel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/troywiegel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto: troywiegel@gmail.com">
                  <FaPaperPlane />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1O98nPcx7gIXFpKtYDmPLc10Ezn1qriJE/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaClipboardList />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container" id="copyright">
          Copyright © 2022 - Troy Wiegel
        </div>
      </div>
    </footer>
  );
}

export default Footer;