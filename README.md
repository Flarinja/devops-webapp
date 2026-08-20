# DevOps WebApp

A simple web application demonstrating an end-to-end CI/CD and ChatOps workflow using GitHub Actions, Slack, and Netlify.

## 🚀 Project Overview

This project demonstrates a complete DevOps workflow where code changes pushed to GitHub automatically trigger a CI pipeline.

The pipeline performs validation and sends notifications to Slack based on whether the CI process succeeds or fails. The application is deployed using Netlify.

## 🏗️ Architecture

```text
Developer
    ↓
GitHub Repository
    ↓
GitHub Actions CI Pipeline
    ↓
 ┌───────────────┐
 │               │
Success       Failure
 │               │
 ↓               ↓
Slack          Slack
Notification   Notification
    ↓
Netlify Deployment
```

## 🛠️ Technologies Used

- **GitHub** – Source code management
- **GitHub Actions** – Continuous Integration
- **Slack** – ChatOps notifications
- **Netlify** – Application deployment
- **HTML, CSS and JavaScript** – Web application

## ⚙️ CI/CD Workflow

The following workflow is implemented:

1. Developer makes changes to the project.
2. Changes are pushed to the GitHub repository.
3. GitHub Actions automatically starts the CI pipeline.
4. The pipeline validates the project.
5. If the pipeline succeeds, a success notification is sent to Slack.
6. If the pipeline fails, a failure notification is sent to Slack.
7. The application is deployed through Netlify.

## 🔔 Slack ChatOps

The project integrates Slack notifications using the `#ci-cd-alerts` channel.

The Slack integration provides notifications for:

- ✅ Successful CI pipeline execution
- ❌ Failed CI pipeline execution

This allows the development team to monitor the status of the CI pipeline in real time.

## 🌐 Deployment

The application is deployed using Netlify.

The deployed application displays:

- DevOps WebApp title
- CI/CD automation description
- GitHub Actions, Slack ChatOps and Netlify integration
- Current build information

## 🧪 Testing

The CI workflow was tested using both successful and intentionally failed pipeline runs.

### Successful Pipeline

A normal project update was pushed to GitHub and the GitHub Actions workflow completed successfully.

A success notification was then sent to the Slack channel.

### Failed Pipeline

An intentional failure was introduced into the CI workflow to test failure handling.

GitHub Actions correctly detected the failure and sent a failure notification to Slack.

The intentional failure was then removed and the pipeline was restored to a successful state.

## 📂 Project Structure

```text
devops-webapp/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── index.html
├── README.md
└── other project files
```

## 📊 DevOps Workflow Demonstration

```text
Code Change
     ↓
Git Push
     ↓
GitHub Actions
     ↓
CI Validation
     ↓
┌─────────────┬─────────────┐
│                           │
SUCCESS                     FAILURE
│                           │
↓                           ↓
Slack                       Slack
Alert                       Alert
│
↓
Netlify Deployment
```

## 👨‍💻 Author

**Pranshu Bharti**

DevOps WebApp demonstrating Continuous Integration, ChatOps, and automated deployment.