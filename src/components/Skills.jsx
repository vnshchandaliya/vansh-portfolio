import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Infinity, Smile } from "lucide-react";
import { User } from "lucide-react";

const features = [
  {
    id: 1,
    title: "A Personal Approach",
    description:
      "Every project starts with understanding your ideas, goals and vision. I focus on creating an experience that feels right for your business.",
    icon: User,
    color: "#22c55e",
    bg: "#dcfce7",
    glow: "rgba(34, 197, 94, 0.25)",
  },
  {
    id: 2,
    title: "A Stress-Free Experience",
    description:
      "Clear communication and a straightforward process help keep your project organized, transparent and easy to manage.",
    icon: CheckCircle2,
    color: "#a855f7",
    bg: "#f3e8ff",
    glow: "rgba(168, 85, 247, 0.25)",
  },
  {
    id: 3,
    title: "Made Just for You",
    description:
      "Your business is unique, and your website should be too. Every detail is shaped around your needs and audience.",
    icon: Infinity,
    color: "#ec4899",
    bg: "#fce7f3",
    glow: "rgba(236, 72, 153, 0.25)",
  },
  {
    id: 4,
    title: "Committed to Quality",
    description:
      "From the first concept to the final details, I aim to deliver polished work you can feel confident sharing with the world.",
    icon: Smile,
    color: "#f59e0b",
    bg: "#fef3c7",
    glow: "rgba(245, 158, 11, 0.25)",
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-[#f5f5f5] px-4 py-20 text-black sm:px-8 sm:py-1"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-16"
        >
          
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl">
            Why you will love us?
          </h2>
        </motion.div>

        {/* Outer Container */}
        <div className="rounded-[28px] border border-black/[0.04] bg-[#e8e8e8] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:rounded-[36px] sm:p-5 md:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.id}
                  initial={{ opacity: 0, y: 35, scale: 0.97 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 35, scale: 0.97 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.25 },
                  }}
                  className="group relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden rounded-[22px] border border-black/[0.05] bg-white px-6 py-10 text-center shadow-[0_4px_14px_rgba(0,0,0,0.025)] transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.08)] sm:min-h-[300px] sm:px-8"
                >
                  {/* Card Number */}
                  <span className="absolute right-5 top-5 text-xs tracking-widest text-neutral-300 transition-colors duration-300 group-hover:text-neutral-600">
                    0{feature.id}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      color: feature.color,
                      backgroundColor: feature.bg,
                      boxShadow: `0 8px 24px ${feature.glow}`,
                    }}
                    className="mb-7 flex h-12 w-12 items-center justify-center
    rounded-2xl transition-colors duration-300"
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </motion.div>

                  {/* Card Content */}
                  <h3 className="max-w-sm font-serif text-2xl tracking-tight text-black sm:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500 sm:text-base">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
