
# Uber Clone

## 🚀 Project Overview
This is a full-stack Uber Clone application that allows users to book rides, track drivers, and manage their trips. The project is built using **React, Tailwind CSS, Node.js, Express, and Firebase** for real-time updates.

## 🔥 Features
- 🚖 **User Authentication** (Firebase Auth)
- 📍 **Real-time Location Tracking** (Map Integration with Leaflet)
- 🔄 **Ride Booking System** (Search & Select Destination)
- 💳 **Payment Integration** (Stripe/Other Gateway)
- 🔔 **Push Notifications** (Real-time ride updates)
- 🗂 **Database & Backend** (Node.js + Express + Firebase)

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS, GSAP (for animations)
- **Backend:** Node.js, Express
- **Database:** Firebase Realtime Database
- **APIs Used:** Google Maps API, RapidAPI
- **Deployment:** Vercel (Frontend), Railway/Render (Backend)

## 📂 Folder Structure
```
uber-clone/
│── frontend/      # React Frontend
│── backend/       # Node.js Backend
│── .gitignore     # Git Ignore File
│── README.md      # Project Documentation
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/JayaJyoti27/uber.git
cd uber-clone
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd frontend
npm install
npm start
```

#### Backend
```sh
cd backend
npm install
node server.js
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in both `frontend` and `backend` directories:

#### Frontend `.env`
```
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
```

#### Backend `.env`
```
FIREBASE_API_KEY=your_api_key_here
STRIPE_SECRET_KEY=your_key_here
```

### 4️⃣ Run the Application
- Start frontend: `npm start`
- Start backend: `node server.js`

