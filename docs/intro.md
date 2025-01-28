---
sidebar_position: 1
---

# Getting Started with MAPS Messaging

Welcome to MAPS Messaging - the protocol and transport agnostic messaging middleware software that revolutionizes IoT by unleashing in-transit intelligence.

## Quick Start

1. **Choose Your Edition**
   - [Community Edition](editions/community) - Free, core functionality
   - [Enterprise Edition](editions/enterprise) - Full features with support
   - [Premium ML Edition](editions/premium) - Advanced ML capabilities

2. **System Requirements**
   - JDK 13 or higher
   - Supported platforms: Linux, Windows, macOS
   - Docker support available

3. **Installation**

```bash
# Using Docker
docker pull mapsmessaging/maps-messaging-server

# Or download the latest release
wget https://github.com/Maps-Messaging/maps_messaging/releases/latest/download/maps-messaging-server.jar

```

# Basic Configuration

```yaml
server:
  port: 1883
  protocols:
    - mqtt
    - amqp
```

# First Connection

```java
// MQTT Example
MqttClient client = new MqttClient("tcp://localhost:1883", "clientId");
client.connect();
```

# Key Features

   - Protocol Agnostic Support (MQTT, AMQP, MQTT-SN, CoAP, STOMP, Other)
   - High Performance Message Routing
   - Built-in Security (SSL/TLS, SASL)
   - AI/ML Integration Ready


# Next Steps

   - [Explore Community Edition](editions/community) - Free, core functionality
   - [View Enterprise Edition](editions/enterprise) - Full features with support
   - [Discover Premium ML Capabilities](editions/premium) - Advanced ML capabilities
   - Github Repository


# Support

   - [Community Forum](editions/community) - Free, core functionality
   - [Github Issues](editions/enterprise) - Full features with support
   - [Enterprise Support (Available with Enterprise Edition)](editions/premium) - Advanced ML capabilities



