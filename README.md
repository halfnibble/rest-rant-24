# rest-rant-24

> Note: This is just a demo/test

rest-rant-24 is a database-driven web application that allows users to explore, create, and share their experiences with various restaurants. With rest-rant-24, users can add restaurant places to the database and comment on (or rant about) their experiences, making it easier for others to discover new dining spots or avoid potential disappointments.

## Features

-   **Explore Restaurants:** Users can browse through a list of restaurant places added by the community.
-   **Share Experiences:** Users have the ability to post detailed rants or comments about their restaurant experiences.
-   **Add New Places:** If a restaurant is not listed, users can easily add it to the database.
-   **Edit and Update:** Restaurant owners or users can update the details of a place to ensure information is current.
-   **Responsive Design:** Accessible from any device, making it easy to rant or rave on the go.

## API Endpoints

Below is a table of the available API endpoints within rest-rant-24:

| Method | Path                       | Purpose                                          |
| ------ | -------------------------- | ------------------------------------------------ |
| GET    | `/`                        | Home page                                        |
| GET    | `/places`                  | Places index page                                |
| POST   | `/places`                  | Create new place                                 |
| GET    | `/places/new`              | Form page for creating a new place               |
| GET    | `/places/:id`              | Details about a particular place                 |
| PUT    | `/places/:id`              | Update a particular place                        |
| GET    | `/places/:id/edit`         | Form page for editing an existing place          |
| DELETE | `/places/:id`              | Delete a particular place                        |
| POST   | `/places/:id/rant`         | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET    | `*`                        | 404 page (matches any route not defined above)   |

## Getting Started

To get started with rest-rant-24, clone the repository to your local machine and install the required dependencies. Follow the setup instructions in the documentation to configure your environment and start adding your favorite restaurants and rants!

## Contributions

Contributions are welcome! If you would like to contribute to rest-rant-24, please fork the repository, make your changes, and submit a pull request. We appreciate your efforts to improve the app and expand the community.

## License

rest-rant-24 is released under the MIT License.
