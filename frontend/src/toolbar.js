// toolbar.js
import "./css/index.css"; 
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div>
            <div className="nodeSelection">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='colorNode' label='Node' />
            </div>
        </div>
    );
};
