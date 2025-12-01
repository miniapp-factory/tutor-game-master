"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export function Quiz() {
  const difficulties = ["Easy", "Moderate", "Hard"];
  const [difficulty, setDifficulty] = useState<keyof typeof questionsByDifficulty>("Easy");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const questionsByDifficulty = {
    Easy: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: 0,
        points: 10,
      },
      {
        question: "Which language is primarily used for styling web pages?",
        options: ["JavaScript", "CSS", "Python"],
        answer: 1,
        points: 10,
      },
      // ... add 18 more easy questions
    ],
    Moderate: [
      {
        question: "What is the purpose of a database index?",
        options: ["To speed up queries", "To store data", "To backup data"],
        answer: 0,
        points: 20,
      },
      {
        question: "Which protocol is used to securely transfer files over the internet?",
        options: ["FTP", "SFTP", "HTTP"],
        answer: 1,
        points: 20,
      },
      // ... add 18 more moderate questions
    ],
    Hard: [
      {
        question: "Explain the concept of polymorphism in object-oriented programming.",
        options: [
          "The ability of an object to take on many forms",
          "The ability to store multiple data types in a single variable",
          "The ability to inherit from multiple classes"
        ],
        answer: 0,
        points: 30,
      },
      {
        question: "What is a deadlock in concurrent programming?",
        options: [
          "A situation where two or more processes are waiting for each other to release resources",
          "A process that never terminates",
          "A process that consumes all CPU resources"
        ],
        answer: 0,
        points: 30,
      },
      // ... add 18 more hard questions
    ],
  } as const;

  const questions = questionsByDifficulty[difficulty];
  const current = questions[questionIndex];

  const handleAnswer = (idx: number) => {
    if (idx === current.answer) {
      setPoints((p) => p + current.points);
      alert("Correct!");
    } else {
      alert("Try again.");
    }
  };

  return (
    <Card className="mt-6 w-full max-w-md p-4">
      <div className="flex items-center justify-between mb-4">
        <Select value={difficulty} onValueChange={(value) => setDifficulty(value as keyof typeof questionsByDifficulty)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm font-medium">Points: {points}</span>
      </div>
      <h3 className="mb-4 text-lg font-semibold">{current.question}</h3>
      <div className="flex flex-col gap-2">
        {current.options.map((opt, idx) => (
          <Button
            key={idx}
            variant={idx === current.answer ? "outline" : "ghost"}
            onClick={() => handleAnswer(idx)}
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
    </Card>
  );
}
