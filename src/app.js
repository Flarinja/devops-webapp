const buildId = "__BUILD_ID__";

const button = document.getElementById("ping-button");
const status = document.getElementById("status");
const buildInfo = document.getElementById("build-info");

buildInfo.textContent = `Build: ${buildId}`;

button.addEventListener("click", () => {
    status.textContent = "Ping successful!";
});

console.log("DevOps WebApp loaded successfully.");