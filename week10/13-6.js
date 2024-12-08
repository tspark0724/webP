onmessage = function (e){
    let a = parseInt(e.data.a);
    let b = parseInt(e.data.b);
    let result = a * b;
    postMessage(result);
}