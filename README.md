# Shipment CRUD application

This project is a react application that shows a list of shipments in a table. you can **Read**, **Update** and **Delete** items in this application.


## Tech stack
- [React](https://react.dev/) 
- [Redux toolkit](https://redux-toolkit.js.org/) + Thunk middleware
- [Axios](https://axios-http.com/)
- CSS template : [Material Dashboard 2 React Template](https://www.creative-tim.com/product/material-dashboard-react)

## Features
- Load shipments data from a [mock api](https://my.api.mockaroo.com/shipments.json?key=5e0b62d0)
- **Note:** The API might get overloaded. In this case, there is a fallback action to take data from a local JSON file.
- Display data in a generated table.
- Ability to **delete** each item (by clicking on a Button)
- Open a Modal to visualize the **details** of each item (by clicking on a Button)
- Ability to **update** information of each item (inside of Details Modal)


