import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/passport size.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, Myself{" "}
                <span className="different">Praveenraj Mathi </span> and I am
                from{" "}
                <span className="different"> Vellore, Tamil nadu (India)</span>.
                I have completed my graduation in 2022 (June. BBA) <br /> Having
                <span className="different">3 years of experience</span> in Java
                Development Activities. <br />
                Last one year, I worked in microserservice architecture, with
                cloud AWS. I worked in{" "}
                <span className="different">Agile methodology</span> to enhance
                our development. I used to develop microservice with{" "}
                <span className="different">
                  java, java 8, spring, spring boot, spring Data JPA, spring
                  security, spring batch.
                </span>
                Attired with a variety of tools & technologies and keen to learn
                new one. Looking for a challenging oppurtunity.
                {/* <span className="different">
                  VNMKV Agricultural University, Parbhani (MH)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school. */}
              </h4>
              {/* <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
