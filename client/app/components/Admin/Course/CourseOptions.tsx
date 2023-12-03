import React, { FC } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

type Props = {
    active: number;
    setActive: (active: number) => void;
}

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];

  return (
    <div>
        {options.map((option: any, index: number) => (
            <div key={index} className='w-full flex py-5'>
                <div className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                    active + 1 > index ? "dark:bg-emerald-500 bg-red-400" : "dark:bg-emerald-400 bg-red-300"
                    } relative`}
                >
                  <IoMdCheckmark className="text-[25px] dark:text-slate-50" />
                  {index !== options.length - 1 && (
                    <div
                        className={`absolute h-[30px] w-1 ${
                            active + 1 > index ? "dark:bg-emerald-500 bg-red-400" : "dark:bg-emerald-300 bg-red-300"
                        } bottom-[-100%]`}
                    />
                  )}
                </div>
                <h5 className={`pl-3 ${
                    active === index 
                    ? "dark:text-teal-400 text-red-400"
                    : "dark:text-slate-50 text-slate-800"
                } text-[20px]`}>
                    {option}
                </h5>
            </div>
        ))}
    </div>
  )
}

export default CourseOptions