import './MeetTheTeam.css';

export const MeetTheTeam = () => {
  return (
    <>
      <div className="section-title">
        <h1>About Us</h1>
        <h4>League of friends is a Nigerian social media service and image sharing designed to create status or class for people in form of discussion groups based on your interest</h4>
      </div>

      <div className="team-container">
        <div className="team-section-title">
          <h1>Meet The Team</h1>
        </div>
        <div className="row">
          <div className="column">
            <div className="team-4">
              <div className="team-content">
                <h2>Benjamin Effiong</h2>
                <h3>CEO &amp; Founder</h3>
              </div>
              <div className="team-img">
                <img
                  src="https://res.cloudinary.com/bloomhub/image/upload/c_scale,w_400/v1618041367/leagueoffriends/benjamin_effiong_lhr38d.jpg"
                  alt="Team Image"
                />
                <div className="team-content">
                  <p>
                    Creating, communicating, and implementing the organization's
                    vision, mission, and overall direction. Leading the
                    development and implementation of the overall organization's
                    strategy. Soliciting advice and guidance, when appropriate,
                    from a Board of Directors.
                  </p>
                </div>
              </div>
              <div className="team-content">
                <div className="team-social">
                  <a
                    className="social-tw"
                    href="https://twitter.com/EffiongBenjami2"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="social-fb"
                    href="https://web.facebook.com/benjamin.effiong.355"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="social-li"
                    href="https://www.linkedin.com/in/effiong-benjamin-b4963512a/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="social-in"
                    href="https://www.instagram.com/iambenjamineffiong/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="social-yt"
                    href="http://www.youtube.com/channel/UC9it1WkgKr5qr1D4Vs-Fuyg"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="team-4">
              <div className="team-content">
                <h2>Samuel Chibueze</h2>
                <h3>Junior Developer</h3>
              </div>
              <div className="team-img">
                <img
                  src="https://res.cloudinary.com/bloomhub/image/upload/c_scale,h_400,w_400/v1618037048/leagueoffriends/samuel_chibueze_da9rzt.jpg"
                  alt="Team Image"
                />
                <div className="team-content">
                  <p>
                    Responsible for assisting with the creation of websites and
                    updating existing web applications using scripting
                    languages. He works under the supervision of senior
                    developers, assisting with coding, testing, design
                    adjustments, and client reviews
                  </p>
                </div>
              </div>
              <div className="team-content">
                <div className="team-social">
                  <a
                    className="social-tw"
                    href="https://twitter.com/unique_Chibueze?s=09"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-fb" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="social-li"
                    href="https://www.linkedin.com/in/sam-obisike-chibueze-635a63167"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="social-in"
                    href="https://www.instagram.com/p/CNXLmuKn2eD/?igshid=11u4gsakbv65v"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="social-yt" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="team-4">
              <div className="team-content">
                <h2>
                  Adeola <br /> Apanisile
                </h2>
                <h3>Senior Developer</h3>
              </div>
              <div className="team-img">
                <img
                  src="https://res.cloudinary.com/bloomhub/image/upload/c_scale,h_300,w_400/v1618041847/leagueoffriends/adeola_apanisile_fudq9l.jpg"
                  alt="Team Image"
                />
                <div className="team-content">
                  <p>
                    Communicating with clients to determine website
                    specifications, creating schedules and providing quotes,
                    writing code, working with a team of designers and content
                    writers, as well as assisting with recruitment and training
                    of all new junior web developers.
                  </p>
                </div>
              </div>
              <div className="team-content">
                <div className="team-social">
                  <a
                    className="social-tw"
                    href="https://www.linkedin.com/in/adeola-apanisile-b38230182"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-fb" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="social-li"
                    href="https://twitter.com/tech_faraday?s=09"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="social-in"
                    href="https://www.instagram.com/faradaytech.code/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="social-yt" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
