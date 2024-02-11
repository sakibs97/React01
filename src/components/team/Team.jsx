import "./team.css"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"
import team3 from "../../assets/team/team3.jpg"

function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="team_head">
          <h2>Our Expert Team Member</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
           </p>
        </div>
        <div className="team_dtls">
          <div className="team_img">
            <div className="img_p">
              <img src={team1} alt="" />
            </div>
            <div className="img_back">
            </div>
            <div className="text">
              <a href="#">Mahid Ahmed</a>
              <h4>UX Designer</h4>
            </div>
          </div>
          <div className="team_img">
            <div className="img_p">
              <img src={team2} alt="team2" />
            </div>
            <div className="img_back">
            </div>
            <div className="text">
              <a href="#">Kazi Afia</a>
              <h4>Digital Marketor</h4>
            </div>
          </div>
          <div className="team_img">
            <div className="img_p">
              <img src={team3} alt="team3" />
            </div>
            <div className="img_back">
            </div>
            <div className="text">
              <a href="#">Hasan Imam</a>
              <h4>UI Designer</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team