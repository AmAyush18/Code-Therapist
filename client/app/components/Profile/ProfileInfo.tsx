import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { styles } from '../../../app/styles/style';
import { AiOutlineCamera } from 'react-icons/ai';
import avatarIcon from '../../../public/assets/user.png';
import { useEditProfileMutation, useUpdateAvatarMutation } from '../../../redux/features/user/userApi';
import { useLoadUserQuery } from '../../../redux/features/api/apiSlice';
import toast from 'react-hot-toast';

type Props = {
    avatar: string | null;
    user: any;
}

const ProfileInfo: FC<Props> = ({ avatar, user}) => {
    const [name, setName] = useState(user && user.name);
    const [updateAvatar, {isSuccess, error}] = useUpdateAvatarMutation();
    const [editProfile, { isSuccess: editSuccess, error: editError }] = useEditProfileMutation();

    const [loadUser, setLoadUser] = useState(false);

    const {} = useLoadUserQuery(undefined, {
        skip: loadUser ? false : true
    });

    const imageHandler = async (e: any) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            if(fileReader.readyState === 2){
                const avatar = fileReader.result;
                updateAvatar(
                    avatar,
                );
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
      if(isSuccess || editSuccess){
        setLoadUser(true)
      }
      if(error || editError){
        console.log(error)
      }
      if(editSuccess){
        toast.success("Profile Updated Successfully!")
      }
    }, [isSuccess, error, editSuccess, editError]);
    

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(name !== ""){
            editProfile({
                name: name,
            });
        }
    };

  return (
    <>
        <div className="w-full flex justify-center">
            <div className="relative">
                <Image 
                    src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon }
                    alt=''
                    width={120}
                    height={120}
                    className='w-[120px] h-[120px] cursor-pointer border-[3px] border-red-400 dark:border-teal-400 rounded-full'
                />
                <input 
                    type="file" 
                    name=""
                    id='avatar'
                    className='hidden'
                    onChange={imageHandler}
                    accept='image/png, image/jpg, image/jpeg, image/webp'
                />
                <label htmlFor="avatar">
                    <div className="w-[30px] h-[30px] bg-orange-200 dark:bg-teal-800 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                        <AiOutlineCamera size={20} className="z-1 dark:text-slate-50 text-slate-800" />
                    </div>
                </label>
            </div>    
        </div>  
        <br />
        <br />
        <div className="w-full pl-6 800px:pl-10">
            <form onSubmit={handleSubmit}>
                <div className="800px:w-[50%] m-auto block pb-4">
                    <div className="w-[100%]">
                        <label className="block pb-2 dark:text-slate-50 text-slate-800 font-Poppins">Full Name</label>
                        <input 
                            type="text" 
                            className={`${styles.input} border-red-400 dark:border-teal-400 !w-[95%] mb-1 800px:mb-0`}
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-[100%] pt-2">
                        <label className="block pb-2 dark:text-slate-50 text-slate-800 font-Poppins">Email Address</label>
                        <input 
                            type="email"
                            readOnly 
                            className={`${styles.input} border-red-400 dark:border-teal-400 !w-[95%] mb-1 800px:mb-0`}
                            required
                            value={user?.email}
                        />
                    </div>
                    <div className="w-[100%] mt-3">
                        <input 
                            type="submit"
                            value={"Update"}
                            className={`!w-[95%] h-[40px] border border-red-400 dark:border-teal-400 text-center text-slate-800 dark:text-slate-50 rounded-[3px] mt-8 cursor-pointer`}
                            required
                        />
                    </div>
                </div>
            </form>
            <br />
        </div>
    </>
  )
}

export default ProfileInfo