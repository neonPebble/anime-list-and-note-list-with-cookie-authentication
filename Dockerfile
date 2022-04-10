FROM node:lts

ENV PORT 3000

# Create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy source files, install deps using pnpm
COPY . /usr/src/app/
RUN npm i

# Build app
RUN npm run build
EXPOSE 3000

# Run the app
CMD "npm" "start"