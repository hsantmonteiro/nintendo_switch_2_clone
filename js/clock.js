function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${hours}:${minutes.toString().padStart(2, "0")}<span class="text-xl font-regular">${ampm}</span>`;
    document.getElementById("current-time").innerHTML = timeString;
}

updateTime();
setInterval(updateTime, 1000);
