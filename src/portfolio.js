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
  username: "Amandeep Singh",
  title: "Hi all, I'm Amandeep Singh",
  subTitle: emoji(
    "I am a Full stack Web developer 🚀 Having a sufficient Knowledge of Programming . A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16xpA2wLz2Bygg8CV0YW8eCZF4yAgoMTm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amandeep362",
  linkedin: "https://www.linkedin.com/in/amandeep-singh-699026196",
  gmail: "amanbhatia5710@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/amandeep.amanbhatia",
  medium: "https://medium.com/@amanbhatia5710",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Progressive Web Applications (PWA) Development: Proficient in building PWAs using both traditional and Single Page Application (SPA) stacks. Expertise includes leveraging service workers, responsive design principles, and offline functionality to create engaging and reliable web experiences."
    ),
    emoji(
      "⚡ Skilled in server-side programming languages and frameworks, enabling the creation of robust backend systems to support dynamic web applications. Proficiency in handling data persistence, authentication, and API integrations for seamless client-server communication."
    ),
    emoji(
      "⚡ NetSuite Development:  Extensive experience as a NetSuite developer, adept at creating scripts, SuiteScripts, and SuiteTalk integrations to extend and customize the NetSuite platform. Capable of developing custom workflows, saved searches, and SuiteApps to automate business processes and enhance productivity."
    ),

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
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
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
    {
      skillName: "nextJs",
      fontAwesomeClassname: "fab fa-react"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Seth Jai Parkash Mukand Lal Institute of Engineering and Technology",
      logo: require("./assets/images/Jmitlogo.jpg"),
      subHeader: "Bachelor of Technology in information Technology",
      duration: "August 2019 - may 2023",
      descBullets: [
        "Participated in Various college activities",
        "Represent college in Smart india hackathon 2022",
        "8.5 CGPA",
      ]
    },
    {
      schoolName: "G.B.S Public School,Mustafabad",
      logo: require("./assets/images/gbs.jpeg"),
      subHeader: "12th",
      duration: "mar 2018 - mar 2019",
      descBullets: [
        "67%",
      ]
    },
    {
      schoolName: "G.B.S Public School,Mustafabad",
      logo: require("./assets/images/gbs.jpeg"),
      subHeader: "10th",
      duration: "mar 2010 - mar 2017",
      descBullets: [
        "7.8 CGPA",
      ]
    },
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
      Stack: "Netsuite",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Netsuite developer",
      company: "Heliverse",
      companylogo: require("./assets/images/Heliverse.jpg"),
      date: "Nov 2023 – Present",
      desc: "Work as a netsuite developer.",
      descBullets: [
        "SuiteScript development (SuiteScript 2.0) for new customizations as well as updates and modifications to existing scripts.",
        "End-to-end management of customizations, solution architecture, development, testing, and deployment.",
        "Troubleshooting scripts, integrations, and workflows",
        "Creation of detailed user and technical documentation for new and existing customizations.",
        "Hosted meetings directly with clients to gather requirements, analyze situations, and provided solutions.",
      ]
    },
    {
      role: "Full Stack Web developer",
      company: "Heliverse",
      companylogo: require("./assets/images/Heliverse.jpg"),
      date: "October 2022 – Nov 2023",
      desc: "Work as a full stack web developer.",
      descBullets: [
        "Develop a UI of website",
        "Integrate a api with frontend website",
        "Optimize a website using redux",
        "Develop Dashboard of website",
      ]
    },
    {
      role: "Subject matter expert",
      company: "Chegg",
      companylogo: require("./assets/images/chegg.png"),
      date: "september 2021 – september 2022",
      desc: "work as a chegg matter expert and resolve the doubts of students in computer science."
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
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/agroacers.png"),
      projectName: "Agroacers",
      projectDesc: "AgroAcers is a data-driven full-stack technology platform that makes farming intelligent and empowers farmers to double their income. Farmers can get soil testing, training, crop protection, crop nutrition, seeds, agriculture equipment, and tools which is 300 + product range and which involves approx 25 + Agro-skilled experts who are available for the farmer's services. This in turn will help farmers to select the right Agri inputs for farming.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://agroacers-frontend-h7s2guv3l-amandeep362.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/uplearn.png"),
      projectName: "Uplearn",
      projectDesc: 'We seek to provide a platform for online education that is economically feasible to the underprivileged sections of the society. Via this platform, we aim to provide video lectures and other learning materials appropriately categorized by the class and education boards. It also facilitates educators to record video lectures and conduct doubt solving sessions for their students, all integrated into one platform',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://agroacers-frontend-84ka.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/debbiedanks.png"),
      projectName: "DebbieDanks",
      projectDesc: 'Debbidanks is the usa online newsletter website.i developed it during my team . this project use next js on frontend and strapi for cms.',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.debbiedanks.com/"
        }
      ]
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
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
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
  display: true // Set false to hide this section, defaults to true
};
//Gallery Section

const gallerySection = {
  title: "Gallery",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  images: [
    {
      thumbnail: 'https://i.ibb.co/jbDhKN2/gallery0.jpg',
      original: 'https://i.ibb.co/jbDhKN2/gallery0.jpg'
    },
    {
      thumbnail: 'https://i.ibb.co/Kq9pqGv/gallery1.jpg',
      original: 'https://i.ibb.co/Kq9pqGv/gallery1.jpg'
    },
    {
      thumbnail: 'https://i.ibb.co/yWJbYKz/gallery2.jpg',
      original: 'https://i.ibb.co/yWJbYKz/gallery2.jpg'
    },
    {
      thumbnail: 'https://i.ibb.co/2cGvmd1/gallery2.jpg',
      original: 'https://i.ibb.co/2cGvmd1/gallery2.jpg'
    },
    {
      thumbnail: 'https://i.ibb.co/4fyf83y/gallery4.jpg',
      original: 'https://i.ibb.co/4fyf83y/gallery4.jpgg'
    },
    {
      thumbnail: 'https://i.ibb.co/KWZyFVj/gallery5.jpg',
      original: 'https://i.ibb.co/KWZyFVj/gallery5.jpg'
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9518284740",
  email_address: "amanbhatia5710@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  gallerySection
};
