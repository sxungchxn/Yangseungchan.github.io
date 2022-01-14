import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string;
        description: string;
      };
    };
  };
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`;

// const TextStyle = css`
//   font-size: 18px;
//   font-weight: 700;
//   color: gray;
// `;

// Kebab Case
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 7000;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`;

// Camel Case
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}));

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { author, description, title },
    },
  },
}: InfoPageProps) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {/*<div css={TextStyle}>{title}</div>*/}
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
      {title} {description} {author}
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
