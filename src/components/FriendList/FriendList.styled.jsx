import styled from '@emotion/styled';

export const FriendsRoster = styled.ul`
    padding: 0px;
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 40px;
`;

export const FriendsItem = styled.li`
    padding: 16px;
    text-align: center;
`;
export const FriendImg = styled.img`

`;

export const FriendName = styled.p`
 margin: 0px;
 
`;
export const Status = styled.span`
display: block;
width: 8px;
height: 8px;
border-radius: 50%;
background-color: ${(props) => { return props.status ? `${props.theme.colors.true}` : `${props.theme.colors.false}` }};
`;