import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { likeBeer } from '../actions/chelasActions';
import Chela from './Chela';
import Comments from './Comments';

class ChelaView extends PureComponent {

  likeBeer = index => {
    this.props.like(index);
  }

  render() {
    const { chelas, comments, chelaId } = this.props;
    const chelaIndex = chelas.findIndex(chela => chela.id === chelaId);
    const chela = chelas[chelaIndex];
    const chelaComments = comments[chelaId] || [];

    return (
      <div className="chela-viewer">
        <div className="left-panel">
          <Chela key={chelaIndex} index={chelaIndex} chela={chela} comments={chelaComments} likeBeer={this.likeBeer} />
        </div>
        <div className="right-panel">
          <Comments chelaComments={chelaComments} chelaId={chelaId} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chelas: state.chelas,
    comments: state.comments,
    chelaId: ownProps.match.params.chelaId
  }
}

const mapDispatchToProps = dispatch => ({
  like: index => dispatch(likeBeer(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChelaView);