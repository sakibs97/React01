import "./footer.css"
import logo from "../../assets/logo.png"
import icon from "../../assets/icon.png"

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="ftr">
            <div className="left_part">
                <a href="#"><img src={logo} alt="" /></a>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <a href="#"><img src={icon} alt="" /></a>
            </div>
            <div className="midele_part">
                <div className="midl_one">
                    <h6>Company</h6>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="midl_one">
                    <h6>Product</h6>
                    <ul>
                        <li><a href="#">Prototype</a></li>
                        <li><a href="#">Plans & Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
                <div className="midl_one">
                    <h6>Support</h6>
                    <ul>
                        <li><a href="#">Help Desk</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Become a Partner</a></li>
                        <li><a href="#">Developers</a></li>
                    </ul>
                </div>
            </div>
            <div className="right_part">
                <h6>Contact</h6>
                <h5>524 Broadway , NYC</h5>
                <a href="#">+1 777 - 978 - 5570</a>
            </div>    
            </div>
        </div>
    </footer>
  )
}

export default Footer