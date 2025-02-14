import styled from "styled-components";

function Card({ title, desc, children }) {
    return (
        <CardWrapper>
            <Head>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Head>
            <div>{children}</div>
        </CardWrapper>
    );
}

export default Card;

const CardWrapper = styled.div`
    border: 1px solid #dddddd;
`;

const Head = styled.div`
    border-bottom: 1px solid #dddddd;
`;
const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
`;

const Desc = styled.div`
    border-bottom: 1px solid #dddddd;
`;
