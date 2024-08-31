// Basic chat functionality
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value;
    var chatMessages = document.getElementById('chat-messages');
    
    var messageDiv = document.createElement('div');
    messageDiv.textContent = 'You: ' + message;
    chatMessages.appendChild(messageDiv);
    
    document.getElementById('message').value = '';
    
    // Optional: Add AJAX to send message to server without refreshing the page
    // For now, messages are only displayed locally
});
document.getElementById("chat-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_message.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("chat-messages").innerHTML += "<p>" + message + "</p>";
            document.getElementById("message").value = ""; // Clear the textarea
            alert(xhr.responseText); // Show the success or error message
        }
    };

    xhr.send("message=" + encodeURIComponent(message));
});

