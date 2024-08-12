import { FaAngleDown } from "react-icons/fa6";
import {MenuTrigger, Menu,Provider, darkTheme, ActionButton, Item} from '@adobe/react-spectrum'
import "./index.css"

const Footer = () => (
    <div className="footer-container">
        <Provider theme={darkTheme} colorScheme="dark" backgroundColor="#000000" padding="size-700">
        <div className="first-row-desktop">
            <div>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>The footer section of an e-commerce website typically includes key information and links to enhance user experience and provide essential resources.</p>
            </div>
            <div className="flex-container">
                <input className="email-input" placeholder="Enter your e-mail..." />
                <button className="button" type="button">SUBSCRIBE</button>
            </div>
            <div>
                <hr className="hrr-line" />
                <h2>CALL US</h2>
                <div className="flex-container">
                    <p>+44 221 133 5566</p>
                    <p>customercare@mettamuse.com</p>
                </div>
            </div>
        </div>
        <hr className="hrr-line hrr-line-desktop" />
        <div className="flex-container">
            <p>metta muse</p>  
            <MenuTrigger>
                <ActionButton>
                    <FaAngleDown />
                </ActionButton>
                <Menu>
                    <Item>About Us</Item>
                    <Item>Sories</Item>
                    <Item>Artisans</Item>
                    <Item>Boutiques</Item>
                    <Item>Contact Us</Item>
                    <Item>EU Compliances Docs</Item>
                </Menu>
            </MenuTrigger>
            
        </div>
        <hr className="hrr-line" />
        <div className="flex-container">
            <p>QUICK LINKS</p>
            <MenuTrigger>
                <ActionButton>
                    <FaAngleDown />
                </ActionButton>
                <Menu>
                    <Item>Orders $ Shipping</Item>
                    <Item>Join/Login as aSeller</Item>
                    <Item>Payment & Pricing</Item>
                    <Item>Return & Refunds</Item>
                    <Item>FAQs</Item>
                    <Item>Privacy Policy</Item>
                    <Item>Terms & Conditions</Item>
                </Menu>
            </MenuTrigger>
        </div>
        <hr className="hrr-line" />
        <div className="flex-container">
            <p>FOLLOW US</p>
            <FaAngleDown />
        </div>
        <hr className="hrr-line" />
        <p>metta muse ACCEPTS</p>
        <p className="copy-right">Copyright @ 2023 mettamuse. All rights reserved</p>
        </Provider>
    </div>
)

export default Footer 