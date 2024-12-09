

import './Titelcard.css';
import card_data from '../../assets/cards/Cards_data';
import { useState } from 'react';

const Titelcard = ({ title }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {card_data.map((card, index) => (
          <div key={index} className="card">
            <img
              src={card.image}
              alt={card.name}
              onClick={() => openModal(card)} // Open modal on image click
            />
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      {/* Modal for selected card */}
      {isModalOpen && selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h1>{selectedCard.name}</h1>
            <img src={selectedCard.image} alt={selectedCard.name} />
            <p>{selectedCard.description || "No description available."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Titelcard;
