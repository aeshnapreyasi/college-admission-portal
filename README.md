# College Admission Portal 🎓

A responsive, single-link web application built for an admission counselor to streamline the student onboarding process.

## 📖 The Backstory & Problem Statement
An admission counselor approached me with a workflow problem: they were spending hours every day manually texting and emailing the exact same college details (Fee Structures, Document Checklists, Hostel Photos) to hundreds of different students and parents. 

## 💡 The Solution
I designed and developed this centralized web portal. Now, the counselor simply shares **one link**. Students and parents can visually explore the campus, check the fee structure, and review required documents on their own. Once they are fully informed, they can use the "Call Now" feature at the bottom of the portal to directly contact the counselor for final seat booking.

## 🛠️ Technology Stack
* **Frontend Framework:** React.js (Bootstrapped with Vite for maximum speed)
* **Styling:** Tailwind CSS (For rapid, mobile-first responsive design)
* **Routing:** React Router DOM v6 (For seamless single-page navigation)
* **Deployment:** Netlify

## 📂 Project Structure & Architecture
The project was built with a modular component architecture to ensure clean and maintainable code:

```text
college-admission-portal/
│
├── public/
│   └── images/              # Local image assets (campus, hostel, etc.)
│
├── src/
│   ├── components/          # Reusable UI Components
│   │   ├── Hero.jsx         # Top banner with overlay
│   │   ├── InfoCard.jsx     # Reusable navigation cards
│   │   ├── BookingCard.jsx  # Prominent CTA for seat booking
│   │   └── Navbar.jsx       # Dynamic navigation bar (Back to Home)
│   │
│   ├── pages/               # Individual Route Views
│   │   ├── Campus.jsx       
│   │   ├── Documents.jsx    
│   │   ├── Fees.jsx         
│   │   ├── Highlights.jsx   
│   │   └── Hostel.jsx       
│   │
│   ├── App.jsx              # Core layout and Route definitions
│   └── main.jsx             # Entry point (BrowserRouter wrapper)
