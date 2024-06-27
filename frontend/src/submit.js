// submit.js
import { useStore } from "./store";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/index.css"; 

export const SubmitButton = () => {
    const { edges, nodes } = useStore(); 
    const nodesEdges = {nodes, edges}; 

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        
        try{
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nodesEdges)
            })
            if(!response.ok) {
                throw new Error('Some issue in network response!')
            } 
            const data = await response.json(); 
            const result = `Number of nodes in graph: ${data["num_nodes"]} \n Number of edges in graph: ${data["num_edges"]} \n Are set of nodes is DAG: ${data["is_dag"]} `
            const content = result.split('\n').map((line, index) => (
                <span key={index}>
                    {line} <br/>
                </span>
            ))
            toast(<div>{content}</div>, {
                autoClose: 300
            });
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <div className="btnDiv">
            <button type="submit" onClick={handleSubmit} className="submitBtn">Submit</button>
            <ToastContainer />
        </div>
    );
}
