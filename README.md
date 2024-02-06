# Test Plan for React Todo Application
### Introduction
This document outlines the test plan for the React Todo application. The test plan covers the testing strategy for each component of the application, including Input, Header, Item, Main, and Footer. It provides guidelines on what types of tests should be written for each component and outlines specific test cases to be covered.


## Testing Approach

## Unit Tests:
Unit tests are focused on testing individual components or functions in isolation to ensure they work as expected. These tests help verify the correctness of specific units of code without relying on external dependencies.

## Integration Tests:
Integration tests focus on testing how components interact with each other and with external dependencies such as Redux actions. These tests ensure that the integration of different parts of the application behaves as expected and that components communicate effectively with each other.

# Testing Tools

## React Testing Library:
React Testing Library is used for rendering components and interacting with them in test cases. It provides utilities for querying and interacting with components in a way that closely mirrors how users interact with the application.

## Jest:
Jest is a test runner and assertion library for writing and executing test cases in JavaScript applications, including React. It offers features like test suites, test assertions, mocking, and snapshot testing.

## Mocking:
Mocking is the process of replacing external dependencies, such as Redux actions or React Router hooks, with mock implementations during testing. This helps isolate the component or function being tested from its dependencies, allowing for more focused and controlled testing.


## Components Testing Strategy


#### Input Component Unit Tests

##### Type of Tests: Unit tests

## Test Cases:

1. **Verify Rendering:**
   - Description: Ensure that the input component renders correctly.
   - Steps:
     1. Render the input component.
     2. Check visually or programmatically that it appears as expected.

2. **Submit on Enter Key:**
   - Description: Test submitting a new todo when pressing the Enter key.
   - Steps:
     1. Simulate the user typing in the input field.
     2. Press the Enter key.
     3. Verify that the new todo is submitted.

3. **Sanitize Input Value:**
   - Description: Ensure input value is sanitized before submitting.
   - Steps:
     1. Input a value with potential malicious characters (e.g., HTML tags, special characters).
     2. Submit the input.
     3. Verify that the submitted value is sanitized, i.e., special characters are escaped or removed.


### Header Component Integration Tests

#### Type of Tests: Integration tests

## Test Cases:

1. **Verify Rendering:**
   - Description: Ensure that the header component renders correctly.
   - Steps:
     1. Render the header component within a parent container.
     2. Check visually or programmatically that it appears as expected.

2. **Dispatch ADD_ITEM Action:**
   - Description: Test dispatching ADD_ITEM action when submitting a new todo.
   - Steps:
     1. Render the header component within a parent container.
     2. Input a new todo item in the input field.
     3. Simulate the submission action (e.g., clicking a button).
     4. Verify that the ADD_ITEM action is dispatched with the correct payload.



### Item Component Integration Tests

#### Type of Tests: Integration tests

## Test Cases:

1. **Verify Rendering:**
   - Description: Ensure that the item component renders correctly.
   - Steps:
     1. Render the item component with sample todo data.
     2. Check visually or programmatically that it appears as expected.

2. **Toggle Todo Completion:**
   - Description: Test toggling todo completion status on checkbox click.
   - Steps:
     1. Render the item component with a todo that is initially incomplete.
     2. Click on the checkbox to toggle the completion status.
     3. Verify that the todo completion status updates accordingly.

3. **Edit and Update Todo:**
   - Description: Test editing and updating todo on double click.
   - Steps:
     1. Render the item component with a todo.
     2. Double-click on the todo text to enter edit mode.
     3. Modify the todo text.
     4. Press Enter or blur the input field to confirm the edit.
     5. Verify that the todo text updates accordingly.

4. **Remove Todo:**
   - Description: Test removing todo on button click.
   - Steps:
     1. Render the item component with a todo.
     2. Click on the remove button associated with the todo.
     3. Verify that the todo is removed from the list.

### Main Component Integration Tests

#### Type of Tests: Integration tests

## Test Cases:

1. **Verify Rendering:**
   - Description: Ensure that the main component renders correctly.
   - Steps:
     1. Render the main component.
     2. Check visually or programmatically that it appears as expected.

2. **Toggle All Todos Completion:**
   - Description: Test toggling all todos completion status on "Toggle All" checkbox click.
   - Steps:
     1. Render the main component with multiple todos, some complete and some incomplete.
     2. Click on the "Toggle All" checkbox.
     3. Verify that all todo completion statuses are toggled accordingly.


### Footer Component Integration Tests

#### Type of Tests: Integration tests

## Test Cases:

1. **Verify Rendering:**
   - Description: Ensure that the footer component renders correctly.
   - Steps:
     1. Render the footer component.
     2. Check visually or programmatically that it appears as expected.

2. **Dispatch REMOVE_COMPLETED_ITEMS Action:**
   - Description: Test dispatching REMOVE_COMPLETED_ITEMS action when "Clear completed" button is clicked.
   - Steps:
     1. Render the footer component within a parent container.
     2. Create a scenario where there are completed todo items.
     3. Click on the "Clear completed" button.
     4. Verify that the REMOVE_COMPLETED_ITEMS action is dispatched.



## About Me
Hii My name is Rajan Kumar currently pursuing a bachelor's degree from NIT Patna in the Computer Science and Engineering Department. I have worked at an early-stage startup where I developed RESTful APIs and seamlessly integrated them with the React-based front-end. I also implemented an efficient Authentication and Authorization system for user accounts with JWT and Worked with AWS services, including AWS EC2 instances and S3 Buckets, Lamda to deploy, process, and manage user data, ensuring high availability and reliability.

I have experience in Full-stack development with hands-on Real-World Solid Projects and Freelance work (see my resume, GitHub, and portfolio website attached below).

I have worked with JavaScript libraries, and frameworks, especially in backend NodeJS and in Front-end ReactJS, and NextJS. And the databases I have worked with are PostgreSQL, MySQL, and MongoDB If I talk about problem-solving, I have solved over 800 DSA problems on various platforms and am an adaptive learner willing to learn new technologies and solve the problem

I am also familiar with source control tools like Git and GitHub and have experience with the entire development process like design, development, and deployment.
I also worked with DevOps development technologies like CI/CD some open-source software like Jenkins and Docker and some server monitoring like Grafana and Prometheus.



Please find my profile here

<ul>
<li>Resume <a href="https://drive.google.com/file/d/1mk62t09UnlHCtr5EL1lSXUDwq1FHSSSO/view" target="_blank">Rajan_kumar_resume</a></li>
<li>Portfolio <a href="https://krcpr007.vercel.app/" target="_blank">Portfolio </a> </li>
<li>Linkedin <a href="https://www.linkedin.com/in/krcpr007/" target="_blank">Linkedin </a></li>
<li>Github <a href="https://github.com/krcpr007"  target="_blank">Github </a></li>
</ul>