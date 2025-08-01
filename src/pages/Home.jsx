import ShowAnswer from "../components/showAnswer"

function Home({submit, handleChange, handleSubmit, form}) {

  return (
    <div className="max-w-xl m-auto space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex  gap-9">
                <div className="flex flex-col gap-y-2 w-full">
                <label>From:</label>
                <select id="" className="bg-gray-100 p-2  cursor-pointer outline-0">
                    <option value="">Binary</option>
                    <option value="">Decimal</option>
                    <option value="">Octal</option>
                    <option value="">Hexadecimal</option>
                </select>
                </div>

                <div className="flex flex-col gap-y-2 w-full">
                <label>To:</label>
                <select id="" className="bg-gray-100 p-2  cursor-pointer outline-0">
                    <option value="">Binary</option>
                    <option value="">Decimal</option>
                    <option value="">Octal</option>
                    <option value="">Hexadecimal</option>
                </select>
                
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-4">
                    <input 
                        type="number" 
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        placeholder="Enter Number" 
                        className="px-2 border outline-0 py-1 border-gray-200 w-full" 
                    />
        
                </div>
                <button className="bg-blue-200 p-1 rounded-lg cursor-pointer" type="submit">Calculate</button>
            </div>
        </form>
        <ShowAnswer submit = {submit}/>
    </div>
  )
}

export default Home
