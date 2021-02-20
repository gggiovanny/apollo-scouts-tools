import styled from 'styled-components'

const IdCardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: ${(props) => (props.size ? 85.6 * props.size : 85.6)}mm;
  height: ${(props) => (props.size ? 53.98 * props.size : 53.98)}mm;
  display: grid;
  grid-template:
    'Title Subtitle'
    'Credits Chip'
    'Name Name';
  grid-gap: 10px;
  padding: 5mm;
`

const Title = styled.h1`
  grid-area: Title;
`

const Subtitle = styled.h2`
  grid-area: Subtitle;
`

const Credits = styled.div`
  grid-area: Credits;
`

const Chip = styled.div`
  grid-area: Chip;
`

const Name = styled.h3`
  grid-area: Name;
`

export const IdentificationCard = () => {
  return (
    <>
      <IdCardWrapper size={2}>
        <Title>Apollo ID Card</Title>
        <Subtitle>Tropero</Subtitle>
        <Credits>10 apollos</Credits>
        <Chip>[]</Chip>
        <Name>Giovanny González Baltazar</Name>
      </IdCardWrapper>
    </>
  )
}
