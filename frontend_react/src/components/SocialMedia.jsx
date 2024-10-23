import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/Choaib-ELMADI" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </div>
        <div>
          <a href="https://instagram.com/choaib_elmadi?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Choaib3Elmadi" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>
    </div>
  );
}

export default SocialMedia;