import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", a:"https://www.linkedin.com/in/denylson-santos-151530238/", icon: <FaLinkedinIn /> },
  { name: "github", a:"https://github.com/denilson53", icon: <FaGithub /> },
  { name: "whastsapp", a:"https://api.whatsapp.com/send?phone=5511989649244", icon: <FaWhatsapp /> },
];



const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.a} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}

    </section>
  );
};

export default SocialNetworkContainer;
