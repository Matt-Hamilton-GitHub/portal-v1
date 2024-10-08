import cocktails_web from "../img/cocktails.gif";
import color_generator from "../img/color-pal.gif";
import movieDB from "../img/movieDB.PNG";
import hackerNews from "../img/hackerNews.PNG";
import quizDB from "../img/quizDB.PNG";
import cozyHome from "../img/cozyHome.gif";
import searchGitHubUser from "../img/git-hub-search-img.PNG";
import guessword from "../img/guess-a-word.PNG";
import fit_gym from "../img/fit-gym.PNG";
import ddoski_drinks from '../img/ddoski-drinks.png'
import bunny_clothes from '../img/bunny-clothes.png'

import { DiReact, DiJavascript1 } from "react-icons/di";
import { GoDatabase } from "react-icons/go";
import { RiSecurePaymentFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { AiOutlineBarChart, AiFillHtml5 } from "react-icons/ai";

const websites_list = [
  {
    id: 0,
    name: "CozyHome",
    tags: [
      <DiReact size={25} />,
      <GoDatabase size={20} />,
      <RiSecurePaymentFill size={20}/>,
      <HiUserAdd size={20}/>,
      
    ],
    url: "https://cozy-home.netlify.app/",
    img: cozyHome,
    desc:
    ` The E-commerce venture is built using the React framework. 
    All the information presented on the website is dynamically retrieved through an API integration. 
    The system operates on the Netlify cloud infrastructure and incorporates secure and seamless payment processing capabilities.
      `
  },
  {
    id: 101,
    name: "The Fit Club",
    tags: [
      <DiReact size={25} />,
      
    ],
    url: "https://brilliant-bubblegum-ecf021.netlify.app/",
    img: fit_gym,
    desc:
    `
    The platform emulates a fully operational online marketplace dedicated to the exploration of distinctive 
    and personalized furniture offerings. All the data exhibited on the website is dynamically sourced through seamless API integration. 
    The infrastructure is supported by the Netlify cloud platform.`
  },
  {
    id: 23,
    name: "Bunny-Clothes",
    tags: [
      <DiReact size={25} />,
      <GoDatabase size={20} />,
      <RiSecurePaymentFill size={20}/>,
      <HiUserAdd size={20}/>,
      
    ],
    url: "https://bunny-clothes.netlify.app/",
    img: bunny_clothes,
    desc:
    ` The E-commerce venture is built using the React framework. 
    All the information presented on the website is dynamically retrieved through an API integration. 
    The system operates on the Netlify cloud infrastructure and incorporates secure and seamless payment processing capabilities.
      `
  },
  // {
  //   id: 22,
  //   name: "Ddoskis Drinks",
  //   tags: [
  //     <DiReact size={25} />,
  //     <GoDatabase size={20} />,

      
  //   ],
  //   url: "#/",
  //   img: ddoski_drinks,
  //   desc:
  //   ` The E-commerce venture is built using the React framework. 
  //   All the information presented on the website is dynamically retrieved through an API integration. 
  //   The system operates on the Netlify cloud infrastructure and incorporates secure and seamless payment processing capabilities.
  //     `
  // },

  {
    id: 1,
    name: "GitHub User",
    tags: [
      <DiReact size={25} />,
      <AiOutlineBarChart size={20} />,
      <HiUserAdd size={20}/>,
     
    ],
    url: "https://react-search-github-users-matt-v.netlify.app/login",
    img: searchGitHubUser,
    desc:
      `The E-commerce project encompasses a sophisticated web interface designed for efficiently searching GitHub users 
      and presenting comprehensive insights into their projects. 
      Secure user authentication system, 
      enabling seamless log-in and log-out functionalities`
  },
  {
    id: 2,
    name: "CocktailsDB",
    tags: [
      <DiReact size={25} />,
      <GoDatabase size={20} />,
      
    ],
    url: "https://determined-northcutt-73ff98.netlify.app/",
    img: cocktails_web,
    desc:
      `this exceptional platform, which offers an extensive collection of widely renowned cocktails, 
      accompanied by their precise ingredient details. The information presented on the webpage is seamlessly retrieved 
      from a server in real-time, ensuring the utmost accuracy and reliability. 

      `
  },
  {
    id: 3,
    name: "Color Generator",
    tags: [
      <DiReact size={25} />,
      
      
    ],
    url: "https://agitated-easley-7db28f.netlify.app/",
    img: color_generator,
    desc:
      `The website is built on react and use different libraries in order to allow 
      user choose a color palette for their projects.`
  },
  {
    id: 4,
    name: "MoviesDB",
    tags: [
      <DiReact size={25} />,
      <GoDatabase size={20} />,
      
    ],
    url: "https://friendly-colden-213cfb.netlify.app/",
    img: movieDB,
    desc:
      `The webpage is meticulously crafted to leverage an Application Programming Interface for streamlined movie searches, presenting comprehensive information about the selected films. Every piece of data showcased within 
      the web application is seamlessly sourced from a dedicated server.`
  },
  {
    id: 5,
    name: "Hacker News",
    tags: [
      <DiReact size={25} />,
      <GoDatabase size={20} />,
      
    ],
    url: "https://blissful-lovelace-752d3a.netlify.app/",
    img: hackerNews,
    desc:
      `Hacker News is a sophisticated online platform with an Application Programming Interface to dynamically retrieve comprehensive news content concerning programming domains. 
      This resource empowers users with the ability to efficiently explore and search for specific topics within the realm of technology and its various facets.`
      
  },
  {
    id: 6,
    name: "Take a Quiz",
    tags: [
      <DiReact size={25} />,
      <GoDatabase size={20} />,
      
    ],
    url: "https://festive-hopper-045f9a.netlify.app/",
    img: quizDB,
    desc:
      "The web-based application facilitates users in engaging with diverse quizzes spanning various categories and levels of complexity. Employing a sophisticated algorithm, the system systematically identifies accurate answers and rigorously assesses the outcomes achieved by users"
      
  },
  {
    id: 7,
    name: "Guess a Word",
    tags: [
      <AiFillHtml5 size={20} />,
      <DiJavascript1 size={20} />,
      
    ],
    url: "https://rainbow-mooncake-8738e2.netlify.app/",
    img: guessword,
    desc:
      "The web application allows a user to take a quiz from different categories and levels of difficulty. It uses an algorithm to find the correct answer and evaluate the results. "
  }
];




export default websites_list;
