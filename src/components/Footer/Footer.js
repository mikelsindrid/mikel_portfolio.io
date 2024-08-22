import React from 'react';
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+65 8892-0577'>8892 0577</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:mikelsindrid@gmail.com'>mikelsindrid@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I hope you enjoy my portfolio!</Slogan>
        </CompanyContainer>
          <SocialContainer>
            <SocialIcons href='https://github.com'>
              <AiFillGithub size="3rem" />
            </SocialIcons>
          <SocialIcons href='https://whatsapp.com'>
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
