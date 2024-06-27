import { LabelFileComponent, LabelTextComponent, AddHandler, Heading, LabelComponent, ColorNodeComponent } from './component';
import { handlerPosition } from '../helperFunc';
import { useState } from 'react';
import "../css/node.scss"; 

export const Node = ({ id, type }) => {
 let handlePositions = handlerPosition.filter(handler => handler.node === type);
 const [currText, setCurrText] = useState('{{source}}'); 
 const [bgColor, setBgColor] = useState("#fff");

  return (
    <div className={`node`} style={{
      width: `${Math.max(100, currText.length*1.25)}px`,
      height: `${Math.max(100, currText.length*1.35)}px`, 
      backgroundColor: bgColor
    }}>
      <Heading id={id} type={type}/>
      <div className={`body body-${type}`}>
        {(type === "customInput" || type === "customOutput") && (
          <>
            <LabelComponent type={type}/>
            <LabelFileComponent />
          </>
        )}
        {type === "text" && (<LabelTextComponent id={id} currText={currText} setCurrText={setCurrText}/>)}
        {type === "llm" && (
          <span>This is a LLM.</span>
        )}
        {handlePositions.map(handle => (
          <AddHandler id={id} type={handle.type} position={handle.position}/>
        ))}
        {type == "colorNode" && <ColorNodeComponent bgColor={bgColor} setBgColor={setBgColor}/>}
      </div>
    </div>
  );
};
