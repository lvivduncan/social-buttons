document.addEventListener('DOMContentLoaded', () => {
  // facebook
  const facebook = document.querySelectorAll('.share-facebook');
  
  // twitter
  const twitter = document.querySelectorAll('.share-twitter');
  
  // linkedin
  const linkedin = document.querySelectorAll('.share-linkedin');
  
  // telegram
  const telegram = document.querySelectorAll('.share-telegram');
  
  // viber
  const viber = document.querySelectorAll('.share-viber');
  
  facebook.forEach(item => {
    item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-facebook-1" style="fill: rgb(102, 102, 102); width: 32px; height: 32px;"><g><path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd"></path></g></svg>';
  
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://facebook.com/sharer.php?display=popup&u=' + window.location.href;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'sharer', options);
    });
  });
  
  twitter.forEach(item => {
    item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-twitter-7" style="fill: rgb(102, 102, 102); width: 32px; height: 32px;"><g><path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd"></path></g></svg>';
  
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://twitter.com/intent/tweet?text=' + document.title + ' ' + window.location.href;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'twitter', options);
    });
  });
  
  linkedin.forEach(item => {
    item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" role="img" style="fill: rgb(102, 102, 102); width: 32px; height: 32px; position: relative; top: 4px;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></svg>';
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://linkedin.com/shareArticle?mini=true&url=' + window.location.href + '&title=' + document.title;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'linkedin', options);
    });
  });
  
  telegram.forEach(item => {
    item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-telegram-9" style="fill: rgb(102, 102, 102); width: 32px; height: 32px;"><g><g fill-rule="evenodd"></g><path d="M15.02 20.814l9.31-12.48L9.554 17.24l1.92 6.42c.225.63.114.88.767.88l.344-5.22 2.436 1.494z" opacity=".6"></path><path d="M12.24 24.54c.504 0 .727-.234 1.008-.51l2.687-2.655-3.35-2.054-.344 5.22z" opacity=".3"></path><path d="M12.583 19.322l8.12 6.095c.926.52 1.595.25 1.826-.874l3.304-15.825c.338-1.378-.517-2.003-1.403-1.594L5.024 14.727c-1.325.54-1.317 1.29-.24 1.625l4.98 1.58 11.53-7.39c.543-.336 1.043-.156.633.214"></path></g></svg>';
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://telegram.me/share/url?url=' + window.location.href + '&text=' + document.title;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'telegram', options);
    });
  });
  
  viber.forEach(item => {
    item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-viber-10" style="fill: rgb(102, 102, 102); width: 32px; height: 32px;"><g><path d="M21.176 27c-.208-.062-.618-.13-.987-.303-6.476-3.02-11.18-7.972-13.853-15.082-.897-2.383.04-4.396 2.298-5.22.405-.147.802-.157 1.2.002.964.383 3.404 4.022 3.458 5.11.042.835-.48 1.287-1 1.67-.983.722-.988 1.638-.568 2.66.948 2.308 2.567 3.895 4.663 4.925.76.374 1.488.337 2.007-.515.925-1.518 2.06-1.445 3.3-.502.62.473 1.253.936 1.844 1.45.8.702 1.816 1.285 1.336 2.754-.5 1.527-2.226 3.066-3.7 3.05zm-4.76-20.986c4.546.166 8.46 4.677 8.406 9.543-.005.478.153 1.185-.504 1.172-.628-.015-.464-.733-.52-1.21-.603-5.167-2.786-7.606-7.52-8.394-.392-.066-.99.026-.96-.535.044-.833.754-.523 1.097-.576zm6.072 8.672c-.045.356.147.968-.385 1.056-.72.118-.58-.595-.65-1.053-.48-3.144-1.5-4.297-4.423-5.005-.43-.105-1.1-.032-.99-.75.108-.685.71-.452 1.164-.393 2.92.38 5.307 3.126 5.284 6.144zm-2.222-.573c.013.398-.026.818-.46.874-.314.04-.52-.245-.553-.597-.12-1.296-.75-2.062-1.95-2.27-.36-.063-.712-.19-.544-.715.11-.352.408-.387.712-.396 1.297-.036 2.815 1.647 2.794 3.103z" fill-rule="evenodd"></path></g></svg>';
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'viber://forward?text=' + document.title + ' ' + window.location.href;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'viber', options);
    });
  });
});