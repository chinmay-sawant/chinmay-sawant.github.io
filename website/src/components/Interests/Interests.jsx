
import { interestsData } from '../../utils/data';
import './Interests.css';

const Interests = () => {
  return (
    <section className="section interests-section">
      <h2>interests</h2>
      <div className="interests-list">
        {interestsData.map((interest, index) => (
          <div key={index} className="interest-item">
            <span className="interest-icon">{interest.icon}</span>
            {interest.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
