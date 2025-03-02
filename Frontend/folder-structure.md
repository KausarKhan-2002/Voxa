# Frontend Folder Structure

## 📂 components/
### 🟢 LeftLayout (Sidebar)
- `ChatSidebar.jsx` → Wrapper for the left sidebar
- `ChatHeader.jsx` → "Chats" heading + 3-dots options
- `ChatSearch.jsx` → Search input field
- `ChatFilter.jsx` → Filter (All, Unread, More)
- `ChatList.jsx` → Renders the chat list
- `ChatListItem.jsx` → Each chat item in the list

### 🟢 RightLayout (Chat Window)
- `ChatWindow.jsx` → Main chat container
- `ChatHeader.jsx` → Chat title, status, options
- `MessageList.jsx` → Displays messages
- `MessageItem.jsx` → Individual message bubble
- `MessageInput.jsx` → Input field to type messages

### 🟢 Common Components
- `EmojiPicker.jsx` → Emoji selection
- `AttachmentButton.jsx` → File/image upload
- `TypingIndicator.jsx` → "User is typing..." animation
