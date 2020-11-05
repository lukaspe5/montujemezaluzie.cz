import React from 'react';
import styled, {withTheme} from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

const StyledModalContent = styled.div`
    background-color: ${props => props.theme.modalBgClr};
    width: 768px;
    max-width: 70%;
    max-height: 90%;
    border-radius: 5px;
    position:relative;
    overflow: auto;
    .modalContent{
     &__close{
     position: sticky;
     top: 10px;
     right: 10px;
     display: flex;
     justify-content: flex-end;
     padding: 0 10px;
    }
     &__closeBtn{
     cursor: pointer;
     opacity: 0.6;
     transition: opacity, 200ms;
     &:hover{
      opacity: 1;
     }
     }
    &__content{
      padding: 10px 20px;
    }
    }
   
  .modalHeadline{
    position: relative;
    display: inline-block;
    font-size: 28px;
    font-weight: lighter;
    &::after{
      content: '';
      position: absolute;
      bottom: -10px;
      height: 4px;
      left: 0;
      width: 80%;
      background-color: ${props => props.theme.headlineUnderlineBgClr};
      border-radius: 2px;
    }
  }
  .modalParagraph{
  
  }
  .modalList{
    li{
    list-style: none;
    position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        top: 0;
        left: -1.5em;
        border-radius: 100%;
        margin-top: 0.5em;
        background-color: ${props => props.theme.listIndentClr};
      }
    }
  }
  .modalIcon{
  display: block;
  height: 50px;
  margin: auto;
  }
`;

export const ModalContent = withTheme(({children, onCLose}) => (
    <StyledModalContent>
        <div className='modalContent__close'>
            <CloseIcon className='modalContent__closeBtn' onClick={onCLose}/>
        </div>
        <div className='modalContent__content' onClick={e=>e.stopPropagation()}>
            {children}
        </div>
    </StyledModalContent>
));