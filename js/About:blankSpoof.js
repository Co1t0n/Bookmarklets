javascript:(function(){let url = prompt("about:blank spoofer | what website do you want to spoof");win = window.open();win.document.body.style.margin = '0';win.document.body.style.height = '100vh';var iframe = win.document.createElement('iframe');iframe.style.border = 'none';iframe.style.width = '100%';iframe.style.height = '100%';iframe.style.margin = '0';iframe.src = url;win.document.body.appendChild(iframe);})();
