import React, { useState } from "react";
import jorgue from "../../assets/Ellipse.png";
import jenny from "../../assets/Ellipse1.png";
import Ayush from "../../assets/Ellipse5.png";
import GraffersidCompLogo from "../../assets/Group11635.png";
import CTCompLogo from "../../assets/_CT_.png";
import InnogentCompLogo from "../../assets/heroicons-solid_light-bulb.png";
import PixelCompLogo from "../../assets/ph_phosphor-logo-fill.png";
import GlobalContext from "./GlobalContext";

function GlobalContextProvider({ children }) {
  const [companyData, setCompanyData] = useState([
    {
      logo: GraffersidCompLogo,
      name: "Graffersid Web and App Development",
      address:
        "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P)",
      founded: "01-01-2016",
      reviews: 41,
      reviewData: [
        {
          Image: jorgue,
          name: "Jorgue Watson",
          date: "01-01-2022, 14:33",
          content:
            "Graffersid one of the best Company dolor sit amet, consectetur adipiscing elit. Congue netus feugiat elit suspendisse commodo. Pellentesque risus suspendisse mattis et massa. Ultrices ac at nibh et. Aliquam aliquam ultricies ac pulvinar eleifend duis. Eget congue fringilla quam ut mattis tortor posuere semper ac. Sem egestas vestibulum faucibus montes. Gravida sit non arcu consequat.",
        },
        {
          Image: jenny,
          name: "Jenny Kole",
          date: "12-01-2022, 15:00",
          content:
            "Graffersid one of the best Company dolor sit amet, consectetur adipiscing elit. Congue netus feugiat elit suspendisse commodo. Pellentesque risus suspendisse mattis et massa. Ultrices ac at nibh et.",
        },
        {
          Image: Ayush,
          name: "Ayush Patel",
          date: "12-01-2022, 15:00",
          content: "Graffersid one of the best Company in App Development",
        },
      ],
    },
    {
      logo: CTCompLogo,
      name: "Graffersid Web and App Development",
      address:
        "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P)",
      founded: "01-01-2010",
      backgroundColor: "#298000",
      reviewData: [
        {
          Image: jorgue,
          name: "Jorgue Watson",
          date: "01-01-2022, 14:33",
          content:
            "Graffersid one of the best Company dolor sit amet, consectetur adipiscing elit. Congue netus feugiat elit suspendisse commodo. Pellentesque risus suspendisse mattis et massa. Ultrices ac at nibh et. Aliquam aliquam ultricies ac pulvinar eleifend duis. Eget congue fringilla quam ut mattis tortor posuere semper ac. Sem egestas vestibulum faucibus montes. Gravida sit non arcu consequat.",
        },
        {
          Image: Ayush,
          name: "Ayush Patel",
          date: "12-01-2022, 15:00",
          content: "Graffersid one of the best Company in App Development",
        },
      ],
    },
    {
      logo: InnogentCompLogo,
      name: "Innogent Company",
      address:
        "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P)",
      founded: "01-01-2014",
      backgroundColor: "#ff7b02",
      reviewData: [
        {
          Image: jenny,
          name: "Jenny Kole",
          date: "12-01-2022, 15:00",
          content:
            "Graffersid one of the best Company dolor sit amet, consectetur adipiscing elit. Congue netus feugiat elit suspendisse commodo. Pellentesque risus suspendisse mattis et massa. Ultrices ac at nibh et.",
        },
        {
          Image: Ayush,
          name: "Ayush Patel",
          date: "12-01-2022, 15:00",
          content: "Graffersid one of the best Company in App Development",
        },
      ],
    },
    {
      logo: PixelCompLogo,
      name: "Pixel Company",
      address:
        "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P)",
      founded: "01-01-2018",
      backgroundColor: "#0020dd",
      reviewData: [
        {
          Image: Ayush,
          name: "Ayush Patel",
          date: "12-01-2022, 15:00",
          content: "Graffersid one of the best Company in App Development",
        },
      ],
    },
  ]);
  const [searchText, setSearchText] = useState("");
  return <GlobalContext.Provider 
    value={{
        setCompanyData,
        companyData,
        setSearchText,
        searchText
    }}
  >
    {children}
  </GlobalContext.Provider>;
}

export default GlobalContextProvider;
