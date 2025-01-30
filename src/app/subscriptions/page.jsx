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
            <Subscription route={pathname} />
        </section>
    );
};

export default page;