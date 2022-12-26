import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title = 'Upload stats', stats }) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRandomColor(funfromRandomInt) {
    return (
      'rgb(' +
      funfromRandomInt(0, 255) +
      ', ' +
      funfromRandomInt(0, 255) +
      ', ' +
      funfromRandomInt(0, 255) +
      ')'
    );
  }
  return (
    <section className={s.statistics}>
      <h2 className="title">{title}</h2>

      <ul className={s.statList}>
        {stats.map(item => {
          return (
            <li
              className="item"
              key={item.id}
              style={{ backgroundColor: getRandomColor(getRandomInt) }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
