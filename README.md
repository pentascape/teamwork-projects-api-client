# Teamwork Projects API Client

Simple API client for Teamwork Projects based on the published [API docs](https://developer.teamwork.com/projects/introduction/welcome-to-the-teamwork-projects-api).

This project is in no way affiliated with the company Teamwork. It only serves as a NodeJS API client.


## Installation

```bash
npm install --save teamwork-projects-api-client
```


## Usage


### General

```javascript
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


### Endpoints


* [Projects](#projects)
* [Task Lists](#task-lists)
* [Invoices](#invoices)


#### Projects

##### fetch

```javascript
const response = await teamwork.Projects.fetch(options);
```

`options` can be any of the path or query string parameters found in the [API documentation](https://developer.teamwork.com/projects/projects/retrieve-a-single-project).

`response` will be the `project` key of the documented [API response](https://developer.teamwork.com/projects/projects/retrieve-a-single-project).


##### create

```javascript
const response = await teamwork.Projects.create(options);
```

`options` can be any of the keys from the `project` request object found in the [API documentation](https://developer.teamwork.com/projects/projects/create-project).

`response` will be an object with an `id` key for the created project ID.


##### update

```javascript
const response = await teamwork.Projects.update(options);
```

`options` can be any of the keys from the `project` request object found in the [API documentation](https://developer.teamwork.com/projects/projects/update-project).

`response` will be an empty object on success.


#### Task Lists


#### Invoices
