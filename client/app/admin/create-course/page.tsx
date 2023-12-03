'use client'
import React from 'react'
import AdminSidebar from '../../components/Admin/sideBar/AdminSideBar';
import Heading from '../../../app/utils/Heading';
import CreateCourse from '../../components/Admin/Course/CreateCourse';
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Heading 
            title='Code Therapist - Admin'
            description='Code Therapist is learning platform for coders, explorers and innovators'
            keywords='Programming,MERN,React,Fullstack,Frontend,Next'
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
                <DashboardHeader />
                <CreateCourse />
            </div>
        </div>
    </div>
  )
}

export default page