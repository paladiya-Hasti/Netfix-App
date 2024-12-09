import { useLocation } from 'react-router-dom';
import './CardDetail.jsx'
const CardDetails = () => {
  const location = useLocation();
  const card = location.state?.card;

  if (!card) {
    return <div>Card not found!</div>;
  }

  return (
    <div className="card-detail-container">
    <div>
      <h1>{card.name}</h1>
      <p>Description: {card.description}</p>
    </div>
    <img src={card.image} alt={card.name} />
  </div>
   
  );
};

export default CardDetails;
