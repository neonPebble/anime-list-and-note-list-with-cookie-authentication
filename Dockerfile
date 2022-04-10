FROM node:lts

ENV PORT 5050

# Create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy source files, install deps using pnpm
COPY . /usr/src/app/
RUN npm i

# Build app
EXPOSE 5050

# Run the app
CMD "npm" "start"