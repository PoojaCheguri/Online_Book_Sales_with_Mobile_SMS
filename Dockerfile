# Use Nginx as base image
FROM nginx:alpine

# Copy website files to Nginx default public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
