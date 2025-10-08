# Base image
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install --production

# Copy mã nguồn
COPY . .

# Expose port
EXPOSE 3000

# Command để start app
CMD ["npm", "start"]
