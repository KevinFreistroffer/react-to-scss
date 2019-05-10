import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
// import axios from "axios";
// import Header from "./header"; 
// import Footer from "./footer";
// import Menu from "./menu"; 
// import Loading from "./loading";
// import Home from "./home";   
// import SignUp from "./user/signup";
// import SignUpSuccess from "./user/signup-success";
// import SignIn from "./user/signin";
// import ConfirmAccount from "./user/confirm-account";
// import SetProfileAfterSignup from "./user/profile-after-signup";
// import Dashboard from "./dashboard";  
// import MakeAMeal from "./dashboard/make-a-meal";
// import Detail from "./dashboard/make-a-meal/detail";
// import NewConsumable from "./dashboard/consumables/add";
// import EditConsumable from "./dashboard/consumables/edit";
// import Totals from "./dashboard/totals";
// import Consumed from "./dashboard/consumed";
// import Search from "./search";
// import Alert from "./alert"; 
// import StayBox from "./stayBox";
// import PageNotFound from "./404"; 
// import { setLoader } from "./loading/loading_actions";
// import { authenticate, storeUser, beginSigningOut, resetIsSignedUp } from "./user/user_actions";
// import { calculateTotals } from "./dashboard/totals/totals_actions";
// import { setAlert } from "./alert/alert_actions";
// import { setStayBox } from "./stayBox/stayBox_actions"; 
import "./App.scss"; 
// import cookie from "my-simple-cookie"; 

export class App extends Component {
  constructor(props) { 
   
//     super(props); 
// 
//     axios.defaults.headers.post["crossDomain"] = true;  
//     document.title = "illLive!";
//     this.handleStayBoxSetIsVisible = this.handleStayBoxSetIsVisible.bind(this);
  }

//   componentDidMount() {
//     const user_sid = cookie.get("user_sid");
//     //axios('test').then(res => console.log(res)).catch(e => console.log(e));
//     // TODO think about if this should be in WillMount()
//     if (user_sid && user_sid !== "") {
//       this.props.authenticate();
//     }
//   }
// 
//   componentDidUpdate(prevProps, prevState) {
//     const {
//       isAuthenticating,
//       isAuthenticated,
//       confirmed24HourMealResetMessage,
//       authenticationErrors,
//       signInErrors,
//       isSigningUp,
//       isSigningIn,
//       isSigningOut,
//       isSignedUp,    
//       setLoader,
//       history
//     } = this.props;
// 
// 
//     // Handle begining authentication
//     if (!prevProps.isAuthenticating && isAuthenticating) {
//       setLoader(true, ""); 
//     }
// 
//     // Handle end or success/failure of authentication
//     if (prevProps.isAuthenticating && !isAuthenticating) {
//       if (isAuthenticated) {
//         setLoader(false);
//         if (this.props.user.meals && this.props.user.meals.length > 0) {
//           this.props.calculateTotals();
//         }
//       } else if (!isAuthenticated && authenticationErrors.length > 0) {
//         setLoader(false);
//       }
//     }
// 
//     // Handle beginning signing up
//     if (!prevProps.isSigningUp && isSigningUp) {
//       setLoader(true, "Creating your account ...", false);
//     }
//     // Handle successful sign up
//     if (!prevProps.isSignedUp && isSignedUp) {
//       setTimeout(() => {
//         setLoader(true, "Account created!", false);
//       }, 1400);
// 
//       this.props.resetIsSignedUp();
// 
//       setTimeout(() => {
//         
//         setLoader(true, "", true);
//       }, 3200);
// 
//       setTimeout(() => {
//         history.push("/auth/signup-success");
//         setLoader(false);
//       }, 4900);
//     } else if (this.props.accountCreated && sessionStorage.getItem('account-created')) {
//       setTimeout(() => {
//         setLoader(true, "There was some error. Please try again.", false);
//       }, 1400);
// 
//       setTimeout(() => {
//         setLoader(false);
//       }, 3200);
//     }
// 
//     // Handle begin signing in
//     if (!prevProps.isSigningIn && isSigningIn) {
//       setLoader(true, "Signing in ...", false);
//     }
// 
//     // Handle finish signing in
//     if (prevProps.isSigningIn && !isSigningIn) {
//       if (isAuthenticated) {
//         if (this.props.user.meals && this.props.user.meals.length > 0) {
//           this.props.calculateTotals();
//         }
//         setTimeout(() => {
//           setLoader(true, "Signed in!", false);
//         }, 1400);
// 
//         setTimeout(() => {
//           setLoader(true, "", true);
//         }, 3200);
// 
//         setTimeout(() => {
//           history.push("/me");
//           setLoader(false);
//         }, 4900);
//       } else if (!isAuthenticated && signInErrors.length > 0) {
//         console.log(`Unsuccessful sign in.`);
//         console.log(signInErrors);
//         setLoader(false);
//       }
//     }
// 
//     // Handle begin signing out
//     if (!prevProps.isSigningOut && isSigningOut) {
//       setLoader(true, "Signing you out ...", false);
//     }
// 
//     // Handle finish of signing out
//     if (prevProps.isSigningOut && !isSigningOut) {
//       setTimeout(() => {
//         setLoader(true, "Signed out!", false);
//       }, 1400);
// 
//       setTimeout(() => {
//         setLoader(true, "", true);
//       }, 3200);
// 
//       setTimeout(() => {
//         history.push("/");
//         setLoader(false);
//       }, 4900);
//     }
//   }
// 
//   componentDidCatch(errorString, errorInfo) {
//     console.warn(`[App] componentDidCatch()`, errorString, errorInfo);
//   }
// 
//   handleStayBoxSetIsVisible(isVisible) {
//     this.props.setStayBox(isVisible);
//   }
// 
//   setCookieFlag() {
//     alert("cookie");
//   }

  render() {
    // if ( this.props.user) {
    //   if ( this.props.user.firstName && this.props.user.firstName !== '' ) {
    //     const menu = authenticatedRoutes.map(( route, index ) => {
    //       return <li><Link key={index + 1} to={route.path} onClick={this.props.toggleMenu}>{route.name}</Link></li>
    //     });
    //   }
    // }

    return (
      <div className="App">
        App
        {/* {this.props.stayBoxIsVisible && ( */}
        {/*   <StayBox */}
        {/*     isVisible={this.props.stayBoxIsVisible} */}
        {/*     text={this.props.stayBoxText} */}
        {/*     setIsVisible={this.handleStayBoxSetIsVisible} */}
        {/*   /> */}
        {/* )} */}
        {/* <Loading /> */}
        {/* <Menu siteName={this.props.appName} /> */}
        {/* {this.props.alert.isVisible && ( */}
        {/*   <Alert */}
        {/*     title={this.props.alert.title} */}
        {/*     body={this.props.alert.body} */}
        {/*     feeling={this.props.alert.feeling} */}
        {/*   /> */}
        {/* )} */}
        {/* <Header siteName={this.props.appName} /> */}
        {/* <main> */}
        {/*   { */}
        {/*     <Switch> */}
        {/*       <Route exact path="/" component={Home} /> */}
        {/*       <Route exact path="/auth/signup" component={SignUp} /> */}
        {/*       <Route exact path="/auth/signup-success" component={SignUpSuccess} /> */}
        {/*       <Route */}
        {/*         exact */}
        {/*         path="/auth/profile-after-signup" */}
        {/*         component={SetProfileAfterSignup} */}
        {/*       /> */}
        {/*       <Route exact path="/auth/signin" component={SignIn} /> */}
        {/*       <Route */}
        {/*         exact */}
        {/*         path="/auth/confirm-account/:token?" */}
        {/*         component={ConfirmAccount} */}
        {/*       /> */}
        {/*       <Route exact path="/me" component={Dashboard} /> */}
        {/*       <Route exact path="/me/add" component={NewConsumable} /> */}
        {/*       <Route exact path="/me/edit" component={EditConsumable} /> */}
        {/*       <Route exact path="/me/make-a-meal" component={MakeAMeal} /> */}
        {/*       <Route exact path="/me/totals" component={Totals} /> */}
        {/*       <Route exact path="/meconsumed" component={Consumed} /> */}
        {/*       <Route exact path="/me/search" component={Search} /> */}
        {/*       <Route exact path="/me/detail/:id" component={Detail} /> */}
        {/*       <Route component={PageNotFound} /> */}
        {/*     </Switch> */}
        {/*   } */}
        {/*   {/* TODO style and make it a component at some point. */} */}
        {/*   <div id="cookie-agreement" onClick={this.setCookieFlag}> */}
        {/*     We use cookies blah blah blah */}
        {/*   </div> */}
        {/* </main> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    /* appName: state.appReducers.appName,
    user: state.userReducers,
    isAuthenticated: state.userReducers.isAuthenticated,
    isAuthenticating: state.userReducers.isAuthenticating,
    isSigningIn: state.userReducers.isSigningIn,
    isSigningUp: state.userReducers.isSigningUp,
    isSigningOut: state.userReducers.isSigningOut,
    isSignedUp: state.userReducers.isSignedUp,
    signInErrors: state.userReducers.signInErrors,
    authenticationErrors: state.userReducers.authenticationErrors,
    confirmedCookieFlag: state.userReducers.confirmedCookieFlag,
    alert: state.alertReducers,
    isLoading: state.loadingReducers.isLoading,
    stayBoxText: state.stayBoxReducers.text,
    stayBoxIsVisible: state.stayBoxReducers.isVisible */
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // authenticate: () => {
    //   dispatch(authenticate());
    // },
    // setLoader: (isLoading, loadingText, showSpinner = true) => {
    //   dispatch(setLoader(isLoading, loadingText, showSpinner));
    // },
    // setAlert: (isVisible, title = "", body = "") => {
    //   dispatch(setAlert(isVisible, title, body));
    // },
    // storeUser: user => {
    //   dispatch(storeUser(user));
    // },
    // setStayBox: (isVisible, text = "") => {
    //   dispatch(setStayBox(isVisible, text));
    // },
    // beginSigningOut: () => dispatch(beginSigningOut()),
    // resetIsSignedUp: () => dispatch(resetIsSignedUp()),
    // calculateTotals: () => dispatch(calculateTotals()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
