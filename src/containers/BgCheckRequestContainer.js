import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BgCheckRequest from '../components/BgCheckRequest';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    confirmApplication: () => alert('Your application has been sent! Please wait while we review it.'),
    cancelApplication: () => alert('Your application has been canceled.')
  };
};

const BgCheckRequestContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(BgCheckRequest));

export default BgCheckRequestContainer;
