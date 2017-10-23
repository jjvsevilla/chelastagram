import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';

import CSSTransitionGroup from 'react-addons-css-transition-group';

import { likeBeer } from '../actions/chelasActions';

class Chela extends PureComponent {

  likeBeer = () => {
    const { index } = this.props;
    this.props.likeBeer(index);
  }

  render() {
    const { chela, comments } = this.props;
    return (
      <figure className="chela-item">
        <div className="image-wrapper">
          <Link to={`/view/${chela.id}`}>
            <img src={chela.image} alt={chela.name} />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={chela.likes} className="likes-heart">{chela.likes}</span>
          </CSSTransitionGroup>


        </div>
        <figcaption className="caption">
          <p>{chela.name}</p>
          <div className="actions">
            <button className="likes" onClick={this.likeBeer}>
              <span role="img" aria-label="beer">🍺</span> {chela.likes}
            </button>
            <Link to={`/view/${chela.id}`} className="button">
              <span role="img" aria-label="comments">💬 {comments ? comments.length : 0}</span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({ like }, dispatch)
  return {
    likeBeer: (index) => dispatch(likeBeer(index))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Chela);