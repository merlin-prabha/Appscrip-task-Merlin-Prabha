import "./index.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { PiFlowerLight } from "react-icons/pi";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";


const Header = () => (
    <nav className="nav">
        <div className="navbar">
            <div className="icon-container">
                <RxHamburgerMenu className="icon ham" />
                <PiFlowerLight className="icon" />
            </div>
            <h1>LOGO</h1>
            <div className="icon-container">
                <CiSearch className="icon" />
                <CiHeart className="icon" />
                <PiHandbagThin className="icon" />
                <IoIosContact className="icon profile" />
                <div className="icon eng">
                    <p>ENG</p>
                    <FaAngleDown />
                </div>
            </div>
        </div>
        <div className="tabs">
            <p className="para">SHOP</p>
            <p className="para">SKILLS</p>
            <p className="para">STORIES</p>
            <p className="para">ABOUT</p>
            <p className="para">CONTACT US</p>
        </div>
    </nav>
)

export default Header 