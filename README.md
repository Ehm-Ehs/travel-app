# Travel Web App

## Brief Description

The Travel Web App allows users to manage a list of travel destinations they wish to visit. Users can add new destinations, mark them as visited, and remove them from the list. Each destination includes a location, country, and description. The app uses local storage to persist the data, ensuring that the list is maintained across sessions.

## Instructions on How to Use the Web App

1. **Add a Destination**:

   - Navigate to the web app.
   - Fill in the location, country, and description of the destination in the provided form.
   - Click the "Add Destination" button to add the destination to your list.

2. **View Destinations**:

   - All your added destinations will be displayed on the main page.
   - You can filter the list to show all destinations, only visited destinations, or only not visited destinations by clicking the respective buttons.

3. **Mark as Visited**:

   - Click the "Mark as Visited" button next to a destination to mark it as visited.
   - A checkmark will appear indicating that the destination has been visited.

4. **Remove a Destination**:
   - Click the "Remove" button next to a destination to delete it from your list.

## Deployment Link

The web app is deployed and can be accessed [here](https://travel-5lh3xkxt6-ehmehs-projects.vercel.app/).

## Assumptions or Additional Features Implemented

- **Local Storage**: The app uses local storage to save the list of destinations, so your data persists even after refreshing the page or closing the browser.
- **Responsive Design**: The app is designed to be responsive and works well on both desktop and mobile devices.
- **Unique Identifiers**: Each destination is assigned a unique identifier based on the timestamp when it is added, ensuring that operations like marking as visited and removal work correctly.
- **Formik and Yup**: The app uses Formik for form handling and Yup for form validation to ensure that all required fields are filled before a destination is added.

## If You Had More Time, What Would You Improve or Add?

- **Backend Integration**: Integrate a backend service to store destinations in a database, allowing users to access their data from any device.
- **User Authentication**: Add user authentication to enable users to create accounts and manage their destinations securely.
- **Enhanced UI/UX**: Improve the user interface and user experience with more interactive elements and animations.
- **Additional Filters**: Implement more filtering options, such as sorting destinations by country or alphabetically.
- **Editing Destinations**: Allow users to edit the details of a destination after it has been added.

## How to Run Locally

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/travel.git
   cd travel-destinations
   ```
