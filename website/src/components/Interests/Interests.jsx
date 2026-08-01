import { interestsData } from '../../utils/data';
import './Interests.css';

const Interests = () => {
  if (!interestsData?.length) return null;

  return (
    <section className="section interests-section reveal" id="hobbies">
      <div className="section-header">
        <h2 className="section-title">Hobbies</h2>
      </div>
      <ul className="interests-list">
        {interestsData.map((item) => (
          <li key={item.name} className="interest-item">
            {item.emoji && (
              <span className="interest-emoji" aria-hidden="true">
                {item.emoji}
              </span>
            )}
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
