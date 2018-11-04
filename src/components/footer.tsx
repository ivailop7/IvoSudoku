import * as React from 'react';
import facebookImg from '../assets/facebook.png';
import googleImg from '../assets/google.png';
import linkedinImg from '../assets/linkedin.png';
import pinterestImg from '../assets/pinterest.png';
import twitterImg from '../assets/twitter.png';

const footer = () => {
    return(
        <div className='shareButtons' id='shareButton'>
            <div className='shareTheGame'>Share the game</div>
            <a href="https://plus.google.com/share?url=http://sudoku.ivaylopavlov.com">
                <img src={googleImg} alt="Google" />
            </a>
            <a href="http://www.facebook.com/sharer.php?u=http://sudoku.ivaylopavlov.com">
                <img src={facebookImg} alt="Facebook" />
            </a>
            <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://sudoku.ivaylopavlov.com">
                <img src={linkedinImg} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/share?url=http://sudoku.ivaylopavlov.com&amp;text=I%20played%20Ivo%20Sudoku%20at&amp;hashtags=IvoSudoku">
                <img src={twitterImg} alt="Twitter" />
            </a>
            <a href="https://pinterest.com/pin/create/button/?url=sudoku.ivaylopavlov.com&media=sudoku.ivaylopavlov.com&description=Ivo%20Sudoku%20Game">
                <img src={pinterestImg} alt="Pinterest" />
            </a>
        </div>
    );
};

export default footer;