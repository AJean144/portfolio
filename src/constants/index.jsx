const ICON_SIZE = 20;

const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: (
      <svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: "resume",
    title: "Resume",
    icon: (
      <svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: (
      <svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    icon: (
      <svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Everly Health",
    icon: "",
    iconBg: "#383E56",
    date: "JANUARY 2021 – FEBRUARY 2024 (3 YEARS 1 MONTH)",
    points: [
      "Developed and deployed an average of 3 new features monthly using React and GraphQL, contributing to a seamless, digital care platform that enhances user experience.",
      "Maintained the integration of Contentful as a headless CMS, enabling dynamic content management and accelerating content delivery by 93%.",
      "Leveraged MixPanel for detailed analytics and user behavior tracking, providing critical insights that informed continuous improvement of the digital care platform that resulted in a 77% increase in user engagement metrics.",
      "Integrated DataDog monitoring to proactively address system performance issues, achieving 100% uptime and ensuring a reliable user experience.",
      "Enhanced the platform's reliability and maintainability by authoring and maintaining a suite of automated tests, increasing the test coverage across the application from 80% to an impressive 92% with Jest, strengthening code quality.",
      "Contributed to the maintenance of backend services by writing RSpec unit tests to ensure API endpoints work as expected, leveraging ActiveRecord to map Rails models to Postgres tables and ensuring high performance/data integrity.",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "Politech",
    icon: "",
    iconBg: "#E6DEDD",
    date: "SEPTEMBER 2019 – JANUARY 2021 (2 YEARS 5 MONTHS)",
    points: [
      "Led the development switch of the Blocks application from a Ruby on Rails app to a sophisticated stack comprising React.js, Redux, and TypeScript in the front end, paired with Rails in the back end, to significantly enhance how political campaigns manage interactions with supporters.",
      "Directed the execution of product roadmaps, emphasizing rapid iteration and frequent releases, while focusing on TypeScript-based feature development to ensure type-safe state management, seamless API consumption, and robust data modeling.",
      "Leveraged the Material UI framework to create visually striking and responsive applications, delivering an adaptable user experience across multiple devices and platforms.",
      "Played a critical role in the lifecycle of product development, from conceptualizing MVP features to driving continuous enhancement through rapid iteration and frequent updates.",
      "Utilized Docker for containerization, streamlining development, testing, and deployment workflows, which facilitated consistent environments across the development lifecycle.",
      "Pioneered the creation of our own Design Language System (DLS) for the Blocks application, establishing a cohesive and scalable set of design principles and guidelines that enhanced UI consistency and accelerated the development process.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Differential",
    icon: "",
    iconBg: "#383E56",
    date: "SEPTEMBER 2017 – SEPTEMBER 2019 (2 YEARS)",
    points: [
      "Collaborated with a remote team of developers, capitalizing on the strengths of React.js, React Native, Angular.js, GraphQL, and TypeScript, in conjunction with Ruby on Rails and Postgress, to create high-performance web and mobile applications.",
      "Pioneered TypeScript-centric development methodologies, fostering a culture of excellence in collaboration with cross-disciplinary teams to ensure the delivery of premium software solutions.",
      "Utilized React Native's performance optimization techniques to ensure fluid animation and quick loading times, crucial for all users.",
      "Developed and maintained a sophisticated database architecture using PostgreSQL, ensuring data integrity and optimal performance across all application layers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "AAA",
    icon: "",
    iconBg: "#E6DEDD",
    date: "JANUARY 2016 - SEPTEMBER 2017 (1 YEAR 9 MONTHS)",
    points: [
      "Designed and deployed React components, employing the Flux architecture then eventually Redux for unidirectional data flow, ensuring responsive and intuitive updates across client-facing applications.",
      "Integrated Node.js and Express frameworks to enhance server-client data communication, optimizing application performance and user experience.",
      "Collaborated with a dynamic software development team to conceptualize and execute new feature developments, enriching AAA’s array of services and member experiences.",
      "Translated UI mockups and business requirements into functional, user-centric features, demonstrating a keen eye for detail and a strong understanding of user interface design principles.",
      "Maintained existing endpoints while developing new ones in Java, interfacing with an Oracle database via Maven, to facilitate reliable data management and application functionality.",
    ],
  },
];

export { experiences, navLinks };
