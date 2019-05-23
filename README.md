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


##### list

```javascript
const response = await teamwork.Projects.list(qs);
```

`qs` can be and of the query string parameters found in the [API documentation](https://developer.teamwork.com/projects/projects/retrieve-all-projects).

`response` will be the `projects` array key documented in the [API response](https://developer.teamwork.com/projects/projects/retrieve-all-projects).


##### fetch

```javascript
const response = await teamwork.Projects.fetch(id, options);
```

`options` can be any of the path or query string parameters found in the [API documentation](https://developer.teamwork.com/projects/projects/retrieve-a-single-project).

`response` will be the `project` key of the documented [API response](https://developer.teamwork.com/projects/projects/retrieve-a-single-project).


##### listInCompany

```javascript
const response = await teamwork.Projects.listInCompany(companyId, qs);
```

`companyId` must be the ID of a company in your Teamwork account.

`qs` can be any of the query string parameters found in the [API documentation](https://developer.teamwork.com/projects/projects/retrieve-projects-assigned-to-a-specific-company).

`response` will be the `projects` array key documented in the [API response](https://developer.teamwork.com/projects/projects/retrieve-projects-assigned-to-a-specific-company).


##### listStarred

```javascript
const response = await teamwork.Projects.listStarred();
```

`response` will be the `projects` array key documented in the [API response](https://developer.teamwork.com/projects/projects/retrieve-projects-assigned-to-a-specific-company).


##### getRates

```javascript
const response = await teamwork.Projects.getRates(id, qs);
```

`id` must ba a valid project ID.

`qs` can be any of the query string parameters found in the [API documentation](https://developer.teamwork.com/projects/projects/get-project-rates).

`response` will be the `rates` key documented in the [API response](https://developer.teamwork.com/projects/projects/get-project-rates).


##### getStats

```javascript
const responspe = await teamwork.Projects.getStats(id, qs);
```

`id` must ba a valid project ID.

`qs` can be any of the query string parameters found in the [API documentation](https://developer.teamwork.com/projects/projects/get-project-stats).

`response` will be the `rates` key documented in the [API response](https://developer.teamwork.com/projects/projects/get-project-stats).


##### create

```javascript
const response = await teamwork.Projects.create(options);
```

`options` can be any of the keys from the `project` request object found in the [API documentation](https://developer.teamwork.com/projects/projects/create-project).

`response` will be an object with an `id` key for the created project ID.


##### setRates

```javascript
const response = await teamwork.Projects.setRates(id, rates);
```

`id` must be a valid project ID.

`rates` can be and of the keys from the `rates` request object found in the [API documentation](https://developer.teamwork.com/projects/projects/set-project-rates).

`response` will be an empty object on success.


##### update

```javascript
const response = await teamwork.Projects.update(id, options);
```

`options` can be any of the keys from the `project` request object found in the [API documentation](https://developer.teamwork.com/projects/projects/update-project).

`response` will be an empty object on success.


##### toggleFeatures

```javascript
const response = await teamwork.Projects.toggleFeatures(id, options);
```

`id` must be a valid project ID.

`options` can contain any of the keys from the `project` request object found in the [API documentation](https://developer.teamwork.com/projects/projects/enable-and-disable-projects-features).

`response` will be an empty object on success.


##### star

```javascript
const response = await teamwork.Projects.star(id);
```

`id` must be a valid project ID.

`response` will be an empty object on success.


##### unstar

```javascript
const response = await teamwork.Projects.unstar(id);
```

`id` must be a valid project ID.

`response` will be an empty object on success.


##### delete

```javascript
const response = await teamwork.Projects.delete(id);
```

`id` must be a valid project ID.

`response` will be an empty object on success.


#### Task Lists


#### Invoices
