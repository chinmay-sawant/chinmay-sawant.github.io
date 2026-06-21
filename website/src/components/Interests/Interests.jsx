import { interestsData } from '../../utils/data';
import './Interests.css';

const Interests = () => {
  return (
    <section className="section interests-section" id="interests">
      <div className="section-label">
        <span className="section-number">05</span>
        <h2 className="section-title">Interests</h2>
        <span className="section-divider" />
      </div>
      <ul className="interests-list">
        {interestsData.map((interest, index) => (
          <li key={index} className="interest-item">
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;