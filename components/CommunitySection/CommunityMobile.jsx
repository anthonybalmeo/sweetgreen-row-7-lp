import React from 'react'
import styled from 'styled-components'
import grow from './grow.png'
import row7 from './row-7.svg'

const CommunityContainer = styled.div`
`
const CommunityContent = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  margin-bottom: 64px;

  & > p {
      font-size: 16px;
      line-height: 32px;
      margin: 15px 0;
  }
`
const CommunityImage = styled.img`
  display: block;
  margin-bottom: 25px;
  src: url(${props => props.src});
  width: 194px;
`

export const CommunityMobile = () =>
  <CommunityContainer>

    <CommunityContent>
      <CommunityImage src={row7} alt='Row 7' />
      <p>
        Founded by Chef Dan Barber, vegetable breeder Michael Mazourek and organic seedsman Matthew Goldfarb, Row 7 is a seed company grounded in the notion that deliciousness can change the world. Row 7 pairs chefs and plant breeders to develop new varieties of vegetables and grains that make an impact in the soil and at the table, striving to make ingredients taste better before they ever hit a plate.
      </p>
    </CommunityContent>

    <CommunityContent>
      <CommunityImage src={grow} alt='Grow' />
      <p>
        At sweetgreen, we’re in the business of feeding people, and we’re out to change what that means. A portion of the proceeds from all Koginut squash dishes in NYC will help support GrowNYC. Through their Beginning Farmers Program, GrowNYC trains the next generation of regional farmers through mentorship with established farmers and strengthens rural communities, farmers' markets and the region’s food system as a whole.
      </p>
    </CommunityContent>

  </CommunityContainer>

