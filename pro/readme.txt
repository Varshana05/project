# Apparel Disposal Platform

## Description

The Apparel Disposal Platform is a web application that allows users to submit information about their unused or worn-out apparel for proper disposal, donation, or recycling. The platform categorizes the apparel based on user input and provides appropriate recommendations.

## Features

- **Submit Apparel Details**: Users can submit details such as type of apparel, condition, and disposal preference.
- **Data Storage**: All submissions are stored in a MongoDB database.
- **Simple UI**: A user-friendly interface built with React.js for easy submissions.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: React.js
- **Other**: Axios for HTTP requests, CORS for handling cross-origin requests

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **MongoDB** database. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.

### Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    - Create a `.env` file in the `backend` directory.
    - Add the following variables:

      ```env
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      ```

      Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. **Start the Backend Server**:

    - For development with auto-reloading:

      ```bash
      npm run dev
      ```

    - For production:

      ```bash
      npm start
      ```

    The backend server will run on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the Frontend Server**:

    ```bash
    npm start
    ```

    The frontend app will run on `http://localhost:3000`.

### Running the Project Locally

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/apparel-disposal-platform.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd apparel-disposal-platform
    ```

3. **Setup Backend and Frontend** as per the instructions above.

## How to Use

1. **Access the Frontend**: Open your browser and navigate to `http://localhost:3000`.
2. **Submit Apparel Details**:
    - Select the type of apparel from the dropdown.
    - Choose the condition of the apparel (Worn-out or Unused).
    - Select your disposal preference (Recycle, Donate, Dispose).
    - Click the **Submit** button.
3. **View Confirmation**: After submission, a confirmation message with the submission ID will appear.

## GitHub Repository

The complete source code is available on GitHub:

[GitHub Repository Link](https://github.com/yourusername/apparel-disposal-platform)

## Demo Video

[Demo Video Link](https://www.youtube.com/your-demo-video)

*Please replace the placeholders (`yourusername`, `your-demo-video`) with your actual GitHub username and demo video link.*

## License

This project is licensed under the MIT License.

