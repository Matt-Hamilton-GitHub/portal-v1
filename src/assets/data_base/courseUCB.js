import { FaPython } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsFillFileBinaryFill } from "react-icons/bs";
import { SiGoland } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { MdMemory } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { GiDatabase } from "react-icons/gi";

const coursesUCB = 
[
  {
    title: "Data Structures",
     desc: `Fundamental dynamic data structures, including linear lists, queues, 
     trees, and other linked structures; arrays strings, and hash tables. Storage management. 
     Elementary principles of software engineering. Abstract data types. Algorithms for sorting and 
     searching. Introduction to the Java programming language. `,
     lang: [<RiJavaLine size={25} />],
     imgURL: ''
    },
    {
     title: "The Structure and Interpretation of Computer Programs",
    desc: `An introduction to programming and computer science focused on abstraction techniques 
    as means to manage program complexity. Techniques include procedural abstraction; control 
    abstraction using recursion, higher-order functions, generators, and streams; data 
    abstraction using interfaces, objects, classes, and generic operators; and language abstraction 
    using interpreters and macros. The course exposes students to programming paradigms, including 
    functional, object-oriented, and declarative approaches. It includes an introduction to asymptotic
     analysis of algorithms. There are several significant programming projects.`,
     lang: [<FaPython size={25} />,]
    },
    
  
       {
        title: "Machine Structures",
       desc: `The internal organization and operation of digital computers. 
       Machine architecture, support for high-level languages (logic, arithmetic, instruction sequencing) and operating systems 
       (I/O, interrupts, memory management, process switching). Elements of computer logic design. Tradeoffs involved in fundamental architectural design decisions. `,
       lang: [<TbBrandCSharp size={25} />,<BsFillFileBinaryFill size={25} />]
       },
       {
        title: "Artificial Intelligence",
       desc: `Ideas and techniques underlying the design of intelligent computer systems. Topics include search, game playing, knowledge representation, 
       inference, plangning, reasoning under uncertainty, machine learning, robotics, perception, and langguage understanding.`,
       lang: [<FaPython size={25} />]
       },
       {
        title: "Efficient Algorithms and Intractable Problems",
       desc: `Concept and basic techniques in the design and analysis of algorithms; models of computation; lower bounds; 
       algorithms for optimum search trees, balanced trees and UNION-FIND algorithms; numerical and algebraic algorithms; combinatorial algorithms. 
       Turing machines, how to count steps, deterministic and nondeterministic Turing machines, NP-completeness. Unsolvable and intractable problems. `,
       lang: [<FaPython size={25} />]

       },
       {
        title: "Computer Security",
       desc: `Introduction to computer security. Cryptography, including encryption, authentication, hash functions, 
       cryptographic protocols, and applications. Operating system security, access control. Network security, firewalls, viruses, and worms. 
       Software security, defensive programming, and language-based security. Case studies from real-world systems. `,
       lang: [<SiGoland size={25} />, <MdMemory size={25} />, ]
       },
       {
        title: "Software Engineering (SaaS)",
        desc: `Ideas and techniques for designing, developing, and modifying large software systems. Service-oriented architecture, behavior-driven design with user stories,
         cloud computing, test-driven development, automated testing, cost and quality metrics for maintainability and effort estimation, practical performance and security 
         in software operations, design patterns and refactoring, specification and documentation, agile project team organization and management.`,
         lang: [ <DiRuby size={25} />, <FaGithubSquare size={25} />, <MdDeveloperMode size={25} />]
       },
       {
        title: "UX/IU Design",
        desc: `Ideas and techniques for designing, developing, and modifying large software systems. Service-oriented architecture, behavior-driven design with user stories,
         cloud computing, test-driven development, automated testing, cost and quality metrics for maintainability and effort estimation, practical performance and security 
         in software operations, design patterns and refactoring, specification and documentation, agile project team organization and management.`,
         lang: [ <DiRuby size={25} />, <FaGithubSquare size={25} />, <MdDeveloperMode size={25} />]
       },
       {
        title: "Modern Cryptography",
       desc: `Cryptography or cryptology is the science of designing algorithms and protocols for enabling parties to communicate and compute securely 
       in an untrusted environment (e.g. secure communication, digital signature, etc.) Over the last four decades, cryptography has transformed from an ad hoc collection
       of mysterious tricks into a rigorous science based on firm complexity-theoretic foundations. This modern complexity-theoretic approach to cryptography will be the 
       focus. E.g., in the context of encryption we will begin by giving a precise mathematical definition for what it means to be a secure encryption scheme and then give 
       a construction (realizing this security notion) assuming various computational hardness assumptions (e.g. factoring).`,
       lang: [<FaPython size={25} />]
       },
       {
        title: "Discrete Mathematics and Probability Theory",
       desc: `A rigorous development of the basics of modern probability theory based on a self-contained treatment of measure theory.  
       The topics covered include: probability spaces; random variables; expectation; convergence of random variables and 
       expectations; laws of large numbers; zero-one laws; convergence in distribution and the central limit theorem; 
       Markov chains; random walks; the Poisson process; and discrete-parameter martingales. `,
       lang: [<FaPython size={25} />]
       },
       {
        title: "Full Stack Web Development",
       desc: `This is a hands-on full-stack web development course, and students will work on all aspects of the full-stack web development process. Individual and team assignments will enable 
       students to develop skills in data modeling, database and API design, 
       responsive front-end design, version control, and deployment using Python, 
       JavaScript, and full-stack frameworks such as Flask. The goal of this course 
       is to help students understand different technologies and work towards being 
       able to implement complete web-based projects for desktop and mobile. `,
       lang: [<IoLogoNodejs size={25}  />, <FaReact size={25} />, <FaGithubSquare size={25} />, <FaPython size={25} />, <GiDatabase size={25} />]
       },
       {
        title: "The Internet Architecture",
       desc: `This course is dedicated to the Internet architecture. It focuses on the concepts and fundamental design principles that have contributed to the Internet's scalability and robustness and survey the various protocols and algorithms used within this architecture. 
       Topics include layering, addressing, intradomain routing, interdomain routing, reliable delivery, congestion control, and the core protocols (e.g., TCP, UDP, IP, DNS, and HTTP) and network technologies (e.g., Ethernet, wireless).`,
       lang: [<FaPython size={25} />]
       },
       {
        title: "Oject Oriented Programming",
        desc: `C/Pyhton programming course covers fundamental concepts like data types
         , variables, control structures (if-else, loops), functions, arrays, 
         pointers, file handling, and memory management, allowing students to 
         write efficient and structured C programs to solve various computational 
         problems, often with a focus on practical application through coding 
         exercises and projects. `,
        lang: [<SiCplusplus size={25} />, <FaPython size={25} />]

       },
       
   
   
]

export default coursesUCB