import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import './pages.css';

const Pages = (props) =>
{
    let { page } = useParams();
    if (typeof page === 'undefined')
    {
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
    selectPage: (page) =>
    {
        switch (page)
        {
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
    error404: () =>
    {
        return (
            <Fragment>
                <h1>Page Not Found!</h1>
                <Link to={ 'about' } className="btn btn-info btn-sm">Back To Home!</Link>
            </Fragment>
        )
    },

    about: () =>
    {
        return (
            <Fragment>
                <div class="row col-12">
                    <div class="col-12 col-sm-3 text-center" href="#page-top">
                        <img height="110px" alt="Amit Chauhan" class="img-fluid img-profile shadow rounded mx-auto mb-3" src={ require('../../assets/images/1623396096273.jpg') } />
                        <div className="border py-1 rounded social-icons">
                            <Link className="social-icon" target="_blank" to='https://in.linkedin.com/in/chauhanamit0810'><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="social-icon" target="_blank" to='https://github.com/bluesuiter'><i className="fab fa-github"></i></Link>
                            <Link className="social-icon" target="_blank" to='https://twitter.com/chauhanamit0810'><i className="fab fa-twitter"></i></Link>
                        </div>
                    </div>
                    <div class="col-12 mt-sm-4 pl-sm-5 col-sm-9">
                        <h1 class="mb-0">Amit <span class="text-primary">Chauhan</span></h1>
                        <div class="subheading mb-5">
                            <a class="text-info" href="tel:+919463887829">+91-9463887829</a> || <a class="text-info" href="mailto:chauhanamit0810@outlook.com">chauhanamit0810@outlook.com</a>
                        </div>
                        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                </div>

            </Fragment>
        )
    },

    experience: () =>
    {
        return (
            <Fragment>
                <h2 className="mb-5">Experience</h2>
                {/* sdp-labs */ }
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">SDP Labs</h3>
                        <div className="subheading mb-3">Senior Web Developer</div>
                        <p>SDP Labs is running a application with name of Proof-Hub. They hired me for the profile of PHP-Developer.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">September 2018 - August 2021</span></div>
                </div>

                {/* ethos watches */ }
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Ethos Watch Boutiques</h3>
                        <div className="subheading mb-3">Senior Web Developer</div>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">September 2018 - August 2021</span></div>
                </div>

                {/* escalon services */ }
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Escalon Services</h3>
                        <div className="subheading mb-3">Software Engineer</div>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">November 2017 - September 2018</span></div>
                </div>

                {/* ethos watches */ }
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Ethos Watch Boutiques</h3>
                        <div className="subheading mb-3">PHP Developer</div>
                        <strong>Responsibilities:</strong>
                        <ul>
                            <li>Maintenance of company's WordPress blog.</li>
                            <li>Developing plugins WordPress plugins.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">May 2016 - October 2017</span></div>
                </div>

                {/* webroot technologies */ }
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Webroot Technologies</h3>
                        <div className="subheading mb-3">WordPress/PHP Developer</div>
                        <strong>Responsibilities:</strong>
                        <ul>
                            <li>Maintenance of developed/delivered websites.</li>
                            <li>Managing the day-to-day activities of the team.</li>
                            <li>Listen to team members feedback and resolve any issues or conflicts.</li>
                            <li>Working on PHP/WordPress websites.</li>
                            <li>Delegating tasks to team members.</li>
                            <li>Developing plugins WordPress plugins.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">June 2015 - April 2016</span></div>
                </div>

                {/* ratiocinative solutions */ }
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Ratiocinative Solutions</h3>
                        <div className="subheading mb-3">Frontend Developer</div>
                        <strong>Responsibilities:</strong>
                        <ul>
                            <li>Developing WordPress websites from PSD.</li>
                            <li>Maintenance of already developed/delivered websites.</li>
                            <li>Working on PHP and Javascript/jQuery developments.</li>
                            <li>Customization of WordPress websites as per customer requirements.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">January 2014 - June 2015</span></div>
                </div>
            </Fragment>
        )
    },

    education: () =>
    {
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

    skills: () =>
    {
        return (
            <Fragment>
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-php"></i></li>
                    <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                    <li className="list-inline-item"><i className="fab fa-laravel"></i></li>
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-bootstrap"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item"><i className="fab fa-vuejs"></i></li>
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
            </Fragment >
        )
    },

    interests: () =>
    {
        return (
            <Fragment>
                <h2 className="mb-5">Interests</h2>
                <p>Apart from being a web developer, I enjoy most of my time being with Family. On holidays I go for outing with my family.</p>
                <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
            </Fragment>
        )
    }
}
