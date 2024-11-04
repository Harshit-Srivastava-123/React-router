import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, our values, and the team that makes everything possible.</p>
      </section>
      <section className="about-description">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to providing the best service to our clients. Our team works tirelessly to ensure that our
          offerings are top-notch, innovative, and always meeting your needs.
        </p>
        <h2>Our Values</h2>
        <p>
          Integrity, Innovation, and Excellence drive everything we do. We believe in transparency, pushing the
          boundaries, and delivering quality results.
        </p>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="./src/assets/dev image.jpg" alt="Team Member 1" />
            <h3>Harshit</h3>
            <p>Front-End Developer</p>
          </div>
          <div className="team-member">
          <img src="./src/assets/developer image.jpg" alt="Team Member 1" />
            <h3>Garvit</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
          <img src="./src/assets/developer image.jpg" alt="Team Member 1" />
            <h3>Emily Johnson</h3>
            <p>Marketing Specialist</p>
          </div>
          <div className="team-member">
          <img src="./src/assets/dev image.jpg" alt="Team Member 1" />
            <h3>Emily Johnson</h3>
            <p>Marketing Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
