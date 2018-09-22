import React from 'react'
import styled from 'styled-components'
import grow from './grow.jpg'

const CommunityContainer = styled.div`
`
const CommunityContent = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 375px;
  padding: 0 20px;
  width: 100%;

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
      <CommunityImage src={grow} alt='Grow' />
      <p>
        At sweetgreen, we’re in the business of feeding people,
        and we’re out to change what that means. A portion of
        the proceeds from all koginut squash dishes in NYC will
        help support GROWNYC. Through their Beginning Farmers Program,
        Grow NYC trains the next generation of regional farmers through
        mentorship with established farmers and strengthens rural communities,
        farmers' markets and the region’s food system as a whole.
      </p>
    </CommunityContent>
  </CommunityContainer>

