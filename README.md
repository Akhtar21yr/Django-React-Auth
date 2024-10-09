
# Django-React-Auth

**Django-React-Auth** is a full-stack web application that combines Django as the backend and React for the frontend. This project provides a robust user authentication system with features for user registration, login, and profile management through RESTful APIs.

## Features

- User registration and login
- JWT-based authentication
- Profile management
- Responsive design

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm
- PostgreSQL

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Akhtar21yr/Django-React-Auth.git
   cd Django-React-Auth/backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up your database in PostgreSQL and update your .env file with the following variables:

   ```env
   DB_NAME=<your_database_name>
   DB_USER=<your_database_user>
   DB_PASS=<your_database_password>
   DB_HOST=localhost
   DB_PORT=5432
   ```

5. Run migrations:

   ```bash
   python manage.py migrate
   ```

6. Start the development server:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Builds the application for production.
- **lint**: Runs ESLint to check for code quality.
- **preview**: Previews the production build.

## Dependencies

### Frontend

- React
- React Router
- Axios
- JWT Decode
- Vite

### Backend

- Django
- Django REST Framework
- Simple JWT
- CORS Headers
- PostgreSQL

## Contributing

Contributions are welcome! Please create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
