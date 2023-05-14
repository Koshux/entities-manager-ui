FROM node:14.17.0-alpine

# Set the cwd (current working directory) inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the cwd
COPY package*.json ./

# Install deps
RUN npm Install

# Copy the entire project to the cwd
COPY . .

# Build the Vue app
RUN npm run build

# Set the command to run the Vue app
CMD ["npm", "run", "serve"]
