# Assignment 1

- _Date Created_: 09 February 2023
- _Last Modification Date_: 09 February 2023
- _Lab URL_: https://csci5709-b00932030-a1.netlify.app/
- _Git URL_: https://git.cs.dal.ca/raycha/csci5709-individual/-/tree/main/assingment1

## Authors

- [Pranay Raycha](pr746594@dal.ca) (pr746594@dal.ca) - B00932030

## Getting Started

### Prerequisites

To have a local copy of this  assignment1  up and running on your local machine, you will first need to install the following software/libraries / plug-ins

```
Node.js
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1. Install [Node.js](https://nodejs.org/en/download/) from the following link:

2. Clone the git repository.

3. Open the terminal and run the following commands:

```
> npm install
> npm run start
```

## Deployment


1. Login to the Github repo and import the Gitlab repo.

2. Login to [Netlify](https://app.netlify.com/) and sign in with the Github account.

3. Import the `csci5709-individual-B00932030` repo.

4. Select branch `main` to deploy.

5. Select build command as `npm run build`.

6. Select publish directory as `build`.

7. Click Deploy Site.

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript RTE
- [React](https://reactjs.org/) - JavaScript Frontend Library

## Sources Used

### Movie.js

_Lines 13-17_

```
useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])
```
_Lines 20-25_

```
const handleSearch = (e) => {
        e.preventDefault()
				fetch(API_SEARCH + term)
            .then(res => res.json())
            .then(data => setMovies(data.results))
}

```

The code was adapted from [CodingDeft.com](https://www.codingdeft.com/posts/react-fetch-data-api/)

## Acknowledgments

- [Gitlab docs](https://docs.gitlab.com/ee/ci/examples/deployment/index.html#storing-api-keys) for providing _yml_ to deploy code to Heroku

- [React documentation](https://reactjs.org/docs/create-a-new-react-app.html) for guiding how to create first react application

- [The Movie DB] (https://www.themoviedb.org/) for letting use Movie Database API

- [Web Dev Simplified] (https://www.youtube.com/watch?v=SLfhMt5OUPI&t=838s) for learning basics of NavBar

- [Dev Amit jha] (https://www.youtube.com/watch?v=CN0OTAkUD9c) for displaying product catalogue.

- The Professor

- All the TAs of this course
