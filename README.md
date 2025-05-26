# SMART-MOVERS
"Smart Movers" is a web platform connecting users with reliable logistics providers for home relocation, office shifting, vehicle transport, and warehousing—offering a transparent and unified solution to urban moving challenges.

CHAPTER 1: INTRODUCTION
1.1 Background
"Smart Movers" is a web platform connecting users with reliable logistics providers.

It covers services like home relocation, office shifting, vehicle transport, and warehousing.

Addresses the challenge of unreliable service providers and lack of transparent platforms

1.2 Objective of the Project
Develop a full-stack web application to:

Browse logistics companies by category.

Book services with input validation.

Provide a personalized user dashboard for booking history.

Implement a secure contact and feedback system.

Use Node.js and MySQL for backend processing and data management.

Include additional features: login, signup, view details.

1.3 Scope of the Project
Acts as a prototype for:

Logistics companies to digitize their operations.

Customers to simplify booking and inquiry processes.

Future extensions like mobile app integration and tracking APIs.

1.4 Tools and Technologies Used
HTML, CSS, JS – Frontend user interface.

Node.js – Backend server-side logic.

MySQL – Data storage and retrieval.

1.5 Overview of Web Pages
index.html – Homepage with categories and popular packages.

companies.html – Displays logistics companies and services.

book_now.html – Booking form for service details.

confirm-booking.html – Confirmation page after booking.

contact.html – Contact form with backend integration.

dashboard.html – User dashboard for bookings.

login.html / signup.html – Authentication with validation.

view-details.html – Detailed company view.

CHAPTER 2: SYSTEM DESIGN AND ARCHITECTURE
2.1 System Architecture Overview
Based on a client-server architecture:

Frontend: HTML/CSS/JS for UI and responsiveness.

Backend: Node.js (Express.js) for routing and logic.

Database: MySQL for storing bookings, contacts, and user data.

2.2 Functional Flow
User visits index.html.

Navigates to companies.html to browse providers.

Selects a service → redirected to book_now.html.

Fills and submits booking form (POST request).

Gets confirmation on confirm-booking.html.

Logs in via login.html to access dashboard.html.

Can send messages through contact.html.

2.3 Database Schema
Table 1: bookings

id, name, email, phone, pickup, drop off, service, details

Table 2: contacts

id, name, email, message, created_at

CHAPTER 3: IMPLEMENTATION
3.1 Overall Implementation
UI developed using HTML, CSS, and JavaScript.

Pages designed for responsiveness and ease of use.

3.1.1 Key HTML Pages
index.html – Highlights major services (relocation, shifting, transport, warehousing).

book_now.html – Form with dropdowns and validation.

companies.html – Lists verified providers with ratings.

confirm-booking.html – Confirms booking submission.

dashboard.html – Shows user bookings in card format.

contact.html – Sends user messages to support.

login.html / signup.html – JS-based authentication.

3.1.2 Styling and Interactivity
Internal CSS for consistent design:

Gradient backgrounds, responsive layout, button effects.

JavaScript for:

Form validation and interactivity.
