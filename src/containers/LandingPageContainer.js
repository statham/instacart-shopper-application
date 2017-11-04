import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showApplication, submitApplication } from '../actions';
import LandingPage from '../components/LandingPage';

const mapStateToProps = state => {
  return {
    showApplication: state.ui.showApplication
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onApplyClick: () => {dispatch(showApplication())},
    onApplicationSubmit: data => {dispatch(submitApplication(data))}
  };
};

const LandingPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));

export default LandingPageContainer;
