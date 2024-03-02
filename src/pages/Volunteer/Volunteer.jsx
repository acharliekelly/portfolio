import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { VolunteerItem, VolunteerTitle, JobTitle } from './styles';

const Volunteer = ({ user}) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Volunteer</SectionTitle>
                <ul>
                    {user.volunteer.map((volunteer, i) => (
                        <VolunteerItem key={i}>
                            <VolunteerTitle>{volunteer.position}</VolunteerTitle>
                            <div>
                                <JobTitle>{volunteer.company}</JobTitle> <span>{volunteer.location}</span>
                                <span> &sdot; </span>
                                <span>
                                    {volunteer.start.year} to {volunteer.end.year}
                                </span>
                            </div>
                            <Paragraph>{volunteer.summary}</Paragraph>
                        </VolunteerItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Volunteer;