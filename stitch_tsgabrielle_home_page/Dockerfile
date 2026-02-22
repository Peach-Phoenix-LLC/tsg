# Use a lightweight Node.js image
FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the script
COPY verify-social-links.ts ./

# Run the script
CMD ["npm", "start"]