import Image from "next/image";

const AboutSection = ({ title, highlight, text, imageSrc, reverse = false, bgColor = "" }) => {
    return (
        <section className={`w-full p-[120px] ${bgColor} flex justify-center items-center`}>
            <div className={`w-[1200px] h-[400px] flex items-center gap-[32px] ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className='flex flex-col gap-[32px]'>
                    <h3 className="font-bold text-[36px] leading-[40px]">
                        {title} <span className="text-primary">{highlight}</span>
                    </h3>
                    <p className="text-[#65728E] text-base font-normal leading-[24px]">
                        {text}
                    </p>
                </div>
                <Image src={imageSrc} width={588} height={400} alt={title} />
            </div>
        </section>
    );
};


export default AboutSection;