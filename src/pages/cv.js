import React from 'react';
import Link from 'gatsby-link';

import './cv.css';

const CVPage = () => (
  <div>
    <div className="cv">
      <header className="cv__header">
        <h1 className="cv__name">Christopher Ward</h1>
        <article className="cv__contact-details">
          <p className="cv__contact-detail">chris@cmward.co.uk</p>
          <p className="cv__contact-detail">linkedin.cmward.co.uk</p>
        </article>
      </header>
      <hr />
      <article className="cv__summary">
        <p className>
          Experienced Software Developer with a demonstrated history of working in the broadcast media industry. Strong
          engineering professional with a 1st degree in Computer Science from Coventry University. Key skills include:
        </p>
        <ul className="cv__skills-summary-list">
          <li className="cv__skills-summary-list-item">JavaScript (ES6, ES5)</li>
          <li className="cv__skills-summary-list-item">React</li>
          <li className="cv__skills-summary-list-item">Redux</li>
          <li className="cv__skills-summary-list-item">Node.js</li>
          <li className="cv__skills-summary-list-item">Webpack</li>
          <li className="cv__skills-summary-list-item">Gulp</li>
          <li className="cv__skills-summary-list-item">Mocha</li>
        </ul>
      </article>
      <section className="cv__work-experiences">
        <h2 className="cv_experience-heading">Experience</h2>
        <article className="cv__work_experience">
          <section className="cv_work-experience__brief-summary">
            <h3 className="cv__work-experience__company-name">NOW TV</h3>
            <h3 className="cv__work-experience__job-title">Software Engineer</h3>
            <h3 className="cv__work-experience__job-duration">Mar 2016 - Present</h3>
            <h3 className="cv__work-experience__job-location">London</h3>
          </section>
          <p>
            Front end JavaScript for NOW TV, a play live and VOD streaming service. With experience in both content
            discovery and sales and service applications.
          </p>
          <ul>
            <li>Worked on the rewrite of NOW TV with new APIs designed for internationalisation</li>
            <li>
              Developed and maintained two internal open source libraries, one for generating HMAC signatures and
              another for in app authentication
            </li>
            <li>Delivering on key performance objectives for security, reliability, scalability and code sharing</li>
            <li>
              Production support and deployment of the application to multiple environments through pipelines and
              automated testing
            </li>
            <li>Driving positive change through tech catchup sessions and special interest groups</li>
          </ul>
          <p>
            Key technologies: React, Redux, ES6, Webpack, NPM, Koa, Git, Lerna, Jenkis, Kubernetes, CircleCI Capybara
            and Mocha.
          </p>
        </article>
        <article className="cv__work_experience">
          <section className="cv_work-experience__brief-summary">
            <h3 className="cv__work-experience__company-name">Sky</h3>
            <h3 className="cv__work-experience__job-title">Software Engineer</h3>
            <h3 className="cv__work-experience__job-duration">Jul 2015 - Feb 2016</h3>
            <h3 className="cv__work-experience__job-location">London</h3>
          </section>
          <p>Graduate developer on a green field developer tool platform to help improve software excellence.</p>
          <ul>
            <li>
              Helped prove out the use of React within Sky, through rapid prototyping and presentations to the Sky
              Javascript Community
            </li>
            <li>Used Snap CI to create a continuous deployment pipeline</li>
            <li>Rapid development in an XP style, working closely with teams across Sky to gather requirements</li>
          </ul>
          <p>Key technologies: React, ES6, Gulp, Jest, Capybara, Snap CI, Heroku.</p>
        </article>
        <article className="cv__work_experience">
          <section className="cv_work-experience__brief-summary">
            <h3 className="cv__work-experience__company-name">Coventry University</h3>
            <h3 className="cv__work-experience__job-title">Student Proctor</h3>
            <h3 className="cv__work-experience__job-duration">Oct 2014 - May 2015</h3>
            <h3 className="cv__work-experience__job-location">Coventry</h3>
          </section>
          <p>
            Assisting in Level 2 Programming Labs as a Teaching assistant for Programming, Algorithms and Data
            Structures.
          </p>
          <ul>
            <li>Helping Students with Python & C++ programming homework assignments</li>
            <li>Improving my techniques in explanation and communication</li>
          </ul>
        </article>
        <article className="cv__work_experience">
          <section className="cv_work-experience__brief-summary">
            <h3 className="cv__work-experience__company-name">noise.co.uk</h3>
            <h3 className="cv__work-experience__job-title">University Placement</h3>
            <h3 className="cv__work-experience__job-duration">Aug 2013 - May 2015</h3>
            <h3 className="cv__work-experience__job-location">Coventry</h3>
          </section>
          <p>Developing software solutions and providing IT support and administration.</p>
          <ul>
            <li>Responsible for the daily maintenance of all IT systems, including in-house servers and backups</li>
            <li>Creating automated invoice and technical report generation tools using VBA</li>
            <li>Creating and prototyping small web applications</li>
            <li>Liaising with IT suppliers</li>
          </ul>
          <p>Key technologies: PHP, MySQL, VB6, Microsoft Server 2008, Microsoft Exchange 2007</p>
        </article>
      </section>
    </div>
  </div>
);

export default CVPage;
