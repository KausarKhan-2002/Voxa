❇️ mongoose.connection.on("disconnected") =====================================(1)
- Listens for the "disconnected" event from Mongoose.
- If MongoDB disconnects unexpectedly, it logs a message.
- Automatically tries to reconnect using connectionDB().
🔹 Why is this important?
    - If your database server temporarily goes down (e.g., due to network issues), your app will 
      automatically try to reconnect instead of crashing.

_____________________________________________________Code
mongoose.connection.on("disconnected", () => {
  console.log("🔴 MongoDB disconnected! Trying to reconnect...");
  connectionDB();
});


❇️ mongoose.connection.on("error") =====================================(2)
🔹 What does this do?
    - Listens for the "error" event from Mongoose.
    - Logs any connection-related errors to the console.
🔹 Why is this important?
    - Helps you debug any issues with your database connection.
    - If MongoDB rejects the connection (e.g., wrong credentials, IP not whitelisted), this will 
    - log a clear error.

_____________________________________________________Code
mongoose.connection.on("error", (err) => {
  console.error("⚠️ MongoDB connection error:", err.message);
});


❇️ mongoose.connection.once("open") =====================================(1)
🔹 What does this do?
   - Listens for the "open" event, which means the database is successfully connected.
   - Starts the Express server only after MongoDB is connected.
🔹 Why is this important?
   - Prevents the server from starting with a broken database connection.
   - Ensures that routes and APIs don’t crash due to missing database access.

_____________________________________________________Code
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}...`));
});




Code	                                Purpose	                                    Prevents - Issues Like
mongoose.connection.on("disconnected")	Reconnects if MongoDB disconnects	        Database going offline temporarily
mongoose.connection.on("error")	Logs    connection errors	Wrong credentials,      network issues
mongoose.connection.once("open")	    Starts server only after MongoDB is ready	Server running with no database



================ mongoose.connection.readyState === 1 =================
mongoose.connection.readyState === 1 - What Does It Mean?
The mongoose.connection.readyState property tells you the current state of the MongoDB connection.

🔹 Connection States in Mongoose ______________________________
Value	State	        Meaning
0	    Disconnected	No connection to MongoDB.
1	    Connected	    Successfully connected to MongoDB.
2	    Connecting	    Connection is in progress.
3	    Disconnecting	Closing the connection.


❇️ How Mongoose Handles Reconnection ===================================
    - When You Restart Your Laptop
    - Your MongoDB Atlas cluster is still running.
    - Your server has to reconnect when you start it again.
    - When You Start Your Server (npm start)

    - The connectionDB() function runs.
    - Mongoose tries to connect using mongoose.connect(URI).
    - If your internet is stable and your IP is whitelisted, MongoDB connects automatically.
    - If MongoDB Was Previously Connected (readyState === 1)

It won’t reconnect if it's already connected.
🔹 Will It Always Work Automatically?
✔️ Yes, IF:
✔️ Your MongoDB URI is correct.
✔️ Your IP address is whitelisted in MongoDB Atlas.
✔️ Your MongoDB cluster is running (Atlas is online).
✔️ Your server correctly handles reconnection.

❌ No, IF:
❌ Your laptop gets a new IP address (public networks change IPs).
❌ MongoDB Atlas has network issues or is paused.
❌ Your server crashes due to an error in your code.