import React from 'react';

import { StyledContainer, ImageWrapper, TextWrapper } from './articles-realted.styles';

import ImageArticle from '../../assets/images/asset1.jpg';

import { HeadingSmall, AuthorNameGrey, ArticleType } from '../constant.styles';

const ArticleRelated = () => (
    <StyledContainer>
        <ImageWrapper>
            <img src={ImageArticle} alt='article' />
        </ImageWrapper>
        <TextWrapper>
            <ArticleType>LEADERSHIP & MANAGING PEOPLE</ArticleType>
            <HeadingSmall>A Time to Lead with Purpose and Humanity</HeadingSmall>
            <AuthorNameGrey>by John</AuthorNameGrey>
        </TextWrapper>
    </StyledContainer>
);

export default ArticleRelated;