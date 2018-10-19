import React from 'react'
import styled from 'styled-components'
import grow from './grow.png'
import row7 from './row-7.svg'

const CommunityContainer = styled.div`
  margin-top: -110px;
`
const CommunityContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 20px 0 180px;
  width: 100%;
`

const CommunityBlock = styled.div`
&:first-child {
  width: 220px;
}
&:last-child {
  width: calc(100% - 220px);
}
& > p {
  font-size: 16px;
  line-height: 32px;
  margin: 15px 0;
  margin-top: 0;
}
`

const CommunityImage = styled.img`
  display: block;
  margin-bottom: 25px;
  src: url(${props => props.src});
  width: 150px;
`

export const CommunityDesktop = () =>
  <CommunityContainer>

    <CommunityContent>
      <CommunityBlock>
        <CommunityImage src={row7} alt='Row 7' />
      </CommunityBlock>
      <CommunityBlock>
        <p>
          At sweetgreen, we’re in the business of feeding people,
          and we’re out to change what that means. A portion of
          the proceeds from all koginut squash dishes in NYC will
          help support GROWNYC. Through their Beginning Farmers Program,
          Grow NYC trains the next generation of regional farmers through
          mentorship with established farmers and strengthens rural communities,
          farmers' markets and the region’s food system as a whole.
        </p>
      </CommunityBlock>
    </CommunityContent>

    <CommunityContent>
      <CommunityBlock>
        <CommunityImage src={grow} alt='Grow' />
      </CommunityBlock>
      <CommunityBlock>
        <p>
          At sweetgreen, we’re in the business of feeding people,
          and we’re out to change what that means. A portion of
          the proceeds from all koginut squash dishes in NYC will
          help support GROWNYC. Through their Beginning Farmers Program,
          Grow NYC trains the next generation of regional farmers through
          mentorship with established farmers and strengthens rural communities,
          farmers' markets and the region’s food system as a whole.
        </p>
      </CommunityBlock>
    </CommunityContent>

  </CommunityContainer>

