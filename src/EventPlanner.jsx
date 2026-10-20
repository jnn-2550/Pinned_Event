// import {React} from "react";
import './EventPlanner.css';
 function Events () {
   return (
    <div className='event-planner-container'> 
    <header>
      <h1>Welcome to Event Planner</h1>
    </header>
     <section className='description'>
      <p>Plan and organize events effortlessy</p>
      <button className='get-started-button'>Get Started</button>
     </section>
      <section className="events_categories">
        <ol>
          <h2>Social Events:</h2>
          <li>Birthday parties</li>
          <li>Anniversary celebrations</li>
          <li>wedding receptions</li>
          <li>baby showers</li>
          <li>Graduation parties</li>
          <li>Family reunions</li>
        </ol>

        <ol>
          <h2>Entertainment Events:</h2>
          <li>Concerts</li>
          <li>Music festivals</li>
          <li>Film screenings</li>
          <li>Comedy shows</li>
          <li>Art exhibitions</li>
          <li>Cultural events</li>
        </ol>

        <ol>
          <h2>Community Events: </h2>
          <li>Fundraising events</li>
          <li>Charity galas</li>
          <li>Volunteer drives</li>
          <li>Neighborhood block parties</li>
          <li>Community festivals</li>
          <li>Cultural celebrations</li>
        </ol>
      </section>
      <section className='features'>
          <ul>
            <li>Easy event creation and management</li>
            <li>Customizable event templates</li>
            <li>Guest list management</li>
            <li>Real-time collaboration</li>
            <li>Reminders and notifications</li>
          </ul>
         </section>
         <section className='testimonials'>
          <h2>Testimonials</h2>
          <div className='testimonial'> 
            <p>"Event Planner made orginizing my wedding a breeze. Highly recommended!"</p>
            <p className="author">- Emily Johnson</p>
          </div>
          <div className='testimonial'> 
            <p>"I use Event Planner for all my corporate events. it saves me so much time and effort!"</p>
            <p className="author">- John Smith</p>
          </div>
         </section>

         <section className="contact">
          <h2>Contact Us</h2>
          <form action="">
             <input type="text" placeholder='Name'/>
             <input type="email"placeholder='Email' />
             <textarea placeholder='"Message' ></textarea>
             <button className="submit-button">Send</button>
          </form>
         </section>
    </div>
    );
 };
  
  
 

 export default Events;