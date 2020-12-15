import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithGithub } from '../actions/auth';

const LoginPage = ({ startLoginWithGoogle, startLoginWithGithub }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Time to get your expenses in order</p>
            <button className="button button--login" onClick={startLoginWithGoogle}>Login with Google</button>
            <button className="button button--login" onClick={startLoginWithGithub}>Login with Github</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithGithub: () => dispatch(startLoginWithGithub())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);