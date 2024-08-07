# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]

# Expose port 3000 to the outside world
EXPOSE 3000
