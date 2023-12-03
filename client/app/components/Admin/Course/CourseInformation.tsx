import { styles } from '../../../../app/styles/style';
import React, { FC ,useState } from 'react'

type Props = {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    active: number;
    setActive: (active: number) => void;
}

const CourseInformation: FC<Props> = ({ courseInfo, setCourseInfo, active, setActive }) => {
  const [dragging, setDragging] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleFileChange = async (e: any) => {
    const file = e.target.files?.[0];
    if(file){
        const reader = new FileReader();

        reader.onload = (e: any) => {
            if(reader.readyState === 2){
                setCourseInfo({...courseInfo, thumbnail: reader.result });
            }
        }
        reader.readAsDataURL(file);
    }
  }
 
  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  }

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  }

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if(file) {
        const reader = new FileReader();
        
        reader.onload = () => {
            setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
        reader.readAsDataURL(file);
    }
  }

  return (
    <div className='w-[80%] m-auto mt-24'>
        <form onSubmit={handleSubmit}>
            <div>
                <label className={`${styles.label}`}>
                    Course Name
                </label>
                <input 
                    type='text'
                    name=""
                    required
                    value={courseInfo.name}
                    onChange={(e: any) =>
                        setCourseInfo({...courseInfo, name: e.target.value})
                    }
                    id='name'
                    placeholder='Enter Course Name'
                    className={`${styles.input} !w-[95%] dark:border-teal-400 border-red-400`}
                />
            </div>
            <br />
            <div>
                <label className={`${styles.label}`}>
                    Course Description
                </label>
                <textarea 
                    name=""
                    required
                    cols={30}
                    rows={8}
                    value={courseInfo.description}
                    onChange={(e: any) =>
                        setCourseInfo({...courseInfo, description: e.target.value})
                    }
                    id='description'
                    placeholder='Enter Course Description'
                    className={`${styles.input} !h-min !py-2 !w-[95%] dark:border-teal-400 border-red-400`}
                />
            </div>
            <br />
            <div className="!w-[95%] flex justify-between">
                <div className="w-[45%]">
                    <label className={`${styles.label}`}>
                        Course Price
                    </label>
                    <input 
                        type='number'
                        name=""
                        required
                        value={courseInfo.price}
                        onChange={(e: any) =>
                            setCourseInfo({...courseInfo, price: e.target.value})
                        }
                        id='price'
                        placeholder='e.g: 50'
                        className={`${styles.input} dark:border-teal-400 border-red-400`}
                    />
                </div>
                <div className="w-[50%]">
                    <label className={`${styles.label} w-[45%]`}>
                        Estimated Price (optional)
                    </label>
                    <input 
                        type='number'
                        name=""
                        required
                        value={courseInfo.estimatedPrice}
                        onChange={(e: any) =>
                            setCourseInfo({...courseInfo, estimatedPrice: e.target.value})
                        }
                        id='estimatedPrice'
                        placeholder='e.g: 25'
                        className={`${styles.input} dark:border-teal-400 border-red-400`}
                    />
                </div>
            </div>
            <br />
            <div>
                <label className={`${styles.label}`}>
                    Course Tags
                </label>
                <input 
                    type='text'
                    name=""
                    required
                    value={courseInfo.tags}
                    onChange={(e: any) =>
                        setCourseInfo({...courseInfo, tags: e.target.value})
                    }
                    id='tags'
                    placeholder='e.g: MERN, Next 13, React etc'
                    className={`${styles.input} !w-[95%] dark:border-teal-400 border-red-400`}
                />
            </div>
            <br />
            <div className="!w-[95%] flex justify-between">
                <div className="w-[45%]">
                    <label className={`${styles.label}`}>
                        Course Level
                    </label>
                    <input 
                        type='text'
                        name=""
                        required
                        value={courseInfo.level}
                        onChange={(e: any) =>
                            setCourseInfo({...courseInfo, level: e.target.value})
                        }
                        id='level'
                        placeholder='e.g: Beginner/Intermediate/Expert'
                        className={`${styles.input} dark:border-teal-400 border-red-400`}
                    />
                </div>
                <div className="w-[50%]">
                    <label className={`${styles.label} w-[45%]`}>
                        Demo URL
                    </label>
                    <input 
                        type='text'
                        name=""
                        required
                        value={courseInfo.demoUrl}
                        onChange={(e: any) =>
                            setCourseInfo({...courseInfo, demoUrl: e.target.value})
                        }
                        id='demoUrl'
                        placeholder='e.g: https://demoUrl.com/videoId'
                        className={`${styles.input} dark:border-teal-400 border-red-400`}
                    />
                </div>
            </div>
            <br />
            <div className="w-full">
                <input
                    type="file"
                    accept="image/*"
                    id="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label 
                    htmlFor="file"
                    className={`w-[95%] min-h-[10vh] dark:border-teal-400 border-red-400 p-3 border flex items-center justify-center ${
                        dragging ? "dark:bg-emerald-300 bg-rose-300" : "bg-transparent"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {
                        courseInfo.thumbnail ? (
                            <img 
                                src={courseInfo.thumbnail} 
                                alt="" 
                                className='max-h-full w-full object-cover'
                                />
                        ) : (
                            <span className='dark:text-slate-50 text-slate-800'>
                                Drag and drop your thumbnail here or click to browse
                            </span>
                        )
                    }
                </label>
            </div>
            <br />
            <div className="w-[95%] flex items-center justify-end">
                <input 
                    type="submit"
                    value="Next"
                    className='w-full 800px:w-[180px] h-[40px] bg-red-400 dark:bg-teal-400 text-center text-[20px] text-slate-800 dark:text-slate-50 rounded mt-1 mb-1 cursor-pointer'
                />
            </div>
            <br />
            <br />
        </form>
    </div>
  )
}

export default CourseInformation