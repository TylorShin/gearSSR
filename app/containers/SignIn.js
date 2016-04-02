import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'actions/auth';


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    this.props.signIn(email, password);
  }

  render() {
    const { isOpen, closeFunc } = this.props;

    return (
      <div visible={isOpen} onClose={closeFunc} height={248}>
        <div className="modal-header">
          로그인
        </div>
        <form onSubmit={this.handleLogin}>
          <div className="modal-body">
            <div>
              <input
                type="email"
                ref="email"
                placeholder="E-MAIL 이메일"
                className="g-input"
              />
            </div>
            <div>
              <input
                type="password"
                ref="password"
                placeholder="PASSWORD 암호"
                className="g-input"
              />
            </div>
          </div>
          <div className="modal-footer clearfix">
            <button className="g-flat-button" type="submit">로그인</button>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export { SignIn };
export default connect(mapStateToProps, { signIn })(SignIn);
