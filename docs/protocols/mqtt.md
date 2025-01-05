---
sidebar_position: 1
title: MQTT Protocol Support
description: Comprehensive guide to MQTT protocol implementation in MAPS Messaging
---

# MQTT Protocol Support

## Overview

MAPS Messaging provides a robust MQTT protocol implementation supporting both MQTT 3.1.1 and MQTT 5.0 specifications. Our implementation is designed for high-performance IoT and enterprise messaging scenarios, with particular focus on reliability and scalability.

## Protocol Features

### Core MQTT Capabilities
- Full MQTT 3.1.1 and MQTT 5.0 specification support
- Clean/Persistent Sessions
- Message Persistence
- Last Will and Testament (LWT)
- Retained Messages
- Keep Alive Monitoring

### Quality of Service (QoS)
MAPS Messaging supports all MQTT QoS levels:
- QoS 0 (At most once delivery)
- QoS 1 (At least once delivery)
- QoS 2 (Exactly once delivery)

### Topic Structure
- Multi-level topic support (`a/b/c`)
- Wildcard subscriptions (`+` and `#`)
- Topic filtering and routing
- Access control at topic level

## Configuration

### Basic Setup
```yaml
mqtt:
  enabled: true
  port: 1883
  host: "0.0.0.0"
  maxMessageSize: 268435456
