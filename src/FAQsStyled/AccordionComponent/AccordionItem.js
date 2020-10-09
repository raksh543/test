import React, { Fragment } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
// import Flex from 'components/Flex';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

function CollapsingItem({
  open, i, title, content, OpenIcon = false, CloseIcon = false, onPointerDown,
}) {
  const OpenedStateIndicator = CloseIcon || DefaultOpenedIndicator;
  const ClosedStateIndicator = OpenIcon || DefaultClosedIndicator;
  return (
    <Fragment>
      <div style={{border:'1px solid #EAEAEA', borderRadius: '5px', padding: '0 1rem', maxWidth: '500px'}}>
      <Wrapper >
        <div className="title" onPointerDown={() => onPointerDown(i)} >
          <Flex justify="space-between" style={{color: '${({ isOpen }) => isOpen ? #92C935 : #5c5c5c'}}>
            <div className="titleName" > { title } </div>
            <div className="titleIcon" > { open === i ? OpenedStateIndicator : ClosedStateIndicator } </div>
          </Flex>
        </div>
      </Wrapper>
      <div styles={{}}>
      <Content className="content" pose={open === i ? 'open' : 'closed'}isOpen={open === i} > { content }
      </Content>
      </div>
      </div>
    </Fragment>
  );
}
export default CollapsingItem;

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
`;


const Wrapper = styled.div`
  line-height: 1.6rem;
  user-select: none;
  font-size: 1rem;
  color: ${({ isOpen }) => isOpen ? '#92C935' : '#5c5c5c'};
  font-family: Roboto-Regular;
  .title {
    padding: 12px 0;
    color: ${({ isOpen }) => isOpen ? '#92C935' : '#5c5c5c'};
  .titleName {
    color: ${({ isOpen }) => isOpen ? '#92C935' : '#5c5c5c'};
    max-width: 95%;
    width: 100%;
    display: inline-block;
  }
  .titleIcon {
    max-width: 4%;
    width: 100%;
    display: inline-block;
  }
  }
`;

const ContentPose = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
});

const Content = styled(ContentPose)`
  line-height: 1.6rem;
  border-left: 2px solid #92C935;
  padding: 0 10px;
  color: #5c5c5c;
  font-family: Roboto-Regular;
  font-size: 0.9rem;
  overflow: hidden;
  margin: ${({ isOpen }) => isOpen ? '0rem 0 1rem 0.5rem' : 0};
`;

const DefaultOpenedIndicator = (<Icon icon={minus} />);
const DefaultClosedIndicator = (<Icon icon={plus} />);