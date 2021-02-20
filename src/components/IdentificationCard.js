import styled from 'styled-components'
import { FcSimCardChip } from 'react-icons/fc'
import { GiToken } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import { IconContext } from 'react-icons'

const IdCardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: ${(props) => (props.size ? 85.6 * props.size : 85.6)}mm;
  height: ${(props) => (props.size ? 53.98 * props.size : 53.98)}mm;
  display: grid;
  color: white !important;
  grid-template:
    'TitleArea TitleArea'
    'CreditsArea ChipArea'
    'Name Name';
  grid-gap: 10px;
  padding: 35px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1003)'%3e%3c/rect%3e%3cpath d='M1440 0L722.81 0L1440 221.67z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M722.81 0L1440 221.67L1440 230.95999999999998L643.9799999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M643.9799999999999 0L1440 230.95999999999998L1440 333.13L245.5499999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M245.54999999999995 0L1440 333.13L1440 341.8L106.10999999999996 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L549.69 560L0 492.53z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 492.53L549.69 560L665.0300000000001 560L0 426.21z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 426.21000000000004L665.0300000000001 560L851.6500000000001 560L0 160.85000000000002z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 160.85000000000002L851.6500000000001 560L894.7800000000001 560L0 129.10000000000002z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1003'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`

const TitleArea = styled.div`
  display: flex;
  grid-area: TitleArea;
  justify-content: space-between;
  align-items: baseline;
  height: 35px;
`

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 60px;
`

const Subtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
`

const CreditsArea = styled.div`
  grid-area: CreditsArea;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 10px auto;
  font-size: 1.5em;
  align-items: center;
  font-family: 'Inconsolata';
`

const ChipArea = styled.div`
  grid-area: ChipArea;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Name = styled.h3`
  grid-area: Name;
  font-family: 'Roboto Mono', monospace;
  font-size: 30px;
  display: flex;
  align-items: flex-end;
`

const ApollitoIcon = () => {
  return <GiToken style={{ color: '#E8D84F'}} />
}

export const IdentificationCard = ({apollitos, nombre, rango}) => {
  return (
    <>
      <IdCardWrapper size={2}>
        <TitleArea>
          <Title>Apollo ID Card</Title>
          <Subtitle>{rango}</Subtitle>
        </TitleArea>
        <CreditsArea>
          <ApollitoIcon /> <span>{apollitos} apollitos</span>
        </CreditsArea>
        <ChipArea>
          <FcSimCardChip size={100} />
        </ChipArea>
        <Name>{nombre}</Name>
      </IdCardWrapper>
    </>
  )
}
