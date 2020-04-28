import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './App.css';
import { firebaseConfig } from './config/firebase';
import PuzzleList from './components/PuzzleList';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu/MainMenu';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  emailProvider: new firebase.auth.EmailAuthProvider()
}
function App(props) {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;
  return (
    <div className="App">
      <MainMenu />
      <Switch>
        <Route path="/puzzle" component={PuzzleList} />
      </Switch>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
