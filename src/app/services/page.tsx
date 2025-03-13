"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import React from "react";
interface Service {
  number: string;
  title: string;
  description: string;
  href: string;
}
const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I have rich experience in web site design and building, also I am good at responsive design, HTML, CSS, JavaScript, jQuery, Bootstrap, and WordPress.",
    href: "#",
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "I have rich experience in web site design and building, also I am good at responsive design, HTML, CSS, JavaScript, jQuery, Bootstrap, and WordPress.",
    href: "#",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "I have rich experience in web site design and building, also I am good at responsive design, HTML, CSS, JavaScript, jQuery, Bootstrap, and WordPress.",
    href: "#",
  },
  {
    number: "04",
    title: "SEO Optimization",
    description:
      "I have rich experience in web site design and building, also I am good at responsive design, HTML, CSS, JavaScript, jQuery, Bootstrap, and WordPress.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.number}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/80">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
