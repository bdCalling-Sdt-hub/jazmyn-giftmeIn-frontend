'use client';

import { useGetSurveyQuestionsQuery } from '@/redux/apiSlices/surveyQuestionsSlice';
import { Button } from 'antd';
import Link from 'next/link';

const profileSurveyPage = () => {
  const { data: surveyQuestions, isLoading } = useGetSurveyQuestionsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  const questions = surveyQuestions?.data?.[0]?.body;
  console.log(questions);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-[32px] font-semibold">My Preferences</h1>
        <Link href="/surveyQuestions">
          <Button className="!bg-primary !text-white">Edit Preferences</Button>
        </Link>
      </div>
      {questions ? (
        <div className="space-y-4 my-5">
          {questions?.map((question: any, index: number) => (
            <div className="bg-pink-50 p-4 rounded-lg" key={index}>
              <h1>Question: {question?.question}</h1>
              <p>Answer: {question?.answer.map((ans: any) => ans).join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No survey questions found.</p>
        </div>
      )}
    </div>
  );
};

export default profileSurveyPage;
