import "./banner.css"
import banner from "../../assets/Banner.png"

function Banner() {
  return (
    <section id="banner">
        <div className="container">
            <div className="banner_part">
            <div className="banner_dtls">
                <h1>We Are Digital Product Design Agency</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="button">
                    <a href="#">Get Started</a>
                </div>
            </div>
            <div className="banner_img">
                <img src={banner} alt="" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Banner