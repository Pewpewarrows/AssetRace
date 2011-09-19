var early_res = document.getElementById('early-results');

if (!early_res) {
    if (document.body) {
        early_res = document.createElement('div');
        early_res.setAttribute('id', 'early-results');
        document.body.appendChild(early_res);
    } else {
        document.write('<div id="early-results"></div>');
        early_res = document.getElementById('early-results');
    }
}

early_res.innerHTML += '<br/>Javascript finished loading at ' + (+(new Date) - startTime) + 'ms';

