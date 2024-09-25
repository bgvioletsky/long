
const url = "https://cdn.jsdelivr.net/gh/bgvioletsky/long@0.0.5/index.html";
const myRequest = {
    url: url
};

$task.fetch(myRequest).then(response => {
    $done({bodyBytes: response.bodyBytes});
}, reason => {
    $done();
});