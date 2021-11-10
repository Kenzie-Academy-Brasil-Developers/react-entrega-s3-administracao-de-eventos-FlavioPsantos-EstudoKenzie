import styled from "styled-components";

export const Container = styled.div`
width:100%;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
background-color: #DCDCDC;

ul{
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    li{
    flex: 1;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 10%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    cursor: pointer;
    border: 1px solid #F6F6F6;
    margin: 1px;
    :hover{
        transition: 1s;
    }span{
        text-align: left;
        width: 100%;
        line-height: 40px;
    }
    img{
        width: 60px;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        button{
            font-size: 15px;
            background-color: #F4DC39;
            height: 3vh;
            color: #726D72;
            cursor: pointer;
            border: none;
            margin-top: 5px;
            border-radius: 8px;
            width: 100%;
        }
    }
    }
}
`