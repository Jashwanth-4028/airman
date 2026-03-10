# Skynet EPR – Electronic Progress & Performance Record System

This project is a mini Skynet EPR web application.

The application allows an admin to:
• View students and instructors  
• Track training performance  
• Create and manage Electronic Progress Records (EPRs)

The system simulates a simplified performance review system used in flight training organizations.

------------------------------------------------------------

TECH STACK

Backend
• Node.js
• Express
• TypeScript
• PostgreSQL

Frontend
• React (Vite)
• TypeScript
• Tailwind CSS

Tools
• Axios
• pg (PostgreSQL client)
• dotenv

------------------------------------------------------------

PREREQUISITES

Make sure the following are installed:

• Node.js (v18 or later)  
• npm  
• PostgreSQL  
• Git  

------------------------------------------------------------

FEATURES

LEVEL 1 (CORE REQUIREMENTS)

People Directory
• List students and instructors  
• Search people by name  
• View selected person details  

Performance Records
• View all EPRs for a selected person  
• Display:
  - Review period
  - Overall rating
  - Remarks
  - Status

Create EPR
Admin can create a new performance record including:
• period start  
• period end  
• ratings  
• remarks  

Status Workflow

draft → submitted

------------------------------------------------------------

LEVEL 2 FEATURE IMPLEMENTED

Performance Summary (Analytics)

A Performance Snapshot card shows:

• Average overall rating  
• Average technical rating  
• Average non-technical rating  
• Total review count  

This provides quick insight into performance trends.

------------------------------------------------------------

DATABASE SCHEMA

Tables used:

users  
courses  
enrollments  
epr_records  

users  
Stores students, instructors and admins.

courses  
Flight training programs.

enrollments  
Links students to courses.

epr_records  
Stores performance reviews.

------------------------------------------------------------

API ENDPOINTS

People

GET /api/people

Optional query parameters:  
role  
search

------------------------------------------------------------

EPR Records

Get all EPRs for a person

GET /api/epr?personId=ID

Get single EPR

GET /api/epr/:id

Create new EPR

POST /api/epr

Update EPR status

PATCH /api/epr/:id

------------------------------------------------------------

DATABASE SETUP

Install PostgreSQL.

Create database:

CREATE DATABASE skynet_epr;

Run the schema SQL file to create the required tables.

------------------------------------------------------------

ENVIRONMENT VARIABLES

Create a `.env` file inside the backend folder:

DB_USER=postgres  
DB_HOST=localhost  
DB_NAME=skynet_epr  
DB_PASSWORD=your_password  
DB_PORT=5432  

These variables are used for connecting the backend server to PostgreSQL.

------------------------------------------------------------

RUNNING THE BACKEND

Navigate to backend folder:

cd backend  
npm install  
npm run dev  

Backend runs on:

http://localhost:5000

------------------------------------------------------------

RUNNING THE FRONTEND

Navigate to frontend folder:

cd frontend  
npm install  
npm run dev  

Frontend runs on:

http://localhost:5173

------------------------------------------------------------

AI USAGE

AI tools such as ChatGPT were used as a development assistant during the project.

They helped with:

• clarifying requirements from the assessment document  
• generating small code snippets for reference  
• debugging TypeScript and API errors  
• improving UI layout suggestions  

All final code, architecture decisions, debugging, database setup, and integration were implemented and tested manually.

------------------------------------------------------------

FUTURE IMPROVEMENTS

• Role-based dashboard views  
• AI generated remark suggestions  
• Advanced performance analytics  
• Improved UI dashboard  

------------------------------------------------------------

AUTHOR

G. P. Jashwanth  
Computer Science & Engineering  
Sri Ramakrishna Institute of Technology
