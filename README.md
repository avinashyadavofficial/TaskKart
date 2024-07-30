# TaskKart

TaskKart is a simple task management web application that allows users to add, complete, mark as incomplete, and delete tasks for different categories. It also includes a dark mode feature for a better user experience during nighttime or in low-light environments. The tasks are saved locally in the user's browser using `localStorage`, so they persist even after the page is refreshed.

## Features

- **Add Tasks**: Users can add tasks to  different categories.
- **Complete Tasks**: Mark tasks as complete with a green background and strikethrough text.
- **Mark as Incomplete**: Mark tasks as incomplete with a red background and move them to the next day.
- **Delete Tasks**: Delete tasks that are no longer needed.
- **Dark Mode**: Toggle between light and dark mode for a better user experience.
- **Date Picker**: Choose a date to view tasks for that specific day.

## Getting Started

### Prerequisites

To run this project locally, you only need a web browser.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/taskkart.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd taskkart
    ```

3. **Open `index.html` in your web browser:**

    ```bash
    open index.html
    ```

## File Structure

- **index.html**: The main HTML file containing the structure of the web application.
- **styles.css**: The CSS file containing styles for the web application.
- **script.js**: The JavaScript file containing functionality for the web application.

## Code Explanation

### index.html

This file contains the basic structure of the application, including the title, input fields for tasks, and the date picker. It also includes a footer with a link to the author's LinkedIn profile.

### styles.css

This file contains the styles for the application. Key points include:

- **Dark Mode**: Styles for dark mode, toggled using the `.dark-mode` class on the body.
- **Responsive Design**: Media queries to ensure the application looks good on different screen sizes.
- **Task Styling**: Different styles for complete and incomplete tasks.

### script.js

This file contains the JavaScript code for the application's functionality. Key functions include:

- **toggleDarkMode**: Toggles the dark mode on and off.
- **updateToggleButton**: Updates the text and icon of the toggle button based on the current mode.
- **addTask**: Adds a new task to the selected category.
- **createTaskElement**: Creates a new task element with buttons for marking as complete, incomplete, or deleting.
- **toggleComplete**: Marks a task as complete.
- **markIncomplete**: Marks a task as incomplete and moves it to the next day.
- **deleteTask**: Deletes a task.
- **moveTaskToNextDay**: Moves an incomplete task to the next day.
- **saveTasksForSelectedDate**: Saves tasks to `localStorage` for the selected date.
- **loadTasksForSelectedDate**: Loads tasks from `localStorage` for the selected date.

## Usage

1. **Select a Date**: Use the date picker to select the date for which you want to view or add tasks.
2. **Add Tasks**: Enter the task description in the input field under the appropriate category and click "Add Task".
3. **Complete Tasks**: Click "Complete" to mark a task as complete.
4. **Mark as Incomplete**: Click "Incomplete" to mark a task as incomplete and move it to the next day.
5. **Delete Tasks**: Click "Delete" to remove a task.
6. **Toggle Dark Mode**: Click the toggle button in the top left corner to switch between light and dark mode.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


