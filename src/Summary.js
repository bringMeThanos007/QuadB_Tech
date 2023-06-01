import React, { useEffect, useState } from 'react'

const Summary = (props) => {

    return (
        <>
            <div className="container" style={{ border: "2px solid black", borderRadius: "20px", padding: "30px" }}>
                <img src={props.prop.img} alt="" />
                <h1>{props.prop.title}</h1>
                <h3>language : {props.prop.language} </h3>
                <h3>runtime : {props.prop.runtime}</h3>
                <h3>premiered : {props.prop.premiered}</h3>
                {props.prop.summary}
                <button className="btn btn-warning" ><a href={props.prop.url}>Visit Official Page</a> </button><br />
                {/* <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">book </button> */}
            </div>


            

        </>
    )
}

export default Summary
