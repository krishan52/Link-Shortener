const profile = ["Web Designer","Full-Stack Web Developer", "Programmer"];
let work = 0;
let workIndex = 0;
let timeTaken;
const write = document.querySelector("#text");
const cursor = document.querySelector("#cursor");
function Type() {
    let text = profile[work].substring(0, workIndex + 1);
    write.innerHTML = text;
    workIndex++;
    if (text === profile[work]) {
        cursor.style.display = 'none';
        clearInterval(timeTaken);
        setTimeout(function () {
            timeTaken = setInterval(Delete, 100);
        }, 700);
    }
}
function Delete() {
    let text = profile[work].substring(0, workIndex - 1);
    write.innerHTML = text;
    workIndex--;
    if (text === '') {
        clearInterval(timeTaken);
        if (work == (profile.length - 1))
            work = 0;
        else
            work++;
        workIndex = 0;
        setTimeout(function () {
            cursor.style.display = 'inline-block';
            timeTaken = setInterval(Type, 100);
        }, 200);
    }
}
timeTaken = setInterval(Type, 100);