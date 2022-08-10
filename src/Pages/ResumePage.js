import React from 'react';
import Skills from '../Components/Skills';
import Tools from '../Components/Tools';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import Publication from '../Components/Publication';
const ResumePage=() =>{
    return (
        <MainLayout>
            {/*<Publication/>*/}
            <Skills />
            <Tools />
            <Resume />

        </MainLayout>
    )
}

export default ResumePage
