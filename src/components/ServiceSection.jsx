
import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Globe,
  PanelsTopLeft,
  LayoutTemplate,
  ShoppingBag,
  Wrench,
} from "lucide-react";
 

const services = [
  {
    id: "website",
    number: "01",
    title: "Website Design",
    description:
      "A polished, responsive website designed around your business goals and customers.",
    icon: Globe,
    inr: "₹15,000",
    usd: "$299",
    features: [
      "Custom website design",
      "Mobile responsive layout",
      "Contact form integration",
      "Basic on-page SEO",
    ],
    featured: true,
  },
  {
    id: "dashboard",
    number: "02",
    title: "Admin Dashboard",
    description:
      "A custom dashboard to manage your content, data and day-to-day business workflows.",
    icon: PanelsTopLeft,
    inr: "₹30,000",
    usd: "$499",
    features: [
      "Custom dashboard UI",
      "Authentication and access",
      "API integration",
      "Core CRUD functionality",
    ],
  },
  {
    id: "landing",
    number: "03",
    title: "Landing Page",
    description:
      "A focused landing page built to present your offer clearly and encourage action.",
    icon: LayoutTemplate,
    inr: "₹5,000",
    usd: "$99",
    features: [
      "Conversion-focused layout",
      "Responsive design",
      "CTA and lead form",
      "Performance optimization",
    ],
    featured: true,
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-Commerce Website",
    description:
      "An online storefront that makes browsing products and placing orders straightforward.",
    icon: ShoppingBag,
    inr: "₹35,000",
    usd: "$499",
    features: [
      "Product listing pages",
      "Cart and checkout setup",
      "Payment integration",
      "Order management basics",
    ],
  },
  // {
  //   id: "maintenance",
  //   number: "05",
  //   title: "Website Maintenance",
  //   description:
  //     "Ongoing website care to keep your existing website updated and running smoothly.",
  //   icon: Wrench,
  //   inr: "₹2,500",
  //   usd: "$49",
  //   period: "/ month",
  //   features: [
  //     "Routine website updates",
  //     "Basic bug fixes",
  //     "Content updates",
  //     "Monthly maintenance check",
  //   ],
  // },
];

const Service = () => {
  const [market, setMarket] = useState("usa");

  const currency = market === "india" ? "inr" : "usd";

  return (
    <section id="service" className="services-section">
      <div className="services-container">
        {/* Heading */}
        <div className="services-header">
          

          <h2 className="font-display services-heading">
            Services
          </h2>

          <p className="font-body services-subtitle">
            Thoughtful design and reliable development for
            businesses ready to build a stronger online presence.
          </p>

          {/* Country / currency selector */}
          <div className="market-switcher" aria-label="Choose your market">
            <button
              type="button"
              onClick={() => setMarket("india")}
              className={`market-option ${
                market === "india" ? "active" : ""
              }`}
              aria-pressed={market === "india"}
            >
              🇮🇳 India · INR
            </button>

            <button
              type="button"
              onClick={() => setMarket("usa")}
              className={`market-option ${
                market === "usa" ? "active" : ""
              }`}
              aria-pressed={market === "usa"}
            >
              🇺🇸 USA · USD
            </button>
          </div>

          <p className="font-body market-note">
            {market === "india"
              ? "Starting prices for clients in India"
              : "Starting prices for clients in the United States"}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className={`service-card ${
                  service.featured ? "service-card-featured" : ""
                }`}
              >
                {/* Top white card */}
                <div className="service-card-top">
                  <div className="service-card-meta">
                    <span className="service-number">
                      {service.number}
                    </span>

                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display service-title">
                    {service.title}
                  </h3>

                  <p className="font-body service-description">
                    {service.description}
                  </p>
                </div>

                {/* Price */}
                <div className="service-price">
                  <span className="font-display price-prefix">
                    Starts at
                  </span>

                  <div className="price-value">
                    <span className="font-display price-amount">
                      {service[currency]}
                    </span>

                    {service.period && (
                      <span className="font-body price-period">
                        {service.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature} className="font-body">
                      <Check size={15} strokeWidth={1.7} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`mailto:vanshweb73@gmail.com.com?subject=${encodeURIComponent(
                    `Project inquiry: ${service.title}`
                  )}&body=${encodeURIComponent(
                    `Hi, I'm interested in your ${service.title} service.\n\nMarket: ${
                      market === "india" ? "India (INR)" : "USA (USD)"
                    }\nStarting price: ${service[currency]}${
                      service.period ? " per month" : ""
                    }\n\nPlease share the next steps.`
                  )}`}
                  className="service-cta font-body"
                >
                  Discuss your project
                  <ArrowUpRight size={18} />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="services-bottom">
         

          <a href="mailto:vanshweb73@gmail.com" className="services-custom-link">
            Need a custom solution? <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
