'use client';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import classNames from 'classnames';

const { Panel } = Collapse;

const faqs = [
  {
    question: 'What is GiftMeIn?',
    answer:
      'GiftMeIn is a personalized gift subscription service that selects and delivers surprise gifts tailored to your preferences for holidays and special events.',
  },
  {
    question: 'How does the subscription work?',
    answer:
      'You pick a plan, fill out a quick survey about your gift preferences, and we handle the rest! Every month, funds accumulate in your balance, and we select gifts based on your preferences and budget.',
  },
  {
    question: 'Can I choose my gifts?',
    answer:
      'No worries! Our system uses your preferences to select gifts for you. If you’d like more control, you can adjust your survey responses anytime, and you can opt-in for a “Surprise Gift” feature or the “Multiple Gift Guarantee.”',
  },
  {
    question: 'How are gifts shipped?',
    answer:
      'Gifts are delivered to our facility first, where we package them with care before shipping them directly to you. You’ll get a tracking number once your gift is on the way.',
  },
  {
    question: 'Can I track my gift?',
    answer:
      'Yes! Once your gift ships, you’ll receive an email with a tracking link so you can see where your package is.',
  },
  {
    question: 'When will I receive my gifts?',
    answer:
      'We aim to process gifts 30 days before your selected holiday or event so it can arrive 5 days before or after the event. You can see upcoming deliveries on your dashboard.',
  },
  {
    question: 'How do I pay for my subscription?',
    answer:
      'Payments are processed automatically through Stripe each month. You can update your payment info in your account settings.',
  },
  {
    question: 'What happens if I don’t use my balance?',
    answer: 'Unused funds roll over and accumulate, giving you more budget for future gifts.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, you can cancel anytime. However, any unused balance is non-refundable and can only be used in our shop.',
  },
  {
    question: 'Can I update my preferences?',
    answer: 'Absolutely! You can update your gift preferences and survey answers anytime in your dashboard.',
  },
  {
    question: 'Can I skip a gift cycle?',
    answer:
      'Yes, you can pause your subscription in your account settings. You won’t be charged during this time, but you also won’t receive any gifts.',
  },
  {
    question: 'Can I send gifts to others?',
    answer:
      'Of course! Just update the shipping address in your profile for any cycle you’d like to send a gift to someone special.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can email us at support@giftmein.com',
  },
];

const Page = () => {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#1f2937]">
        🎁 GiftMeIn – Frequently Asked Questions (FAQ)
      </h1>

      <Collapse
        accordion
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} className="text-primary" />}
        className="bg-white shadow-xl rounded-2xl overflow-hidden"
        expandIconPosition="right"
      >
        {faqs.map((faq, idx) => (
          <Panel
            header={
              <span className="text-base font-medium text-gray-800 hover:text-primary transition">{faq.question}</span>
            }
            key={idx}
            className={classNames('text-gray-600', 'bg-white', 'rounded-none', 'px-4 py-3', 'border-b border-gray-100')}
          >
            <p className="text-sm leading-relaxed">{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Page;
