# Base image
FROM node:14-alpine

# Working directory inside the container
WORKDIR /app

# Copy Package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the app
EXPOSE 3000

# Run the app
CMD ["npm", "start"]