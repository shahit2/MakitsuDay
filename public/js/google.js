//var clientId = '497841236976.apps.googleusercontent.com';  //jsfiddle
//var clientId = '497841236976-anj4h1697s94ip6pn0v94iuo9tscmtql.apps.googleusercontent.com';  localhost:3000
var clientId = '497841236976-dps4hjfgs6r9ntkl5ne3dflhmqgscunt.apps.googleusercontent.com'; //this is the real one
var apiKey = 'AIzaSyAlOkP-S6ClEdAjbkAr8gbPFHAqE2DrqPo';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
    checkAuth();
}

function checkAuth() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: true
    },
    handleAuthResult);
}

function handleAuthResult(authResult) {
    var authorizeButton = document.getElementById('authorize-button');
    if (authResult) {
        authorizeButton.style.visibility = 'hidden';
        checkCalendar();
    } else {
        authorizeButton.style.visibility = '';
        authorizeButton.onclick = handleAuthClick;
    }
}

function handleAuthClick(event) {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
    },
    handleAuthResult);
    return false;
}
