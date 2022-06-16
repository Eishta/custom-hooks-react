It is quite common to see switches and checkboxes in web apps.

Implement useToggle() to make things easier

function App() {
  const [on, toggle] = useToggle()
  ...
}

where on is the default value of the toggle a
and toggle is the function to be called to toggle the value