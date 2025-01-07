import React, { useContext } from 'react';
import { MoreHorizontal, UserPlus, Edit2 } from 'react-feather';
import AddCard from './AddCard';
import { BoardContext } from '../context/BoardContext';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import AddList from './AddList';

const BoardManager = () => {
    const boardData = {
        active:0,
        boards:[
          {
            //name:'To do list',
            //bgcolor:'#069',
            list:[
              {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
              {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
              {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
            ]
          }
        ]
      }
      const [allboard,setAllBoard] = useState(boardData); 

    const activeBoard = allboard.boards[allboard.active];

    // Handles the drag-and-drop functionality
    const handleDragEnd = (result) => {
        if (!result.destination) {
            console.log("No destination selected.");
            return;
        }
        const updatedLists = [...activeBoard.list];
        const sourceListIndex = parseInt(result.source.droppableId);
        const destinationListIndex = parseInt(result.destination.droppableId);
        const [movedItem] = updatedLists[sourceListIndex - 1].items.splice(result.source.index, 1);
        updatedLists[destinationListIndex - 1].items.splice(result.destination.index, 0, movedItem);

        const updatedBoard = { ...allboard };
        updatedBoard.boards[updatedBoard.active].list = updatedLists;
        setAllBoard(updatedBoard);
    };

    // Adds a new card to a specific list
    const addCard = (title, listIndex) => {
        const updatedLists = [...activeBoard.list];
        updatedLists[listIndex].items.push({ id: Utils.makeid(5), title });

        const updatedBoard = { ...allboard };
        updatedBoard.boards[updatedBoard.active].list = updatedLists;
        setAllBoard(updatedBoard);
    };

    // Adds a new list to the board
    const addList = (title) => {
        const updatedLists = [...activeBoard.list];
        updatedLists.push({ id: `${updatedLists.length + 1}`, title, items: [] });

        const updatedBoard = { ...allboard };
        updatedBoard.boards[updatedBoard.active].list = updatedLists;
        setAllBoard(updatedBoard);
    };

    return (
        <div className="flex flex-col w-full" style={{ backgroundColor: `${activeBoard.bgcolor}` }}>
            {/* Board Header */}
            <div className="p-3 bg-black flex justify-between w-full bg-opacity-50">
                <h2 className="text-lg">{activeBoard.name}</h2>
                <div className="flex items-center justify-center">
                    <button className="bg-gray-200 h-8 text-gray-800 px-2 py-1 mr-2 rounded flex justify-center items-center">
                        <UserPlus size={16} className="mr-2" /> Share
                    </button>
                    <button className="hover:bg-gray-500 px-2 py-1 h-8 rounded">
                        <MoreHorizontal size={16} />
                    </button>
                </div>
            </div>

            {/* Board Content */}
            <div className="flex flex-col w-full flex-grow relative">
                <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden">
                    <DragDropContext onDragEnd={handleDragEnd}>
                        {activeBoard.list &&
                            activeBoard.list.map((list, index) => (
                                <div key={index} className="mr-3 w-60 h-fit rounded-md p-2 bg-black flex-shrink-0">
                                    <div className="list-body">
                                        {/* List Header */}
                                        <div className="flex justify-between p-1">
                                            <span>{list.title}</span>
                                            <button className="hover:bg-gray-500 p-1 rounded-sm">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
                                        {/* List Items */}
                                        <Droppable droppableId={list.id}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className="py-1"
                                                    ref={provided.innerRef}
                                                    style={{
                                                        backgroundColor: snapshot.isDraggingOver ? '#222' : 'transparent',
                                                    }}
                                                    {...provided.droppableProps}
                                                >
                                                    {list.items &&
                                                        list.items.map((item, itemIndex) => (
                                                            <Draggable key={item.id} draggableId={item.id} index={itemIndex}>
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                                                                            <span>{item.title}</span>
                                                                            <span className="flex justify-start items-start">
                                                                                <button className="hover:bg-gray-600 p-1 rounded-sm">
                                                                                    <Edit2 size={16} />
                                                                                </button>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}

                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                        {/* Add Card Component */}
                                        <AddCard getcard={(title) => addCard(title, index)} />
                                    </div>
                                </div>
                            ))}
                    </DragDropContext>

                    {/* Add List Component */}
                    <AddList getlist={addList} />
                </div>
            </div>
        </div>
    );
};

export default BoardManager;
