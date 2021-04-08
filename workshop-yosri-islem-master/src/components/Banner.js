import React from 'react';
import myWonderfulImage from "../images/John-Doe.jpg";

const DescriBanner = () => {
  return (
    <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br/>
        and i make horrible websites.
      </h1>
      <img class="avatar" src={myWonderfulImage} alt="jhon-doe" />
    </section>
  );
};

export default DescriBanner;