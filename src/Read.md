Project Name: Dev Stack
Description:
This is a web application where users can explore different technologies and select the technologies they want for their development stack. They can add technologies, view their selected stack, and remove them when needed.
Technologies Used
•	React
•	TypeScript
•	Tailwind CSS
•	JavaScript
•	React Toastify
•	Vite

3 Features:
1. Users can explore different technologies and select the ones they want.
2. The selected technologies are shown in a separate Your Stack section.
3.Users can add technologies to their stack and remove individual items or remove all items at once.

1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML like code inside JavaScript.
We use JSX in React because it makes the UI code easier to write and understand.

2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component.
State is used to store and manage data inside a component.
Props are usually received from the parent, while state can be changed by the component itself.

3. What does the useState hook do, and where did you use it in this project?
useState is a React Hook that is used to create and manage state.
In my project, I used useState to store the selected technologies.
For example, when I click the Add button, the selected technology is added to the state. When I remove it, the state is updated again.
I also used state for the button selection in the banner.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to perform a task after a component renders.
In my project, I used useEffect to load the technology data from the JSON file when the page loads.
After getting the data, I store it in state and display the technologies on the page.

5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list.
It helps React understand which item was added, removed, or changed.
For example, when I display multiple technology cards using .map(), I give each card a unique key.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something on the screen based on a condition.
In my project, I used it for the empty stack message.
If the user has not selected any technology, I show a message like:
"Your stack is empty."
When the user selects a technology, that message is no longer shown.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component can send data to a child component using props.
For example, I can pass the technology data from the parent to the Cards component using props.
To send something back from the child to the parent, the parent can pass a function as a prop. The child calls that function when an action happens, such as clicking an Add button.
