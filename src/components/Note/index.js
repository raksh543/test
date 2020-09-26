import React from 'react';
import styled from 'styled-components';

const Note = ()  => {
    const Note = styled.div`
        background-color: #F2F9E8;
        flex-wrap: wrap;
        padding: 1.125em 0.625em;
        border-radius: 5px;
        max-width: 850px;

        .text{
            color: #316F01;
            font-size: 1rem;
        }
    `

    return(
        <Note>
            <span className="text">
            Note : - Due to government restrictions around COVID-19, you may experience a slight delay in delivery. We regret the inconvenience and request you to please bear with us in this extremely challenging situation.
            </span>
        </Note>
    )
}

export default Note;