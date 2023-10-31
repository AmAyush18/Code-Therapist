import Link from 'next/link';
import React, {FC} from 'react';

export const NavItemsData =[
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Courses",
        url: "/courses",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Policy",
        url: "/policy",
    },
    {
        name: "FAQ",
        url: "/faq",
    },
];

type Props = {
    activeItem: number;
    isMobile: boolean;
}

const NavItems: FC<Props> = ({activeItem, isMobile}) => {
  return (
    <div>
        <>
            <div className='hidden 800px:flex'>
                {
                    NavItemsData && NavItemsData.map((item, index) => (
                        <Link href={`$item.url`} key={index} passHref>
                            <span
                                className={`${
                                    activeItem === index
                                    ? 'dark:text-teal-400 text-rose-600'
                                    : 'dark:text-white text-slate-900'
                                } text-[18px] px-6 font-Poppins font-[400]`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            {
                isMobile && (
                    <div className="800px:hidden mt-5">
                        <div className="w-full text-center py-6">
                        <Link href={"/"} className={`text-[25px] font-Poppins font-[500] text-slate-900 dark:text-slate-100`}>
                            Code Therapist
                        </Link>

                        </div>
                        {
                            NavItemsData && NavItemsData.map((item, index) => (
                                <Link href="/" passHref>
                                    <span
                                        className={`${
                                            activeItem === index
                                            ? 'dark:text-teal-400 text-rose-600'
                                            : 'dark:text-white text-slate-900'
                                        } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            )) 
                        }
                    </div>
                )
            }
        </>
    </div>
  )
}

export default NavItems;