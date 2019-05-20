# Teamwork Projects API Client

Simple API client for Teamwork Projects based on the published [API docs](https://developer.teamwork.com/projects/introduction/welcome-to-the-teamwork-projects-api).

This project is in no way affiliated with the company Teamwork. It only serves as a NodeJS API client.


## Installation

```
npm install --save teamwork-projects-api-client
```


## Usage

```
const teamwork = new Teamwork({
  urlPrefix: 'my-company',
  region: 'eu',
  apiKey: 'superSecretApiKey',
});


teamwork.Projects.create({
  name: 'My Project',
  descriptio: 'My super awesome project',
  companyId: '999',
});
```
