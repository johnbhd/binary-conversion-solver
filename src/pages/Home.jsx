import SolutionArea from "../components/SolutionArea"

function Home({submit, handleChange, handleSubmit, form}) {

  return (
    <div className="max-w-xl m-auto space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-9">
                <div className="flex flex-col gap-y-2">
                <label>From:</label>
                <select id="" className="bg-gray-100 p-2 cursor-pointer outline-0">
                    <option value="">Binary</option>
                    <option value="">Decimal</option>
                    <option value="">Octal</option>
                    <option value="">Hexadecimal</option>
                </select>
                </div>

                <div className="flex flex-col gap-y-2">
                <label>To:</label>
                <select id="" className="bg-gray-100 p-2 cursor-pointer outline-0">
                    <option value="">Binary</option>
                    <option value="">Decimal</option>
                    <option value="">Octal</option>
                    <option value="">Hexadecimal</option>
                </select>
                
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <input 
                type="number" 
                name="input"
                value={form.input}
                onChange={handleChange}
                placeholder="Enter Number" 
                className="px-2 m-auto border" 
                />
                <button className="bg-blue-200 p-1 rounded-lg cursor-pointer" type="submit">Calculate</button>
            </div>
        </form>
        <SolutionArea submit = {submit}/>
    </div>
  )
}

export default Home
