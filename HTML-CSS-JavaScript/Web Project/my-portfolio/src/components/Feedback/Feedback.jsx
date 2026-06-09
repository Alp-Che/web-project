// ─── Feedback.jsx ─────────────────────────────────────────────
// CONCEPTS USED: Intersection Observer, Fixed Global Layout, Controlled Form

import React, { useState, useEffect, useRef } from 'react';
import './Feedback.css';
import lavaImg from '../../assets/Lava.png';

function Feedback() {
  const [isLavaActive, setIsLavaActive] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'bug',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLavaActive(entry.isIntersecting);
      },
      { threshold: 0.4 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', type: 'bug', message: '' });
  };

  return (
    <section id="feedback" className="feedback" ref={sectionRef}>
      
      {/* 🌋 ALWAYS VISIBLE FIXED LAVA */}
      <div 
        className={`feedback__lava-bg ${isLavaActive ? 'feedback__lava-bg--expanded' : ''}`}
        style={{ 
          backgroundImage: `url(${lavaImg}), linear-gradient(to bottom, transparent 0%, transparent 80px, #ff5722 80px)` 
        }}
      >
        <div className="feedback__lava-idle-anim">
          
          <div className={`feedback__lava-content ${isLavaActive ? 'feedback__lava-content--visible' : ''}`}>
            <div className="feedback__container">
              <h2 className="feedback__title">Submit Feedback</h2>
              <p className="feedback__subtitle">
                Found a bug in JumpBound? Have a balancing suggestion? Let the developer know!
              </p>

              {submitted ? (
                <div className="feedback__success">
                  Thank you! Your feedback has been recorded successfully.
                </div>
              ) : (
                <form className="feedback__form" onSubmit={handleSubmit}>
                  
                  <div className="feedback__field-group">
                    <label className="feedback__label" htmlFor="name">Player Name / Alias</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="feedback__input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="feedback__field-group">
                    <label className="feedback__label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="feedback__input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="feedback__field-group">
                    <label className="feedback__label" htmlFor="type">Feedback Category</label>
                    <select
                      id="type"
                      name="type"
                      className="feedback__select"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="bug">Bug Report</option>
                      <option value="suggestion">Gameplay Suggestion</option>
                      <option value="balance">Balance Feedback</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="feedback__field-group">
                    <label className="feedback__label" htmlFor="message">Your Report / Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="feedback__textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="feedback__submit-btn">
                    Send Feedback
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Feedback;