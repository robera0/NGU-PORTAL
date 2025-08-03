# NGU Student Portal

## Project Description

The NGU Student Portal is a comprehensive web application designed to provide students with a centralized platform for accessing essential academic information and resources. This portal aims to streamline the student experience and enhance communication between students and the university.

Key features include:

*   Viewing grades and transcripts
*   Accessing course schedules and enrolled courses
*   Receiving important announcements and notices
*   Managing financial information and payments
*   Profile management

## Features

*   **User Authentication:** Secure login for students.
*   **Dashboard:** Overview of key information and upcoming events.
*   **Course Management:** View enrolled courses and course details.
*   **Schedule:** Display of student's personal schedule.
*   **Finance:** Access to financial records and payment information.
*   **Notices:** Important announcements and updates from the university.
*   **Profile Management:** Ability for students to manage their personal information, including profile picture.
*   **Responsive Design:** The portal is designed to be accessible on a variety of devices.
*   **Academic Records:** Upload and view academic transcripts and matric results.

## Technologies Used

*   **Frontend:** React, Vite, Tailwind CSS, Font Awesome, React Query
*   **Backend:** Node.js, Express

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd NGU-PORTAL
    ```

3.  **Install dependencies (Client):**

    ```bash
    cd Client
    npm install
    ```

4.  **Install dependencies (Server):**

    ```bash
    cd ../Server
    npm install
    ```

5.  **Environment Variables:**

    *   Create `.env` files in both the `Client` and `Server` directories.
    *   Add the necessary environment variables (e.g., API keys, database connection strings). See `.env.example` (create this file and add it to your repo) for a template.

6.  **Run the development server (Client):**

    ```bash
    cd Client
    npm run dev
    ```

7.  **Run the development server (Server):**

    ```bash
    cd ../Server
    npm run dev
    ```

## Usage

*   **Access the portal:** Open your web browser and navigate to `http://localhost:5173` (or the appropriate address based on your Vite configuration).
*   **Login:** Use your student credentials to log in.
*   **Navigate:** Use the sidebar to access different sections of the portal, such as Dashboard, Payment Info, Registration, Courses, Result, Notice, and Schedule.
*   **Profile:** Manage your profile information and upload a profile picture.
*   **Academics:** Upload your high school transcript and matric results.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

[Specify the license under which your project is released (e.g.,
