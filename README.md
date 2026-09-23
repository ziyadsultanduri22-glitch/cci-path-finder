# CCI Path Finder

Please depend on the this prompt develope for me website?
Haramaya University CCI Interest-Based Department Selection and Career Guidance System

You are an experienced full-stack software developer, UI/UX designer, database designer, and software engineering mentor.

I am an Information Technology student at Haramaya University, Ethiopia, working on a practical software-development project during my internship.

I want to build a professional, modern, responsive web application called:

CCI Interest-Based Department Selection and Career Guidance System

The system is intended for students in the College of Computing and Informatics (CCI) at Haramaya University who need guidance when choosing an appropriate department based on their interests, willingness to learn, preferred activities, and career interests.

1. IMPORTANT PROJECT PRINCIPLE

The system MUST NOT tell students that they need strong technical skills before choosing a department.

The system should clearly communicate that:

Interest is important.

Willingness and eagerness to learn are important.

Students can develop technical skills through education, practice, projects, self-learning, and experience.

A student should not reject a department simply because they currently have limited technical skills.

The assessment provides guidance, not a final or compulsory decision.

Students should consider their own interests, goals, and willingness to learn.

Use supportive language such as:

"Your current skill level does not define your future. Choose based on your interests, willingness to learn, and career goals."

2. TARGET USERS

Primary users:

CCI students

Prospective CCI students

Students who are unsure which department fits their interests

Students comparing CCI departments

Possible administrator:

Admin who manages department information and guidance content.

3. CCI DEPARTMENTS

The system should cover these departments:

Information Technology (IT)

Software Engineering (SE)

Computer Science (CS)

Information Systems (IS)

Information Science (ISc)

Create a dedicated department profile for each department.

Each department should contain:

Department name

Short introduction

What the department focuses on

Major study areas

Typical subjects/topics

Technologies and tools students may encounter

Skills students can develop

Types of projects students may work on

Possible career/job areas

Relationship with modern technology

Example career paths

"Who may enjoy this field?" section

"What can you learn?" section

"Important note about current skills"

Related departments for comparison

Do not present one department as universally better than another.

4. MAIN WEBSITE PAGES

Create the following pages:

Home

Include:

Professional hero section

Haramaya University / CCI context

Short explanation of the system

"Explore Departments" button

"Take Assessment" button

"Compare Departments" button

Benefits of the system

How the system works

Department preview cards

Student guidance section

Footer

Hero message example:

"Discover the CCI Department That Matches Your Interests and Career Goals."

Supporting text:

"Explore CCI departments, understand what each field offers, and receive guidance based on your interests, willingness to learn, and career goals."

5. DEPARTMENTS PAGE

Create:

/departments

Display all five departments as attractive cards.

Each card should include:

Department name

Short description

Key focus

Example career areas

"View Details" button

Add:

Search

Filter

Department comparison option

6. DEPARTMENT DETAILS PAGE

Create dynamic route:

/departments/:id

For example:

/departments/it

/departments/software-engineering

/departments/computer-science

/departments/information-systems

/departments/information-science

The page should display complete information about the selected department.

Use sections such as:

Overview

What You Will Study

Areas of Interest

Technologies

Skills You Can Develop

Possible Projects

Career Opportunities

Who May Enjoy This Field?

What You Can Learn During Your Study

Department Comparison

Related Career Paths

Include a button:

"Compare With Other Departments"

and:

"Take Interest Assessment"

7. INTEREST-BASED ASSESSMENT

Create:

/assessment

This is one of the most important parts of the system.

The assessment should NOT primarily test technical knowledge.

Instead, questions should focus on:

Interests

Preferred activities

Problem-solving preferences

Creativity

Programming interest

Networking interest

Data interest

Business/organization interest

Information organization

Communication

Technology curiosity

System thinking

Research interest

Willingness to learn

Career interests

Example questions:

Question 1

Which activity sounds most interesting to you?

A. Building websites or software
B. Understanding how computers and networks communicate
C. Solving complex computational problems
D. Connecting technology with business processes
E. Organizing, managing, and finding information

Question 2

What kind of project would you enjoy?

A. Developing a mobile or web application
B. Configuring and managing a network
C. Designing an algorithm to solve a difficult problem
D. Developing a system for an organization
E. Creating an organized information or knowledge system

Question 3

When you face a new technology, what do you prefer?

A. Try building something with it
B. Understand how it works
C. Explore the underlying concepts
D. Think about how organizations could use it
E. Learn how information can be organized and accessed

Question 4

How do you feel about learning something you currently don't know?

A. I enjoy learning new things.
B. I am willing to practice until I understand it.
C. I enjoy challenging myself.
D. I like learning when I can see practical benefits.
E. I am curious and willing to explore.

Include approximately 15–25 questions.

8. ASSESSMENT SCORING SYSTEM

Create a transparent interest-based scoring system.

Each answer should contribute points to one or more departments.

Example:

IT:

Technology application

Networking

Practical computing

Systems

Technical support

Software Engineering:

Programming

Software development

Application building

Software design

Problem solving

Computer Science:

Algorithms

Computational thinking

Programming

Mathematics/logic

Research

Information Systems:

Business + technology

Organizational systems

Databases

Business analysis

Information management

Information Science:

Information organization

Knowledge management

Information retrieval

Digital information

Research

After the assessment, calculate the user's results.

9. RESULTS PAGE

Create:

/results

Show:

Your Interest Profile

Display the departments according to the student's assessment results.

However, DO NOT describe the result as:

"This is the department you must choose."

Instead say:

"Based on your answers, these departments appear to align with the interests you selected."

Show:

Department

Interest alignment

Explanation

Relevant interests

Possible career areas

What the student can explore next

Example:

Information Technology

Your answers show strong interest in practical technology, networking, systems, and applying technology to solve real-world problems.

Also show:

"Your result is guidance, not a final decision. Explore the department details and consider your personal goals before making your choice."

Include:

View Department

Compare Departments

Retake Assessment

10. DEPARTMENT COMPARISON

Create:

/compare

Allow students to compare two or more departments.

Comparison categories:

CategoryITSECSISIScMain FocusProgrammingNetworkingAlgorithmsBusinessInformation ManagementDatabasesSoftware DevelopmentResearchExample Careers

Do not create a "best department" ranking.

The purpose is to show differences and similarities.

11. CAREER GUIDANCE

Create:

/careers

Show career areas related to each department.

Examples:

IT

Network Administrator

IT Support Specialist

Systems Administrator

Cloud Support

IT Consultant

Cybersecurity-related roles

Software Engineering

Software Developer

Web Developer

Mobile Developer

Full-Stack Developer

Software Engineer

QA/Test Engineer

Computer Science

Software Developer

Algorithm Engineer

Data-related roles

AI/ML-related roles

Researcher

Systems Developer

Information Systems

Business Analyst

Systems Analyst

Database-related roles

IT Project roles

Enterprise Systems roles

Information Science

Information Specialist

Knowledge Management roles

Information Analyst

Digital Information roles

Information/Research services

Explain that actual career opportunities depend on education, skills, projects, experience, certifications, and the job market.

12. ABOUT PAGE

Create:

/about

Explain:

Haramaya University context

CCI context

Purpose of the project

Problem being addressed

How the system works

Importance of interest-based guidance

Educational purpose

Do not claim that the system is an official Haramaya University admissions decision system unless explicitly authorized.

13. NAVIGATION

Create a clean responsive navbar:

Home

Departments

Assessment

Compare

Careers

About

Login

Sign Up

On mobile:

Hamburger menu

Responsive navigation

14. LOGIN AND SIGNUP

Create:

/login

/signup

Students should be able to create an account.

Possible information:

Full name

Email

Password

Student ID (optional if appropriate)

Preferred language

After login:

/dashboard

Dashboard should show:

Welcome message

Assessment status

Previous assessment results

Saved departments

Career interests

Compare history

Profile

15. DATABASE DESIGN

Design a database that can support:

Users

id

name

email

password/authentication reference

role

createdAt

Departments

id

name

abbreviation

overview

studyAreas

technologies

skills

careers

projects

Questions

id

question

options

category

Answers

id

questionId

option

departmentScores

Assessment Results

id

userId

scores

completedAt

Careers

id

title

department

description

skills

Use a database structure that is easy to maintain and expand.

16. TECHNOLOGY STACK

Use a modern beginner-friendly stack.

Frontend:

React.js

Vite

JavaScript

HTML

CSS

Routing:

React Router

Backend:

Node.js

Express.js

Database:

Prefer Firebase if it makes the project easier.

Alternative:

MySQL

Authentication:

Firebase Authentication or another secure authentication solution.

Deployment:

Frontend: Vercel / Netlify

Backend: Render or equivalent

Database: Firebase / MySQL

Use environment variables for secrets.

NEVER hard-code passwords, API keys, database passwords, or private credentials.

17. UI/UX DESIGN

The website should look like a real university technology project, not a simple tutorial project.

Design requirements:

Professional

Clean

Modern

Responsive

Accessible

Easy for students to understand

Good spacing

Clear typography

Attractive department cards

Consistent buttons

Good mobile design

Use a professional technology/education visual style.

Include:

Cards

Icons

Progress bars

Assessment progress indicator

Result visualization

Comparison table

Search

Filters

Responsive layouts

Avoid excessive animations.

Animations should be subtle and professional.

18. ACCESSIBILITY

Ensure:

Good color contrast

Keyboard navigation

Clear labels

Alt text for images

Accessible buttons

Proper heading hierarchy

Responsive text

Error messages that users can understand

19. LANGUAGE SUPPORT

Prepare the application architecture so that Afaan Oromoo and English can be added later.

Initially build the interface in English.

Keep text/content separate from components where practical so translation can be added later.

20. ADMIN DASHBOARD

Create:

/admin

Only users with admin privileges should access it.

Admin features:

Add department

Edit department

Delete department

Add assessment question

Edit question

Delete question

Manage career information

View basic assessment statistics

Do not expose admin functionality to ordinary students.

21. PROJECT STRUCTURE

Use a clean structure similar to:

src/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── DepartmentCard.jsx
│ ├── QuestionCard.jsx
│ ├── ProgressBar.jsx
│ └── ResultCard.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Departments.jsx
│ ├── DepartmentDetails.jsx
│ ├── Assessment.jsx
│ ├── Results.jsx
│ ├── Compare.jsx
│ ├── Careers.jsx
│ ├── About.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Dashboard.jsx
│ └── Admin.jsx
│
├── data/
│ ├── departments.js
│ ├── questions.js
│ └── careers.js
│
├── services/
│ ├── auth.js
│ ├── database.js
│ └── assessment.js
│
├── App.jsx
├── main.jsx
└── index.css

If the project requires backend:

server/
├── routes/
├── controllers/
├── models/
├── middleware/
├── config/
└── server.js

22. DEVELOPMENT RULES

I am a university student and I need to understand the project.

Therefore:

Do not generate the entire project blindly in one step.

Build the project incrementally.

Explain each important step.

Tell me exactly which file to create or modify.

Give complete copy-paste-ready code.

Do not assume that I already created files.

Keep existing working code unless there is a reason to change it.

Before moving to the next major feature, check whether the current feature works.

If there is an error, solve the error before continuing.

Do not change folder names unnecessarily.

Do not create duplicate components.

Use consistent naming.

Keep the code beginner-friendly.

Explain why important code is needed.

Tell me the exact terminal command to run.

Tell me the expected result.

Tell me how to test each feature.

23. TERMINAL-FIRST DEVELOPMENT

Whenever possible, provide commands that I can copy and paste.

For example:

npm install
npm run dev

If creating folders/files is necessary, provide exact commands.

Always clearly identify the project directory.

Example:

cd "C:\Users\Ziyad\Desktop\Guidance CCI\department-guidance"
npm run dev

Do not assume my current terminal location.

24. ERROR HANDLING

When I provide an error:

Read the exact error.

Identify the likely cause.

Explain the cause simply.

Give the exact fix.

Tell me which file to open.

Tell me what code to replace.

Give the corrected code.

Give the command to restart the application.

Tell me how to verify the fix.

Do not give five unrelated possible solutions unless necessary.

25. SECURITY

Follow basic web security practices.

Never expose:

Passwords

API keys

Firebase private credentials

Database credentials

Secret tokens

Validate user input.

Protect admin routes.

Use secure authentication.

Do not store plaintext passwords.

26. PROJECT DOCUMENTATION

Also prepare documentation suitable for a university software-development project.

Include:

Project title

Background

Problem statement

Objectives

Scope

Target users

Functional requirements

Non-functional requirements

System architecture

Use case description

Database design

UI design

Assessment algorithm

Testing

Deployment

Limitations

Future improvements

The documentation should accurately describe what the system actually implements.

Do not invent features that have not been implemented.

27. TESTING

Create a testing plan covering:

Functional testing

Navigation

Department pages

Assessment

Scoring

Results

Comparison

Login

Signup

Dashboard

UI testing

Desktop

Tablet

Mobile

Validation testing

Empty fields

Invalid email

Incorrect login

Incomplete assessment

Security testing

Unauthorized admin access

Authentication

Input validation

28. FINAL QUALITY REQUIREMENT

The finished system should feel like a real practical university software-development project.

It should demonstrate:

Frontend development

Backend development

Database design

Authentication

Routing

CRUD operations

Interest-based assessment

Algorithmic scoring

Data visualization

Responsive UI

Software testing

Deployment

Documentation

The system should be understandable, maintainable, and expandable.

29. VERY IMPORTANT — STARTING PROCEDURE

Do NOT immediately generate the whole application.

First:

STEP 1

Inspect the existing project structure.

STEP 2

Tell me what already exists.

STEP 3

Identify what needs to be created or modified.

STEP 4

Propose the implementation plan in phases.

Use this order:

Phase 1 — Project setup

Phase 2 — UI and navigation

Phase 3 — Department data

Phase 4 — Department details

Phase 5 — Assessment

Phase 6 — Scoring algorithm

Phase 7 — Results

Phase 8 — Department comparison

Phase 9 — Authentication

Phase 10 — Database

Phase 11 — Student dashboard

Phase 12 — Admin dashboard

Phase 13 — Testing

Phase 14 — Deployment

Phase 15 — Documentation

Only start Phase 1 after explaining the plan.

30. DEVELOPMENT RESPONSE FORMAT

For every implementation step, respond using this format:

STEP

What we are doing.

WHY

Why this feature is necessary.

FILE

Exact file path.

CODE

Complete code that can be copied and pasted.

TERMINAL

Exact command to run.

TEST

How I can verify that it works.

EXPECTED RESULT

What I should see.

NEXT

What we will build after this works.

Do not skip important steps.

FINAL INSTRUCTION

Act as my senior developer and practical software-development mentor.

Help me build this system step by step.

Do not overwhelm me with everything at once.

Start by inspecting my current project and then give me the implementation plan.

The goal is to produce a professional, functional, academically appropriate CCI Interest-Based Department Selection and Career Guidance System for Haramaya University students, while ensuring that the system guides students based on interests and willingness to learn rather than assuming they already have strong technical skills.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e7c27aaf-4331-5076-ba86-249b2c0cc604).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
