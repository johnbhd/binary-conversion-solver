import AnswerConversion from "../components/AnswerConversion"

function Home({submit, baseOptions, handleChange, handleSubmit, form}) {

  return (
    <div className="max-w-xl m-auto space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex  gap-9">
                <div className="flex flex-col gap-y-2 w-full">
                <label>From:</label>
                <select
                    onChange={handleChange}
                    name="fromBase"
                    value={form.fromBase} 
                    className="bg-gray-100 p-2 cursor-pointer outline-0"
                >
                    {baseOptions.map(option => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
                </select>
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                <label>To:</label>
                <select
                    onChange={handleChange} 
                    name="toBase"
                    value={form.toBase} 
                    className="bg-gray-100 p-2 cursor-pointer outline-0"
                >
                    {baseOptions.map(option => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
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
                        className="px-2 border outline-0 py-1 border-gray-200 w-full text-gray-100"  
                        required
                    />
                </div>
                <button className="bg-blue-200 p-1 rounded-lg cursor-pointer" type="submit">Calculate</button>
            </div>
        </form>
        <AnswerConversion submit = {submit}/>
    </div>
  )
}

export default Home
