 import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            
              
           
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>

            <img
                alt=" Working emoji"
                src={require("../../assets/images/Image_20240109_113339_489.png")}
              ></img>
              <div class="cube">
  <div class="face face1"><img class='icon'src={require("../cubeasset/js.webp")} alt="Java Logo"/></div>
  <div class="face face2"><img class='icon' src={require("../cubeasset/react jjjj.webp")} alt="React.js Logo"/></div>
  <div class="face face3"><img class='icon' src={require("../cubeasset/node j.webp")} alt="Node.js Logo"/></div>
  <div class="face face4"><img class='icon' src={require("../cubeasset/java.webp")} alt="JAvaLogo"/></div>
  <div class="face face5"><img class='icon' src={require("../cubeasset/MongoDB_logo.webp")} alt="MongoDB Logo"/></div>
  <div class="face face6"><img class='icon' src={require("../cubeasset/adobe-logo-1.webp")} alt="AEM Logo"/></div>
</div>


              
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
