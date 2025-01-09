# Specify base image
FROM node:18-alpine

# Specify working directory
WORKDIR /gfsdt43gdfhfghfg

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 8080
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
