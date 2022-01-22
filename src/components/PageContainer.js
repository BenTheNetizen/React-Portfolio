import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import FadeIn from 'react-fade-in';

function PageContainer() {
    return (
        <div>
            <FadeIn>
                <Header />
                <Experience />
                <Projects />
                <Skills />
                <Footer />
            </FadeIn>
        </div>
    );
}

export default PageContainer;