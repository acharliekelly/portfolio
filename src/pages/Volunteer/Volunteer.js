import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { VolunteerItem, VolunteerTitle, JobTitle, BulletList } from './styles';

const Volunteer = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Volunteer</SectionTitle>
                <ul>
                    {user.volunteer.map((volunteer, i) => (
                        <VolunteerItem key={i}>
                            <VolunteerTitle>{volunteer.organization}</VolunteerTitle>
                            <Paragraph>{volunteer.location}</Paragraph>
                            <Paragraph>{volunteer.summary}</Paragraph>
                            <div>
                                <JobTitle>{volunteer.position}</JobTitle>
                                <span> &sdot; </span>
                                <span>
                                    {volunteer.start.year} to {volunteer.end.year}
                                </span>
                            </div>
                            
                            <BulletList>
                                {volunteer.highlights.map((highlight, j) => (
                                    <li key={j}><span> &sdot; </span>{highlight}</li>
                                ))}
                            </BulletList>
                        </VolunteerItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Volunteer;