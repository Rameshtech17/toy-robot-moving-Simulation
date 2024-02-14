import './App.css';
import styled from 'styled-components';

const Faces = styled.section`
    background-color: #fcba03;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    left: ${({ x }) => x*50 + x+12+'px'};
    top: ${({ y }) => y*50 + y+8+'px'};
    transform: rotate(${({r})=> r+'deg'});
    position:absolute;
    z-index: 1000;
    border: 1px solid #333;
    margin-Left:10px;
  `
export function Face({x,y,r}) {
    return (
        <>
            <Faces x={x} y={y} r={r}>
                <div class="mouth"></div>
                <div class="eye-section">
                    <div class="left-eye"></div>
                    <div class="right-eye"></div>
                </div>
            </Faces>
        </>
    )
}