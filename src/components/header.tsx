import * as React from 'react';
import forkOnGitHub from '../assets/fork_on_github.png';
import goToBlog from '../assets/go_to_blog.png';

const header = () => {
    return(
        <div className='cornerBanners'>
            <a href="https://github.com/ivailop7/IvoSudoku">
            <img className='rightLink'
                    src={forkOnGitHub}
                    alt="Fork me on GitHub" />
            </a>

            <a href="http://www.ivaylopavlov.com/">
            <img className='leftLink'
                    src={goToBlog}
                    alt="Go To Blog" />
            </a>
            <h2>Ivo Sudoku</h2>
        </div>
    );
};

export default header;