import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {GlobalStyle} from './global.styles';
import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundry from './components/error-boundry/error-boundry.component';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInandSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <ErrorBoundry>
            <Suspense fallback={<Spinner/>}>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/contact' component={ContactPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route 
                    exact 
                    path='/signin' 
                    render={() => currentUser ? 
                      (<Redirect to='/'/>) :
                      (<SignInandSignUpPage/>)
                    }/>
            </Suspense>
          </ErrorBoundry>
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);