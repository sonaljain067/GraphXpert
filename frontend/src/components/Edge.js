import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from 'reactflow';
import '../css/node.scss';

export default function Edge(props) {
    const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style={}, markerEnd } = props; 
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onEdgeClick = () => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
    };

    return (
    <>
        <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
            <div
                style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    pointerEvents: 'all'
                }} className="nodrag nopan"
                >
                <button className="edgeButton" onClick={onEdgeClick}>
                    <FaTrashAlt />
                </button>
            </div>
        </EdgeLabelRenderer>
    </>
    );
}