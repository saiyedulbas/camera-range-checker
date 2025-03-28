📸 Camera Range Checker (TypeScript)  
This project implements a camera range checker in TypeScript, allowing users to input camera specifications and check if a set of cameras can cover a desired range of distances and light levels.

🚀 Features
User Input: Allows interactive input for camera distance and light level ranges.

Camera Validation: Checks if the selected cameras can cover the required ranges.

TypeScript: Written in TypeScript with async/await functionality for a smooth user experience.

Node.js Integration: Uses Node.js for reading user input via the readline module.

📦 Setup Instructions
Clone the Repository

git clone https://github.com/your-username/camera-range-checker.git
cd camera-range-checker
Install Dependencies Install the necessary Node.js type definitions and other dependencies:

npm install
npm install --save-dev @types/node
Compile TypeScript Compile the TypeScript code to JavaScript:

tsc camera.ts
Run the Application Run the compiled JavaScript using Node.js:

node camera.js
Interact with the Application Follow the prompts in the terminal to enter:

Desired range of distances and light levels

The number of cameras and their respective distance and light level ranges

The program will output whether the cameras can cover the specified ranges.

🌐 Example Execution:
Enter the desired distance range (e.g., 1,10): 1,10
Enter the desired light level range (e.g., 1,5): 1,5
How many cameras do you want to input? 2
Enter the distance range for camera 1 (e.g., 1,5): 1,5
Enter the light level range for camera 1 (e.g., 1,3): 1,3
Enter the distance range for camera 2 (e.g., 1,5): 6,10
Enter the light level range for camera 2 (e.g., 1,3): 3,5

The cameras can cover the desired range.  
✅ Best Practices Followed
TypeScript: Strongly typed code with explicit types for better maintainability.

Async/Await: Proper handling of asynchronous operations using async/await.

Modular Approach: Code is organized in a modular way to make it easy to extend or modify.

🤝 Contributing
Feel free to fork the repository and submit a pull request. Contributions are always welcome!

📝 License
This project is licensed under the MIT License.
