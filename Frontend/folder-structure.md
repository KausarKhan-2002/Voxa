/src  # Root source folder for the project
│── Components  # Contains all reusable UI components
│   ├── AuthForm  # Handles authentication (Signup & Login)
│   │   ├── AuthForm.jsx  # Unified Signup & Login component
│   │  
│   ├── PanelContainer  # Manages the main panel layout
│   │   ├── LeftPanel  # Handles the entire left section (Sidebar & Chat List)
│   │   │   ├── LeftLayout.jsx  # Main wrapper for the left panel layout
│   │   │  
│   │   │   ├── Sidebar  # Sidebar section (navigation & options)
│   │   │   │   ├── Sidebar.jsx  # Sidebar component
│   │   │  
│   │   │   ├── ChatListLayout  # Displays chat lists and search functionalities
│   │   │   │   ├── ChatFilter.jsx  # Filter (ALL, Unread, More)
│   │   │   │   ├── ChatList.jsx  # Main chat list container
│   │   │   │   ├── ChatListItem.jsx  # Single chat item (user/conversation)
│   │   │   │   ├── ChatListLayout.jsx  # Wrapper for chat list layout
│   │   │   │   ├── SearchBar.jsx  # Search chats
│   │   │   │   ├── TopChatList.jsx  # Pinned/top chat list
│   │   │  
│   │   ├── RightPanel  # Handles the entire right section (Chat interface)
│   │   │   ├── RightLayout.jsx  # Main wrapper for the right panel layout
│   │   │   ├── ChatHeader.jsx  # Chat header (name, options)
│   │   │   ├── MessageList.jsx  # Displays all messages
│   │   │   ├── MessageItem.jsx  # Single message (sent/received)
│   │   │   ├── MessageInput.jsx  # Input field for messages
│  
│── utils  # Utility components & helper functions
│   ├── IconButton.jsx  # Custom button component for icons
│   ├── loader.jsx  # Loader/spinner component
│   ├── sidebarIcon.js  # Sidebar icon configuration
│  
│── App.jsx  # Main App component (entry point for UI)
│── main.jsx  # Renders the App component to the DOM
│── folder-structure.md  # Documentation for folder structure
│── README.md  # Project documentation & setup instructions
