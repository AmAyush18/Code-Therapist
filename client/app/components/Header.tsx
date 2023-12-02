'use client'
import React, {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import NavItems from '../utils/NavItems';
import ThemeSwitcher from '../utils/ThemeSwitcher';
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi';
import CustomModal from '../utils/CustomModal';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Verification from '../components/Auth/Verification';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import avatar from "../../public/assets/user.png";
import { useSession } from 'next-auth/react';
import { useLogOutQuery, useSocialAuthMutation } from '../../redux/features/auth/authApi';
import toast from 'react-hot-toast';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
}

const Header: FC<Props> = ({activeItem, open, setOpen, route, setRoute}) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const {user} = useSelector((state: any) => state.auth);
  const {data} = useSession();

  const [socialAuth, {isSuccess, error}] = useSocialAuthMutation();

  const [logout, setLogout] = useState(false);
    
  const {} = useLogOutQuery(undefined, {
      skip: !logout ? true : false,
  });

  useEffect(() => {
    if(!user){
      if(data){
        socialAuth({ 
          email: data?.user?.email, 
          name:data?.user?.name, 
          avatar:data?.user?.image 
        })
      }
    }
    if(data === null && isSuccess){
      toast.success("Login Successful!");
    }
    if(data === null){
      setLogout(true);
    }
  }, [data, user]);

  if(typeof window !== "undefined"){
    window.addEventListener("scroll", () => {
      if(window.scrollY > 85){
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e:any) => {
    if(e.target.id === "screen"){
      setOpenSidebar(false);
    }
  }
  return (
    <div className='w-full relative'>
      <div className={`${
        active 
        ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-emerald-950 dark:to-teal-950 fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-slate-700 shadow-xl transition duration-500" 
        : "w-full border-b dark:border-slate-700 h-[80px] z-[80] dark:shadow"
        }`}>
          <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
            <div className="w-full h-[80px] flex items-center justify-between p-3">
              <div>
                <Link href={"/"} className={`text-[25px] font-Poppins font-[500] text-slate-900 dark:text-slate-100`}>
                  Code Therapist
                </Link>
              </div>
              <div className="flex items-center">
                <NavItems 
                activeItem={activeItem}
                isMobile={false}
                />
                <ThemeSwitcher />
                { /* only for mobile */}
                <div className='800px:hidden'>
                  <HiOutlineMenuAlt3 
                    size={25}
                    className="cursor-pointer dark:text-white text-black"
                    onClick={() => setOpenSidebar(true)}
                  />
                </div>
                {
                  user ? (
                    <Link href={"/profile"}>
                      <Image 
                        src={user.avatar ? user.avatar.url : avatar}
                        alt=""
                        width={30}
                        height={30}
                        className={`rounded-full cursor-pointer ${activeItem === 5 ? "border-[2px] dark:border-teal-400 border-red-400" : ""}`}
                      />
                    </Link>
                  ) : (
                    <HiOutlineUserCircle 
                      className="hidden 800px:block cursor-pointer dark:text-white text-black"
                      size={25}
                      onClick={() => setOpen(true)}
                    />
                  )
                }
              </div>
            </div>
          </div>
          {/*  mobile sidebar */}
          {
            openSidebar && (
              <div 
                className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024] "
                onClick={handleClose}
                id='screen'
                >
                  <div className="w-[70%] fixed z-[99999999] h-screen bg-white dark:bg-emerald-900 dark:bg-opacity-90 top-0 right-0">
                    <NavItems 
                      activeItem={activeItem}
                      isMobile={true}
                    />
                    <HiOutlineUserCircle 
                      className="cursor-pointer ml-5 my-5 dark:text-white text-black"
                      size={25}
                      onClick={() => setOpen(true)}
                    />
                    <br />
                    <br />
                    <p className='text-[16px] px-2 pl-5 text-black dark:text-white' >
                      Copyright © 2023 Code Therapist
                    </p>
                  </div>
              </div>
            )
          }
        </div>
        {
          route === "Login" && (
            <>
              {
                open && (
                  <CustomModal 
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    activeItem={activeItem}
                    component={Login}
                  />
                )
              }
            </>
          )
        }
        {
          route === "Sign-Up" && (
            <>
              {
                open && (
                  <CustomModal 
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    activeItem={activeItem}
                    component={SignUp}
                  />
                )
              }
            </>
          )
        }
        {
          route === "Verification" && (
            <>
              {
                open && (
                  <CustomModal 
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    activeItem={activeItem}
                    component={Verification}
                  />
                )
              }
            </>
          )
        }
    </div>
  )
}

export default Header;