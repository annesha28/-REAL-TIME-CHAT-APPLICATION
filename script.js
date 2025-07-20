// Replace this URL with your WebSocket server
const socket = new WebSocket('ws://localhost:8080');

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

socket.onmessage = function(event) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.textContent = event.data;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== '') {
    socket.send(message);
    messageInput.value = '';
  }
}
