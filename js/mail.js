// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        alert("Заявка успешно отправлена");
        window.location = "/";
    }; 

    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
}