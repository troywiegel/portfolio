import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="container aboutContainer">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-content cardBackground">
                <img
                  className="aboutImg"
                  src={require("../assets/img/ME6.jpg")}
                  alt="page background"
                />
                <p className="aboutContent">
                  I love to learn and create new things. I enjoy leveraging my
                  technical background from 12 years in the Information
                  technology field with 15 years of music industry experience to
                  build high quality, creative web applications. Let's connect
                  and see what we can build together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
