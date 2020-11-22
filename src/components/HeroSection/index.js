import React from 'react'
import {HeroContainer, HeroBg, PhotoBg, 
    HeroContent, HeroH1, HeroP, HeroQ, HeroBtnWrapper, Form} 
  from './HeroElements';
import Photo from '../../photos/Photo.jpg';
import { Button } from '../ButtonElement'


const Hero = () => {
    return (
        <HeroContainer id="home">
            {/* <HeroBg>
                <PhotoBg img src={'/Photo.jpg'}/>
            </HeroBg> */}

            <HeroContent>
                <HeroH1>
                    Motivating Your Everyday
                </HeroH1>

                <HeroP>
                    No longer are the days spent without knowing
                    exactly what you did. 
                    <br></br>
                    <br></br>
                    I don't know what is going on. - Wrong.
                </HeroP>

                <HeroQ>
                    1. What is your occupation? 
                </HeroQ>
                <HeroBtnWrapper>
                    
                    <Form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <Button to="signup"
                    primary = 'true'
                    dark = 'true'>
                        Submit
                    </Button>
                    </Form>
                </HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    );
};


export default Hero
