import { useState } from "react";
import { Accordion } from "react-bootstrap"





const Select = () => {
    const accordionData = {
        title: 'Burmese Orchid Website',
        link: 'How to idenify',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        };
        const {title,link, content}= accordionData;

        const [isActive, setIsActive] = useState(false);
  return (
    <Accordion>
        <div className="accordion">
            <div className="accordion-item">
                <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}
                >
                <div >{title}</div>
                <div className="link">
                    {link}
                    <div >{isActive ? '-' : '+'}</div>
                </div>

                </div>
                {isActive && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    </Accordion>
    )
}

export default Select