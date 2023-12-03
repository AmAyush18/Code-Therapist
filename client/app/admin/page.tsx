'use client';
import React from 'react'
import Heading from '../utils/Heading';
import AdminSideBar from "../components/Admin/sideBar/AdminSideBar"
import AdminProtected from '../hooks/adminProtected'
import DashboardHero from '../components/Admin/DashboardHero'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <AdminProtected>
            <Heading 
                title='Code Therapist - Admin'
                description='Code Therapist is learning platform for coders, explorers and innovators'
                keywords='Programming,MERN,React,Fullstack,Frontend,Next'
            />
            <div className="flex h-[200vh]">
                <div className="1500px:w-[16%] w-[20%]">
                    <AdminSideBar />
                </div>
                <div className="w-[85%]">
                    <DashboardHero />
                </div>
            </div>
        </AdminProtected>
    </div>
  )
}

export default page