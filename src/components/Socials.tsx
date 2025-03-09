import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMailBulk, FaTiktok } from "react-icons/fa";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@cungcodebannhe",
  },
  {
    icon: <FaMailBulk />,
    path: "mailto:vu7177@gmail.com",
  },
];

const Socials: React.FC<SocialsProps> = ({
  containerStyles = "",
  iconStyles = "",
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
