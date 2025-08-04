import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import formSubmit from "./hooks/formSubmit"

function App() {
  const {
    submit,
    baseOptions,
    handleChange,
    handleSubmit,
    form
  } = formSubmit()

  return (
    <MainLayout submit = {submit}>
      <Home 
        submit = {submit}
        baseOptions = {baseOptions}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </MainLayout>
  )
}

export default App
