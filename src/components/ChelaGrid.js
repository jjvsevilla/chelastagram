import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { likeBeer } from '../actions/chelasActions';
import Chela from './Chela';

class ChelaGrid extends PureComponent {

  renderChelas = () => {
    const { chelas, comments } = this.props;
    return chelas.map((chela, i) => <Chela key={i} index={i} chela={chela} comments={comments[chela.id]} likeBeer={this.likeBeer} />);
  }

  likeBeer = index => {
    this.props.like(index);
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

const mapDispatchToProps = dispatch => ({
  like: index => dispatch(likeBeer(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChelaGrid);

