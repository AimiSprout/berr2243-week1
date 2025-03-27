# berr2243-25

# Exercise 1: week01

## Description
Objective fot this exercise was to set up the core development tools, to learn basic Git workflows, and to create a simple NodeJS script that connects to MongoDB.

## Installations Steps

### 1. Install Development Tools
- *Vscode* = Download the Vscode that appropriate with operating system by visiting https://code.visualstudio.com/ 
- *NodeJS and npm* = Download the LTS version from https://nodejs.org/en 
    - Verify intallation:
    sh
    node -v
    npm -v
    
- *MongoDB* = Follow the official intallation guide from https://www.mongodb.com/docs/manual/administration/install-community/ that appropriate with operating system 
    - Start MongoDB service
    sh
    mongod --dbpath /path/to/data/directory
    
- *Git* = Download from https://git-scm.com/
    - Configure by setting up the user information with the following commands:
    sh
    git config --global user.name "Your Name"
    git config --global user.email "your@email.com"
    
- *MongoDB Compass (Optional)* = Download from https://www.mongodb.com/products/tools/compass


### 2. Project Setup 
1. Github Account Setup
    - Create an account at [github.com.](https://education.github.com/pack)
2. Create new Repository
3. Clone Repository
    sh
    git clone <your-github-repository-link>
    cd <repository-name>
    
4. NodeJS Project Setup
    sh
    npm init -y
    npm install mongodb
    

### 3. Usage
1. Run the script
    sh
    node index.js
    
2. Expected console output
    
    Connected to MongoDB!
    Document inserted!
    Query result: {_id: new ObjectId('...'), name: 'your name', age: 21}
    
3. Verify in MongoDB Compass    
    - Connect to MongoDB instance
    - Navigate to 'testDB.users' collection to view the inserted document

### 4. Git Workflow
1. Initialize & connect to GitHub
    sh
    git init
    git branch -M main
    git remote add origin <YOUR-GITHUB-URL.git>
    

2. First commit (README with install docs)
    sh
    git add README.md
    git commit -m "Initial commit: Setup documentation"
    git push -u origin main
    

3. Create feature branch
    sh
    git checkout -b feature/setup
    

4. Add the NodeJS files + .gitignore
    sh
    git add index.js package.json .gitignore
    git commit -m "Add NodeJS script and MongoDB connection"
    git push -u origin feature/setup
    

## Troubleshooting
- *MongoDB Connection Issues* Ensure the MongoDB service is running.
- *Node.js Module Errors* Confirm that npm install was executed to install dependencies
- *Git Repository Synchronization Problems* Verify the remote repository URL is correct 

## Project Structure

project-root/
├── .gitignore         
├── README.md          
├── index.js           
├── package-lock.json      
└── package.json/ 


## Lisence 
This project is for educational purposes only