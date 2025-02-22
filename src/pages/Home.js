import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import "../styles/Global.css";
import "../styles/Home.css";

const Home = () => {
  const [currentTimeSlot, setCurrentTimeSlot] = useState("Before Breakfast");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const timeSlots = [
    "Before Breakfast",
    "After Breakfast",
    "Before Lunch",
    "After Lunch",
    "Before Dinner",
    "After Dinner",
    "Before Sleep",
  ];

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Before Breakfast",
          "After Breakfast",
          "Before Lunch",
          "After Lunch",
          "Before Dinner",
          "After Dinner",
          "Before Sleep",
        ],
        datasets: [
          {
            label: "Blood Sugar Level",
            data: [120, 145, 110, 160, 115, 150, 125],
            borderColor: "#4A90E2",
            backgroundColor: "rgba(74, 144, 226, 0.1)",
            borderWidth: 2,
            tension: 0.4,
            pointBackgroundColor: "#4A90E2",
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 50,
            max: 200,
            ticks: {
              stepSize: 50,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <main className="main-content">
      <div className="card quick-input">
        <div className="card-header">
          <div>
            <h2>Quick Blood Sugar Log</h2>
            <p
              style={{
                color: "#666",
                fontSize: "0.9rem",
                marginTop: "0.25rem",
              }}
            >
              Current Time Slot: <span>{currentTimeSlot}</span>
            </p>
          </div>
          <button className="add-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Log Entry
          </button>
        </div>

        <div className="time-slots">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              className={`time-slot ${
                currentTimeSlot === slot ? "active" : ""
              }`}
              onClick={() => setCurrentTimeSlot(slot)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {slot}
            </button>
          ))}
        </div>

        <div className="input-container">
          <input
            type="number"
            className="glucose-input"
            placeholder="Enter Blood Sugar Level (mg/dL)"
          />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue-stat">
          <div className="stat-icon blue">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div className="stat-text">
            <h3>Average Blood Sugar</h3>
            <p>132 mg/dL</p>
          </div>
        </div>

        <div className="stat-card green-stat">
          <div className="stat-icon green">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <div className="stat-text">
            <h3>Goal Achievement Rate</h3>
            <p>85%</p>
          </div>
        </div>

        <div className="stat-card orange-stat">
          <div className="stat-icon orange">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="stat-text">
            <h3>Next Measurement</h3>
            <p>Before Lunch</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Daily Blood Sugar Trends</h2>
        <div className="chart-container">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </main>
  );
};

export default Home;
