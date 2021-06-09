import styled from "styled-components"

export const Wrapper = styled.header`
    display: none;
    width: 100%;
    height: 170px;

    @media (min-width: 1000px){
        display: block;
    }
`

export const Container = styled.header`
    width: 100%;
    height: 100%;
    background: black;

    .wrapper-contact{
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        .wrapper-email{
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            p{
                color: ${props => props.theme.whiteColor};
                
                .icone-email{
                    margin-right: 10px;
                }
            }
            
            .style-p{
                padding: 0 20px;
            }
        }

        .wrapper-rede-social{
            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .icone-rede-social{
                cursor: pointer;
                font-size: 1.3rem;
                color: ${props => props.theme.whiteColor};
            }

            .facebook-icon{
                margin-right: 20px;
            }
        }
    }

    .wrapper-menu{
        width: 100%;
        height: 45%;

        display: flex;
        justify-content: center;
        align-items: center;

        .wrapper-logo{
            width: 30%;
            display: flex;
            justify-content: flex-start;

            img{
                width: 200px;
            }
        }
        
        .wrapper-menu-desktop{
            width: 65%;
            display: flex;
            justify-content: flex-end;



            nav{
                width: 100%;
                margin-top: 30px;

                ul{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    li{
                        .link{
                            color: #fff;    
                        }
                    }
                }
            }
        }
    }
`