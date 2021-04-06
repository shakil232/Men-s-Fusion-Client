import React, { useContext} from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // provider
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    // SignWithGoogle
    const handleGoogleSign = () => {
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userLogin = { name: displayName, email };
                setLoggedInUser(userLogin);
                history.replace(from)

            }).catch((error) => {
                const errorMessage = error.message;
                setLoggedInUser(errorMessage)

            });
    }



    return (
        <div className="container">
            <div className="continue col-md-4 col-sm-1 mt-5">
                <Link to="/home"> <h5> <FontAwesomeIcon className=" admin-icons " icon={faHome} /> Gents-Fusion </h5></Link>
            </div>

            <div className="col-md-12 col-sm-1 text-center">
                <button className="google" onClick={handleGoogleSign} >
                    <FontAwesomeIcon className="social-icon" icon={faGooglePlus} />
                    Continue With Google
                </button>
            </div>


        </div>
    );
};

export default Login;