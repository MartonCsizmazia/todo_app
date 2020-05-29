import React from 'react';
import './Listitem.css'

function Listitems(props) {
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e)=>{
                    props.setUpdate(e.target.value,item.key)}}/>
                <span>

        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
            </p>

        </div>})
}

export default Listitems;