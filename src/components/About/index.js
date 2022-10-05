import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">
        Who am I ? I'm a world-renowned photographer from Poughkeepsie, New
        York.
      </h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
};

export default About;
