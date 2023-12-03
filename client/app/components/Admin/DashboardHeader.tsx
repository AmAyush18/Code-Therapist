'use client'
import ThemeSwitcher  from '../../../app/utils/ThemeSwitcher';
import React, { FC, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

type Props = {

};

const DashboardHeader: FC<Props> = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-end p-6 fixed top-5 right-6">
        <ThemeSwitcher />
        <div 
            className="relative cursor-pointer m-2"
            onClick={() => setOpen(!open)}    
        >
            <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-slate-50 text-slate-800" />
            <span
                className='absolute -top-2 -right-2 bg-orange-200 dark:bg-teal-800 rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-slate-800 dark:text-slate-50'
            >
                3
            </span>
        </div>
        {
            open && (
                <div className="w-[350px] h-[50vh] dark:bg-emerald-600 bg-red-400 shadow-xl absolute top-16 z-10 rounded">
                    <h5 className="text-center text-[20px] font-Poppins text-slate-800 dark:text-slate-50 p-3">
                        Notifications
                    </h5>
                    
                    <div className="dark:bg-emerald-500 bg-red-300 font-Poppins p-2 border-b dark:border-b-[#064e3b] border-b-[#b91c1c]">
                        <div className="w-full flex items-center justify-between">
                            <p className="font-[500] text-slate-800 dark:text-slate-50">
                                New Question received
                            </p>
                            <p className="font-[500] text-slate-800 dark:text-slate-50 cursor-pointer">
                                Mark as read
                            </p>
                        </div>
                        <p className="text-slate-700 dark:text-slate-50">
                            Lorem ipsum, dolor sit amet consecteur adipisicing elit. Deserunt, sequi! Tempore libero omnis et, ea beatae ut, itaque
                        </p>
                        <p className="text-slate-700 dark:text-slate-50">
                            Lorem ipsum, dolor sit amet consecteur adipisicing elit. Deserunt, sequi! Tempore libero omnis et, ea beatae ut, itaque
                        </p>
                        <p className="font-[500] text-slate-800 dark:text-slate-50 text-[14px]">
                            5 days ago
                        </p>
                    </div>
                    <div className="dark:bg-emerald-500 bg-red-300 font-Poppins p-2 border-b dark:border-b-[#064e3b] border-b-[#b91c1c]">
                        <div className="w-full flex items-center justify-between">
                            <p className="font-[500] text-slate-800 dark:text-slate-50">
                                New Question received
                            </p>
                            <p className="font-[500] text-slate-800 dark:text-slate-50 cursor-pointer">
                                Mark as read
                            </p>
                        </div>
                        <p className="text-slate-700 dark:text-slate-50">
                            Lorem ipsum, dolor sit amet consecteur adipisicing elit. Deserunt, sequi! Tempore libero omnis et, ea beatae ut, itaque
                        </p>
                        <p className="text-slate-700 dark:text-slate-50">
                            Lorem ipsum, dolor sit amet consecteur adipisicing elit. Deserunt, sequi! Tempore libero omnis et, ea beatae ut, itaque
                        </p>
                        <p className="font-[500] text-slate-800 dark:text-slate-50 text-[14px]">
                            5 days ago
                        </p>
                    </div>
                </div>
                
            )
        }
    </div>
  )
}

export default DashboardHeader