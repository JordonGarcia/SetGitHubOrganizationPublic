const json = JSON.parse(fs.readFileSync('./src/config.json'))
import { Octokit } from '@octokit/core'
const accessToken = json.accessToken
import fs from 'fs'
// GitHub API reference for help: https://docs.github.com/en/rest/reference
// You can create a personal access token here: https://github.com/settings/tokens/new?scopes=repo
// Make sure you put the access token in the config.json file, or in the function below instead.

// You can also import Octokit from a CDN, see below:

// <script type="module">
// import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
// </script>

const publicizeOrganization = async () => {
  const octokit = new Octokit({ auth: accessToken });

  let response = await octokit.request('PUT /orgs/YOUR_ORGANIZATION/public_members/YOUR_USERNAME', {
  });

  console.log(response);
}

export default publicizeOrganization