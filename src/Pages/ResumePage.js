import React from 'react';
import Skills from '../Components/Skills';
import Tools from '../Components/Tools';
import CICDTools from '../Components/CICDTools';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import Publication from '../Components/Publication';
const ResumePage=() =>{
    return (
        <MainLayout>
            {/*<Publication/>*/}
            <Resume />
            <Skills />
            <CICDTools/>
            <Tools />
        </MainLayout>
    )
}

export default ResumePage
