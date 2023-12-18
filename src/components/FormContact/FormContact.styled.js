import styled from "styled-components";

export const Container = styled.div`
font-family: 'Rubik Bubbles', cursive;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
background-color: rgba(210, 192, 255, 0.13);

margin: 26px auto 0 auto;
width: 400px;
border-color: springgreen;
border-radius: 10px;
box-shadow: 0 5px 10px 5px rgba(0, 255, 255, 0.46);


form{
    display: flex;
    align-items: center;
    flex-direction:column;
    gap: 20px;
    padding-top: 22px;
}
form>div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 8px;
}
form>button{
    width: 100px;
    height: 30px;
    margin-bottom: 12px;
    cursor: pointer;
}
form>div>label{
    font-size: 22px;
    text-transform: uppercase
}
form>div>input{
    height: 28px;
}
`;