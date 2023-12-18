import styled from "styled-components";

export const Container = styled.div`
list-style:none;
font-family: 'Rubik Bubbles', cursive;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: auto;
gap: 20px;

margin: 26px auto 0 auto;
width: auto;


div{
    display: flex;
    justify-content: center;
padding-left: 16px;
padding-right: 16px;
gap: 18px;


background-color: rgba(210, 192, 255, 0.13);
border-color: springgreen;
border-radius: 10px;
box-shadow: 0 5px 10px 5px rgba(0, 255, 255, 0.46);
}
div>p{
    display: flex;
}
div>button{
cursor: pointer;
border:none;
background-color: transparent;
font-size: 28px;
&:hover{
    color:red
}
}


`