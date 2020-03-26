import styled from 'styled-components';


export const HeadingBig = styled.span`
    font-size: 44px;
    line-height: 48px;
    font-weight: 1000;
`;

export const HeadingSmall = styled.span`
    font-size: 16px;
    font-weight: 1000;
    line-height: 20px;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const SecondaryText = styled.span`
    font-size: 17px;
    line-height: 23px;
    color: #282828;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const AuthorNameBlue = styled.div`
    margin-right: 5px;
    font-size: 14px;
    color: #282828;
    span {
        font-size: 14px;
        margin-left: 4px;
        font-weight: 600;
        color: #0787B1;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
`;

export const AuthorNameGrey = styled.span`
    margin-right: 5px;
    font-size: 12px;
    font-weight: 500;
    color: grey;
`;

export const ArticleType = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    color: #0787B1;
    margin-left: 4px;
    font-weight: 400;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const PublishTime = styled.span`
    font-size: 12px;
    color: grey;
    font-weight: 600;
    margin-top: 10px;
`;

export const ImageSource = styled.span`
    font-size: 12px;
    color: grey;
    font-weight: 500;
`;

export const HR = styled.div`
    border-bottom: 1px solid #D5D7D8;
`;

export const Highlighted = styled.span`
    color: #0787B1;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Italic = styled.span`
    font-style: italic;
`;

export const Price = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`;