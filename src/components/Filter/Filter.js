import { Component } from 'react';
import s from './Filter.module.css';
import { PropTypes } from 'prop-types';

class Filter extends Component {
  static propTypes = {
    onChangeFilter: PropTypes.func,
  };
  render() {
    const { onChangeFilter } = this.props;
    return (
      <label className={s.filter}>
        Find contacts by name
        <input type="text" onChange={onChangeFilter} name="filter" />
      </label>
    );
  }
}

export default Filter;
