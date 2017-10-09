import React from 'react';
import styled from 'styled-components';

const SeparatorCirlce= styled.div`
margin-left: 3px;
margin-top: 4.5px;
background-color: #ccccca;
height: 6px;
width: 6px;
border-radius: 3px;

`;

const SeparatorBox = styled.div`
    float:left;
    width: 12.72px;
    height: 15px;
    display: inline-block;
`;

class Separator extends React.Component {
    render(){
        return (
            <SeparatorBox>
                <SeparatorCirlce />
            </ SeparatorBox>
        );
    }
}

export default Separator;