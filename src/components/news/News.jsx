import "./news.css"
import news1 from "../../assets/news/news1.png"
import news2 from "../../assets/news/news2.png"
import news3 from "../../assets/news/news3.png"
import { RiAdminFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";


function News() {
  return (
    <section id="news">
        <div className="container">
            <div className="news_head">
                <h2>Our Letest News</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                </p>
            </div>
            <div className="news_dtls">
                <div className="news_one">
                  <img src={news1} alt="news1" />
                  <div className="news_img">
                      <h6><RiAdminFill/> Admin</h6>
                      <h6><FaCalendarAlt/> 07/11/2021</h6>
                  </div>
                  <h4>Business Plans That Fit Your Best Blog</h4>
                  <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                  <a href="#">Learn More</a>
                </div>
                <div className="news_one">
                  <img src={news2} alt="news2" />
                  <div className="news_img">
                      <h6><RiAdminFill/>Admin</h6>
                      <h6><FaCalendarAlt/>07/11/2021</h6>
                  </div>
                  <h4>Business Plans That Fit Your Best Blog</h4>
                  <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                  <a href="#">Learn More</a>
                </div>
                <div className="news_one">
                  <img src={news3} alt="news3" />
                  <div className="news_img">
                      <h6><RiAdminFill/>Admin</h6>
                      <h6><FaCalendarAlt/>07/11/2021</h6>
                  </div>
                  <h4>Business Plans That Fit Your Best Blog</h4>
                  <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                  <a href="#">Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News