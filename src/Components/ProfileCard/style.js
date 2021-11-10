import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 80vh;
justify-content: space-between;
align-items: center;
width: 10%;
margin-left: 0;
background-color: #333333;
div{
    justify-content: center;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #E5D1E8;
    flex-direction: column;
}
ul{
    justify-content:flex-start;
    align-items: flex-start;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    text-align: left;
    li{
        font-size: 5px;
        justify-content: flex-end;
        width: 100%;
        margin: 0;
        color: #E5D1E8;
    }
}
`