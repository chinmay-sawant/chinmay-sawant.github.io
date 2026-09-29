import { interestsData } from '../../utils/data';
import './Interests.css';

const interestIconShapes = {
  book: <path d="M12 7c-1.5-1.2-4.2-2-8-2v13c3.8 0 6.5.8 8 2 1.5-1.2 4.2-2 8-2V5c-3.8 0-6.5.8-8 2Zm0 0v13" />,
  bicycle: <><circle cx="5" cy="17" r="3" /><circle cx="19" cy="17" r="3" /><path d="m5 17 4-8h4l5 8m-8-8 4 8m-6-11h3m4 3 2-2h2" /></>,
  music: <><path d="M9 18V5l12-2v13" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="18.5" cy="16" r="2.5" /></>,
  orbit: <><circle cx="12" cy="12" r="1.7" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" /></>,
  chess: <path d="M12 3v4m-2-2h4m-6 4 4-2 4 2-1 5H9L8 9Zm1 5-2 6h10l-2-6m-8 6h10" />,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11A22 22 0 0 1 12 15Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
};

const InterestIcon = ({ name }) => (
  <svg className="interest-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {interestIconShapes[name]}
  </svg>
);

const Interests = () => {
  if (!interestsData?.length) return null;

  return (
    <section className="section interests-section reveal" id="hobbies">
      <div className="section-header">
        <div><span className="section-eyebrow">A little off-duty</span><h2 className="section-title">Beyond the code.</h2></div>
      </div>
      <ul className="interests-list">
        {interestsData.map((item) => (
          <li key={item.name} className="interest-item">
            <InterestIcon name={item.icon} />
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
