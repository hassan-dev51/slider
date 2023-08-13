"use client";

import { FaqArrayProps, FaqProps } from "@/interface";
import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="py-5 border-t border-gray-300">
      <div
        className="faq-question flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-gray-700 text-sm font-medium">{question}</p>
        {isOpen ? (
          <AiOutlineMinusCircle className="h-5 w-5 text-gray-900" />
        ) : (
          <AiOutlinePlusCircle className="h-5 w-5 text-gray-900" />
        )}
      </div>
      {isOpen && (
        <div className="faq-answer text-gray-700 text-sm pt-3">{answer}</div>
      )}
    </div>
  );
};

const ProductDetailFaq = ({ dataArray }: FaqArrayProps) => {
  return (
    <div className="mt-10 border-b border-gray-300">
      {dataArray.map((item) => (
        <div key={item.id}>
          {item?.questionsAndAnswers?.map((item: FaqProps) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductDetailFaq;
