import { Octokit } from "@octokit/core";
import fs from 'fs';
const json = JSON.parse(fs.readFileSync("./core/config.json"));
const accessToken = json.accessToken;
// GitHub API reference for help: https://docs.github.com/en/rest/reference
// You can create a personal access token here: https://github.com/settings/tokens/new?scopes=repo
// Make sure you put the access token in the config.json file, or in the function below instead.

// You can also import Octokit from a CDN, see below:

// <script type="module">
// import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
// </script>

async function publicizeOrganization() {
  const octokit = new Octokit({ auth: accessToken });

  let response = await octokit.request('PUT /orgs/{org}/public_members/{username}', {
    org: 'Organization name goes here',
    username: 'Your GitHub Username goes here'
  });

  console.log(response);
}

export default publicizeOrganization;