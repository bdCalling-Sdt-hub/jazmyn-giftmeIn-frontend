"use client";
import React from 'react';
import BreadcrumbsBanner from "@/components/common/BreadcrumbsBanner";
import Subscription from "@/components/Landing/Subscription";
import { usePathname } from "next/navigation";

const page = () => {
    const pathname = usePathname();
    
    return (
        <section>
            <BreadcrumbsBanner pageName={"Subscription Plans"} routeName={"Subscription Plan s"} />
            <div className='sm:py-[100px] py-[50px]'>
            <Subscription route={pathname} />
            </div>
        </section>
    );
};

export default page;