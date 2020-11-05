import React from 'react';
import styled from 'styled-components'
import Build from '@material-ui/icons/Build';
import LineWeight from '@material-ui/icons/LineWeight';
import Icon from '@mdi/react';
import { mdiBlinds } from '@mdi/js';
import { mdiGarage } from '@mdi/js';

const StyledMapPopupContent = styled.div`
.mapPopupContent{
  display: flex;
  align-items: center;
  justify-content: center;
  &__logoWrapper{
  margin-right: 15px;
  }
  &__logoImg{
    height: 50px;
  }
  &__text{
    font-size: 18px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__iconWrapper{
    margin: -5px;
  }
  &__icon{
    padding: 5px;
  }
  &__headline{
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
`;

export const MapPopupContent = () => (
    <StyledMapPopupContent>
        <div className='mapPopupContent'>
            <div className='mapPopupContent__logoWrapper'>
                <img className='mapPopupContent__logoImg' src='img/montujemezaluzie.png'/>
            </div>
            <div className='mapPopupContent__text'>
                <div className='mapPopupContent__headline'>Stínící technika</div>
                <div className='mapPopupContent__iconWrapper'>
                    <LineWeight className='mapPopupContent__icon' titleAccess='Rolety'/>
                    <Icon className='mapPopupContent__icon' path={mdiBlinds}
                          title="Zaluzie"
                          size={1}/>
                    <Icon className='mapPopupContent__icon' path={mdiGarage}
                          title="Garážová vrata"
                          size={1}/>
                </div>
            </div>
        </div>
    </StyledMapPopupContent>
);