import React from 'react';
import { connect } from 'react-redux'; 
import { addRandom } from '../actions';
import { getCount } from '../selectors';
import AddButton from '../components/AddButton';

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <AddButton onClick={this.props.handleAddClicked}/>
            </div>
        );
    };
}

const mapStateToProps = state => {
  return {
    count: getCount(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddClicked: () => {
      dispatch(addRandom())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);