import React,{ useEffect, useRef, useState }  from 'react';
import { handleInputFinish, nodeIcons, nodeTypes } from '../helperFunc';
import { Handler } from './Handler';
import { FaTrash } from 'react-icons/fa';
import { useReactFlow } from 'reactflow';
import "../css/node.scss"; 
import "../css/index.css"; 

export const Heading = ({ id, type }) => {
    const { setNodes } = useReactFlow();
    return(
        <div className={`heading heading-${type}`}>
            <span className="icon">{nodeIcons[type]}</span>
            <span>{nodeTypes[type]}</span>
            <button onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id != id))}>
                <FaTrash className="nodeIcon" />
            </button>
        </div>
    )
}

export const LabelComponent = ({type}) => {
    const [value, setValue] = useState(`${type}`);
    return(
        <label className="labelStyle">
            Name:
            <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)} />
        </label>
    )
}

export const LabelFileComponent = () => {
    const [value, setValue] = useState('Text');
    return (
        <label className="labelStyle">
            Type:
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="Text">Text</option>
                <option value="File">File</option>
            </select>
        </label>
    )
}

export const AddHandler = ({id, type, position }) => {
    const heightRef = useRef(Math.floor(Math.random()*100)); 

    return (
        <Handler
            key={`${id}-${type}-${position}-${Date.now}`}
            type={type}
            position={position}
            top={(id.includes("text") ? heightRef.current : "")}
        />
    )
}

export const LabelTextComponent = ({id, currText, setCurrText}) => { 
    let [extractedTexts, setExtractedTexts] = useState([]);
    
    useEffect(() => {
        setExtractedTexts(handleInputFinish(currText)); 
    }, [currText]);


    return (
        <>
            <label className="labelStyle">
            Name:
            <textarea 
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{
                width: `${currText.length*1.025}px`,
                height: `${Math.max(100, currText.length*0.95)}px`}}/>
            </label>
            {
              extractedTexts.length > 0 && extractedTexts[0].map(type => 
              (type === "source" || type == "target") ? (<AddHandler type={type} position="left" id={id}/>) : <></>)
            }
        </>
  ); 
}

export const ColorNodeComponent = ({bgColor, setBgColor}) => {
    const { setNodes } = useReactFlow();
    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.type !== "colorNode") {
                    return node;
                }
               
                return {
                    ...node,
                    data: { ...node.data, bgColor},
                };
            })
        );
    }, [bgColor]); 
    
    return(<>
        <div>
            Color Picker Node: <strong>{bgColor}</strong>
        </div>
            <input
                className="nodrag"
                type="color"
                onChange={(e) =>  setBgColor(e.target.value)}
                defaultValue={bgColor} 
            />
    </>)
}


