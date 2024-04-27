# authCrudAppProduct
# Auth CRUD App with Angular and JSON Server

This project is a simple authentication system with multi-step form and CRUD operations implemented using Angular framework. It also utilizes JSON Server as a mock backend for storing product data.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)
- JSON Server installed globally (`npm install -g json-server`)

### Installation

1. Clone the repository

```bash
git clone https://github.com/mobasherreza10/authCrudAppProduct.git
Navigate into the project directory
bash
Copy code
cd auth-crud-app
Install dependencies
bash
Copy code
npm install
Start JSON Server to serve as mock backend
bash
Copy code
json-server --watch db.json
This modification clarifies that JSON Server will run on port 3000 by default when starting it.
Like this:   Resources
  http://localhost:3000/products
  Home
  http://localhost:3000
Start the Angular development server
bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200/ to view the app
Features
Authentication: Login page with email and password fields. User authentication implemented using Angular services.
Secure Storage: User authentication data is securely saved in the browser using localStorage.
Dashboard Page: After successful login, users are redirected to the dashboard page.
Product Management: CRUD operations for products including add, edit, and delete without page reload.
Multi-step Form: Adding and editing products with a multi-step form including fields for basic information, images upload with drag and drop functionality, and dynamic fields for adding multiple tags.
Built With
Angular - Frontend framework
JSON Server - Mock backend for product data storage
Angular Material - UI components library
ngx-dropzone - For drag and drop functionality
Other dependencies as required
