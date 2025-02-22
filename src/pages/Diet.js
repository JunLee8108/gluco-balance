import React, { useState } from "react";
import "../styles/Diet.css";

const RecommendedMeal = ({ meal }) => (
  <div className="meal-recommendation">
    <div className="meal-image">
      <img src={meal.imageUrl} alt={meal.title} />
      <div className="meal-time">{meal.time}</div>
      <div className="meal-label">AI Recommendation</div>
    </div>
    <div className="meal-details">
      <h3>{meal.title}</h3>
      <p className="meal-description">{meal.description}</p>
      <div className="nutrition-grid">
        <div className="nutrition-item">
          <div className="nutrition-circle">
            <span>{meal.nutrition.carbs}</span>
            <small>g</small>
          </div>
          <p>Carbohydrates</p>
        </div>
        <div className="nutrition-item">
          <div className="nutrition-circle">
            <span>{meal.nutrition.sugar}</span>
            <small>g</small>
          </div>
          <p>Sugars</p>
        </div>
        <div className="nutrition-item">
          <div className="nutrition-circle">
            <span>{meal.nutrition.glycemicIndex}</span>
          </div>
          <p>Glycemic Index</p>
        </div>
      </div>
    </div>
  </div>
);

const MealLog = ({ log }) => (
  <div className="meal-log">
    <div className="log-header">
      <div className="log-time">
        <div className="time">{log.time}</div>
        <div className="meal-type">{log.mealType}</div>
      </div>
      <div className="glucose-level">
        <div className="level-label">식후 혈당</div>
        <div className="level-value">{log.glucoseLevel} mg/dL</div>
      </div>
    </div>
    <div className="food-list">
      {log.foodItems.map((food, index) => (
        <div key={index} className="food-item">
          <div className="food-info">
            <div className="food-name">{food.name}</div>
            <div className="food-amount">{food.quantity}</div>
          </div>
          <div className="food-carbs">
            <div className="carb-amount">{food.carbs}g</div>
            <div className="carb-label">탄수화물</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>음식 검색</h2>
          <button className="close-button" onClick={onClose} />
        </div>
        <div className="search-container">
          <div className="search-field">
            <input type="text" placeholder="음식명을 입력하세요" />
          </div>
          <div className="quick-filters">
            <button className="filter-tag active">All</button>
            <button className="filter-tag">자주 먹는 음식</button>
            <button className="filter-tag">Recent</button>
          </div>
          <div className="search-results">
            {/* 검색 결과는 API 연동 후 구현 */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Diet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recommendedMeals = [
    {
      time: "Breakfast",
      title: "Healthy Breakfast",
      description: "Brown Rice, Grilled Salmon, and Seasoned Spinach",
      nutrition: { carbs: 45, sugar: 5, glycemicIndex: 52 },
      imageUrl: require("../assets/diet-1.jpg"),
    },
    {
      time: "Lunch",
      title: "Balanced Lunch",
      description: "Quinoa Salad and Grilled Chicken Breast",
      nutrition: { carbs: 35, sugar: 3, glycemicIndex: 48 },
      imageUrl: require("../assets/diet-2.jpg"),
    },
    {
      time: "Dinner",
      title: "Light Dinner",
      description: "Multigrain Rice, Tofu Steak, and Soybean Paste Soup",
      nutrition: { carbs: 40, sugar: 4, glycemicIndex: 50 },
      imageUrl: require("../assets/diet-3.jpg"),
    },
  ];

  const mealLogs = [
    {
      time: "08:30",
      mealType: "Morning",
      glucoseLevel: 134,
      foodItems: [
        { name: "현미밥", quantity: "1공기", carbs: 44 },
        { name: "구운 연어", quantity: "150g", carbs: 0 },
        { name: "시금치 무침", quantity: "1접시", carbs: 5 },
      ],
    },
  ];

  return (
    <div className="diet-page">
      <section className="recommended-meals">
        <div className="section-header">
          <div className="header-content">
            <h2>AI Tailored Meal Plans</h2>
            <p>Customized Diet Plans to Help Manage Your Blood Sugar</p>
          </div>
          <button className="action-button">New Recommendations</button>
        </div>
        <div className="recommendations-grid">
          {recommendedMeals.map((meal, index) => (
            <RecommendedMeal key={index} meal={meal} />
          ))}
        </div>
      </section>

      <section className="meal-logs">
        <div className="section-header">
          <div className="header-content">
            <h2>Today's Meal Log</h2>
            <p>Track Your Food Intake and Blood Sugar Changes</p>
          </div>
          <button
            className="action-button primary"
            onClick={() => setIsModalOpen(true)}
          >
            식사 기록하기
          </button>
        </div>
        <div className="logs-container">
          {mealLogs.map((log, index) => (
            <MealLog key={index} log={log} />
          ))}
        </div>
      </section>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Diet;
