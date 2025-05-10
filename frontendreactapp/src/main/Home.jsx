import './style.css';
import { useState } from 'react';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const responses = {
    "how can i borrow a book": "To borrow a book, please login as a student, go to 'Borrow a Book' section, and follow the instructions.",
    "how to login": "Click on the relevant login link (Admin, Librarian, or Student) and enter your credentials.",
    "how to register": "Students can register using the 'Registration' option under the Student section.",
    "how to return a book": "Go to the 'View Borrowed Books' section and click on 'Return' next to the book.",
    "library timings": "The library is open from 9 AM to 6 PM, Monday to Saturday.",
    "contact librarian": "Please login and use the 'Contact Librarian' option in your dashboard.",
  };

  const getBotResponse = (userMessage) => {
    const cleaned = userMessage.toLowerCase().trim();
    for (const key in responses) {
      if (cleaned.includes(key)) {
        return responses[key];
      }
    }
    return "Hello, Welcome to Library Management, How can I help you?";
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMsg = { text: input, sender: 'user' };
      const botMsg = { text: getBotResponse(input), sender: 'bot' };
      setMessages([...messages, userMsg, botMsg]);
      setInput('');
    }
  };

  const handleVoiceInput = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      alert('Voice recognition error: ' + event.error);
    };
  };

  return (
    <div className="home-container">
      <div className="admin-section">
        <h3>Admin</h3>
        <ul>
          <li>Admin Login</li>
          <li>Add Librarian</li>
          <li>View/Delete Librarians</li>
          <li>View Students</li>
          <li>Delete/Block Students</li>
          <li>View All Books</li>
        </ul>
      </div>
      <div className="manager-section">
        <h3>Librarian</h3>
        <ul>
          <li>Librarian Login</li>
          <li>View/Update Profile</li>
          <li>Add New Book</li>
          <li>View Books</li>
          <li>View Bookings</li>
        </ul>
      </div>
      <div className="customer-section">
        <h3>Student</h3>
        <ul>
          <li>Registration</li>
          <li>Student Login</li>
          <li>View/Update Profile</li>
          <li>Borrow a Book</li>
          <li>View Borrowed Books</li>
        </ul>
      </div>

      <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
        💬 Chat
      </button>

      {chatOpen && (
        <div className="chatbox">
          <div className="chat-header">Library Assistant</div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleVoiceInput}>🎤</button>
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
