import React from 'react';
import Layout from '../../components/Layout';
import style from './Volunteer.module.css';
import pages from '../Pages.module.css';

const Volunteer = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <h3 className={pages.SectionTitle} >Volunteer</h3>
                <ul>
                    {user.volunteer.map((volunteer, i) => (
                        <li className={style.VolunteerItem} key={i}>
                            <h4 className={style.VolunteerTitle}>{volunteer.organization}</h4>
                            <p className={pages.Paragraph}>{volunteer.location}</p>
                            <p className={pages.Paragraph}>{volunteer.summary}</p>
                            <div>
                                <p className={style.JobTitle}>{volunteer.position}</p>
                                <span> &sdot; </span>
                                <span>
                                    {volunteer.start.year} to {volunteer.end.year}
                                </span>
                            </div>
                            
                            <ul>
                            {volunteer.highlights.map((highlight, j) => (
                                <li className={pages.Detail} key={j}>
                                    <span> &bull; </span>
                                    {highlight}
                                </li>
                            ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Volunteer;