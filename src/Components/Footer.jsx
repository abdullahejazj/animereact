import React, { useContext } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
function Footer() {
  const githubUrl = () => {
    window.open("https://github.com/ShivaBhattacharjee/AnimeTrix");
  };

  const instagramUrl = () => {
    window.open("https://www.instagram.com/animetrix.200/");
  };
  const discordUrl = () => {
    window.open("https://discord.gg/t7xSMNr7zN");
  };

  const data = useContext(DataContext);

  return (
    <div className="footer">
      <h1>
        <span className="white"> {data?.website_title}</span>{" "}
      </h1>
    </div>
  );
}
export default Footer;
