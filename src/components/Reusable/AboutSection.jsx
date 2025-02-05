import Image from "next/image";

const AboutSection = ({ title, highlight, text, imageSrc, reverse = false, bgColor = "" }) => {
    return (
        <section className={`w-full p-6 md:p-[120px] ${bgColor} flex justify-center items-center`}>
            <div className={`w-full max-w-[1200px] flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                <div className='flex flex-col gap-6 text-center md:text-left'>
                    <h3 className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px]">
                        {title} <span className="text-primary">{highlight}</span>
                    </h3>
                    <p className="text-[#65728E] text-base text-justify leading-[24px]">
                        {text}
                    </p>
                </div>
                <Image 
                    src={imageSrc} 
                    width={588} 
                    height={400} 
                    alt={title} 
                    className="w-full max-w-[588px] h-auto"
                />
            </div>
        </section>
    );
};

export default AboutSection;
