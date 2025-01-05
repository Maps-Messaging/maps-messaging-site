---
sidebar_position: 1
---

# Installation Guide

## Prerequisites

Before installing MAPS Messaging, ensure you have:
- JDK 13 or higher
- Docker environment (for containerized deployment)
- Minimum system requirements met

## Quick Start with Docker

```bash
# Pull the latest Docker image
docker pull mapsmessaging/maps-messaging

# Run the container
docker run -d \
  -p 1883:1883 \
  -p 8883:8883 \
  --name maps-messaging \
  mapsmessaging/maps-messaging
