# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy the application files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
