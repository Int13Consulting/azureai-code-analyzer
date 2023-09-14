

const axios = require('axios');
const vscode = require('vscode');

const callAzureAI = async (text) => {
  const config = vscode.workspace.getConfiguration('azureai-code-analyzer');
  const azureAIKey = config.get('apiKey');
  const azureUrl = config.get('url');
  const azureDeployment = config.get('deployment')


  if (!azureAIKey) {
    vscode.window.showErrorMessage('Please set the Azure API key in your settings.');
    return;
  }
  if (!azureUrl) {
    vscode.window.showErrorMessage('Please set the Azure URL in your settings.');
    return;
  }
  if (!azureDeployment) {
    vscode.window.showErrorMessage('Please set the Azure deployment name in your settings.');
    return;
  }

  // Prepend line numbers to the input text
  const numberedText = text.split('\n').map((line, index) => `${index + 1}: ${line}`).join('\n');
  const response = await axios.post(
    azureUrl + "/openai/deployments/" + azureDeployment + "/chat/completions?api-version=2023-07-01-preview",
    {
      "messages": [{
        "role": "system",
        "content": "You are an AI code analyzer that checks for security vulnerabilities in a given code snippet. Provide a detailed analysis of the potential issues found in the code, including the line number in the format 'Line X: ISSUE_DESCRIPTION'."
      },{
        "role": "user",
        "content": "Analyze this code for security vulnerabilities:\n\n" + numberedText + "\""
      }
    ]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'api-key': `${azureAIKey}`,
      },
    }
  );
  console.log('API response data:', response.data);
  const result = response.data.choices[0].message.content.trim();

  return result === '' ? 'No security vulnerabilities detected.' : result;
};

module.exports = callAzureAI;
