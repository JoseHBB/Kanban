import React from "react";
import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';

interface DraggableProps {
    id: string;
    children: React.ReactNode;   
}

export function Draggable(props : DraggableProps) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });

    const style = {
    // Esta linha é crucial para o movimento acontecer
    transform: CSS.Translate.toString(transform),
    cursor: 'grab',
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    display: 'inline-block' // Ajuda a não ocupar a largura toda
  };

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}