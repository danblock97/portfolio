import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  g4s,
  homeImprovement,
  des,
  nexusbot,
  apexlegends,
  weatherio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: ".NET Developer",
    icon: web,
  },
  {
    title: "React Web Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Photoshop Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Jira DevOps IT Developer",
    company_name: "DE&S",
    icon: des,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Build and deploy Jira Projects",
      "Maintain and support existing Jira projects across the organisation",
      "Engaging with all customers closely during development and hypercare",
      "Using JQL to create filters on the fly when needed.",
      "Monitor the Jira servers and take action when Jira goes down or has issues.",
    ],
  },
  {
    title: ".NET DevOps IT Developer",
    company_name: "DE&S",
    icon: des,
    iconBg: "#383E56",
    date: "July 2022 - June 2023",
    points: [
      "Build and deploy .NET Applications using C#",
      "Maintain and support existing applications within the .NET Stack",
      "Engaging with all customers closely during End of Sprint reviews, gaining feedback and presenting that to our team.",
      "Using multiple technologies available within the .NET Stack adapting to all.",
      "I write Unit Tests for all my work covering all scenarios within my code base while also assisting others in writing there's or helping work out what needs to be tested. I also create functional tests using Playwright.",
    ],
  },
  {
    title: "Oracle DevOps IT Developer",
    company_name: "DE&S",
    icon: des,
    iconBg: "#383E56",
    date: "August 2020 - July 2022",
    points: [
      "I helped build and deploy Oracle APEX Applications.",
      "Participated in Defect Resolutions for a system wide application",
      "Maintained and supported fixes on existing but now depreciated applications",
      "Using JIRA to plan sprints and keep track of current progress, both Scrum and Kanban.",
    ],
  },
  {
    title: "IT Technical Analyst",
    company_name: "G4S",
    icon: g4s,
    iconBg: "#383E56",
    date: "September 2019 – August 2020",
    points: [
      "Raising and resolving IT requests from various G4S members of staff from every department across the country and internationally, escalating to 2nd Line and 3rd Line teams when needed.",
      "Creating, modifying and disabling user accounts via Active Directory across multiple domain controllers as well as creating and suspending email accounts when needed with the ability to run reports and audits.",
      "Remotely fixing internet and VPN issues for clients, installing and repairing software including Microsoft Office.",
    ],
  },
  {
    title: "IT Support",
    company_name: "Your Home Improvements",
    icon: homeImprovement,
    iconBg: "#E6DEDD",
    date: "Janurary 2016 - June 2016",
    points: [
      "My duties at this work place included social media management (Facebook, Twitter, Pinterest, Instagram). I also helped to manage Microsoft Excel spreadsheets which had customer information on and times of appointments, etc. I was in charge of making presentations to be displayed around the store for customers to view.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Testimonial here",
    name: "Name 1 here",
    designation: "Job Role here",
    company: "Company Name here",
    image: "image here",
  },
  {
    testimonial: "Testimonial here",
    name: "Name 2 here",
    designation: "Job Role here",
    company: "Company Name here",
    image: "image here",
  },
  {
    testimonial: "Testimonial here",
    name: "Name 3 here",
    designation: "Job Role here",
    company: "Company Name here",
    image: "image here",
  },
];

const projects = [
  {
    name: "NexusBot",
    description:
      "A quick responsive Discord bot that uses the Tracker Network API to gather live and up-to-date stats for a requested player on a number of games and platforms",
    tags: [
      {
        name: "pyton",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: nexusbot,
    source_code_link: "https://github.com/danblock97/NexusBot",
  },
  {
    name: "Weather Chaser",
    description:
      "Simple React Weather app that uses the OpenWeatherMap API to return the current weather for any City, with the ability to clear your results.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherMapAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherio,
    source_code_link: "https://github.com/danblock97/weather-app-react-main",
  },
  {
    name: "React Apex Legends Player Tracker",
    description:
      "Simple React app that uses the Apex Legends API from Tracker Network in a backend server using ExpressJS, Axios and CORS which is then called by the frontend to display player stats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: apexlegends,
    source_code_link:
      "https://github.com/danblock97/apex-legends-tracker-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
