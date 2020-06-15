import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "./firebase";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// state = {
//     email : '',
//     password : '',
//     signup : false,
//     verified : null,
//     e : null
// }

// componentDidMount() {
//
// }
// handleEmail = (event) =>{
//     this.setState({email : event.target.value});
// }
// handlePassword = (event) =>{
//     this.setState({password : event.target.value});
// }
//
// handleSignUp = (e) =>{
//     e.preventDefault();
//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(res =>{
//         console.log(firebase.auth().currentUser);
//         alert("SignUp successful. Please Login");
//         this.setState({signup : true});
//     }).catch(error =>{
//         console.log(error);
//     })
// }
// handleSignIn = (e) =>{
//     e.preventDefault();
//     firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(res =>{
//         console.log(res);
//         console.log(res.user.emailVerified);
//         if (res.user.emailVerified){
//             console.log("welcome User");
//             this.setState({e : res.user.email})
//         }else{
//             res.user.sendEmailVerification().then(res =>{
//                 alert("Please Verify your account. Verification mail has been sent to your registered email");
//             }).catch(e =>{
//                 console.log(e)
//             });
//         }
//
//     }).catch(error =>{
//         console.log(error);
//     })
// }
// signUpToggle = (e) =>{
//     e.preventDefault();
//     this.setState({signup : !this.state.signup})
// }
// logoutHandler = (e) =>{
//     e.preventDefault();
//     firebase.auth().signOut().then(res =>{
//             this.setState({signup : false, verified : false, e : null, email : '', password: ''});
//         }
//     ).catch(error =>{
//         console.log(error);
//     });
//
// }




// let userComponent = (
//     <div>
//         <p>Welcome User {this.state.e ? this.state.e : null}</p> <br/>
//         <a href="" onClick={this.logoutHandler}>logout</a>
//     </div>
// );
// let loginComponent = (
//     <div className="form-card">
//         <h2>Saas Authentication</h2>
//         <form >
//             <input type="email"  placeholder="email" value={this.state.email} onChange={this.handleEmail}/><br/>
//             <input type="password"  placeholder="password" value={this.state.password} onChange={this.handlePassword}/><br/>
//             {this.state.signup ? <input type="submit"  value="SIGNIN" onClick={this.handleSignIn}/>  : <input type="submit"  value="SIGNUP" onClick={this.handleSignUp}/>}
//         </form>
//         <br/>
//         {!this.state.signup ? <a href="" onClick={this.signUpToggle}>switch to sign in</a> :   <a href="" onClick={this.signUpToggle}>switch to signup</a>}
//     </div>
// )


// <div>
//     {this.state.e ? userComponent : loginComponent}
// </div>
