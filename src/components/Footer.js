import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowUp } from 'react-bootstrap-icons';

const StyledArrowUp = styled(ArrowUp)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: var(--color-peach);
    color: var(--color-indigo);
    transition: all 0.4s;

    &:hover {
        cursor: pointer;
    }
`;

const StyledArrowWrapper = styled.div`
    position: fixed; 
    right: 15px;
    bottom: 15px;
    z-index: 1;
`;
function Footer() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight;
        if (scrolled > height / 4) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <StyledArrowWrapper>
            <StyledArrowUp 
                className={visible ? 'fadeIn' : 'fadeOut'}
                onClick = {scrollToTop}
                />
        </StyledArrowWrapper>
    );
}

export default Footer;