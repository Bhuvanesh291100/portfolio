/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bhuvanesh Kolhe",
  title: "Hi all, I'm Bhuvanesh",
  subTitle: emoji(
    "A dedicated Full Stack Developer 🚀 with expertise in building scalable Web and Mobile applications using Java, Spring Boot, JavaScript, React.js, and modern cloud platforms like Azure and GCP."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OVPrJTxmwDYWvItt4uRqku63z9hbmwCz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bhuvanesh291100",
  linkedin: "https://www.linkedin.com/in/bhuvaneshkolhe/",
  gmail: "bkkolhe29@gmail.com",
  gitlab: "https://gitlab.com/bkkolhe29",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR INNOVATIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop interactive and user-friendly web and mobile interfaces using HTML, CSS, JavaScript, and React"
    ),
    emoji(
      "⚡ Create robust backend services and REST APIs using Java, Spring Boot, and SQL databases"
    ),
    emoji(
      "⚡ Design scalable and maintainable microservices architectures on cloud platforms like Azure and GCP"
    ),
    emoji(
      "⚡ Leverage machine learning frameworks like TensorFlow and PyTorch for data-driven solutions"
    ),
    emoji(
      "⚡ Implement CI/CD pipelines and containerization using Docker and Kubernetes"
    )
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "spring boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "kubernetes",
    //   fontAwesomeClassname: "fab fa-kubernetes"
    // },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    // {
    //   skillName: "gcp",
    //   fontAwesomeClassname: "fab fa-google"
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo, The State University of New York",
      logo: require("./assets/images/UBLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - December 2024",
      desc: "GPA: 3.6/4.0",
      descBullets: [
        "Relevant Courses: Algorithms Analysis and Design, Database Systems, Operating Systems, Modern Netwrking Concepts, Computer Architecture",
        "Participated in projects involving advanced distributed systems and large-scale software engineering"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/UMLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2019 - June 2023",
      desc: "GPA: 9.17/10.0 (Ranked in the top 10% of the program)",
      descBullets: [
        "Relevant Courses: Artificial Intelligence, Machine Learning, Natural Language Processing, System Programming, Discrete Mathematics, Blockchain",
        "Engaged in projects such as E-Commerce Warranty System and Cryptocurrency Journal"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development & Design", // Reflects HTML, CSS, JavaScript, React proficiency
      progressPercentage: "85%" // Based on your experience with dynamic web solutions and responsive design
    },
    {
      Stack: "Backend Development", // Includes Spring Boot, REST APIs, and microservices
      progressPercentage: "80%" // Reflecting strong backend expertise and scalable system design
    },
    {
      Stack: "Cloud & Infrastructure", // Includes Azure, GCP, Kubernetes, and CI/CD
      progressPercentage: "70%" // Reflects good familiarity and practical experience
    }
  ],
  displayCodersrank: false // Set true to display Codersrank badges, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Intern",
      company: "LTIMindtree",
      companylogo: require("./assets/images/LTIMindtreeLogo.png"),
      date: "February 2023 – May 2023",
      desc: "Enhanced backend performance and implemented scalable microservices architectures.",
      descBullets: [
        "Engineered and optimized Spring Boot applications, adhering to RESTful API design paradigms",
        "Reduced system errors by 30% through rigorous unit testing and code reviews",
        "Improved application response times by 20% with targeted optimization"
      ]
    },
    {
      role: "Java Intern",
      company: "Texity Technology",
      companylogo: require("./assets/images/blankLogo.png"),
      date: "September 2022 – December 2022",
      desc: "Developed user-centric Android applications and resolved production-level issues.",
      descBullets: [
        "Spearheaded Android app UI development, elevating user engagement metrics by 40%",
        "Integrated payment systems through API interactions and maintained robust version control",
        "Minimized downtime by diagnosing and resolving critical production issues"
      ]
    },
    {
      role: "Web Development Intern",
      company: "SkillVertex",
      companylogo: require("./assets/images/skillvertexLogo.png"),
      date: "December 2021 – January 2022",
      desc: "Crafted dynamic web solutions and collaborated with teams to deliver high-quality projects.",
      descBullets: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Enhanced user experience by incorporating responsive design principles",
        "Collaborated with cross-functional teams to meet project deadlines efficiently"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "MAJOR PROJECTS AND CONTRIBUTIONS",
  projects: [
    {
      // image: require("./assets/images/textChatAppLogo.webp"), // Replace with appropriate image
      projectName: "Text Chat Application",
      projectDesc:
        "Developed a client-server text communication system using C++ with robust multi-client interactions, multithreading, and advanced error handling.",
      // footerLink: [
      //   {
      //     name: "Check on Github",
      //     url: "https://github.com/Bhuvanesh291100"
      //   }
      // ] // No website for academic projects, but you can add GitHub links if available
    },
    {
      // image: require("./assets/images/nftWarrantyLogo.webp"), // Replace with appropriate image
      projectName: "E-Commerce Warranty System using NFTs",
      projectDesc:
        "Pioneered a scalable warranty verification system utilizing ERC721 standards, decaying NFTs, and a user-friendly dashboard.",
      // footerLink: [
      //   {
      //     name: "Check on Github",
      //     url: "https://github.com/Bhuvanesh291100"
      //   }
      // ] // Add GitHub repo or demo link if available
    },
    {
      // image: require("./assets/images/cryptoJournalLogo.webp"), // Replace with appropriate image
      projectName: "Cryptocurrency Journal",
      projectDesc:
        "Designed a cryptocurrency analytics platform with real-time data retrieval and predictive modeling, achieving 97% accuracy using an LSTM model.",
      // footerLink: [
      //   {
      //     name: "Check on Github",
      //     url: "https://github.com/Bhuvanesh291100"
      //   }
      // ] // Add GitHub repo or demo link if available
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-716-910-2215",
  email_address: "bkkolhe29@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
