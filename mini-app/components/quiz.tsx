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
    Easy: Array.from({ length: 20 }, (_, i) => ({
      question: `Easy Question ${i + 1}`,
      options: ["Option A", "Option B", "Option C"],
      answer: 0,
      points: 10,
    })),
    Moderate: Array.from({ length: 20 }, (_, i) => ({
      question: `Moderate Question ${i + 1}`,
      options: ["Option A", "Option B", "Option C"],
      answer: 1,
      points: 20,
    })),
    Hard: Array.from({ length: 20 }, (_, i) => ({
      question: `Hard Question ${i + 1}`,
      options: ["Option A", "Option B", "Option C"],
      answer: 2,
      points: 30,
    })),
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
