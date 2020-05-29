import React from 'react';
import 'src/Listitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import App from "./App";

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
    {
        return <div className="list" key={item.key}>

                <input type="text" id={item.key} value={item.text} onChange={(e)=>{
                    props.setUpdate(e.target.value,item.key)}}/>


        </div>
    })

}
export default ListItems;