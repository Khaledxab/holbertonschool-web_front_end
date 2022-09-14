function createElement(data) {
    let p = document.createElement('p');
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            callback(data[1][0]);
        } else {
            console.log('error');
        }
    };
    request.onerror = function () {
        console.log('error');
    };
    request.send();
}
