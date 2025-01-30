import Image from 'next/image';
import React from 'react';

const choiceData = [
  {
    id: 1,
    image: '/logo/warranty.png',
    name: 'Perfectly Thoughtful Gifts, Every Time',
    description: 'Your gifts, their style—perfectly tailored to what they love.',
  },
  {
    id: 2,
    image: '/logo/warranty.png',
    name: 'Zero Stress, All Smiles',
    description:
      'We handle the reminders, wrapping, and delivery—so you can focus on celebrating.',
  },
  {
    id: 3,
    image: '/logo/warranty.png',
    name: 'Plans That Flex With You!',
    description: 'Pause, upgrade, or cancel anytime—because life happens.',
  },
  {
    id: 4,
    image: '/logo/warranty.png',
    name: 'Guaranteed to Make Their Day!',
    description: 'Handpicked gifts that bring joy, every single time.',
  },
];

const ChoiceCard = ({ image, name, description }) => (
  <div className="w-[282px] h-[310px] rounded-[25px] bg-white shadow-lg p-8 flex flex-col items-center justify-evenly space-y-4">
    <div className="bg-primary flex items-center justify-center p-4 rounded-full">
      <Image src={image} height={50} width={50} alt={name} />
    </div>
    <h3 className="text-[#160E4B] text-xl font-semibold leading-[26px] text-center">
      {name}
    </h3>
    <p className="text-[#65728E] text-base text-center">{description}</p>
  </div>
);

const PerfectChoice = () => {
  return (
    <section className="bg-[#FEEDF7] h-[727px] flex justify-center items-center">
      <div className="w-[1218px] h-[487px] flex flex-col justify-between">
        <header className="flex flex-col gap-3">
          <h3 className="font-bold text-primary leading-[30px] text-[17px]">
            Why Choose Us
          </h3>
          <div className="flex items-end gap-[72px]">
            <h2 className="font-bold text-[34px] leading-[40px]">
              Why{' '}
              <span className="text-primary">
                We’re the Perfect Choice
              </span>{' '}
              for Your Gifting Needs
            </h2>
            <p className="text-base font-normal leading-[28px] text-grayColor">
              At our core, we believe gifting should be simple, thoughtful, and
              joyful. Here’s how we make it all about you and your loved ones.
            </p>
          </div>
        </header>

        <div className="flex items-center justify-between">
          {choiceData.map((item) => (
            <ChoiceCard
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectChoice;
