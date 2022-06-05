import React from "react";
import Script from 'next/script';

const MessengerComponent = () => {
return (
<div>
  <div id="fb-root"></div>

  <div id="fb-customer-chat" className="fb-customerchat"></div>
  <Script strategy="lazyOnload">
    {
      `
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "112424854579021");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `
    }
  </Script>
</div>
)
};

export default MessengerComponent;