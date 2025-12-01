"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: 0,
    },
    {
      question: "Which language is primarily used for styling web pages?",
      options: ["JavaScript", "CSS", "Python"],
      answer: 1,
    },
  ];

  const current = questions[questionIndex];

  return (
    <div className="mt-6 w-full max-w-md rounded-lg border p-4">
      <h3 className="mb-4 text-lg font-semibold">{current.question}</h3>
      <div className="flex flex-col gap-2">
        {current.options.map((opt, idx) => (
          <Button
            key={idx}
            variant={idx === current.answer ? "outline" : "ghost"}
            onClick={() => {
              if (idx === current.answer) {
                alert("Correct!");
              } else {
                alert("Try again.");
              }
            }}
          >
            {opt}
          </Button>
        ))}
      </div>
      <Button
        className="mt-4"
        onClick={() => setQuestionIndex((q) => (q + 1) % questions.length)}
      >
        Next Question
      </Button>
    </div>
  );
}
