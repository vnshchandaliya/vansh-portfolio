
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
 

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I design and develop responsive business websites, landing pages, custom admin dashboards, and e-commerce websites. I also provide website maintenance based on your project requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A landing page may take around 3–7 business days, while a multi-page website may take 1–3 weeks. Larger dashboards and e-commerce projects can take longer depending on their features and complexity.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. I build responsive layouts for mobile phones, tablets, laptops, and desktops, and test the main layouts across different screen sizes.",
  },
  {
    question: "Can you build a custom admin dashboard?",
    answer:
      "Yes. I can build dashboards with authentication, data tables, forms, CRUD operations, API integrations, and other features according to your business workflow.",
  },
  {
    question: "How do payments and project milestones work?",
    answer:
      "Before development starts, we agree on the scope, timeline, price, and payment milestones. Payments are arranged in advance, with progress and deliverables clearly communicated throughout the project.",
  },
  {
    question: "Can you work with clients in the USA?",
    answer:
      "Yes. I work with clients remotely and can discuss requirements, timelines, and project pricing in USD for US-based projects.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "The project proposal will specify the included revision rounds and any applicable support period. Additional features or changes outside the agreed scope can be quoted separately.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can refresh your current design, improve responsive layouts, update the user experience, and help modernize the website while considering your existing content and functionality.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq-section ">
      <div className="faq-container">
        <div className="faq-header">
           

          <h2 className="font-display faq-heading">
            Frequently Asked Questions
          </h2>

          <p className="font-body faq-subtitle">
            A few helpful answers before we bring your next project to life.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question font-body"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle" aria-hidden="true">
                    {isOpen ? (
                      <Minus size={20} strokeWidth={1.6} />
                    ) : (
                      <Plus size={20} strokeWidth={1.6} />
                    )}
                  </span>
                </button>

                <div
                  id={answerId}
                  className="faq-answer-wrap"
                  hidden={!isOpen}
                >
                  <p className="faq-answer font-body">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;
