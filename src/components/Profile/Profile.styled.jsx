import styled from '@emotion/styled';

export const ProfileThumb = styled.div`
  width: 200px;
  margin: 0px auto 40px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${(props) => `${props.theme.colors.black}`};
`;

export const Description = styled.div`
    margin-bottom: 10px;

`;

export const Avatar = styled.img`
    width: 136px;

`;
 
export const Name = styled.p`
    margin-top: 8px;
    margin-bottom: 10px;
    font-size: large;
    font-weight: 700;
`;

export const Tag = styled.p`
    margin-bottom: 5px;
    margin-top: 0;
`;

export const Location = styled.p`
    margin: 0;
    font-size: large;
`;

export const Stats = styled.ul`
    margin: 0px;
    list-style: none;
    text-align: left;
    background-color: ${(props) => `${props.theme.colors.activity}`};
    padding: 8px;

`;

export const StatsItem = styled.li`
    margin: 8px;
`;

export const Label = styled.span`
    padding-left: 5px;
`; 

export const Quantity = styled.span`
    padding-left: 14px;
`;