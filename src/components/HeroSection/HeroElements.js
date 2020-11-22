import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative:
    z-index: 1;

`;
/*things to add*/


export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;

export const PhotoBg = styled.image`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232323;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 777px) {
        font-size: 40px;
    }

    #media sreen and (max=width: 488px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 32px;
    color: #ffffff;
    font-size: 20px;
    text-align: bottom;
    max-width: 600px;

    @media screen and (max-width: 777px) {
        font-size: 20px;

    }

    @media sreen and (max=width: 488px) {
        font-size: 16px;
    }

`;

export const HeroQ = styled.p`
    margin-top: 32px;
    color: #ffffff;
    font-size: 30px;
    text-align: bottom;
    max-width: 600px;
    display: flex;
    justify-content: left;
    font-weight: bold;


    @media screen and (max-width: 777px) {
        font-size: 20px;

    }

    @media sreen and (max=width: 600px) {
        font-size: 16px;
    }

`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.form`
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
   
  }
`
