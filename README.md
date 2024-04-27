# authCrudAppProduct
# Auth CRUD App with Angular and JSON Server

This project is a simple authentication system with multi-step form and CRUD operations implemented using Angular framework. It also utilizes JSON Server as a mock backend for storing product data.

## Getting Started

To get a local copy up and running follow these simple steps.

## Usage Guide

### Signing Up and Logging In

#### Sign Up:
1. Navigate to the application URL (e.g., [http://localhost:4200/](http://localhost:4200/)).
2. Click on the "Sign Up" link.
3. Fill in the required information, including email and password.
4. Click on the "Sign Up" button.

#### Logging In:
1. After signing up, you'll be redirected to the login page automatically.
2. Enter your email and password.
3. Click on the "Login" button.

### Dashboard Page

#### Dashboard:
- Upon successful login, you'll be redirected to the dashboard page.
- Here, you'll see a list of products (if any exist).
- From the dashboard, you can navigate to different sections like "Add Product", "Edit Product", or "Delete Product".

### Product Management

#### Adding a Product:
1. From the dashboard, click on the "Add Product" button.
2. You'll be directed to a multi-step form.
3. Fill in the required fields, including basic information and images.
4. Use drag and drop functionality to upload images.
5. Add any additional details such as tags.
6. Proceed through the form steps until completion.
7. Finally, click on the "Add Product" button to save the product.

#### Editing a Product:
1. From the dashboard, locate the product you wish to edit.
2. Click on the "Edit" button/icon associated with that product.
3. You'll be directed to the same multi-step form as for adding a product, but with pre-filled information.
4. Make necessary changes to the product details.
5. Proceed through the form steps until completion.
6. Finally, click on the "Update" button to save the changes.

#### Deleting a Product:
1. From the dashboard, locate the product you want to delete.
2. Click on the "Delete" button/icon associated with that product.
3. Confirm the deletion when prompted.

### Conclusion
By following these steps, you'll be able to effectively use the authentication system with multi-step form and CRUD operations implemented using Angular. Remember to explore other features and functionalities provided by the application as needed.

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






