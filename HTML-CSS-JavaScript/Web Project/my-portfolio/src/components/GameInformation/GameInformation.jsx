// ─── GameInformation.jsx ──────────────────────────────────────
// CONCEPTS USED: JSX, useState, array filtering
//
// This section displays the core database of the game.
// It uses state to filter the displayed cards based on the selected category.

import { useState } from 'react';
import './GameInformation.css';

// Platform Images Import
import cloudPlatform from '../../assets/platforms/Cloud_Platform.png';
import icePlatform from '../../assets/platforms/Ice_Platform.png';
import lavaPlatform from '../../assets/platforms/Lava_Platform.png';
import normalPlatform from '../../assets/platforms/Normal_Platform.png';
import waterPlatform from '../../assets/platforms/Water_Platform.png';

// Wiki Database
const wikiData = [
  // ── Actual Platform Data ──────────────────────────────
  {
    id: 1,
    title: 'Normal Platform',
    category: 'Platforms',
    description: 'A standard, stable rock platform. Reliable and safe for jumping.',
    image: normalPlatform
  },
  {
    id: 2,
    title: 'Lava Platform',
    category: 'Platforms',
    description: 'Scorching hot! Deals fire damage if you stand on it for too long.',
    image: lavaPlatform
  },
  {
    id: 3,
    title: 'Ice Platform',
    category: 'Platforms',
    description: 'Very slippery surface. It is hard to control your momentum here.',
    image: icePlatform
  },
  {
    id: 4,
    title: 'Cloud Platform',
    category: 'Platforms',
    description: 'Fragile and ethereal. Disappears shortly after you step on it.',
    image: cloudPlatform
  },
  {
    id: 5,
    title: 'Water Platform',
    category: 'Platforms',
    description: 'Slows down your movement slightly, but extinguishes fire effects.',
    image: waterPlatform
  },

  // ── Dummy Data for Other Categories ───────────────────
  {
    id: 6,
    title: 'Ice Potion',
    category: 'Items',
    description: 'Freezes the rising lava for 5 seconds. Essential for tight spots!',
    image: 'https://via.placeholder.com/300x200/222/fff?text=Item'
  },
  {
    id: 7,
    title: 'Obsidian Shield',
    category: 'Equipment',
    description: 'Grants immunity to one instance of fire damage. Highly durable.',
    image: 'https://via.placeholder.com/300x200/222/fff?text=Equipment'
  },
  {
    id: 8,
    title: 'Ring of Agility',
    category: 'Rings',
    description: 'Increases base jump height by 15%. Perfect for speedrunners.',
    image: 'https://via.placeholder.com/300x200/222/fff?text=Ring'
  },
  {
    id: 9,
    title: 'Lava Leaper',
    category: 'Characters',
    description: 'The default character. Balanced stats, good for beginners.',
    image: 'https://via.placeholder.com/300x200/222/fff?text=Character'
  }
];

// The filter categories
const categories = ['Platforms', 'Items', 'Equipment', 'Rings', 'Characters'];

function GameInformation() {
  // Set the default active category to the first item in the list ('Platforms')
  const [activeCategory, setActiveCategory] = useState('Platforms');

  // Filter logic: Only show items that match the active category
  const filteredData = wikiData.filter(item => item.category === activeCategory);

  return (
    <section id="game-information" className="projects">
      <div className="section-wrapper">
        
        {/* ── Section Header ────────────────────────────────────── */}
        <h2 className="section-title">
          Game <span className="accent">Information</span>
        </h2>
        <p className="section-subtitle">
          Explore the ultimate database for your escape.
        </p>

        {/* ── Filter Tabs ───────────────────────────────────────── */}
        <div className="projects__filters">
          {categories.map(category => (
            <button
              key={category}
              className={`projects__filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── Grid of Wiki Cards ────────────────────────────────── */}
        <div className="projects__grid">
          {filteredData.map(item => (
            <div key={item.id} className="projects__card">
              <div className="projects__card-img-wrap">
                <img src={item.image} alt={item.title} className="projects__card-img" />
              </div>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{item.title}</h3>
                <span className="projects__card-badge">{item.category}</span>
                <p className="projects__card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GameInformation;