
---

## 📌 Left Panel (`LeftPanel`)
- `LeftLayout.jsx` → Manages the entire left section.
- `ChatList.jsx` → Renders a list of available chats.
- `ChatListItem.jsx` → Represents an individual chat.
- `SearchBar.jsx` → Search functionality.
- `ChatFilter.jsx` → Filter chats (All, Unread, More).

---

## 📌 Right Panel (`RightPanel`)
- `RightLayout.jsx` → Manages the entire right section.
- `ChatHeader.jsx` → Shows the chat header (name, options).
- `MessageList.jsx` → Displays all messages in a chat.
- `MessageItem.jsx` → A single message (sent or received).
- `MessageInput.jsx` → Input field for typing messages.

---

## 📌 Authentication (`Auth`)
- `AuthForm.jsx` → Single component for **both** Signup & Login.

---

## ✅ **Why This Structure?**
✔ **Modular & Readable** → Separated into **LeftPanel, RightPanel, and Auth**.  
✔ **Scalable** → Easy to add more features without breaking the structure.  
✔ **Maintainable** → Clear separation of concerns for UI components.  

---

### **🚀 Next Steps**
- 🔹 Integrate **authentication API (JWT, Firebase, etc.)**.
- 🔹 Implement **real-time chat with WebSockets (Socket.io)**.

---

Now, push this to GitHub! 🎉  
```sh
cd Frontend
git add folder-structure.md
git commit -m "Updated frontend structure with LeftPanel, RightPanel, and Auth"
git push origin main



/Frontend
│── /src
│   ├── /components
│   │   ├── /LeftPanel            # Handles entire left layout
│   │   │   ├── LeftLayout.jsx     # Main left panel
│   │   │   ├── ChatList.jsx       # Displays all chats
│   │   │   ├── ChatListItem.jsx   # Single chat item
│   │   │   ├── SearchBar.jsx      # Search chats
│   │   │   ├── ChatFilter.jsx     # Filter (All, Unread, More)
│   │   ├── /RightPanel           # Handles entire right layout
│   │   │   ├── RightLayout.jsx    # Main right panel
│   │   │   ├── ChatHeader.jsx     # Chat header (name, options)
│   │   │   ├── MessageList.jsx    # Shows all messages
│   │   │   ├── MessageItem.jsx    # Single message (sent/received)
│   │   │   ├── MessageInput.jsx   # Input field for messages
│   │   ├── /Auth                 # Handles authentication (Signup & Login)
│   │   │   ├── AuthForm.jsx       # Unified Signup & Login component
│   ├── App.jsx                    # Main App component
│   ├── main.jsx                   # Entry point
│── folder-structure.md
│── README.md
