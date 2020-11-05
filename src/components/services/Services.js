import React from 'react'
import styled, {withTheme} from 'styled-components'
import {ServiceCard} from "./ServiceCard";
import {SimpleModal} from "../modal/SimpleModal";
import {ServiceJalousie} from "./ServiceJalousie";
import {ModalContent} from "../modal/ModalContent";
import {ServiceBlinds} from "./ServiceBlinds";
import {ServiceGarageDoor} from "./ServiceGarageDoor";
import {ServiceEzs} from "./ServiceEzs";
import {ServiceSmartHome} from "./ServiceSmartHome";

const StyledServices = styled.div`
  .services{
    margin: 50px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    &__card{
      margin: 20px;
      flex: 0 0 300px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Services = withTheme(() => {
    const modalContentDef = {
        JALOUSIE: {name: 'JALOUSIE', component: <ServiceJalousie/>},
        BLINDS: {name: 'BLINDS', component: <ServiceBlinds/>},
        GARAGE_DOOR: {name: 'GARAGE_DOOR', component: <ServiceGarageDoor/>},
        EZS: {name: 'EZS', component: <ServiceEzs/>},
        SMART_HOME: {name: 'SMART_HOME', component: <ServiceSmartHome/>}
    }
    const [modalContentName, setModalContentName] = React.useState(null);
    const handleCardClick = (modalContent) => {
        setModalContentName(modalContent)
    };
    const handleModalClose = () => {
        setModalContentName(null);
    };
    return (
        <StyledServices>
            <div className='services'>
                <div className='services__card'>
                    <ServiceCard
                        headline='Venkovní žaluzie'
                        text='Venkovní žaluzie mají mnoho podob a vyrábějí se z různých materiálů. Pojďme se podívat na jejich výhody.'
                        imgSrc='img/services/outdoor-jalousie.jpg'
                        onCLick={() => handleCardClick(modalContentDef.JALOUSIE.name)}
                    />
                </div>
                <div className='services__card'>
                    <ServiceCard
                        headline='Předokení rolety'
                        text='Venkovní rolety lze využít jako ochranu proti slunci, pro úplné zatemnění, ale i jako zábranu před únikem tepla skrz okenní otvor. V létě zabrání přehřívání interiéru, v zimě pak fungují jako tepelná izolace. Představují značnou úsporu nákladů za klimatizaci i vytápění. Navíc jde o účinnou ochranu vašeho soukromí i majetku. Zvýšíte tak bezpečnost daného objektu. Rolety také snižují hlučnost prostupující z okolí, zajistí vám klid na práci i pro kvalitní spánek. Roleta lze doplnit integrovanou sítí proti hmyzu.'
                        imgSrc='img/services/blinds.jpg'
                        onCLick={() => handleCardClick(modalContentDef.BLINDS.name)}
                    />
                </div>
                <div className='services__card'>
                    <ServiceCard
                        headline='Garážová vrata'
                        text='Už jste viděli vrata, která fungují jako roleta? Šetří místo, těsní a můžeme je instalovat i do hotových garáží, které neumožňují stavební úpravy'
                        imgSrc='img/services/roller-door.jpg'
                        onCLick={() => handleCardClick(modalContentDef.GARAGE_DOOR.name)}
                    />
                </div>
                <div className='services__card'>
                    <ServiceCard
                        headline='EZS systémy'
                        text='Provádíme návrh, montáž a servis zabezpečovacích systémů Jablotron ve vašem domě, chalupě nebo firemních prostorech.'
                        imgSrc='img/services/ezs.jpg'
                        onCLick={() => handleCardClick(modalContentDef.EZS.name)}
                    />
                </div>
                <div className='services__card'>
                    <ServiceCard
                        headline='Chytrá domácnost'
                        text='Automatizované ovládání žaluzií může probíhat automaticky, podle zadaných parametrů, nebo pomocí aplikace. Řízení může být podřízeno kupříkladu intenzitě slunečních paprsků nebo času.'
                        imgSrc='img/services/smartHome.jpg'
                        onCLick={() => handleCardClick(modalContentDef.SMART_HOME.name)}
                    />
                </div>
            </div>
            <SimpleModal open={!!modalContentName} onClose={handleModalClose}>
                <ModalContent onClose={handleModalClose}>
                    {modalContentDef[modalContentName] && modalContentDef[modalContentName].component}
                </ModalContent>
            </SimpleModal>
        </StyledServices>
    );
});
