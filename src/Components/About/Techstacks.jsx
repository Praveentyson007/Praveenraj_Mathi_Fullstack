import React from "react";
import "./Techstacks.css";
import { FaReact, FaAws, FaJava } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { DiJenkins } from "react-icons/di";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaJava />
            <h5>Java</h5>
          </div>
          <div>
            <FaJava />
            <h5>Spring Boot</h5>
          </div>

          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>

          <div>
            <SiMysql />
            <h5>MY-SQL</h5>
          </div>
          <div>
            <DiJenkins />
            <h5>Jenkin</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
