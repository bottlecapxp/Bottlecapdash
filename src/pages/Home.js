import React, { useEffect, useMemo, useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import '../styles/Main.scss'

/**
* @author
* @function Home
**/

const Home = (props) => {
    const data_from_db = []
    const [dataCheck, setDataCheck] = useState([])
    const [length, setLength] = useState(0)

    var off_obj = {}
    var i

    useEffect(()=>{
        fetch('https://bottlecapdev.pythonanywhere.com/test',{
            method: 'GET',
            headers: {'Content-Type': 'application/json',}
        }).then(response => response.json())
        .then((resp)=>{
            for(i=0; i<resp.id.length; i++){
                data_from_db.push({'id':resp.id[i], 'name': resp.name[i], 'address': resp.address[i], 'province': resp.province[1], 'email': resp.email[i], 'tel': resp.tel[i], 'points': resp.points[i], 'prize': resp.prize[i], 'ballots': resp.ballots[i]})
                setDataCheck(data_from_db)
            }
            setLength(resp.id.length)
        })
            
    },[])




  return(
    <div id='dash_Home'>
        <SideBar />
        <div id='content_holder'>
            <Header />
            <div id='content_wrapper'>
            <Cards total={length}/>


            <div id='table_content'>
            <table> 
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>address</th>
                    <th>province</th>
                    <th>email</th>
                    <th>Tel</th>
                    <th>Points</th>
                    <th>Prize</th>
                    <th>Ballots</th>
                </tr>
                </tbody>
                <tbody>
                {
                         dataCheck.map((data, index) =>{
                            return(
                                <tr>
                                    <td key={index}>{data.name}</td>
                                    <td key={index}>{data.address}</td>
                                    <td key={index}>{data.province}</td>
                                    <td key={index}>{data.email}</td>
                                    <td key={index}>{data.tel}</td>
                                    <td key={index}>{data.points}</td>
                                    <td key={index}>{data.prize}</td>
                                    <td key={index}>{data.ballots}</td>
           
                                </tr>
                               
                            )
                        })
                }
                    
                </tbody>

    
            </table>
            </div>
            <Footer data={dataCheck}/>

            </div>
          
        </div>
    
    </div>
   )

 }

export default Home

                                               // <tr>
                            // <td>{data.name}</td>
                            {/* <td>{data.address}</td>
                            <td>{data.province}</td>
                            <td>{data.email}</td>
                            <td>{data.tel}</td>
                            <td>{data.points}</td>
                            <td>{data.prize}</td>
                            <td>{data.ballots}</td> */}
                            {/* </tr> */}

                            <tr>
                            {/* <td key={data.id}>{data.name}</td> */}
                            
                            {/* <td key={data.id}>{data.address}</td>
                            <td key={data.id}>{data.province}</td>
                            <td key={data.id}>{data.email}</td>
                            <td key={data.id}>{data.tel}</td>
                            <td key={data.id}>{data.points}</td>
                            <td key={data.id}>{data.prize}</td>
                            <td key={data.id}>{data.ballots}</td> */}
                            </tr>