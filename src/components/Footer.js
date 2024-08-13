import React from "react";
import { footerData } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const icons = { faInstagram, faTiktok, faFacebookF, faLinkedin };
  return (
    <footer className="bg-primary text-white pt-6 rounded-t-2xl">
      <div className="grid grid-cols-2 md:grid-cols-5 padding-l">
        {footerData.map((section, index) => (
          <div key={index} className="space-y-1">
            <h1 className="font-bold text-2xl">{section.title}</h1>
            {section.links.map((link, index) => (
              <a key={index} href={link.url} className="block hover:underline">
                {link.icon ? (
                  <FontAwesomeIcon icon={icons[link.icon]} className="mr-2" />
                ) : null}
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[#317748]">
        <p className="text-start mt-6 p-2">Copyright © 2024, ActiveAura.com</p>
      </div>
    </footer>
  );
};

export default Footer;
