import styled from "styled-components"
import banner from "../../img/banner.jpg"

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    top:-128px;
    background: red;
    z-index: 1;


    @media (min-width: 1000px){
        top: -170px;
    }   

    .parallax {
        background-image: url(${banner});
        min-height: 100vh; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .innertxt{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: rgba(13, 61, 102, 0.7);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        h1{
            width: 90%;
            font-family: ${props => props.theme.bannerFont};
            font-size: clamp(2rem, 7vw, 5rem);
            color: ${props => props.theme.whiteColor};
            text-align: center;
            margin-top: 150px;

            @media (min-width: 1200px){
                width: 60%;
            }
        }

        button{
            padding: 18px 52px;
            margin: 32px auto;
            border-radius: 10px;
            border: none;
            background: ${props => props.theme.defaultColor};
            color: ${props => props.theme.whiteColor};
            font-family: ${props => props.theme.secondaryFont};
            font-weight: bold;
        }

        img{
            width: clamp(4rem, 7vw, 6rem);
            animation: imageDown 3.5s infinite;
        }

        @keyframes imageDown{
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(50px);
            }
            100%{
                transform: translateY(0);
            }
        }
    }

`