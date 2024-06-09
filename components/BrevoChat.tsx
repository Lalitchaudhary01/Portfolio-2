import React, { useEffect } from 'react';

const BrevoChat: React.FC = () => {
  useEffect(() => {
    (function (d, w, c) {
      // Set the Brevo Conversations Widget ID
      w.BrevoConversationsID = '66651d3d787d350eb0447e09';
      w[c] = w[c] || function () {
        (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');
  }, []);

  return null; // This component is not rendered in the browser, it's only used to initialize the Conversations widget
};

export default BrevoChat;
