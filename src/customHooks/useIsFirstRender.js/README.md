Create a hook to tell if it is the first render.

function App() {
  const isFirstRender = useIsFirstRender()
  // only true for the first render
  ...
}