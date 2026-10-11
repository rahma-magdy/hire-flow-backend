# Hire Flow

**An HR and employee lifecycle management platform — currently in development.**

Hire Flow is a portfolio project focused on managing the employee journey through one connected system, from the first job application through hiring, employment, and eventual offboarding.

The goal is to build a realistic application with thoughtful API design, secure access control, and real business workflows—not just a collection of CRUD endpoints.

> **Project Status:** Early development. The current Express routes are learning-stage placeholders; they do not yet implement database operations or production authentication.

## The Problem

Recruitment and employee administration can be spread across separate tools, emails, spreadsheets, and documents. Hire Flow aims to bring the key steps into one connected workflow while ensuring that sensitive employee information is accessible only to authorized users.

## Planned Features

### Recruitment Management

- Job openings and candidate applications
- Application questions and CV/document uploads
- Application status tracking
- Interview scheduling and results
- Hiring decisions and transition from candidate to employee

### Employee Self-Service Portal

- Employee profiles and employment records
- Attendance check-in/check-out with verification safeguards
- Leave requests and HR approval workflows
- Payslips, company documents, and notifications
- Access to relevant disciplinary records

### HR Administration

- HR dashboard for jobs, candidates, employees, and requests
- Payroll and payslip management
- Document management using Cloudinary
- Resignation and offboarding workflows
- Audit history for important actions
- Search, filtering, pagination, and dashboard analytics

### Security and Reliability

- Secure authentication using JWT and HttpOnly cookies
- Role-based access control
- Request validation and centralized error handling
- Protected resources and ownership checks
- Automated API testing
- Production-ready configuration and deployment practices

### Optional AI-Assisted Recruitment

- CV information extraction and summarization
- Job-to-candidate skill matching
- Transparent explanations of matching results
- AI-assisted decision support for HR rather than autonomous hiring decisions

## Technology Stack

The project is being developed incrementally using the following technologies:

- **JavaScript (ES modules)** — application code
- **Node.js** — JavaScript runtime
- **Express.js** — HTTP API and routing
- **MongoDB** — database
- **Mongoose** — MongoDB object modeling
- **Zod** — environment and request validation
- **JWT and HttpOnly cookies** — planned authentication approach
- **Cloudinary** — planned document storage
- **React** — planned frontend
- **Vercel** — intended API deployment platform
- **Vitest and Supertest** — planned automated API testing

Features and technologies described as planned are not necessarily implemented yet.

## Current Backend Structure

```text
hire-flow/
├── api/
│   └── index.js
├── src/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── jobsRoutes.js
│   │   └── userRoutes.js
│   └── server.js
├── env.js
├── .env
├── .env.example
├── .gitignore
└── package.json
```

The backend is being organized into separate route modules to keep the API structured and maintainable.

The authentication, user, and job routes currently contain placeholder responses while the API foundation is being developed.

## Environment Configuration

To run the project locally, configure the required environment variables in your `.env` file.


The current environment schema recognizes the following variables:

| Variable | Purpose | Current Behavior |
|---|---|---|
| `NODE_ENV` | Node.js environment | Defaults to `development` |
| `APP_STAGE` | Application stage | Defaults to `dev` |
| `PORT` | Local server port | Defaults to `7000` |
| `DATABASE_URL` | MongoDB connection string | Required |
| `JWT_SECRET` | Secret used for JWT signing | Required; minimum 32 characters |
| `JWT_EXPIRES_IN` | JWT expiration setting | Defaults to `7d` |
| `BCRYPT_ROUNDS` | Password-hashing work factor | Required; between 10 and 20 |

Example configuration for local development:

```dotenv
NODE_ENV=development
APP_STAGE=dev
PORT=7000
DATABASE_URL=mongodb://127.0.0.1:27017/hireflow
JWT_SECRET=replace-with-your-own-private-secret-of-at-least-32-characters
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
```

Replace the example secret with a private value before running the application. Never reuse an example secret in production.

For deployment, configure environment variables through your hosting provider rather than committing secrets to the repository.

## Development Roadmap

1. Complete Express application setup and router mounting.
2. Establish MongoDB connectivity and Mongoose models.
3. Implement authentication, validation, and authorization.
4. Build recruitment and interview workflows.
5. Add employee profiles, attendance, leave, and payroll.
6. Implement document handling, notifications, audit history, and offboarding.
7. Build the React frontend.
8. Add automated tests and deployment configuration.
9. Evaluate optional AI-assisted recruitment features.

## Learning Goals

Hire Flow is being developed alongside an API design course, with the aim of applying backend engineering concepts to a real-world-inspired project.

Key learning areas include:

- REST API design and routing
- Express middleware and request handling
- MongoDB data modeling with Mongoose
- Input validation and error handling
- Authentication and role-based authorization
- Business workflows and state transitions
- Automated testing and debugging
- Deployment and production configuration

The implementation will prioritize understanding the reasoning behind each design decision rather than copying code without understanding it.

## Important Notes

- This project is a work in progress and is not ready for production use.
- Current placeholder routes do not represent completed business functionality.
- Attendance verification, payroll calculations, access control, and document privacy require careful implementation and testing before real-world use.
- AI-assisted recruitment, if implemented, will support human review rather than replace human hiring decisions.

