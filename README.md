# Task Management with Angular 19 and Angular Material

This project is a task management application built with Angular 19 and Angular Material.

## Features

* **Create tasks:** Users can create new tasks by entering the task name and clicking the "Add" button.
* **Delete tasks:** Users can delete existing tasks by clicking the delete icon next to the task.

## Technologies Used

* **Angular 19:** A web development framework for building single-page applications.
* **Angular Material:** A UI component library for Angular.
* **Standalone Components:** A feature of Angular 19 that allows creating components without modules.
* **Signals:** A new way to manage state in Angular 19.
* **Routing:** To navigate between different views of the application.

## How to Run the Project

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the application:**

    ```bash
    ng serve -o
    ```

3.  **Open the application in your browser:**

    * Navigate to `http://localhost:4200/tareas`.

## Project Structure

* `src/app/tareas/tareas.component.ts`: Contains the logic and UI of the tasks component.
* `src/app/app.routes.ts`: Contains the application's route configuration.
* `src/main.ts`: The application's entry point.
* `src/app/app.component.html`: The application's main component.