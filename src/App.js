import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//main pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component';

//header 
import Header from './components/header/header.component';

function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route path='/signin' component={ SignInAndSignUpPage }/>
        </Switch>
      </div>
  );
}

export default App;
