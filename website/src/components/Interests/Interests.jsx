import { interestsData } from '../../utils/data';
import './Interests.css';

const Interests = () => {
  if (!interestsData?.length) return null;

  return (
    <section className="section interests-section reveal" id="hobbies">
      <div className="section-header">
        <div><span className="section-eyebrow">04 / A little off-duty</span><h2 className="section-title">Beyond the code.</h2></div>
      </div>
      <ul className="interests-list">
        {interestsData.map((item) => (
          <li key={item.name} className="interest-item">
            <span className="interest-marker" aria-hidden="true">✳</span>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
