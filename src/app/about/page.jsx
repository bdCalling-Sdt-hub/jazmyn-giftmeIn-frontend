import React from 'react';
import BreadcrumbsBanner from "@/components/common/BreadcrumbsBanner";
import AboutSection from "@/components/Reusable/AboutSection";


const AboutPage = () => {
    return (
        <section>
            <BreadcrumbsBanner pageName="About us" routeName="About us" />
            <section className="w-full flex flex-col justify-center items-center">
                <AboutSection 
                    title="Who" 
                    highlight="We Are ?" 
                    text="At GiftMeIn, we don’t just deliver gifts—we deliver happiness. We’ve created a platform where every gift is carefully curated to celebrate life’s special moments. Whether it’s a birthday, holiday, or a ‘just because’ surprise, we ensure that each gift feels personal, meaningful, and memorable."
                    imageSrc="/images/about1.png"
                />
                <AboutSection 
                    title="Our" 
                    highlight="Mission" 
                    text="Our mission at GiftMeIn is to bring joy and celebration to those who may feel overlooked during life’s special moments. We strive to create a seamless and thoughtful gifting experience, where surprises spark happiness and every customer feels valued, cherished, and celebrated. By combining personalized selections with the thrill of the unknown, we aim to make birthdays, holidays, and beyond truly unforgettable."
                    imageSrc="/images/about3.png"
                    reverse
                    bgColor="bg-[#FEEDF7]"
                />
                <AboutSection 
                    title="Our" 
                    highlight="Vision" 
                    text="To be the premier platform where joy and connection transcend the ordinary, GiftMeIn envisions a world where no one celebrates alone. By fostering moments of surprise, delight, and self-love, we aim to become a trusted companion in making life’s special occasions unforgettable, no matter the distance or circumstance."
                    imageSrc="/images/about2.png"
                />
            </section>
        </section>
    );
};

export default AboutPage;