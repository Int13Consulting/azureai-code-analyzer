# AzureAI Code Analyzer for Visual Studio Code

This is a fork of ChatGPT code analyizer (https://github.com/MilindPurswani/chatgpt-code-analyzer#) updated to use the Azure AI APIs instead of ChatGPT.  The main benifit is it can now use private instances of Azure AI and operate entirely inside an enterprise firewall if desired.

The AzureAI Code Analyzer is a Visual Studio Code extension that uses the OpenAI Azure API to analyze your code and detect potential security vulnerabilities. The extension works with various file types and supports both single file and whole project analysis.


## Features

- Analyze a single file for security vulnerabilities
- Analyze an entire project for security vulnerabilities

## Installation

Install the AzureAI Code Analyzer extension from the Visual Studio Code Marketplace.
After installation, you will be prompted to enter your OpenAI API key. You can also set your API key by adding it to your settings.json file:

```json
{
  "azureai-code-analyzer.apiKey": "<your_api_key_here>",
  "azureai-code-analyzer.url": "<your azure instance url>",
  "azureai-code-analyzer.deployment": "<your azure ai deployment name"
}
```

## Usage

### Analyze a single file
1. Open a file you want to analyze in Visual Studio Code.
2. Right-click within the editor and select "Analyze File for Security Vulnerabilities" from the context menu or press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) and type "Analyze File for Security Vulnerabilities" to execute the command.



### Analyze an entire project

1. In the Visual Studio Code Explorer, right-click the root folder of your project.
2. Select "Analyze Project for Security Vulnerabilities" from the context menu or press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) and type "Analyze Project for Security Vulnerabilities" to execute the command.


## Requirements

Visual Studio Code 1.60 or newer
AzureAI instance and API key

##  License
This project is licensed under the MIT License.



