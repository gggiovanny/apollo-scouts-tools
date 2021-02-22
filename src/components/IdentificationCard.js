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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='650' height='420' preserveAspectRatio='none' viewBox='0 0 650 420'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3crect width='650' height='420' x='0' y='0' fill='url(%23SvgjsLinearGradient1011)'%3e%3c/rect%3e%3cpath d='M650 0L621.57 0L650 176.47z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M621.57 0L650 176.47L650 199.48L618.87 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M618.87 0L650 199.48L650 211.76999999999998L300.89 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M300.89 0L650 211.76999999999998L650 277.59L251.1 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 420L229.36 420L0 328.2z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 328.2L229.36 420L377.95000000000005 420L0 215.10999999999999z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 215.11L377.95000000000005 420L408.4200000000001 420L0 164.61z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 164.61L408.4200000000001 420L489.49000000000007 420L0 156.87z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='650' height='420' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='91.15%25' y1='-13.69%25' x2='8.85%25' y2='113.69%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1011'%3e%3cstop stop-color='rgba(0%2c 128%2c 51%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(14%2c 42%2c 71%2c 1)' offset='0.16'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
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
  grid-gap: 35px;
  grid-template-columns: 10px auto;
  font-size: 2em;
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
  font-size: 25px;
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
