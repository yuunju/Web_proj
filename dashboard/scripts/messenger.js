const toggleBtn = document.getElementById("toggleBtn");
const messenger = document.getElementById("messenger");
const messengerBody = document.getElementById("messengerBody");
const arrow = document.getElementById("arrow");
const dropdownArrow = document.getElementById("dropdownArrow"); // 추가: 드롭다운 아이콘

// 접기/펼치기 기능
toggleBtn.addEventListener("click", () => {
  toggleMessenger();
});

dropdownArrow.addEventListener("click", () => {
  toggleMessenger();
});

function toggleMessenger() {
  if (messenger.classList.contains("collapsed")) {
    messenger.classList.remove("collapsed");
    messenger.classList.add("expanded");
    messengerBody.style.display = "flex";
    arrow.textContent = "▲"; // 화살표 변경
  } else {
    messenger.classList.remove("expanded");
    messenger.classList.add("collapsed");
    messengerBody.style.display = "none";
    arrow.textContent = "▼"; // 화살표 변경
  }
}

// WebSocket 기능 (기본 예제)
const ws = new WebSocket("ws://localhost:8080");
const chatbox = document.getElementById("chatbox");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

ws.onmessage = (event) => {
  const message = document.createElement("div");
  message.textContent = event.data;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight; // 자동 스크롤
};

sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  ws.send(message);
  messageInput.value = "";
});
