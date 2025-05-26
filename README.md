# SMART-MOVERS
"Smart Movers" is a web platform connecting users with reliable logistics providers for home relocation, office shifting, vehicle transport, and warehousing—offering a transparent and unified solution to urban moving challenges.
CHAPTER 1: INTRODUCTION
1.1 Background
Relocation and logistics services have become an essential part of urban life, especially with the rise in population movement across cities and states. However, users often struggle to find reliable service providers and transparent booking platforms. "Smart Movers" addresses this challenge by providing a unified web platform that connects customers to logistics companies offering home relocation, office shifting, vehicle transportation, and warehousing.
1.2 Objective of the Project
The primary objective of this project is to develop a full-stack web application that enables:
•	Easy browsing of logistics companies by category.
•	Seamless service booking with user input validation.
•	A personalized user dashboard for tracking current and past bookings.
•	A secure contact and feedback system.
•	Backend processing using Node.js and MySQL to store and manage data.
•	Additional features including login, signup, and view details for enhanced interactivity.
1.3 Scope of the Project
The project serves as a prototype for:
•	Logistics and moving companies to digitize their services.
•	Customers to simplify the booking and inquiry process.
•	Future extension into mobile platforms or integration with tracking APIs.
1.4 Tools and Technologies Used
Tool/Technology	Purpose
HTML, CSS, JS	Frontend user interface
Node.js	Backend server-side logic
MySQL	Data storage and retrieval
1.5 Overview of Web Pages
•	index.html: Homepage with categories and popular packages.
•	companies.html: Shows logistics companies based on services offered.
•	book_now.html: Booking form to enter pickup, drop-off, and service details.
•	confirm-booking.html: Confirmation screen after successful submission.
•	contact.html: Contact form with backend integration.
•	dashboard.html: User dashboard showing current and past bookings.
•	login.html / signup.html: Authentication system (with validation).
•	view-details.html: Detailed view for selected companies.
 
CHAPTER 2: SYSTEM DESIGN AND ARCHITECTURE
2.1 System Architecture Overview
The Smart Movers system is designed using a client-server architecture, where the frontend handles user interactions and the backend manages logic and database operations.
Frontend is built with:
•	HTML/CSS/JavaScript for page layout and responsiveness.
Backend is powered by:
•	Node.js with Express.js to handle routing and endpoints.
•	MySQL to store bookings, contacts, and user information securely.
2.2 Functional Flow
1.	User visits homepage (index.html).
2.	Navigates to companies.html to browse logistics providers.
3.	Selects a service → redirected to book_now.html.
4.	Fills the booking form → submitted to backend via POST request.
5.	Receives confirmation via confirm-booking.html.
6.	Logs in via login.html, views bookings in dashboard.html.
7.	Can contact support via contact.html.
2.3 Database Schema
Two main tables were created using MySQL:
 
Table 1: bookings
Column	Type	Description
id	INT (PK)	Auto-incremented ID
name	VARCHAR(100)	User's full name
email	VARCHAR(100)	User's email address
phone	VARCHAR(20)	Contact number
pickup	VARCHAR(255)	Pickup location
drop off	VARCHAR(255)	Drop-off location
service	VARCHAR(100)	Type of service selected
details	TEXT	Additional instructions
Table 2: contacts   
Column	Type	Description
id	INT (PK)	Auto-incremented ID
name	VARCHAR(100)	Sender's name
email	VARCHAR(100)	Sender's email
message	TEXT	User message content
created at	TIMESTAMP	Auto-set message timestamp

 
CHAPTER 3: IMPLEMENTATION
3.1 Overall Implementation
The user interface is built using HTML, CSS, and JavaScript. Each page is designed for clarity, responsiveness, and ease of use.
3.1.1 Key HTML Pages
•	index.html: Serves as the homepage and highlights major service categories such as home relocation, office shifting, vehicle transport, and warehousing.
•	book_now.html: Contains a detailed form with input validation and dropdown options for service selection.
•	companies.html: Lists verified logistics providers along with their ratings and view details buttons.
•	confirm-booking.html: A confirmation page shown after successful booking submission.
•	dashboard.html: Displays current and past bookings for the logged-in user in a card layout.
•	contact.html: Allows users to send messages directly to the support team.
•	login.html / signup.html: User authentication pages integrated java script.
3.1.2 Styling and Interactivity
All pages are styled using internal CSS for a consistent design with:
•	Gradient backgrounds
•	Responsive layout
•	Button hover effects
Interactivity is handled with JavaScript:
•	Form validation
