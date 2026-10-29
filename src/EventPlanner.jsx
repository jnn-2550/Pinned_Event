// import React from "react";
import "./EventPlanner.css";
import Footer from "./Components/Footer";

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>

      <section className="description">
        <p>Plan and organize events effortlessly</p>
        <button className="get-started-button">Get Started</button>
      </section>

      <section className="events_categories">
        {/* Social events types*/}
        <div className="event-category">
          <h2>Social Events:</h2>
          <ul>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
          </ul>
        </div>

        {/* Entertainment-based events types*/}
        <div className="event-category">
          <h2>Entertainment Events:</h2>
          <ul>
            <li>Concerts</li>
            <li>Music festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
          </ul>
        </div>

        {/* Community-focused event types */}
        <div className="event-category">
          <h2>Community Events:</h2>
          <ul>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Cultural celebrations</li>
          </ul>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        {/* List of key platform features */}
        <ul>
          <li>Easy event creation and management</li>
          <li>Customizable event templates</li>
          <li>Guest list management</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        {/* Individual testimonial block */}
        <div className="testimonial">
          <p>
            "Event Planner made organizing my wedding a breeze. Highly
            recommended!"
          </p>
          <p className="author">- Emily Johnson</p>
        </div>
        {/* Another testimonial block */}
        <div className="testimonial">
          <p>
            "I use Event Planner for all my corporate events. It saves me so
            much time and effort!"
          </p>
          <p className="author">- John Smith</p>
        </div>
      </section>

      <section className="contact">
        {/* Section heading */}
        <h2>Contact Us</h2>
        {/* Contact form */}
        <form onSubmit={(event) => event.preventDefault()}>
          {/* Contact form */}
          <input type="text" placeholder="Name" />
          {/* Email input field */}
          <input type="email" placeholder="Email" />
          {/* Message textarea */}
          <textarea placeholder="Message"></textarea>
          {/* Message textarea */}
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default EventPlanner;
