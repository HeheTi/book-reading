import PropTypes from 'prop-types';
import { ReactComponent as RegisterArrow } from 'images/registerArrow.svg';

const DescInfoList = ({ title = '', list = [] }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.map(el => (
          <li key={el}>
            <p>
              <span>
                <RegisterArrow width="4" height="8" />
              </span>
              {el}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

DescInfoList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default DescInfoList;
