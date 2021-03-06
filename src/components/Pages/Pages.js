import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import './pages.css';

const Pages = (props) => {
    let { page } = useParams();
    if (typeof page === 'undefined') {
        page = props.page
    }

    return (
        <div className="container-fluid p-0">
            <section className="resume-section">
                <div className="resume-section-content">
                    {pageData.selectPage(page)}
                </div>
            </section>
        </div>
    );
}

export default Pages;

const pageData = {
    selectPage: (page) => {
        switch (page) {
            case 'about':
                return pageData.about();

            case 'experience':
                return pageData.experience();

            case 'education':
                return pageData.education();

            case 'skills':
                return pageData.skills();

            case 'interests':
                return pageData.interests();

            default:
                return pageData.error404();
        }
    },
    error404: () => {
        return (
            <Fragment>
                <h1>Page Not Found!</h1>
                <Link to={'about'} className="btn btn-info btn-sm">Back To Home!</Link>
            </Fragment>
        )
    },

    about: () => {
        return (
            <Fragment>
                <h1 className="mb-0">Amit <span className="text-primary">Chauhan</span></h1>
                <div className="subheading mb-5">
                    <a className="text-info" href="tel:+919463887829">+91-9463887829</a> || <a className="text-info" href="mailto:chauhanamit0810@outlook.com">chauhanamit0810@outlook.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                    <Link className="social-icon" target="_blank" to='https://in.linkedin.com/in/chauhanamit0810'><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="social-icon" target="_blank" to='https://github.com/bluesuiter'><i className="fab fa-github"></i></Link>
                    <Link className="social-icon" target="_blank" to='https://twitter.com/chauhanamit0810'><i className="fab fa-twitter"></i></Link>
                </div>
            </Fragment>
        )
    },

    experience: () => {
        return (
            <Fragment>
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Senior Web Developer</h3>
                        <div className="subheading mb-3">Ethos Watch Boutiques</div>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">September 2018 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Engineer</h3>
                        <div className="subheading mb-3">Escalon Services</div>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">November 2017 - September 2018</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">PHP Developer</h3>
                        <div className="subheading mb-3">Ethos Watch Boutiques</div>
                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">May 2016 - October 2017</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">WordPress/PHP Developer</h3>
                        <div className="subheading mb-3">Webroot Technologies</div>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">June 2015 - April 2016</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Frontend Developer</h3>
                        <div className="subheading mb-3">Ratiocinative Solutions</div>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">January 2014 - June 2015</span></div>
                </div>
            </Fragment>
        )
    },

    education: () => {
        return (
            <Fragment>
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Kurukshetra University</h3>
                        <div className="subheading mb-3">Bachelor of Technology (B.Tech.) - Computer Science </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2010 - 2013</span></div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Government Polytechnic, Ambala City</h3>
                        <div className="subheading mb-3">Diploma - Computer Engineering</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2007 - 2010</span></div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Jainendra Public School</h3>
                        <div className="subheading mb-3">High School</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">1999 - 2007</span></div>
                </div>
            </Fragment>
        )
    },

    skills: () => {
        return (
            <Fragment>
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                    <li className="list-inline-item"><i className="fab fa-php"></i></li>
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-bootstrap"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Cross Browser Testing & Debugging
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Agile Development & Scrum
                    </li>
                </ul>
            </Fragment>
        )
    },

    interests: () => {
        return (
            <Fragment>
                <h2 className="mb-5">Interests</h2>
                <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
            </Fragment>
        )
    }
}