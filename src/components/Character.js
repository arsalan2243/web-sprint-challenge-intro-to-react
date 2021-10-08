// Write your Character component here
import react  from 'react'
import styled from 'styled-components'

const Div = styled.div`
background-color: rgb(0, 0, 0 ,0.5);;
color: white;
max-width: 100%;
 border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 0px 12px 0px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;

const Characters = (props) => {
    const character = props.character
    return (
        <Div>
            <h2>{character.name}</h2>
            <h2>{character.birth_year}</h2>
        </Div>
    )
}

export default Characters