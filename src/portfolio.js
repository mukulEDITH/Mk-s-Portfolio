/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  // animation: splashAnimation,
  duration: 1500,// Set animation duration as per your animation
  imageprofile:require("./assets/images/dp.jpeg")
};

// Summary And Greeting Section

// const illustration = {
//   animated: true // Set to false to use static SVG
// };

const greeting = {
  username: "Mukul Kaushal",
  title: "Hello all, I'm Mukul Kaushal",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qdNAuel8ppOlxhTNArPex0louTtNiTGn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mukulEDITH",
  linkedin: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG9A8fs7eUnEAAAAYzTR8PoCumA_fxU0a-6jbiF33reAN858gwAveOFdtIg3N7oAllAcVio_0XQwI2XfTX5szQWSXNVdofR5VyH72pEuadBvz4GlJL5aKUkjWTcP9kMvYSvSQI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmukulkaushal",
  gmail: "mukulkaushal87@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram:"",https://www.instagram.com/mukulkaushalll?igsh=MWNkeGx1dzhhanlibg==
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Edureka",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Full stack web development program",
    //   duration: " April 2023",
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
    {
      schoolName: "Oriental university",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.Tech",
      duration: "June 2017 - July 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "PnQ Technologies",
      companylogo: require("./assets/images/pnqtech_logo.jpg"),
      date: "October 2023 – Present",
      desc: " Working with the technologies like AEM (Adobe experience manager), React js,Lucid dreams, HTML & CSS.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Junior software Developer",
      company: "Blockcept pvt ltd",
      companylogo: require("./assets/images/blockcept_ai_cover.jpg"),
      date: "December 2022 – July 2023",
      desc: "A 8 months of internship in which i worked with the web development projects in a startup."
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show   t profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Developed some projects based on MERN stack andJs tools.",
  projects: [
    {
      image: require("./assets/images/web mainpage.png"),
      projectName: "Cartoonpanti Apparels Catalouge",
      projectDesc: "This project aims to develop a Ui experience model using Next.js, React.js, and JavaScript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cartoonpanti.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/backenndLogin.jpg"),
      projectName: "Back-end Login Authentication",
      projectDesc: "This project aims to develop a back-end login authentication system using Node.js, Mongoose,MongoDB, React.js, and JavaScript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/mukulEDITH/Backend-Login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/salary icon.webp"),
      projectName: "Salary Calculator",
      projectDesc: "Introducing a user-friendly and efficient salary calculator designed to simplify your financial planning! This meticulously crafted tool allows you to quickly and accurately calculate your net monthly or annual salary after deductions, including taxes, insurance, and any other deductions relevant to your income. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://salary-calculator-nine.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/youtbe clone ss.png"),
      projectName: "Youtube Clone",
      projectDesc: "Introducing YouTube Clone - your go-to hub for all things video! With a familiar interface and a world of content at your fingertips, dive into a universe of entertainment, education, and exploration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://youtube-clone-smoky-delta.vercel.app/"
        }
      ]
    } ,{
      image: require("./assets/images/stock api.jpg"),
      projectName: "Stock detail API",
      projectDesc: "Users can add stock details, such as price, quantity, and date, and retrieve stock information based on a specific date, providing a comprehensive stock detail management system. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/mukulEDITH/Stock-Detail-API"
        }
      ]
    },
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
      title: "Full Stack Web Development Course",
      subtitle:
        " Having completed Edureka's Full Stack Web Developer course, I've gained a solid grasp of modern web development. Through in-depth modules, I've mastered front-end essentials like HTML, CSS, and JavaScript, while also diving into back-end technologies such as Node.js and Python. Additionally, the course provided an introduction to Data Structures and Algorithms (DSA), empowering me to build dynamic web applications and tackle complex challenges with confidence.",
      image: require("./assets/images/Screenshot 2024-01-05 163126.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: 
        //   url: 
        // },
        // {
        //   name: 
        //   url: 
        // },
        // {
        //   name: 
        //   url: 
        // }
      ]
    },
    {
      title: "Certification of Appreciation from IIT Indore.",
      subtitle:
        " This workshop, conducted in collaboration with ITT Indore, offers participants a concise yet comprehensive overview of automotive engineering and internal combustion engines (IC). Participants gain practical insights into engine operation, fuel management, emissions control, and performance optimization, equipping them with essential skills for the automotive industry.",
      image: require("./assets/images/iit certificate.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: 
        //   url: 
        // },
        // {
        //   name: 
        //   url: 
        // },
        // {
        //   name: 
        //   url: 
        // }
      ]
    },
    {
      title: "Letter of Appreciation",
      subtitle:
        " Recognized by the Oriental Institute of Science and Technology for exemplary team management skills showcased during our college's participation in the auto expo. The letter highlights my effective coordination and leadership in ensuring a successful exhibit. This acknowledgment underscores my ability to lead teams towards common objectives, reflecting positively on my leadership and organizational capabilities.",
      image: require("./assets/images/loa oriental.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: 
        //   url: 
        // },
        // {
        //   name: 
        //   url: 
        // },
        // {
        //   name: 
        //   url: 
        // }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false// Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8319662377",
  email_address: "mukulkaushal87@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  
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
  isHireable
};
