# Docker Learning Journey

Welcome to my Docker learning notes! Over the past two days, I’ve explored the fundamentals of Docker, working through various concepts, commands, and best practices. This document summarizes the key topics and practical insights gained during this journey.

---

## **Table of Contents**

1. [What is Docker?](#what-is-docker)
2. [Key Docker Concepts](#key-docker-concepts)
   - Images
   - Containers
   - Dockerfile
3. [Docker Commands](#docker-commands)
4. [Port Binding](#port-binding)
5. [Private Registries](#private-registries)
6. [Image Versioning](#image-versioning)
7. [Practical Examples](#practical-examples)

---

### **What is Docker?**

Docker is a platform that enables developers to:
- Package applications into **lightweight containers**.
- Ensure the application works consistently across environments (development, testing, production).

Containers include everything needed to run the application: code, dependencies, and configuration.

---

### **Key Docker Concepts**

#### **1. Docker Images**
- An image is like a blueprint for a container.
- It contains the application’s code and environment.
- Images are created using a **Dockerfile**.

#### **2. Docker Containers**
- A container is a running instance of a Docker image.
- Containers are isolated but share the same operating system kernel.

#### **3. Dockerfile**
- A text file with instructions to build a Docker image.
- Example Dockerfile:
  ```dockerfile
  FROM node:23-alpine

  COPY package.json /app/
  COPY src /app/

  WORKDIR /app

  RUN npm install

  CMD ["node", "server.js"]
  ```

---

### **Docker Commands**

| **Command**              | **Description**                                          |
|--------------------------|----------------------------------------------------------|
| `docker build`           | Builds a Docker image from a Dockerfile.                 |
| `docker run`             | Runs a container from an image.                          |
| `docker ps`              | Lists running containers.                                |
| `docker images`          | Lists all Docker images on your system.                  |
| `docker logs`            | Displays logs of a container.                            |
| `docker exec`            | Runs a command inside a running container.               |
| `docker stop`            | Stops a running container.                               |
| `docker rm`              | Removes a stopped container.                             |
| `docker rmi`             | Removes an image from the system.                        |

---

### **Port Binding**

- Port binding connects a container’s internal port to a port on your host machine.
- Example:
  ```bash
  docker run -p 8080:80 my-app
  ```
  This binds **port 80** in the container to **port 8080** on your host machine.

---

### **Private Registries**

A private registry allows you to securely store and share Docker images. Examples include:

1. **Docker Hub**: Public and private repositories.
2. **Amazon ECR**: AWS’s private container registry.
3. **Azure ACR**: Microsoft Azure’s managed registry service.
4. **Google GCR**: Google Cloud’s container registry.

---

### **Image Versioning**

- Docker images use **tags** for versioning (e.g., `my-app:1.0`, `my-app:latest`).
- Best practices for versioning:
  - Use descriptive tags for clarity.
  - Avoid relying solely on `latest` in production.

---

### **Practical Examples**

#### **1. Simple Node.js App**
- Dockerfile:
  ```dockerfile
  FROM node:23-alpine

  COPY package.json /app/
  COPY src /app/

  WORKDIR /app

  RUN npm install

  CMD ["node", "server.js"]
  ```
- Build and run the container:
  ```bash
  docker build -t my-node-app .
  docker run -p 3000:3000 my-node-app
  ```

#### **2. Viewing Container Logs**
- Check logs for a running container:
  ```bash
  docker logs <container-id>
  ```

---

### **Reflection**

Learning Docker has been an exciting journey! It’s fascinating to see how containers simplify application deployment and ensure consistency across environments.

For more detailed notes, refer to my [Docker notes](https://stripe-recorder-7b3.notion.site/Docker-159fe69a336280ad843ed14640d4fbc7?pvs=74).

