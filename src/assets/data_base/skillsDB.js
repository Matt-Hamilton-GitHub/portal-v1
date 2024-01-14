import { SiPython } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { SiWebpack, SiHtml5, SiCss3 } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const skillsDB = [
  {
    id: 0,
    language: "Python",
    icon: <SiPython size={window.innerWidth > 900 ? 120 : 50} />,
    active: true,
    skills: [
      {
        skillID: 0,
        skillTitle:
          "Object Oriented Programming - Inheritance and Polymorphism",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 1,
        skillTitle: "Object Oriented Programming - Special Methods",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 2,
        skillTitle: "Zipping and Unzipping files with Python",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 3,
        skillTitle: "Working with Images with Python",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 4,
        skillTitle: "Sending Emails with Python",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 5,
        skillTitle: "Advanced Lists, Dictionaries, Strings, Sets",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 6,
        skillTitle: "Widget Styling and Layouts",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 7,
        skillTitle: "Widget Styling and Layouts",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 8,
        skillTitle: "Interact Functionality with GUIs",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 9,
        skillTitle: "Errors and Exceptions Handling",
        code: [
         
        ],
        description: ""
      }
    ]
  },
  {
    id: 1,
    language: "C++ Language",
    icon: <CgCPlusPlus size={window.innerWidth > 900 ? 120 : 50} />,
    active: false,
    skills: [
      {
        skillID: 0,
        skillTitle: "Arrays and Vectors",
        code: [
          '#include <iostream>',
           '#include <vector>',
           'using namespace std;',
          '   int main()',
          '{',
          '      vector <int> test_scores {54, 65, 98};',
          '      cout << "\n Test scores array syntax: "  << endl;',
          '      cout << test_scores [0] << endl;',
          '      cout << test_scores [1] << endl;',
          '      cout << test_scores [2] << endl;',
          '      cout << test_scores [3] << endl;',
          '                                      ',                  
          '      cout <<"\n Test scores vector syntax: "<< endl;',
          '                                                    ',
                  
          '      cout << test_scores.at(0) << endl;',
          '      cout << test_scores.at(1) << endl;',
          '      cout << test_scores.at(2) << endl;',
          '      cout << "==========================="<< endl;',
          '      cout << "There are " << test_scores.size() << " scores in the vector" << endl;',
          '                                                    ',       
          '      cout << "\nEnter three test scores: ";',
          '        cin >> test_scores[0];',
          '        cin >> test_scores[1];',
          '        cin >> test_scores[2];',
          '                              ',       
          '       cout << "\n Update test scores: " << endl;',
          '       cout << test_scores.at(0) << endl;',
          '       cout << test_scores.at(1) << endl;',
          '       cout << test_scores.at(2) << endl;',
         '                                        ',      
          '       cout << "\n Enter a test score to add to the vector: ";',
         '                                              ',         
         '        int score_to_add {0};',
        '         cin >> score_to_add;',
        '                                ',         
        '         test_scores.push_back(score_to_add);',
         '                                           ',         
        '         cout << "\n Enter one more test score to add to the vector: ";',
        '                                   ',          
        '         cin >> score_to_add;',
        '                              ',        
        '        test_scores.push_back(score_to_add);',
        '                                             ' ,       
        '        cout << "\n Test score are now: "<< endl;',
        '                                                      ',          
        '         cout << test_scores[0] << endl;',
        '         cout << test_scores[1] << endl;',
        '         cout << test_scores[2] << endl;',
        '         cout << test_scores[3] << endl;',
        '         cout << test_scores[4] << endl;',
        '                                          ',          
        '         cout <<"\n There are now " <<test_scores.size()<< " scores in the vector" << endl;',
        '                                                 ',          
        '         cout << test_scores[4] << endl;',
        '                                       ',           
        '          // 2D Vector                  ',
        '                                      ',          
        '          vector <vector<int>> movie_ratings{ ',
        '             {19,2,3,4},              ',
        '             {1,23,4},                  ',
        '             {1,2,46,56}                ',
        '          };                         ',
        '          cout <<"\n Here are the movie rating array syntax :" <<endl;  ',
        '          cout << movie_ratings[0][0] << endl;       ',
        '         cout << movie_ratings[1][1] << endl;      ',
        '         cout << movie_ratings[2][2] << endl;    ',
        '         cout << movie_ratings[2][3] << endl;  ',
        '                                             '   ,       
        '         cout <<" \n Here are the movie rating for using vector syntax : " << endl;',
        '         cout << movie_ratings.at(0).at(0) << endl;',
        '         cout << movie_ratings.at(1).at(1) << endl;  ',
        '         cout << movie_ratings.at(2).at(2) << endl;  ',
        '         cout << movie_ratings.at(2).at(3) << endl;   ',
         '                                          ' , 
        'return 0;                    ',
         '                          ',  
        '  }                     ',
          
        ],
        description: ""
      },
      {
        skillID: 1,
        skillTitle: "Function Parameters and the return Statement",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 2,
        skillTitle: "Recursive Functions",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 3,
        skillTitle: "Inline Functions",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 4,
        skillTitle: "Pointers and References",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 5,
        skillTitle: "Classes and Objects",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 6,
        skillTitle: "Implementing Member Methods",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 7,
        skillTitle: "Shallow Copying with the Copy Constructor",
        code: [
          "#include <iostream>",
          "#include <string>",
          "using namespace std;",
          "class shallow",
          "{",
          "private:",
          "  int *data ;",
          "public:",
          "  void set_data(int d){*data = d;}",
          "int get_data(){return *data;}",
          "   shallow(int d);",
          "   shallow(const shallow &source);",
          "   ~shallow();",
          "};",

          "shallow::shallow(int d){",
          "   data = new int;",
          "   *data = d;",
          "}",

          "shallow::shallow(const shallow &source)//shallow copy",
          "   : data {source.data}{",
          '   cout << "Copy constructor - Shallow " << endl;',
          "}",
          "   shallow::~shallow(){",
          "    delete data;",
          '    cout << "Destructor freeing data from the stuck" << endl;',
          "  }",
          "void display(shallow N){",
          '   cout << "Value is " << N.get_data() << endl;',
          "}",
          "int main()",
          "{",
          "   shallow Marta {56};",
          "   display(Marta);",
          "   shallow Kevin {Marta};",
          "   display(Kevin);",
          "    Kevin.set_data(300);",
          '   system("pause");',
          " return 0;",
          "}"
        ],
        description: ""
      },
      {
        skillID: 8,
        skillTitle: "Pure Virtual Functions andAbstract Classes",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 9,
        skillTitle: "Smart Pointers",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 10,
        skillTitle: "Exception Handling",
        code: [
         
        ],
        description: ""
      }
    ]
  },
  {
    id: 2,
    language: "Web Development",
    icon: <SiWebpack size={window.innerWidth > 900 ? 120 : 50} />,
    active: false,
    skills: [
      {
        skillID: 0,
        skillTitle: "Building RESTful API",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 1,
        skillTitle: "Authentication & Security",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 2,
        skillTitle: "React Hooks and Advanced Topics",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 3,
        skillTitle: "EJS",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 4,
        skillTitle: "Understanding and Implementing Node Modules",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 5,
        skillTitle: "Git, Github and Version Control",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 6,
        skillTitle: "Application Programming Interfaces",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 7,
        skillTitle: "The Document Object Model (DOM)",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 8,
        skillTitle: "Advanced CSS & HTML",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 9,
        skillTitle: "Redux",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 10,
        skillTitle: "Object Oriented Programming with JavaScript",
        code: [
          
        ],
        description: ""
      },
      {
        skillID: 11,
        skillTitle: "React",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 12,
        skillTitle: "Mongoose mongodb",
        code: [
         
        ],
        description: ""
      }
    ]
  },
  {
    id: 3,
    language: "SQL (Structured Query Language)",
    icon: <FaDatabase size={window.innerWidth > 900 ? 120 : 50} />,
    active: false,
    skills: [
      {
        skillID: 0,
        skillTitle: "Table Creation and Managment",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 1,
        skillTitle: "Implementing and Using Constraints",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 2,
        skillTitle: "Data Manipulation and Transaction Control",
        code: [
       
        ],
        description: ""
      },
      {
        skillID: 3,
        skillTitle: "Working with Additional Database Objects",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 4,
        skillTitle: "Restriction Rows and Sorting Data",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 5,
        skillTitle: "Joining Datafrom Multiple Tables",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 6,
        skillTitle: "Selected Singel-Row Functions",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 7,
        skillTitle: "Group Functions",
        code: [
        
        ],
        description: ""
      },
      {
        skillID: 8,
        skillTitle: "Subqueries and MERGE Statements",
        code: [
         
        ],
        description: ""
      },
      {
        skillID: 9,
        skillTitle: "Views Creation and Managment",
        code: [
        
        ],
        description: ""
      }
    ]
  }
];

export default skillsDB;
