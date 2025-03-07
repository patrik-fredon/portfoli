# Contributing to Professional Portfolio

Thank you for considering contributing to the Professional Portfolio project! This document outlines the process and guidelines for contributing to this repository.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Code Contributions](#code-contributions)
- [Pull Request Process](#pull-request-process)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors are expected to follow. Please read it before participating.

## Getting Started

Before you begin:

1. Ensure you have a [GitHub account](https://github.com/signup)
2. [Fork the repository](https://github.com/yourusername/professional-portfolio/fork) on GitHub
3. Clone your fork locally
   ```bash
   git clone https://github.com/your-username/professional-portfolio.git
   cd professional-portfolio
   ```
4. Create a branch for your work
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

Bugs are tracked as GitHub issues. Create an issue and provide the following information:

1. Use a clear and descriptive title
2. Describe the exact steps to reproduce the problem
3. Provide specific examples if possible (e.g., code snippets)
4. Describe the behavior you observed and what you expected to see
5. Include screenshots or animated GIFs if possible
6. Note the environment where you encountered the issue (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are also tracked as GitHub issues. When creating an enhancement suggestion:

1. Use a clear and descriptive title
2. Describe the current behavior and explain what would be preferred
3. Provide specific examples to demonstrate the enhancement
4. Explain why this enhancement would be useful to most users

### Code Contributions

1. Follow the [style guidelines](#style-guidelines)
2. Update documentation as needed
3. Add tests for new functionality
4. Ensure all tests pass
5. Make sure your code lints without errors

## Pull Request Process

1. Update the README.md or relevant documentation with details of changes if appropriate
2. The PR should work on main branch and pass all automated tests
3. Include screenshots or code examples if possible
4. Follow the pull request template (if provided)
5. You may merge the Pull Request once you have the sign-off of at least one other developer, or if you do not have permission to do that, you may request the reviewer to merge it for you

## Development Setup

1. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Run tests
   ```bash
   npm test
   # or
   yarn test
   ```

## Style Guidelines

### Code Style

This project uses ESLint and TypeScript to enforce a consistent code style. Follow these guidelines:

1. Use 2 spaces for indentation
2. Use camelCase for variables and functions
3. Use PascalCase for React components and type/interface names
4. Use TypeScript type annotations where appropriate
5. Follow React best practices and hooks rules

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - ✨ `:sparkles:` when adding a new feature
  - 🐛 `:bug:` when fixing a bug
  - 📚 `:books:` when adding or updating documentation
  - 🧹 `:broom:` when refactoring code
  - 🧪 `:test_tube:` when adding tests
  - 🎨 `:art:` when improving UI/UX
  - ⚡️ `:zap:` when improving performance

## Community

- Feel free to join the discussion in the [Issues](https://github.com/yourusername/professional-portfolio/issues) section
- Remember to follow the [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions

---

Thank you for contributing to the Professional Portfolio project! Your efforts help make this project better for everyone. 