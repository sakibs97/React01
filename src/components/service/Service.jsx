import "./service.css"
import { LuIndent } from "react-icons/lu";
import { MdOutlineWebStories, MdOutlineWebhook } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { GrAppsRounded } from "react-icons/gr";
import { TbBrandFramerMotion } from "react-icons/tb";


function Service() {
  return (
    <section id="service">
        <div className="container">
            <div className="ser_head">
                <h2>Our Services</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                </p>
            </div>
            <div className="ser_dtls">
                <div className="dtls_one">
                    <div className="dtls">
                    <a href="#"><LuIndent/></a>
                    <h3>UI/UX Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    </div>
                    <div className="dtls">
                    <a href="#"><MdOutlineWebStories/></a>
                    <h3>Web Development</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    </div>
                    <div className="dtls">
                    <a href="#"><LiaDigitalTachographSolid/></a>
                    <h3>Digital Marketing</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    </div>
                </div>
                <div className="dtls_one">
                    <div className="dtls">
                    <a href="#"><GrAppsRounded/></a>
                    <h3>Graphic Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    </div>
                    <div className="dtls">
                    <a href="#"><MdOutlineWebhook/></a>
                    <h3>Web Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    </div>
                    <div className="dtls">
                    <a href="#"><TbBrandFramerMotion/></a>
                    <h3>Motion Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service