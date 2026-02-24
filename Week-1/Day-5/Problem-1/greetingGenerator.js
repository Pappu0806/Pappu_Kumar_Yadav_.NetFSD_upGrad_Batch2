function generateGreeting(userName) {
    const greetingMessage = `Hello, ${userName}! Welcome to our website.`;
    document.getElementById("greeting").textContent = greetingMessage;
}