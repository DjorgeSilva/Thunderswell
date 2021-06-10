import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 80px 0;

    @media (min-width: 1200px){
        height: 100vh;
        padding: 0;
    }

`

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;

    h1{
        font-family: ${props=> props.theme.bannerFont};
        font-size: clamp(2rem, 4vw, 4rem);
        text-align: center;
    }

    p{
        text-align: center;
    }

    .row{
        width: 100%;
        height: fit-content;
        margin-top: 80px;

        .coluna{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img{
                width: 100%;
                margin-top: 50px;
            }

            h4{
                margin: 30px auto; 
            }

            p{

            }

            .icone-grid{
               width: 50px;
            
            }
        }
    }



`