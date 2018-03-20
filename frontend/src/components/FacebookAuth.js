import React from 'react'


class FacebookAuth extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
      
        window.fbAsyncInit = function() {
          window.FB.init({
            appId            : '2291310344228119',
            cookie           : true,
            xfbml            : true,
            version          : 'v2.12'
          });

          window.FB.Event.subscribe('auth.statusChange', (response)=>{
              if(response.authResponse){
                  this.updateLoggedInState(response)
              } else{
                  this.updateLoggedOutState()
              }
          });
        }.bind(this);
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) return;
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
    
    }
    render(){
        return(
            <div>
                <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
            </div>
        )
    }
}
export default FacebookAuth;