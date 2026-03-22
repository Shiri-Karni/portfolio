
'use client';

import Contact from '../lib/components/Contact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import Streangths from '../lib/components/Streangths';
import React from 'react';



export default function Home() {
  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isLightboxOpen, setLightboxOpen] = React.useState(false);
  return (
    <main>
      <div className="mainPage">
        <h2 className="middleHeadline">A Little Bit About Me</h2>
        <h5 className="aboutMe"> Bridging the gap between People & Technology to create human-centric digital experiences.</h5>
        <p className="who-i-am">As a graduate of <strong>the MATAR Excellence Program in Computer Science and Psychology </strong>at the Hebrew University of Jerusalem, I operate at the intersection of technology, human behavior, and entrepreneurship.<br/> With a proven track record spanning from <strong>full-stack development using React</strong> to <strong>strategic marketing </strong>for the university&apos;s Innovation & Entrepreneurship Center, <br/>I specialize in building digital products that are as <strong>technically robust</strong> as they are deeply <strong>user-centric</strong>. <br/>My background in <strong>leadership and mentorship</strong> continues to drive my passion for solving complex problems through collaborative, data-driven innovation</p>
        <div className="buttons-wrapper">
          <button className="projects" onClick={() => window.location.href = '/projects'}> My <br/>projects</button>
          <button className="contact" onClick={handleContactClick}> Contact <br/> information </button>
        </div>
        <hr className="separator"></hr>
        <h2 className="middleHeadline">My Core Strengths</h2>
        <div className="strengths-container">
          <div className="strengths-wrapper">
            <Streangths
              title="Ownership & Initiative"
              subtitle="The 'I've got this' mindset"
              description="<p>I don’t just execute tasks - I own projects. </br/>
                From identifying gaps to delivering end-to-end solutions, I take full responsibility and always look for the next way to add value.</p>"
            />
            <Streangths
              title="Team Work & Leadership"
              subtitle="Great things are never done alone"
              description="<p>Coming from a background of leadership and mentorship, I thrive in environments where ideas are shared. I believe that the best products are born from diverse perspectives and seamless teamwork.</p>"
            />
          </div>
          <div className="strengths-wrapper">
            <Streangths
              title="Striving for Excellence"
              subtitle="Don’t just say it doesn’t work - make it work"
              description="<p>I believe that nothing is out of reach. For me, challenges are simply opportunities to create innovative solutions and drive significant improvement. No matter the task, I am fueled by a constant drive to be the best version of myself and deliver exceptional results.</p>"
            />
            <Streangths
              title="Bridging People & Technology"
              subtitle="Tech-driven solutions for social impact"
              description="<p>I operate at the vital intersection of data and human behavior. I believe that to build truly impactful products, deep technical expertise must be paired with a profound understanding of the end-user. My goal is to leverage technology as a tool for social progress, ensuring that every digital experience is as intuitive as it is powerful.</p>"
            />
          </div>
        </div>
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
