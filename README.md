SocioSphere is a robust API designed to power a social network web application, enabling users to seamlessly share their thoughts, engage with friends' thoughts through reactions, and cultivate a network of friends. This project is aimed at enhancing the social experience by providing a platform where users can express themselves, connect with others, and engage in meaningful conversations.

Features
User Management: Create and manage user accounts with unique usernames and email addresses.

Thought Sharing: Post your thoughts, ideas, and updates to your personal feed.

Reactions: React to thoughts with a diverse set of reactions, adding an extra layer of interaction.

Friendships: Build a list of friends by adding and managing connections to other users.


Technologies Used
Node.js: A runtime environment for executing JavaScript on the server.

Express.js: A flexible and minimal Node.js framework for building powerful APIs.

MongoDB: A scalable NoSQL database for efficient data storage.

Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.


Getting Started
Clone this repository:
git clone https://github.com/elavallee/SocioSphere.git

Install the required dependencies:
npm install
Configure environment variables, such as database connection details.

Start the server:
npm start
The server will run at http://localhost:3000.

API Endpoints
Users
GET /api/users: Retrieve a list of all users.
GET /api/users/:id: Get a single user by ID with populated thought and friend data.
POST /api/users: Create a new user.
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID.
Friends
POST /api/users/:userId/friends/:friendId: Add a new friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
Thoughts
GET /api/thoughts: Retrieve a list of all thoughts.
GET /api/thoughts/:id: Get a single thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:id: Update a thought by ID.
DELETE /api/thoughts/:id: Delete a thought by ID.
Reactions
POST /api/thoughts/:id/reactions: Create a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction from a thought.
Contributing
Contributions to SocioSphere are welcomed! If you find issues or want to add new features, please feel free to submit issues and pull requests following the guidelines in the repository.

License
SocioSphere is licensed under the MIT License.

SocioSphere is a project designed to foster online connections and facilitate meaningful interactions. Built with modern technologies, it provides a solid foundation for social network web applications. Whether you're a developer looking to contribute or a user excited to join the SocioSphere community, we welcome you to explore and engage with our platform.