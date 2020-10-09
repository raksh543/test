import React from 'react';
import styled from 'styled-components'

export default function Header() {

    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    cursor: pointer;
    border-radius: 50px;
    background: #ffffff;
    color: #5C5C5C;
    padding: 1rem 1.5rem;
    margin: 1rem;
    border: 1px solid #EAEAEA;
    font-size: 0.9rem;
    font-family: Roboto-Regular;

    :hover{
        background: #00AFEF;
        color: #ffffff;
    }
`;

    return (
        <div>
            <center>
                <Button>
                    FAQ's
            </Button>
                <Button>
                    RETURN POLICY
            </Button>
                <Button>
                    TERM & CONDITION
            </Button>
                <Button>
                    PRIVACY POLICY
            </Button>
            </center>
        </div>
    );
}
