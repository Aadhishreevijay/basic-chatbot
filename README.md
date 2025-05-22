# Chatbot

This project demonstrates a basic chatbot integrated with an external weather API, utilizing the OpenAI API. It provides an example of how to set up a Node.js server to handle interactions with the OpenAI API and retrieve weather information from OpenWeatherMap.

## Features

- **Chatbot Integration**: Use OpenAI's API to handle natural language queries.
- **Weather Information**: Fetch and display current weather data using the OpenWeatherMap API.
- **Environment Variables**: Securely manage API keys using a `.env` file.

## Getting Started

### Prerequisites

Ensure the following software is installed:

- **Node.js**: Install Node.js from the [official Node.js website](https://nodejs.org/). Check the installation with:
  ```bash
  $ node --version
  ```
- **npm**: Comes with Node.js. Verify with:
  ```bash
  $ npm --version
  ```
- **nvm** (Node Version Manager): Manage Node.js versions. Install from [nvm repository](https://github.com/nvm-sh/nvm).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aadhishreevijay/basic-chatbot-OPENAI-API-and-with-external-API.git
   cd basic-chatbot-OPENAI-API-and-with-external-API
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Yarn** (optional but recommended for managing dependencies):
   ```bash
   npm install -g yarn
   ```

### Configuration

1. **API Key Setup**:
   Create a `.env` file in the root directory and add your OpenAI and OpenWeatherMap API keys:
   ```env
   OPENAI_API_KEY=sk-############
   WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

### Running the Project

1. **Start the Backend**:
   Navigate to the backend directory and start the server:
   ```bash
   npm start
   ```

2. **Start the Frontend**:
   Navigate to the frontend directory (if separate) and run:
   ```bash
   npm start
   ```

   This will start the development server and open the application at [http://localhost:3000](http://localhost:3000).

### Project Structure

- **[Basic Chatbot API](https://github.com/Aadhishreevijay/basic-chatbot-OPENAI-API-and-with-external-API/tree/main/basic-chatbot)**: Contains the code for the standalone chatbot API. You can test this API using Postman.
- **[External Weather API](https://github.com/Aadhishreevijay/basic-chatbot-OPENAI-API-and-with-external-API/tree/main/external-weather%20API)**: Contains the code and configuration for integrating with the OpenWeatherMap API.

### Usage

- **Chatbot**: Interact with the chatbot through the provided frontend interface. The chatbot leverages the OpenAI API to process and respond to queries.
- **Weather Information**: Query for weather updates, which are fetched from the OpenWeatherMap API.

### Debugging and Development Tips

- **Network Monitoring**: Use browser developer tools (Google Chrome DevTools or Firefox Developer Tools) to monitor network requests and debug issues.
- **Backend Status**: Ensure that the backend server is running before starting the frontend application to avoid issues with API calls.

### Troubleshooting

- **Common Issues**:
  - **Backend Not Running**: Ensure the backend server is started and accessible. Check for any errors in the backend logs.
  - **API Key Errors**: Verify that API keys are correctly set in the `.env` file and have the necessary permissions.
  - **Dependency Issues**: If you encounter problems with dependencies, try deleting `node_modules` and reinstalling with `npm install` or `yarn install`.

### Additional Resources

- **Node.js Documentation**: [Node.js Documentation](https://nodejs.org/en/docs/)
- **OpenAI API Documentation**: [OpenAI API Documentation](https://platform.openai.com/docs)
- **OpenWeatherMap API Documentation**: [OpenWeatherMap API Documentation](https://openweathermap.org/api)
