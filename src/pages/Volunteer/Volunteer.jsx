import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Detail } from '../../styles';
// import { VolunteerItem, VolunteerTitle, JobTitle } from './styles';
import style from './Volunteer.module.css';

const Volunteer = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Volunteer</SectionTitle>
                <ul>
                    {user.volunteer.map((volunteer, i) => (
                        <li className={style.VolunteerItem} key={i}>
                            <h4 className={style.VolunteerTitle}>{volunteer.organization}</h4>
                            <Paragraph>{volunteer.location}</Paragraph>
                            <Paragraph>{volunteer.summary}</Paragraph>
                            <div>
                                <p className={style.JobTitle}>{volunteer.position}</p>
                                <span> &sdot; </span>
                                <span>
                                    {volunteer.start.year} to {volunteer.end.year}
                                </span>
                            </div>
                            
                            <ul>
                            {volunteer.highlights.map((highlight, j) => (
                                <Detail key={j}>
                                    <span> &bull; </span>
                                    {highlight}
                                </Detail>
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