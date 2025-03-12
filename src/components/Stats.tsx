"use client";
import React from "react";
import CountUp from "react-countup";

interface Stat {
  number: number;
  text: string;
}

const stats: Stat[] = [
  {
    number: 1,
    text: "Years of Experience",
  },
  {
    number: 10,
    text: "Projects Completed",
  },
  {
    number: 8,
    text: "Technologies Used",
  },
  {
    number: 999,
    text: "Code Commit",
  },
];

const Stats: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.number}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
