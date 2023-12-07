import Transection from "./Components/Transaction";
import './App.css'
import FormComponent from "./Components/FormComponent";
const Title = ()=> {
  const Design = {color:'#2E86C1',textAlign:"center",fontSize:'2rem',}
  return (
    <h1 style={Design}>โปรแกรมรายรับ - รายจ่าย</h1>
  )
}
//const Description = ()=>  <p>บันทึกข้อมูล</p>

/*
const Transection = ()=>{
  return (
    <ul type = "disc">
    <li>ค่าเดินทาง <span>-200</span></li>
    <li>เงินเดิน <span>+20000</span></li>
    <li>เงินอาหาร <span>-500</span></li>
    <Item/>
    <Item1/>
  </ul>
  );
}
//list
const Item = ()=> <li>ค่าเดินทาง <span>-220</span></li>
const Item1 = ()=> <li>ค่าที่พัก <span>-3000</span></li>
*/
function App() {
  return (
      <div className="container">
        <Title/>
        <FormComponent/>
        <Transection/>
      </div>
  )
}

export default App;
