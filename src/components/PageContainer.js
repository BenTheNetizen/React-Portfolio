import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function PageContainer() {
    return (
        <div>
            <Header />
            <Experience />
            <Projects />
            <Skills />
        </div>
    );
}

export default PageContainer;