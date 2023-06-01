import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from './Context/noteContext';

function Card(props) {
    // using context 
    const context = useContext(noteContext);
    const {  setSecondData } = context;

    const[sumdata,setSumData]=useState({});


    const navigation = useNavigate();

    const fetchSumData=async()=>{
        
        
        
    }
    const navigateToSecond = async() => {

        const url = props.link
        const data = await fetch(url)
        const parseData = await data.json();
        setSumData(parseData)
        
        setSecondData({title:parseData.name,summary:parseData.summary,runtime:parseData.runtime,language:parseData.language,img:parseData.image.medium,url:parseData.url,premiered:parseData.premiered})
        
       
        setTimeout(()=>{
            console.log(parseData)
            navigation('second')
        },1100)
       
    };

     
    return (
        <div>
            <div classname="card" style={{ width: "100%", alignItems: 'center', justifyContent: "center",borderRadius:"20px", border: "2px solid black", padding: "20px 50px" , margin: "5px" }}>
                <img src={props.img} classname="card-img-top" alt="..." />
                <div classname="card-body">
                    <h5 classname="card-title" style={{textAlign: "center"}}>{props.title}</h5>
                    <p classname="card-text" style={{textAlign: "center"}}>{props.gen.map((e) => { return (<p > {e} </p>) })}</p>
                    <button className='btn btn-primary' style={{width:"100%"}} onClick={navigateToSecond} >Visit </button>
                </div>
            </div>
        </div>
    )
}

export default Card
