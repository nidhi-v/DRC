import React, { useState, useEffect } from "react";
import "./Mid.css";

// Dummy data for cards
const cards = [
  {
    id: 1,
    title: "Equity",
    content: "Seeking growth, income, and a diverse portfolio? Equity is your best bet.",
    button: "Trade Now",
  },
  {
    id: 2,
    title: "Derivatives",
    content: "Now manage your risk while capturing market opportunities.",
    button: "Trade Now",
  },
  {
    id: 3,
    title: "Commodity",
    content: "Diversify into assets independent of stock markets.",
    button: "Trade Now",
  },
  {
    id: 4,
    title: "Currency",
    content: "Diversify and protect against local fluctuations.",
    button: "Trade Now",
  }
];

const Mid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardAnimation, setCardAnimation] = useState('slideInRight');

  const handleCircleClick = (index) => {
    if (index > currentIndex) {
        setCardAnimation('slideInRight'); // Moving to the next set of cards
      } else if (index < currentIndex) {
        setCardAnimation('slideInLeft'); // Moving to the previous set of cards
      }
    setCurrentIndex(index);
  };

 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardAnimation(''); // Reset animation class after 600ms
    }, 600); // Match the duration of the animation

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Function to go to the next set of cards
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length); // Go by 2 cards at a time
  };

  // Function to go to the previous set of cards
  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + cards.length) % cards.length
    ); // Wrap around correctly
  };

  // Function to handle circle navigation click

  // Get the current set of 2 cards
  const currentCards = [
    cards[(currentIndex * 2) % cards.length], // First card
    cards[(currentIndex * 2 + 1) % cards.length], // Second card
  ];

  return (
    <div className="container" >
       <img src="/images/tree.png" alt="background" className="background-image" />
      <div className="breadcrumbs">
        <a href="/" className="home">
          <i class="fa-solid fa-house fa-sm"></i>Home
        </a>{" "}
        |{" "}
        <a href="/section" className="cm">
          Capital Market
        </a>
      </div>

      <h1 className="title">
        <span>Execute Your </span>Trades With Ease
      </h1>

      <div className="content">
        <div className="carousel-section">
          <div className="carousel-wrapper">
          <div className="carousel-cards">
              {currentCards.map((card) => (
                <div
                  className={`carousel-card ${cardAnimation}`} // Apply the dynamic animation class
                  key={card.id}
                >
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-content">{card.content}</p>
                  <a href="#" className="card-link">Trade Now</a>
                </div>
              ))}
            </div>
          </div>
          <div className="circle-navigator">
            <span
              className={`circle ${currentIndex === 0 ? "active" : ""}`}
              onClick={() => handleCircleClick(0)}
            ></span>
            <span
              className={`circle ${currentIndex === 1 ? "active" : ""}`}
              onClick={() => handleCircleClick(1)}
            ></span>
          </div>
        </div>

        <div className="list-section" >
       
          <div className="list-inner">
            <div className="list-logo">
              <i class="fa-regular fa-user fa-2xl"></i>
            </div>
            <div className="list-content">
              <h5>Ask a Specialist</h5>
              <p>
                Click here to get insights
                <a href="#">
                  <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
                </a>
              </p>
            </div>
          </div>

          <div className="list-inner">
            <div className="list-logo">
            <i class="fa-regular fa-envelope fa-2xl"></i>
            </div>
            <div className="list-content">
              <h5>Get in Touch</h5>
              <p>
                Click here to know more
                <a href="#">
                  <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="kpis-main">
        <div className="kpi-1">
            <h4>850+ Cr</h4>
            <p>AUM Managed</p>
        </div>
        <div className="kpi-1">
            <h4>~ 40%</h4>
            <p>Returns on Investment</p>
        </div>
        <div className="kpi-1">
            <h4>800+</h4>
            <p>No. of clients</p>
        </div>
      </div>
    </div>
  );
};

export default Mid;
