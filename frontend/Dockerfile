FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
RUN npm install

COPY . .
# Expose the default Vite port
EXPOSE 5173

# Command to start the Vite development server
CMD ["npm", "run", "dev"]
