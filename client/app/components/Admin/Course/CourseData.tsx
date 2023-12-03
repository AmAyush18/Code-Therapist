import React, {FC} from 'react';
import { styles } from '../../../../app/styles/style';
import { IoAddCircleOutline } from "react-icons/io5";
import toast from 'react-hot-toast';

type Props = {
    benefits: {title: string}[];
    setBenifits: (benefits: {title: string}[]) => void;
    prerequisites: {title: string}[];
    setPrerequisites: (prerequisites: {title: string}[]) => void;
    active: number;
    setActive: (active: number) => void;
}

const CourseData: FC<Props> = ({
    benefits,
    setBenifits,
    prerequisites,
    setPrerequisites,
    active,
    setActive
}) => {

    const handleBenefitChange = (index: number, value: any) => {
        const updatedBenefits = [...benefits];
        updatedBenefits[index].title = value;
        setBenifits(updatedBenefits)
    }
    
    const handleAddBenefit = () => {
        setBenifits([...benefits, {title: ""}])
    }
    
    const handlePrerequisiteChange = (index: number, value: any) => {
        const updatedPrerequisites = [...prerequisites];
        updatedPrerequisites[index].title = value;
        setPrerequisites(updatedPrerequisites)
    }
    
    const handleAddPrerequisites = () => {
        setPrerequisites([...prerequisites, {title: ""}])
    }

    const prevButton = () => {
        setActive(active - 1);
    }

    const handleOptions = () => {
        if(benefits[benefits.length - 1]?.title !== "" && prerequisites[prerequisites.length - 1]?.title !== "") {
            setActive(active + 1);
        } else {
            toast.error("Please fill the fields to move to next!")
        }
    }

  return (
    <div className='w-[80%] m-auto mt-24 block'>
        <div>
            <label className={`${styles.label} text-[20px]`}>
                What are the benefits for students in this course?
            </label>
            <br />
            {
                benefits.map((benefit: any, index: number) => (
                    <input
                        type='text'
                        key={index}
                        name='Benefit'
                        required
                        className={`${styles.input} my-2 dark:border-teal-400 border-red-400`}
                        value={benefit.title}
                        onChange={(e) => handleBenefitChange(index, e.target.value)}
                    />
                ))
            }
            <IoAddCircleOutline
                className="mt-5 mb-5 h-[30px] dark:text-teal-400 text-red-400 cursor-pointer w-[30px]"
                onClick={handleAddBenefit}
            />
        </div>
        <div>
            <label className={`${styles.label} text-[20px]`}>
                What are the prerequisites for students in this course?
            </label>
            <br />
            {
                prerequisites.map((prerequisite: any, index: number) => (
                    <input
                        type='text'
                        key={index}
                        name='Prerequisite'
                        required
                        className={`${styles.input} my-2 dark:border-teal-400 border-red-400`}
                        value={prerequisite.title}
                        onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
                    />
                ))
            }
            <IoAddCircleOutline
                className="mt-5 h-[30px] dark:text-teal-400 text-red-400 cursor-pointer w-[30px]"
                onClick={handleAddPrerequisites}
            />
        </div>
        <div className="w-full flex items-center justify-between">
            <div className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-red-400 dark:bg-teal-400 text-center dark:text-slate-50 text-slate-800 rounded mt-8 cursor-pointer"
                onClick={() => prevButton()}
            >
                Previous
            </div>
            <div className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-red-400 dark:bg-teal-400 text-center dark:text-slate-50 text-slate-800 rounded mt-8 cursor-pointer"
                onClick={() => handleOptions()}
            >
                Next
            </div>
        </div>
    </div>
  )
}

export default CourseData