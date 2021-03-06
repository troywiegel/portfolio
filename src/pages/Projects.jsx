import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    image: require("../assets/img/goals.jpg"),
    altText: "Portfolio Project One",
    title: "Goals",
    body: "This is a full-stack MERN app for achieving your goals. It has user authentication, authorization and a RESTful CRUD API back-end.",
    gitHubLink: "https://github.com/troywiegel/goals",
    gitHubTitle: "Github",
    deployedLink: "https://goals-10000.herokuapp.com",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/coffee.jpg"),
    altText: "Portfolio Project Three",
    title: "Extracted",
    body: "This was a team project where we used a database to store and present the best local coffee shops in the PNW.",
    gitHubLink: "https://github.com/lyssg2/extracted",
    gitHubTitle: "Github",
    deployedLink: "https://extracted-coffee.herokuapp.com/",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/socialNetwork.jpg"),
    altText: "Portfolio Project Four",
    title: "Social Network API",
    body: "This is an API for a social network web app with full CRUD functionality, created using Nodejs, Expressjs and MongoDB/Mongoose.",
    gitHubLink: "https://github.com/troywiegel/social-network-api",
    gitHubTitle: "Github",
    deployedLink: "https://github.com/troywiegel/social-network-api",
    deployedTitle: "Deployed",
  },
];

function Project() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            return (
              <div className="col s12 m4" key={index}>
                <div className="card">
                  <div className="card-image">
                    <img src={project.image} alt={project.altText} />
                    <span className="card-title">{project.title}</span>
                  </div>
                  <div className="card-content">
                    <p>{project.body}</p>
                  </div>
                  <div className="card-action">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      {project.deployedTitle}
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      {project.gitHubTitle}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
