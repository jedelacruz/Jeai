"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import { FileClock, Home, Settings, Wallet } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

function SideNav() {
    const router = useRouter(); // Importing the router
    const path = usePathname();

    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard"
        },
        /*

        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history"
        },

        {
            name: "Billing",
            icon: Wallet,
            path: "/dashboard/billing"
        },
        */
        {
            name: "Settings",
            icon: Settings,
            path: "/dashboard/settings"
        },
    ];

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen p-5 shadow-sm bg-[#121824]'>
            <div className='flex justify-center'>
                <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
            </div>

            <hr className='mt-5' />

            <div className='mt-5'>
                {MenuList.map((menu, index) => (
                    <div 
                        key={index} 
                        className={`flex gap-2 mb-2 p-3 text-white
                            hover:bg-[#292F3B] hover:text-white rounded-xl
                            cursor-pointer items-center
                            ${path == menu.path && 'bg-[#292F3B] text-white'}
                        `}
                        onClick={() => router.push(menu.path)} // Navigates on click
                    >
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
