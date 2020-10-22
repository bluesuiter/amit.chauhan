import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './pages.css';

const Pages = (props) => {   
    let { page } = useParams();
    if(typeof page === 'undefined'){ 
        page = props.page 
    }

    return (
        <div className="container-fluid p-0">
            <section className="resume-section">
                <div className="resume-section-content">
                    { pageData.selectPage(page) }
                </div>
            </section>
        </div>
    );
}

export default Pages;

const pageData = {
    selectPage: (page) => {
        switch(page){
            case 'about':
                return pageData.about();
                break;
            
            case 'experience':
                return pageData.experience();
                break;
            
            case 'education':
                return pageData.education();
                break;
            
            case 'skills':
                return pageData.skills();
                break;
            
            case 'interests':
                return pageData.interests();
                break;
        }
    },
    about: () => {
        return (
            <>
                <h1 className="mb-0">
                    Clarence
                    <span className="text-primary">Taylor</span>
                </h1>
                <div className="subheading mb-5">
                    +91-9463887829
                    <Link href="mailto:chauhanamit0810@outlook.com">chauhanamit0810@outlook.com</Link>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                    <Link className="social-icon" to={'https://in.linkedin.com/in/chauhanamit0810'}><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="social-icon" to={'https://github.com/bluesuiter'}><i className="fab fa-github"></i></Link>
                    <Link className="social-icon" to={'https://twitter.com/chauhanamit0810'}><i className="fab fa-twitter"></i></Link>
                </div>
            </>
        )
    },
    
    experience: () => {
        return (
            <>
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Senior Web Developer</h3>
                        <div className="subheading mb-3">Intelitec Solutions</div>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">March 2013 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Web Developer</h3>
                        <div className="subheading mb-3">Intelitec Solutions</div>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">December 2011 - March 2013</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Junior Web Designer</h3>
                        <div className="subheading mb-3">Shout! Media Productions</div>
                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">July 2010 - December 2011</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Web Design Intern</h3>
                        <div className="subheading mb-3">Shout! Media Productions</div>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span></div>
                </div>
            </>
        )
    },

    education: () => {
        return (
            <>
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Kurukshetra University</h3>
                        <div className="subheading mb-3"> Bachelor of Technology (B.Tech.) - Computer Science </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2010 - 2013</span></div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Government Polytechnic, Ambala City </h3>
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
            </>
        )
    },

    skills: () => {
        return (
            <>
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                    <li className="list-inline-item"><i className="fab fa-less"></i></li>
                    <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                    <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                    <li className="list-inline-item"><i className="fab fa-grunt"></i></li>
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
            </>
        )
    },

    interests: () => {
        return (
            <>
                <h2 className="mb-5">Interests</h2>
                <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
            </>
        )
    }
}