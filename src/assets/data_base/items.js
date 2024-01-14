import { FaUniversity } from "react-icons/fa";
import { SiDatacamp } from "react-icons/si";
import { BsPersonBoundingBox } from "react-icons/bs";
import Education from "../elements/Education";
import Experience from "../elements/Experience";
import About_me from "../elements/About_me";
import InProgress from "../elements/InProgress";
const items = [

    
    {id: 0,
        itemName: 'About me',
        descrip: " Hello & Welcome!. I'm a STEM student who is completely fascinated with science and its implementation into real-world problems. A strong stance in math and physics gives me the ability to look at each particular programming problem from a different angle and solve it in an efficient way. Sufficient knowledge in different programming languages gives me the ability to transfer projects from a blueprint into reality. <h4>Fluent in: English, Russian, Ukrainian</h4> ",
       icon: <BsPersonBoundingBox size={window.innerWidth > 700 ? 45 : 30} />,
       content: <About_me />
    },
    {id: 1,
        itemName: 'Education',
        descrip: 'Los Angeles City College: Assosiate Degrees (2022),Computer Science & Engineering [GPA 3.9]',
        icon: <FaUniversity size={window.innerWidth > 700 ? 45 : 30}/>,
        content: <Education />

    },
    {id: 2,
        itemName: 'Experience',
        descrip: '',
        icon: <SiDatacamp size={window.innerWidth > 700 ? 45 : 30} />,
        content: <Experience />

    },
    

];


export default items;