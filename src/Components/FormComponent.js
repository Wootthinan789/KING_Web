import './FormComponent.css'
const FormComponent = () =>{
const inputTilte = (event)=>{
    console.log("Inset")
}
const inputAmount = (event) =>{
    console.log("Insert Amount")
}
    return(
        <div>
            <form>
                <div className = "form-control">
                    <label>Product Name</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTilte}/>
                </div>
                <div className = "form-control">
                    <label>Amount</label>
                    <input type="number" placeholder="ระบุยอด รายรับ(+) รายจ่าย(-)" onChange = {inputAmount}/>
                </div>
                <div>
                    <button type="submit" className="btn">add data</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent