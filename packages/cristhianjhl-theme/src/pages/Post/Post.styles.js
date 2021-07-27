import { styled } from "frontity";

export const Wrapper = styled.section`
    width: 95%;
    max-width: 1260px;
    margin: 0 auto;
    min-height: calc(100vh - 250px);
`;

export const Information = styled.div`
    background-image: linear-gradient(to right, var(--white), var(--blueGray));
    margin-bottom: 1.25em;
    padding: 1.25em;
    border-left: 4px solid var(--primaryColor);
    font-size: 1rem;

    & > p {
        margin: 0 0 1.25rem 0;
        color: var(--darkGray);
    }

    & > a {
        text-decoration: none;
        color: var(--linkColor);
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 60rem;
    margin: 0 auto 1.25rem auto;
    background-color: rgba(255, 255, 255, 0.88);
    padding: 1.25rem;
    border-radius: var(--rounded);
    
    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    figure {
        margin: 1.25rem 0;
    }

    & > h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
    }

    & > p {
        line-height: 2;
    }

    a {
        color: var(--linkColor);
    }

    ul, ol {
        padding: 0 0 0 1.25rem;
        li {
            line-height: 2;
            padding: 0.625rem 0;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Thumbnail = styled.div`
    margin: 0 0 1.25rem 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;