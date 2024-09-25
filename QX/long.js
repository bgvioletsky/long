
const url = "https://cdn.jsdelivr.net/gh/bgvioletsky/long/indeex.html";
const myRequest = {
    url: url
};

$task.fetch(myRequest).then(response => {
    $done({bodyBytes: response.bodyBytes});
}, reason => {
    $done();
});