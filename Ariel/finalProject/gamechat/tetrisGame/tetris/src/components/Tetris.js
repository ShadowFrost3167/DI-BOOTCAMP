import React from 'react';

//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../gameHelper';

const Tetris = () =>{

    return(
        <>
            <Stage stage={createStage()}/>
            <aside><>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
                </>
                <StartButton/>
                </aside>
        </>
    );
};

export default Tetris;