let count = 0;

function increaseCount() {
    count++;
    document.getElementById("counter").innerText = count;
}
function resetCount() {
    count = 0;
    document.getElementById("counter").innerText = count;
}