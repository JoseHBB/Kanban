import './App.css'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';

import { Header } from './Header.tsx'

function App() {
  const [isDropped, setIsDropped] = useState(false)
  const draggableMarkup = (
    <Draggable id='draggable-1'>Drag Me</Draggable>
  )

  return (
    <> 
      <Header></Header>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable id='droppable-1'>
          {isDropped ? draggableMarkup : 'Drop Here'}
        </Droppable>
      </DndContext>
    </>
  )

  function handleDragEnd(event : DragEndEvent) {
    if (event.over && event.over.id === 'droppable-1') {
      setIsDropped(true);
    }
  }
}

export default App
