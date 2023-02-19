function checkIP() {
    var ipAddress = document.getElementById('ip-address').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var statusIndicator = document.getElementById('status-indicator');
          statusIndicator.style.backgroundColor = response.status === 'connected' ? 'green' : 'red';
        }
      }
    };
    xhr.open('GET', '/check-ip?ip=' + ipAddress);
    xhr.send();
  }