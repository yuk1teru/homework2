import { Component } from 'react';
class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <p style={{ fontSize: 30 }}>{title}</p> {children}
      </>
    );
  }
}

export default Section;
