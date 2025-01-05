

# MQTT Protocol Support

## Overview

MAPS Messaging provides comprehensive support for MQTT protocol, implementing the full MQTT 3.1.1 and MQTT 5.0 specifications.

## Features

### Quality of Service (QoS)
- QoS 0: At most once delivery
- QoS 1: At least once delivery
- QoS 2: Exactly once delivery

### Message Persistence
- Session persistence
- Retained messages
- Last Will and Testament (LWT)

### Security
- TLS/SSL encryption
- Username/password authentication
- Certificate-based authentication

## Configuration

```yaml
mqtt:
  port: 1883
  ssl:
    enabled: true
    port: 8883
  authentication:
    required: true
    method: "username_password"
