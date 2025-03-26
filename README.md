# Demo App

A simple Node.js application for testing ArgoCD and Flux image automation.

## Current Version: v1.1.0

### New Features in v1.1.0
- Added timestamp to API response
- Added hostname information
- Updated message to show version
- Improved version handling in environment variables

## Building and Pushing the Docker Image

To build and push the Docker image to GitHub Container Registry (ghcr.io):

1. Authenticate with GitHub Container Registry:

   ```console
   echo $GITHUB_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
   ```

2. Build and push the Docker image with the current version using buildx:

   ```console
   docker buildx build --platform linux/amd64 --tag ghcr.io/enslaverefusing/demo-app:v1.1.0 --push .
   ```

3. For convenience, also build and push as latest:

   ```console
   docker buildx build --platform linux/amd64 --tag ghcr.io/enslaverefusing/demo-app:latest --push .
   ```
