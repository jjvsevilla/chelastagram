import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chela from './Chela';

class ChelaGrid extends PureComponent {

  renderChelas = () => {
    const { chelas, comments } = this.props;
    return chelas.map((chela, i) => <Chela key={i} index={i} chela={chela} comments={comments[chela.id]} />);
  }

  render() {
    return (
      <div className="chela-list">
        {this.renderChelas()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chelas: state.chelas,
  comments: state.comments
})

export default connect(
  mapStateToProps
)(ChelaGrid);

