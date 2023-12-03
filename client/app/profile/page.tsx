'use client'
import React, { FC, useState } from 'react';
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header';
import Profile from '../components/Profile/Profile';
import { useSelector } from 'react-redux';

type Props = {}

const page:FC<Props> = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(5);
    const [route, setRoute] = useState("Login");

    const { user } = useSelector((state: any) => state.auth);
    return (
      <div>
        <Protected>
            <Heading 
                title={`${user.name} Profile - Code Therapist`}
                description="Code Therapist is a platform for the students to learn and get help from best in the industry."
                keywords="Programming,MERN,Reading,Redux,Express,Fullstack"
            />
            <Header 
                open={open} 
                setOpen={setOpen} 
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />
            <Profile user={user} />
        </ Protected>
      </div>
    )
}

export default page