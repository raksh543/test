import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import CollapsingItem from './AccordionItem';

function Accordion({ data, className }) {
  const [open, setOpen] = useState(-1);
  return (
    <div className={className}>
      <div style={{
        display: 'flex', flexDirection: 'row', boxSizing: 'border-box', flex: 1,
        flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'
      }}>
        {data.map((item, i) => (
          <div style={{ flex: 1, minWidth: '38vw', boxSizing: 'border-box', marginTop: '2rem' }}>
            <Fragment key={item.title}>
              {item.content ? (
                <CollapsingItem
                  i={i}
                  open={open}
                  onPointerDown={itemId =>
                    open === itemId ? setOpen(false) : setOpen(itemId)
                  }
                  {...item}
                />
              ) : (
                  <div>{item.content}</div>
                )}
            </Fragment>
          </div>
        ))}
      </div>
    </div>
  );
}

export default styled(Accordion)`
  display: block;
  text-align: left;
`;