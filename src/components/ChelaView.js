import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Chela from './Chela';
import Comments from './Comments';

class ChelaView extends PureComponent {
  render() {
    const { chelas, comments, chelaId } = this.props;
    const chelaIndex = chelas.findIndex(chela => chela.id === chelaId);
    const chela = chelas[chelaIndex];
    const chelaComments = comments[chelaId] || [];

    return (
      <div className="chela-viewer">
        <div className="left-panel">
          <Chela key={chelaIndex} index={chelaIndex} chela={chela} comments={chelaComments} />
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

export default connect(
  mapStateToProps
)(ChelaView);