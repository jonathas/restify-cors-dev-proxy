# Restify CORS Dev Proxy

## Introduction

Have you ever had to work with an API that blocks origins which are not registered to be able to fetch content from it?

You try to access it from mobile apps and everything works fine, but then you also need to access it from a webapp, and there the famous CORS error shows up!
You try to use the famous CORS extension from Chrome to see if you can solve it, but still, nothing works as the origin is blocked in the API itself.

Because of this, your local development experience is broken, as you'll either have to mock the required endpoints or upload the project to a temporary address which is an allowed origin in the API.

Or... you can use this script during development to make your life easier!

## Usage

1 - This will install the required packages and start the proxy server on port 3001:

```bash
npm start
```

2 - You can find an example on how to use the proxy in the index.html file. You just need to implement something similar in your app.

## Limitations

Currently only works for GET requests. You can extend it to cover your use case and/or open a PR.
