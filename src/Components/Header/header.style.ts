import styled from "styled-components"

interface Props {
    isOpen: boolean;
}


export const Wrapper = styled.header`
    width: 100%;
    height: 128px;
    background: ${props => props.theme.primaryColor};
    z-index: 1;
`

export const MenuMobile = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper-img{
        width: 50%;

        img{
            cursor: pointer;
            width: 250px;

            @media (max-width: 350px){
                width: 150%;
            }
        }
    }

    .wrapper-menu-mobile{
        width: 50%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        .icone{
            cursor: pointer;
            font-size: 2.5rem;
            color: ${props => props.theme.defaultColor};
        
            &:hover{
                color: ${props => props.theme.hoverColor};
            }
        }
    }
`

export const SideBar = styled.div.attrs((props: Props) => {
    return {
        isOpen: props.isOpen,
        style: {
            left: props.isOpen ? '0' : '-2000px'
        },
    };
})`
    width: 270px;
    height: 100vh;
    background: ${props => props.theme.primaryColor};
    position: absolute;
    z-index: 1000;
    top: 0;

    nav{
        width: 100%;
        height: fit-content;

        ul{
            width: 100%;
            height: fit-content;
            padding-left: 20px;

            li{
                width: 100%;

                .link{
                    color: #fff;
                    font-weight: 500;
                    
                    &:hover{
                        color: ${props => props.theme.hoverColor};
                    }


                    .logo{
                        width: 180px;
                        margin: 30px auto;
                    }
                }
            }
        }
        
    }
`