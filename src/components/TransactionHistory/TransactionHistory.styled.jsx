import styled from '@emotion/styled';

export const Transaction = styled.table`
    margin: 0px auto;
    width: 80%;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
    
`;

export const TransactionHeading = styled.thead`
     background-color: ${(props) => `${props.theme.colors.heading}`};
`;

export const TransactionRow = styled.tr`
        text-align: center;

        :nth-of-type(2n) {
        background-color: ${(props) => `${props.theme.colors.row}`};
      }
`;