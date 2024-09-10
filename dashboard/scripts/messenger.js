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

// 페이지가 새로고침되지 않도록 하고, 선택한 값을 저장
document
  .getElementById("languageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 새로고침 방지

    const selectedValue = document.getElementById("lang").value; // 선택한 값 가져오기
    localStorage.setItem("selectedLanguage", selectedValue); // 선택한 값을 localStorage에 저장
  });

// 페이지가 로드될 때, 저장된 값을 불러와서 선택된 상태로 유지
window.onload = function () {
  const savedValue = localStorage.getItem("selectedLanguage"); // 저장된 값 가져오기
  if (savedValue) {
    document.getElementById("lang").value = savedValue; // 그 값으로 셀렉트 박스 선택 상태 유지
  }
};
