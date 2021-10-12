import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import Publication from '../Components/Publication';
function ResumePage() {
    return (
        <MainLayout>
            {/*<Publication/>*/}
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
