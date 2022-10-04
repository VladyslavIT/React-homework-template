import styled from '@emotion/styled';

export const StatsSection = styled.section`
    margin-bottom: 40px;
`;

export const Title = styled.h2`
    text-align: center;
    margin: 0px;
    margin-bottom: 14px;
`;

export const StatsList = styled.ul`
    list-style: none;
    margin: 0px;
    display: flex;
    justify-content: center;
    gap: 24px;

`;

export const StatsItem = styled.li`
    padding: 8px;
    background-color: ${(props) => `${props.theme.colors.stats}`};
    border-radius: 8px;
`;

export const StatsLabel = styled.span`

`;

export const StatsPercentage = styled.span`
    padding-left: 6px;
`;