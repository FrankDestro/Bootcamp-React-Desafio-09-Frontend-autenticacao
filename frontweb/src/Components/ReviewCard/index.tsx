import { ReactComponent as StarImage } from 'assets/img/star.svg';

import './styles.css';

function ReviewCard() {
  return (
    <div className="container-card-review">
      <div className="user-card-review">
        <StarImage />
        <h1>Maria Silva</h1>
      </div>

      <div className="text-card-review">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
}

export default ReviewCard;
