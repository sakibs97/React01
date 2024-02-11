import "./care.css"
import care from "../../assets/care.png"
import carlog from "../../assets/carelogo.png"
import { FaStar } from "react-icons/fa";

function Care() {
  return (
    <section id="care">
        <div className="container">
            <div className="care_head">
                <h2>We Care About Our Customer Experience Too</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="care_dtls">
              <div className="care_part">
                <img src={care} alt="care" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <span>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </span>
                <div className="care_text">
                  <a href="#">Mahid Ahmed</a>
                  <h4>UX Designer</h4>
                  <div className="care_logo">
                    <img src={carlog} alt="carlog" />
                  </div>
                </div>
              </div>
              <div className="care_part">
                <img src={care} alt="care" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <span>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </span>
                <div className="care_text">
                  <a href="#">Mahid Ahmed</a>
                  <h4>UX Designer</h4>
                  <div className="care_logo">
                    <img src={carlog} alt="carlog" />
                  </div>
                </div>
              </div>
              <div className="care_part">
                <img src={care} alt="care" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <span>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </span>
                <div className="care_text">
                  <a href="#">Mahid Ahmed</a>
                  <h4>UX Designer</h4>
                  <div className="care_logo">
                    <img src={carlog} alt="carlog" />
                  </div>
                </div>
              </div>              
            </div>
        </div>
    </section>
  )
}

export default Care