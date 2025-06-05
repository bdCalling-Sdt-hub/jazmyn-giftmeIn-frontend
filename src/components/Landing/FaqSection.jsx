'use client';
import { Collapse, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

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
      'Our system uses your preferences to select gifts for you. You can adjust your survey responses anytime, and you can opt-in for extra surprise features.',
  },
  {
    question: 'How are gifts shipped?',
    answer:
      'Gifts arrive at our facility for packaging and are then shipped directly to you. Tracking info is provided.',
  },
  {
    question: 'When will I receive my gifts?',
    answer:
      'We aim to process gifts 30 days before your chosen occasion so they arrive about 5 days before or after the event.',
  },
  // Other FAQs if needed...
];

const FaqSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

        <Collapse
          accordion
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} className="text-[#6366f1]" />}
          className="bg-white shadow rounded-2xl overflow-hidden text-left"
          expandIconPosition="right"
        >
          {faqs.slice(0, 5).map((faq, index) => (
            <Panel
              header={
                <span className="text-base font-medium text-gray-800 hover:text-indigo-600 transition">
                  {faq.question}
                </span>
              }
              key={index}
              className="border-b border-gray-100 px-4 py-3"
            >
              <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>

        <div className="mt-8">
          <Link href="/faq">
            <Button type="primary" className="bg-indigo-600 hover:bg-indigo-500 rounded-full px-6">
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
