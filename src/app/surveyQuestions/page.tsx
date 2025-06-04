'use client';

import { useState } from 'react';
import { Button, Input } from 'antd';
import { useGetCurrentSubscriptionQuery } from '@/redux/apiSlices/cartSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useCreateSurveyMutation } from '@/redux/apiSlices/surveyQuestionsSlice';
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import { surveyQuestions } from '@/util/surveyQuestion';

const SurveyQuestionsPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [QnA, setQnA] = useState<{ question: string; answer: string | string[] }[]>([]);
  const router = useRouter();

  const { data: subscriptions, isLoading } = useGetCurrentSubscriptionQuery(undefined);
  const { data: userProfile, isLoading: isLoadingUser } = useGetUserProfileQuery(undefined);
  const [createSurvey] = useCreateSurveyMutation();

  if (isLoading || isLoadingUser) {
    return <div>Loading...</div>;
  }

  const subscription = subscriptions?.data[0];
  const userId = userProfile?.data?._id;
  // console.log(userId);
  // console.log(QnA);

  // const questions =
  //   subscription?.package?.category === 'Budget Friendly'
  //     ? budgetQuestions
  //     : subscription?.package?.category === 'Premium Plan'
  //     ? premiumQuestions
  //     : spoilingQuestions;

  const questions = surveyQuestions;

  const handleMultipleChoice = (option: string) => {
    setAnswers((prev) => {
      const currentQuestionId = questions[current].id;
      const prevSelected = prev[currentQuestionId] || [];
      let updatedSelections;

      if (Array.isArray(prevSelected)) {
        updatedSelections = prevSelected.includes(option)
          ? prevSelected.filter((item) => item !== option)
          : [...prevSelected, option];
      } else {
        updatedSelections = prevSelected === option ? [] : [option];
      }

      const newAnswers = { ...prev, [currentQuestionId]: updatedSelections };
      console.log('Updated Answers:', newAnswers);
      return newAnswers;
    });

    setQnA((prev) => {
      const existingQnA = prev.find((q) => q.question === questions[current].question);
      let updatedAnswers = existingQnA ? existingQnA.answer : [];
      if (!Array.isArray(updatedAnswers)) updatedAnswers = [];

      updatedAnswers = updatedAnswers.includes(option)
        ? updatedAnswers.filter((item) => item !== option)
        : [...updatedAnswers, option];

      const updatedQnA = prev.filter((q) => q.question !== questions[current].question);
      return [...updatedQnA, { question: questions[current].question, answer: updatedAnswers }];
    });
  };

  const handleSingleChoice = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[current].id]: option, // Directly set the selected option for single-choice
    }));

    setQnA((prev) => {
      const updatedQnA = prev.filter((q) => q.question !== questions[current].question);
      return [...updatedQnA, { question: questions[current].question, answer: option }];
    });
  };

  const handleAnswer = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[current].id]: option,
    }));

    setQnA((prev) => {
      const updatedQnA = prev.filter((q) => q.question !== questions[current].question);
      return [...updatedQnA, { question: questions[current].question, answer: option }];
    });
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const data = {
      user: userId,
      body: QnA,
    };

    try {
      const res = await createSurvey(data).unwrap();
      console.log(res);
      if (res.success) {
        router.push('/dashboard/surveys');
        toast.success('Thank You for subscribing! Your preference has been submitted successfully!', {
          duration: 5000,
        });
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  const isAnswerProvided = () => {
    const answer = answers[questions[current].id];
    return Array.isArray(answer) ? answer.length > 0 : answer !== undefined && answer !== '';
  };

  return (
    <div className="h-screen flex flex-col pt-20 items-center bg-pink-50 px-6">
      <div className="bg-white shadow-lg p-8 h-[400px] rounded-lg max-w-3xl w-full flex justify-center items-center flex-col">
        <h2 className="text-xl font-semibold mb-6">{questions[current].question}</h2>

        {/* Multiple Choice as Buttons */}
        {questions[current].type === 'multiple-choice' && (
          <div className="grid grid-cols-2 gap-3 w-full">
            {questions[current]?.options?.map((option) => (
              <button
                key={option}
                className={`w-full py-2 rounded-lg text-lg transition-all duration-300 ${
                  Array.isArray(answers[questions[current].id]) && answers[questions[current].id].includes(option)
                    ? 'bg-pink-500 text-white' // Selected
                    : 'bg-gray-200 text-black' // Default
                }`}
                onClick={() => handleMultipleChoice(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Yes No Choice */}
        {questions[current].type === 'yes-no' && (
          <div className="flex gap-4">
            {questions[current]?.options?.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
                  answers[questions[current].id] === option ? 'bg-pink-500 text-white' : 'bg-gray-200 text-black'
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Single Choice as Buttons */}
        {questions[current].type === 'single-choice' && (
          <div className="grid grid-cols-1 gap-3 w-full">
            {questions[current]?.options?.map((option) => (
              <button
                key={option}
                className={`w-full py-2 rounded-lg text-lg transition-all duration-300 ${
                  answers[questions[current].id] === option
                    ? 'bg-pink-500 text-white' // Selected
                    : 'bg-gray-200 text-black' // Default
                }`}
                onClick={() => handleSingleChoice(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Text Input */}
        {questions[current].type === 'text' && (
          <Input.TextArea
            className="mt-4"
            rows={3}
            placeholder="Type your answer..."
            onChange={(e) => handleSingleChoice(e.target.value)}
            value={answers[questions[current].id] || ''}
          />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mx-auto space-x-6 mt-3">
          {current > 0 && (
            <Button onClick={prev} className="bg-gray-200">
              Previous
            </Button>
          )}
          {current < questions.length - 1 ? (
            <Button
              type="primary"
              onClick={() => setCurrent(current + 1)}
              disabled={!isAnswerProvided()} // Disable if no answer
            >
              {current === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          ) : (
            <Button type="primary" className="bg-green-500" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyQuestionsPage;
