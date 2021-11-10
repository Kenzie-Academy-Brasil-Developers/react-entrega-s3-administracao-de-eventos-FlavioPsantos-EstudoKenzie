import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 10vh;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    box-shadow: -3px 11px 22px -8px #000000;
    background-color: #F6F6F6;
    @media(min-width:1100px){
        width: 1100px;
    }
    .kenevento-shortCut{
        cursor: pointer;
        :hover{
             font-size: 2em; color: #3E3B40;
             transition: 1s;
           
        }
    }
    div{
            color: #3E3B40;
            font-size: 20px;
            margin-left: 40px;
            line-height: 20px;
        }
    ul{
        list-style-type: none;
        display: flex;
        margin-right: 40px;
        li{
            cursor: pointer;
            color: #3E3B40;
            margin: 10px;
            span{
                font-weight: bold;
                color: #F54600;
                vertical-align: top;
                font-size: 10px;
            }
        }
        
    }
`