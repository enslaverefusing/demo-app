# Demo App

A simple Node.js application for testing ArgoCD and Flux image automation.

## Building and Pushing the Docker Image

To build and push the Docker image to GitHub Container Registry (ghcr.io):

1. Authenticate with GitHub Container Registry:
   ```bash
   echo $GITHUB_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
   ```

2. Build the Docker image:
   ```bash
   docker build -t ghcr.io/enslaverefusing/demo-app:v1.0.0 .
   ```

3. Push the Docker image:
   ```bash
   docker push ghcr.io/enslaverefusing/demo-app:v1.0.0
   ```

4. To update the image version, build and push with a new tag:
   ```bash
   docker build -t ghcr.io/enslaverefusing/demo-app:v1.0.1 .
   docker push ghcr.io/enslaverefusing/demo-app:v1.0.1
   ```
