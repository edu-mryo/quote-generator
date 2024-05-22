# Quote Genertor

This App is a super simple app, which provides you with a quote and its author name.
I made this app to learn docker.

## Instruction

1. Clone the repository
2. Run `docker build -t quote-generator .`. This builds the image
3. Run `docker run -d -p 3000:3000 --name -quote-gen-container quote-generator`. This starts the container
4. Open `http://localhost:3000`
5. To stop the container , use `docker stop quote-gen-container`
