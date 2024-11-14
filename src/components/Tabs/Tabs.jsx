import React, { useState } from "react";
import "./Tabs.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  // Data for each tab
  const tabs = [
    {
      label: "Equity",
      content:
        "Our platform enables both retail and institutional investors to make informed, real-time decisions, transforming market prospects into strategic wealth-building opportunities.",
      link: "https://example.com",
      pointers: [
        ">  High potential for returns to grow your wealth over time.",
        ">  Generate regular income through dividends on your investments.",
        ">  Helps combat inflation, preserving your purchasing power.",
        ">  Easily track your portfolio for better management and control.",
        ">  Shares offer liquidity, allowing easy selling and quick access to funds.",
      ],
      accordion: [
        { question: "1. What is Equity Trading?", answer: "Equity trading involves buying and selling company shares, allowing investors to profit from market fluctuations." },
        { question: "2. What are the risks involved?", answer: "Like any investment, equity trading carries risks, including price volatility. However, with the right strategies and risk management tools, you can optimize your returns." },
        {
          question: "3. How do I start trading equities?",
          answer: "Simply open a trading account, fund it, and you can start trading equities in real time.",
        },
      ],
    },
    {
      label: "Derivatives",
      content: "Harness the potential of derivatives to effectively navigate price fluctuations, manage risks, and seize opportunities in the dynamic equity landscape.",
      link: "https://example.com",
      pointers: [
        ">  High potential for returns to grow your wealth over time. ",
        ">  Generate regular income through dividends on your investments.  ",
        ">  Helps combat inflation, preserving your purchasing power. ",
        ">  Easily track your portfolio for better management and control.  ",
        ">  Shares offer liquidity, allowing easy selling and quick access to funds. ",
      ],
      accordion: [
        { question: "What is Tab 2?", answer: "Tab 2 is about ..." },
        { question: "How does Tab 2 work?", answer: "It works by ..." },
        {
          question: "What can I do in Tab 2?",
          answer: "You can explore various features.",
        },
      ],
    },
    {
      label: "Commodity",
      content: "Engage in commodity trading as a strategic shield against inflation, allowing you to diversify your portfolio through markets driven by supply and demand trends.",
      link: "https://example.com",
      pointers: ["Pointer X", "Pointer Y", "Pointer Z"],
      accordion: [
        { question: "What is Tab 3?", answer: "Tab 3 is about ..." },
        { question: "How does Tab 3 work?", answer: "It works by ..." },
        {
          question: "What can I do in Tab 3?",
          answer: "You can discover more.",
        },
      ],
    },
    {
      label: "Currency",
      content: "Currency trading, or forex, presents dynamic opportunities to profit from global currency fluctuations. It enables you to manage risks, capitalize on economic trends, and access the world’s most liquid financial market. ",
      link: "https://example.com",
      pointers: ["Pointer I", "Pointer II", "Pointer III"],
      accordion: [
        { question: "What is Tab 4?", answer: "Tab 4 is about ..." },
        { question: "How does Tab 4 work?", answer: "It works by ..." },
        { question: "What can I do in Tab 4?", answer: "You can do so much." },
      ],
    },
  ];

  // Function to handle tab switching
  const handleTabClick = (index) => {
    setActiveTab(index); // Set the active tab
  };

  // Accordion component
  const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle accordion items
    };

    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              {item.question}
            </div>
            <div
              className={`accordion-body ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-tabs">
      <div className="tabs">
        {/* Render tab buttons */}
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Render content of the active tab */}
      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
        <a
          href={tabs[activeTab].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>

        <div className="key-beneifts">
          {/* List of pointers */}
          <h3>
            Key <span>Benefits</span>
          </h3>
        </div>
        <div className="key-list">
          <ul className="list-items">
            {tabs[activeTab].pointers.map((pointer, index) => (
              <li key={index}>{pointer}</li>
            ))}
          </ul>
        </div>
        <div className="accordian">
            {/* Accordion */}
            <h3>
            Frequently <span>Aksed Questions</span>
          </h3>
        <Accordion items={tabs[activeTab].accordion} />
        </div>
      </div>
    </div>
  );
};

export default App;
