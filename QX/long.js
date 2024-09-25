
const url = "https://cdn.jsdelivr.net/gh/bgvioletsky/long@0.0.3/indeex.html";
const myRequest = {
    url: url
};

$task.fetch(myRequest).then(response => {
    $done({bodyBytes: response.bodyBytes});
}, reason => {
    $done();
});