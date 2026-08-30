export const profile = {
  name: "Fajil Chauhan",
  role: "Full Stack Developer | Backend Engineer",
  email: "chauhanfajil07@gmail.com",
  phone: "+91 88664 30415",
  github: "https://github.com/FajilChauhan",
  leetcode: "https://leetcode.com/u/Fajil_Chauhan/",
  codeforces: "https://codeforces.com/profile/Fajil_Chauhan",
  whatsapp: "https://wa.me/918866430415?text=Hi%20Fajil%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20about%20a%20job%20or%20freelance%20opportunity.",
  location: "Gandhinagar, Gujarat, India",
  cv: "/Fajil_Chauhan_CV.pdf",
  targetRoles: ["Full Stack Developer", "Software Engineer", "Backend Developer", "Junior AI / ML Engineer"],
  targetLocations: ["Ahmedabad", "Gandhinagar", "Remote India"],
};

export const summary = [
  "B.Tech ICT student at Dhirubhai Ambani University with hands-on full-stack and backend engineering experience.",
  "Built deployed production-style applications with real-time scoring, multi-role operations, authentication, booking flows, billing, caching, and PostgreSQL-backed APIs.",
  "Interned at Tech Ahir Pvt Ltd building ASP.NET Core APIs, SQL Server data access, Dapper queries, validations, and backend business logic.",
];

export const stats = [
  { label: "Deployed full-stack apps", value: "2" },
  { label: "Internship", value: "5 mo" },
  { label: "Coding profiles", value: "2" },
];

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "Fajil_Chauhan",
    url: "https://leetcode.com/u/Fajil_Chauhan/",
    focus: "DSA practice and problem solving",
  },
  {
    name: "Codeforces",
    handle: "Fajil_Chauhan",
    url: "https://codeforces.com/profile/Fajil_Chauhan",
    focus: "Competitive programming profile",
  },
];

export const projects = [
  {
    name: "CrazyCricketLive",
    tagline: "Real-time cricket tournament management platform",
    description: "A full-stack real-time cricket tournament management platform with live scoring, tournament operations, scorecards, points tables, and player statistics.",
    image: "/crazycricketlive-preview.png",
    github: "https://github.com/FajilChauhan/CrazyCricketLive",
    live: "https://crazycricketlive.vercel.app",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "React Query", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Redis", "Socket.IO", "JWT", "RBAC"],
    highlights: [
      "Real-time ball-by-ball live scoring using Socket.IO",
      "Full tournament management for tournaments, teams, players, and matches",
      "Live scorecards, points tables, player statistics, toss, innings, and playing XI flows",
      "JWT authentication with role-based access control",
      "Redis caching, centralized error handling, and optimized database queries",
    ],
  },
  {
    name: "SAFNAM",
    tagline: "Restaurant and hotel management system",
    description: "A complete multi-role restaurant and hotel management platform covering bookings, kitchen operations, billing, loyalty, staff roles, and admin permissions.",
    image: "/safnam-preview.png",
    github: "https://github.com/FajilChauhan/SAFNAM_RESTAURANT_MANAGEMENT",
    live: "https://safnam-restaurant-management.vercel.app",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "RBAC"],
    highlights: [
      "Table booking with conflict detection and concurrency-safe availability checks",
      "Room booking with full check-in and checkout lifecycle",
      "End-to-end billing engine combining table, room, food, and discount charges",
      "Five role experiences: Admin, Manager, Reception, Kitchen, and Customer",
      "Dynamic permissions, audit logs, loyalty points, leaderboard, favorites, and backend-validated rewards",
    ],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "C#", "C++", "SQL"],
  Frontend: ["React.js", "Tailwind CSS", "Redux Toolkit", "React Query", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "ASP.NET Core", "REST APIs", "CQRS", "MediatR", "Clean Architecture"],
  Databases: ["PostgreSQL", "SQL Server", "Redis", "Prisma ORM", "Dapper ORM"],
  Tools: ["Git", "GitHub", "Vercel", "Postman", "Visual Studio", "VS Code"],
  Concepts: ["Role-Based Access Control", "Authentication", "Caching", "Database Design", "API Design"],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Tech Ahir Pvt Ltd",
    location: "Ahmedabad",
    period: "January 2026 - May 2026",
    points: [
      "Built and integrated RESTful APIs using ASP.NET Core with MVC architecture and CQRS pattern for real production modules.",
      "Implemented backend business logic, input validations, and database operations using SQL Server and Dapper ORM.",
      "Optimized SQL queries and contributed to database schema design for scalable data access patterns.",
      "Collaborated with the development team to debug issues, improve performance, and ship backend features on time.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Information and Communication Technology",
    school: "Dhirubhai Ambani University, Gandhinagar",
    period: "2022 - 2026",
    result: "CPI: 6.15",
  },
  {
    degree: "12th (GHSEB)",
    school: "Shree C.D. Patel High School, Talod",
    period: "2022",
    result: "80.76%",
  },
  {
    degree: "10th (GSEB)",
    school: "Trinity High School, Talod",
    period: "2020",
    result: "87.16%",
  },
];
