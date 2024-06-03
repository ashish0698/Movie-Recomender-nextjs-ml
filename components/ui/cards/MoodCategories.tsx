import React from "react";
import Link from "next/link";

const moods = [
  { id: 1, emoji: "😃", mood: "CHEERFUL" },
  { id: 2, emoji: "🤔", mood: "REFLECTIVE" },
  { id: 3, emoji: "😔", mood: "GLOOMY" },
  { id: 4, emoji: "😆", mood: "HUMOROUS" },
  { id: 5, emoji: "😌", mood: "MELANCHOLY" },
  { id: 6, emoji: "😍", mood: "IDYLLIC" },
  { id: 7, emoji: "😎", mood: "CHILL" },
  { id: 8, emoji: "😘", mood: "ROMANTIC" },
  { id: 9, emoji: "😜", mood: "WEIRD" },
  { id: 10, emoji: "😋", mood: "HORNY" },
  { id: 11, emoji: "😴", mood: "SLEEPY" },
  { id: 12, emoji: "😡", mood: "ANGRY" },
  { id: 13, emoji: "😨", mood: "FEARFUL" },
  { id: 14, emoji: "😔", mood: "LONELY" },
  { id: 15, emoji: "😬", mood: "TENSE" },
  { id: 16, emoji: "🤔", mood: "THOUGHTFUL" },
  { id: 17, emoji: "😜", mood: "THRILL-SEEKING" },
  { id: 18, emoji: "😋", mood: "PLAYFUL" },
];

const MoodCategories = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 mt-10">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Discover top-rated movies based on your mood
        </h1>
        <h2 className="text-center text-md sm:text-lg md:text-xl lg:text-2xl mb-8">
          How are you feeling now?
        </h2>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
          {moods.map((item) => (
            <div className="flex items-center justify-center border border-red-500 rounded-lg p-4 cursor-pointer hover:bg-red-400">
              <span className="text-md sm:text-lg md:text-xl lg:text-2xl">
                {item.emoji}
              </span>
              <p className="ml-2 text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
                {item.mood}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodCategories;
