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
```
### SSL/TLS Configuration
```yaml
mqtt:
  ssl:
    enabled: true
    port: 8883
    keyStore: "/path/to/keystore.jks"
    keyStorePassword: "\${KEYSTORE_PASSWORD}"
    trustStore: "/path/to/truststore.jks"
    trustStorePassword: "\${TRUSTSTORE_PASSWORD}"
```
### Authentication Configuration
```yaml
mqtt:
  auth:
    required: true
    method: "username_password"
    allowAnonymous: false
```
## Client Examples
### Java Client Example
```java
import org.eclipse.paho.client.mqttv3.*;

public class MQTTExample {
    public static void main(String[] args) {
        String broker = "tcp://localhost:1883";
        String clientId = "JavaClient";
        
        try {
            MqttClient client = new MqttClient(broker, clientId);
            MqttConnectOptions options = new MqttConnectOptions();
            options.setCleanSession(true);
            
            client.connect(options);
            System.out.println("Connected to MAPS Messaging broker");
            
            // Publish message
            String topic = "test/topic";
            String content = "Hello, MAPS!";
            MqttMessage message = new MqttMessage(content.getBytes());
            message.setQos(1);
            client.publish(topic, message);
            
            client.disconnect();
        } catch (MqttException e) {
            e.printStackTrace();
        }
    }
}
```
### Python Client Example
```python
import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe("test/topic")

def on_message(client, userdata, msg):
    print(f"Received message: {msg.payload.decode()}")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("localhost", 1883, 60)
client.loop_forever()
```

## Performance Considerations
### Optimizing MQTT Performance
- Connection Pooling

- Reuse connections when possible
- Implement proper connection management
- Monitor connection health
### Message Size

- Default maximum message size: 256MB
- Configurable per deployment
- Consider compression for large payloads
### QoS Selection

- QoS 0 for highest throughput
- QoS 1 for balanced reliability
- QoS 2 for critical messages
  
## Monitoring
### Monitor these key metrics for optimal performance:

- Connection count
- Message throughput
- Subscription count
- Retained message count
- Queue depth
## Security Best Practices
### Authentication

- Always enable authentication in production
- Use strong passwords
- Implement certificate-based authentication for enhanced security
### Authorization

- Implement topic-level access control
- Use ACLs to restrict access
- Regular audit of access patterns
### Encryption

- Enable SSL/TLS in production
- Use strong cipher suites
- Regular certificate rotation
- Troubleshooting
- Common Issues
### Connection Problems

- Verify network connectivity
- Check port availability
- Validate credentials
- Review SSL/TLS configuration
### Message Delivery Issues

- Check QoS levels
- Verify topic permissions
- Monitor client connectivity
- Review message size limits


