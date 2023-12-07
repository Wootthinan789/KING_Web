import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import './Transection.css'

const Transection = ()=>{
    const data = [
        {title:"ค่าเดินทาง",amount : 3458},
        {title:"ค่าอาหาร",amount : 200},
        {title:"ค่ารักษา",amount : 4677},
        {title:"ค่าส่วนกลาง",amount :6754},
        {title:"ค่าเที่ยว",amount : 8525},
        {title:"ค่าประกัน",amount : 300}
    ]
    return (
        <ul className='list'>
            {data.map((elemenet)=>{
                //return <Item title={elemenet.title} amount={elemenet.amount}/> สองแบบเขียนได้เหมือนกัน
                return <Item title = {elemenet.title} amount = {elemenet.amount} key = {uuidv4()}/>
            })}
        </ul>
    );
  }

  export default Transection