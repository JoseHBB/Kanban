import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
    id: string;
    children: React.ReactNode;
}

export function Droppable(props: DroppableProps) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });

    const style = {
        color: isOver ? 'green' : undefined,
        border: '2px dashed gray', // Borda para visualizar a área
        padding: '20px',
        minHeight: '100px',
    }
    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}