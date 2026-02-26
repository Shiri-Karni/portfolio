import React from "react";
import SingleProject from '../../lib/components/SingleProject';

// Example generated projects list
const projects = [
    {
        id: 1,
        name: "Study Buddy",
        description: "Designed a comprehensive mobile application in Figma aimed at optimizing exam season for students.<br/> The app provides a personalized learning experience by converting study materials into various formats, including video, audio, and text. <br/><br/> Key features include:<ul><li><strong>Adaptive Practice:</strong> Tailored exercises with instant feedback.</li><li><strong>Exam Simulations:</strong> Realistic testing environments to build confidence.</li><li><strong>Smart Scheduling:</strong> Automated study plans to help students manage their time effectively.</li></ul><br/>This project focused on creating a human-centric UI/UX that addresses the cognitive load and stress students face during finals.",
        image: "/icons/studyBuddy.png",
        link: "https://github.com/Shiri-Noam-Team/StudyBuddy?tab=readme-ov-file",},
    {
        id: 2,
        name: "Shabbat Abroad",
        description: "Developed a React-based web application designed to bridge the gap between Jewish hosts worldwide and Israeli travelers. The platform facilitates cultural and communal connections by allowing guests to find a warm Shabbat dinner and a sense of 'home away from home' anywhere in the world. <br/><br/><strong>Technical Highlight:</strong> Built with a focus on seamless user experience, responsive design, and intuitive matching between hosts and guests to foster meaningful real-world interactions.",
        image: "/icons/shabbat.jpeg",
        link: "https://shabbat-abroad.web.app/",
    },
    {
        id: 3,
        name: "Harshama Tova",
        description: "<p>A comprehensive, full-stack application developed to streamline the registration and management of workshops and community groups for the \"Adama Tova\" NGO. The platform features two distinct interfaces: a personalized user application and a robust administrative dashboard.</p><h4><strong>Key Features - User Interface:</strong></h4><ul><li><strong>Personalized Profiles:</strong> Users can create and manage profiles with all relevant personal information.</li><li><strong>Customized Experience:</strong> Dynamic display of workshops and groups tailored to user interests.</li><li><strong>Calendar Integration:</strong> Automatic export of session dates to personal calendars upon registration.</li><li><strong>Seamless Connectivity:</strong> Direct WhatsApp group integration for instant community onboarding.</li><li><strong>Real-time Updates:</strong> Daily notifications and announcements from the management team.</li><li><strong>Gender-Inclusive UX:</strong> Dynamic interface that adapts the language and tone based on the user's gender profile (Gender-responsive UI).</li></ul><h4><strong>Key Features - Administrative Dashboard:</strong></h4><ul><li><strong>Content Management:</strong> Tools to add and edit workshops, including a \"clone\" feature to restore and reuse past content for efficiency.</li><li><strong>Participant Tracking:</strong> Real-time monitoring of registrations with integrated contact tools.</li><li><strong>Data Portability:</strong> One-click export of participant lists and data to Excel/CSV.</li><li><strong>Admin Management:</strong> Secure user-management interface for system administrators.</li></ul><h4><strong>Tech Stack:</strong></h4><ul><li><strong>Frontend:</strong> React & CSS (Responsive Design).</li><li><strong>Backend & Database:</strong> Supabase (PostgreSQL, Authentication, Real-time DB).</li><li><strong>Design & UI:</strong> Figma (UI/UX Prototyping), Material UI (MUI) for icons and animations.</li><li><strong>Deployment & Versioning:</strong> Vercel (CI/CD), PWA (Progressive Web App) for mobile-native experience.</li></ul>",
        image: "/icons/Harshama-Tova.jpeg",
        link: "https://harshama-tova.vercel.app/",
    },
    {
        id: 4,
        name: "IMO - In My Opinion",
        description: "<p><em>Developed during the #BeSafe Hackathon (hosted by QueenB and AppsFlyer)</em></p><p>IMO is a community-driven chat platform designed to create a secure digital environment for teenage girls. The project focuses on bridging the gap between open social interaction and online safety.</p><h4><strong>Key Features:</strong></h4><ul><li><strong>Real-Time AI Moderation:</strong> Leveraging AI Agents to identify and intercept harmful or offensive content in real-time.</li><li><strong>Educational Feedback Loop:</strong> Providing users with constructive feedback on flagged messages to promote digital literacy.</li><li><strong>Fact-Checking Intelligence:</strong> Automatically highlighting factually inaccurate information to encourage critical thinking.</li><li><strong>Live Engagement:</strong> A seamless, real-time community experience.</li></ul><h4><strong>Technical Stack:</strong></h4><ul><li><strong>Backend:</strong> Developed a robust server-side architecture using Node.js.</li><li><strong>Real-Time Communication:</strong> Integrated Socket.io for low-latency, bi-directional communication.</li><li><strong>AI Integration:</strong> Connected with advanced AI Agents to perform real-time NLP (Natural Language Processing) and content filtering.</li><li><strong>Product & UX:</strong> Led the product lifecycle from initial characterization and UX design to a functional end-to-end prototype.</li></ul>",
        image: "/icons/imo.jpeg",
        link: "https://github.com/Shiri-Karni/BeSafeHackathonTeam10",
    }
];

export default function ProjectsPage() {
    return (
        <main className="projects-page-container">
            <h2 className="middleHeadline">My Projects</h2>
            <p className="middleHeadline">
                Here you can see a few of the projects I worked on
            </p>
            <div className="projects-list">
                {projects.map((project) => (
                    <SingleProject key={project.id} {...project} />
                ))}
            </div>
        </main>
    );
}