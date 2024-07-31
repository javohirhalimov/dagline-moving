import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdArrowDropDown } from "react-icons/md";
import data from "../utils/accordion.jsx";

const Value = () => {
    return (
      <section id="value" className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./slide_02.jpg" alt="" />
            </div>
          </div>
  
          {/* right */}
          <div className="flexColStart v-right">
            <span className="orangeTextValue">Our Value</span>
  
            <span className="primaryTextValue">Value We Give to You</span>
  
            <span className="secondaryTextValue">
            Your satisfaction is our top priority; we tailor our services to meet your unique needs.
            </span>
  
            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton ">
                          {/* just for getting state of item */}
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span
                          className="primaryText"
                        >
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };

export default Value;
