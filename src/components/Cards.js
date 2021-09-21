import React from 'react'
import '../styles/Card.scss'
import Loading from '../assets/load.gif'

/**
* @author
* @function Cards
**/

const Cards = (props) => {
    console.log(props.total)

    const card_list = [{name: 'Sapporo Premium', total: props.total}]
    const card_num = [767]
    const submission = (data) =>{
        console.log(data)
    }
  return(
    <div id='card_wrapper'>
        {
            card_list.map((data, index)=>{
                return(
                    <div className='card' onClick={()=>{submission(index)}} key={index}>
                        <h2>{data.name}</h2>
                        {props.total === 0? <img style={{width: '6%', margin: '4px 0 4px 0'}}src={Loading} alt='' />: <span id='total'>{data.total}</span>}
                    </div>
                )
            })
        }
    </div>
   )

 }

export default Cards

