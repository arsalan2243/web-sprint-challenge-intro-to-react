import react from 'react';
import styled from 'styled-components'

const Det = styled.h2`
background-color: lightgreen;
`;
const Det2 = styled.h2`
background-color: lightblue;
`;
const Det3 = styled.h2`
background-color: red;
`;

const Det4= styled.h2`
background-color:lightpink
`;
const Detail =({details}) =>{
    console.log(details);
   
    return (
            <div>
                  <Det2>height: {details.height}</Det2>
                  <Det> mass: {details.mass}</Det>
                  <Det3> hair_color: {details.hair_color}</Det3>
                  <Det4> skin_color: {details.skin_color}</Det4>

            </div>   
 )
}

export default Detail;