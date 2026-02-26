
'use client';

import Contact from '../lib/components/Contact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Home() {
  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main>
      <div className="mainPage">
        <h2 className="middleHeadline">A Little Bit About Me</h2>
        <h5 className="aboutMe"> Bridging the gap between People & Technology to create human-centric digital experiences.</h5>
        <p className="who-i-am">As a graduate of <strong>the MATAR Excellence Program in Computer Science and Psychology </strong>at the Hebrew University of Jerusalem, I operate at the intersection of technology, human behavior, and entrepreneurship.<br/> With a proven track record spanning from <strong>full-stack development using React</strong> to <strong>strategic marketing </strong>for the university&apos;s Innovation & Entrepreneurship Center, <br/>I specialize in building digital products that are as <strong>technically robust</strong> as they are deeply <strong>user-centric</strong>. <br/>My background in <strong>leadership and mentorship</strong> continues to drive my passion for solving complex problems through collaborative, data-driven innovation</p>
        <div className="buttons-wrapper">
          <button className="projects"> My <br/>projects</button>
          <button className="contact" onClick={handleContactClick}> Contact <br/> information </button>
        </div>
        <hr className="separator"></hr>
        <h2 className="middleHeadline">My Core Strengths</h2>
        <img src="/icons/principles.svg" alt="strengths"></img>
        <hr className="separator"></hr>
        <div id="contact-section">
          <h2 className="middleHeadline">Contact Me</h2>
          <p className="contact-me"> Always open to new opportunities, interesting challenges, and meaningful conversations.<br/>Reach out via any of the channels below:</p>
          <div className="contact-wrapper">
            <Contact icon={<MailIcon />} text="Email" link="mailto:shiri.karni@mail.huji.ac.il" />
            <Contact icon={<LinkedInIcon />} text="LinkedIn" link="https://www.linkedin.com/in/shiri-karni/" />
            <Contact icon={<GitHubIcon />} text="GitHub" link="https://github.com/Shiri-Karni" />
          </div>
        </div>
      </div>
    </main>
  );
}
