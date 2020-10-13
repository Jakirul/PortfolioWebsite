// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/jakirul/repos', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    console.log(data);
  var statusHTML = '';
  $.each(data, function(i, status) {
//     statusHTML += '<tr>';
//     statusHTML += '<td> <b>' + status.name + "</b> <br>  "+ '<a target="_blank" href="' + status.html_url + '">'  + status.html_url + '</a></td>';
//     statusHTML += '<td>' + status.language + '</td>';
//     statusHTML += '</tr>';
//   });
//   $('tbody').html(statusHTML);

statusHTML += '<div class="col">';
statusHTML += '<div class="panel panel-blue"> <b>' + status.name + "</b> <br>  "+ '<a target="_blank" href="' + status.html_url + '">'  + status.html_url + "</a><br> Language: " +status.language + '</div></td>';

statusHTML += '</div>';
});
$('.col').html(statusHTML);
}

// Send request
request.send();