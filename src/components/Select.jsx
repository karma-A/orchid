import { useState } from "react";
import { Accordion } from "react-bootstrap"
import { FaLock } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";



const Select = () => {
    const accordionData = {
        title: 'Burmese Orchid',
        logo: './logo.png',
        link: 'How to idenify',
        leftContent: `Official website links end with .org`,
        trustedWeb: `https://www.burmeseorchid.org/trusted-websites`,
        rightContent: 'Secure websites use HTTPS'
        };
        const {title,link, leftContent, trustedWeb, rightContent}= accordionData;

        const [isActive, setIsActive] = useState(false);
  return (
    <Accordion>
        <div className="accordion">
            <div className="accordion-item">
                <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}
                >
                {/* <img  src={logo}/> */}
                <div ><span>{title}</span></div>
                <div className="link">
                    {link}
                    <div className="sign">{isActive ? '-' : '+'}</div>
                </div>

                </div>
                {isActive && <div className="accordion-content">
                    <div className="accordion-leftContent accordion-content0">
                        <HiMiniBuildingLibrary style={{ paddingRight: "5px", fontSize:"20px" }}/>
                        <span id="accordion-bold">{leftContent}</span>
                        <a id="trustWeb" href={trustedWeb} style={{ textDecoration:"none", fontFamily:"Time New Roman"}}>Trusted website</a>
                    </div>
                    <div className="accordion-rightContent accordion-content0">
                        <FaLock style={{ paddingRight:"5px", fontSize:"15px" }} />
                        <span id="accordion-bold">{rightContent}</span><br />
                        <span style={{ fontFamily:"Times New Roman" }}
                        >Look for a lock (<FaLock fontSize="10px"/>) or https:// as an added precaution. Share sensitive information only on official, secure websites.</span>
                    </div>
                </div>}
            </div>
        </div>
    </Accordion>
    )
}

export default Select