import React, {Component} from 'react';
import './App.css';
import firebase from "./firebase";

class App extends Component{
    state = {
        email : '',
        password : '',
        signup : false,
        verified : null,
        e : null
    }
  componentDidMount() {

  }
  handleEmail = (event) =>{
        this.setState({email : event.target.value});
  }
  handlePassword = (event) =>{
        this.setState({password : event.target.value});
  }

  handleSignUp = (e) =>{
      e.preventDefault();
      if (this.state.email.length === 0){
          alert("Please Enter your email");
      }else{
          if (this.state.password.length >= 6 && this.state.password.length > 0){
              firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(res =>{
                  console.log(firebase.auth().currentUser);
                  alert("SignUp successful. Please Login");
                  this.setState({signup : true});
              }).catch(error =>{
                  console.log(error);
              });

          }else{
              alert("Password length should be atleast 6 characters");
          }
      }

  }
  handleSignIn = (e) =>{
      e.preventDefault();
      if (this.state.email.length === 0){
          alert("Please Enter your email");
      }else{
          if (this.state.password.length >= 6 && this.state.password.length > 0){
              firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(res =>{
                  console.log(res);
                  console.log(res.user.emailVerified);
                  if (res.user.emailVerified){
                      console.log("welcome User");
                      this.setState({e : res.user.email})
                  }else{
                      res.user.sendEmailVerification().then(res =>{
                          alert("Please Verify your account. Verification mail has been sent to your registered email");
                      }).catch(e =>{
                          console.log(e)
                      });
                  }

              }).catch(error =>{
                  console.log(error);
              })
          }else{
              alert("Password length should be atleast 6 characters");
          }
      }
  }
  signUpToggle = (e) =>{
       e.preventDefault();
       this.setState({signup : !this.state.signup})
  }
  logoutHandler = (e) =>{
        e.preventDefault();
        firebase.auth().signOut().then(res =>{
            this.setState({signup : false, verified : false, e : null, email : '', password: ''});
        }
        ).catch(error =>{
            console.log(error);
        });

  }
  render() {
       let userComponent = (
           <div>
               <p>Welcome User {this.state.e ? this.state.e : null}</p> <br/>
               <a href="" onClick={this.logoutHandler}>logout</a>
           </div>
       );
       let loginComponent = (
           <div className="form-card">
               <h2>Saas Authentication</h2>
               <form >
                   <input type="email"  placeholder="email" value={this.state.email} onChange={this.handleEmail}/><br/>
                   <input type="password"  placeholder="password" value={this.state.password} onChange={this.handlePassword}/><br/>
                   {this.state.signup ? <input type="submit"  value="SIGNIN" onClick={this.handleSignIn}/>  : <input type="submit"  value="SIGNUP" onClick={this.handleSignUp}/>}
               </form>
               <br/>
               {!this.state.signup ? <a href="" onClick={this.signUpToggle}>switch to sign in</a> :   <a href="" onClick={this.signUpToggle}>switch to signup</a>}
           </div>
       )
      return (
          <div>
              {this.state.e ? userComponent : loginComponent}
          </div>
      );
  }
}

export default App;
