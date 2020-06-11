import React from 'react';

import Header from '../../components/Header';
import Indicator from '../../components/Indicator';

import { Container, Grid, GridItem, Text, Rectangle } from './styles';
import imgLeft from '../../assets/person-left.png';
import imgRight from '../../assets/person-right.png';
import gridItemImg1 from '../../assets/1.png';
import gridItemImg2 from '../../assets/2.png';
import gridItemImg3 from '../../assets/3.png';
import gridItemImg4 from '../../assets/4.png';
import gridItemImg5 from '../../assets/5.png';
import gridItemImg6 from '../../assets/6.png';

const Prevention = () => {
  return (
    <Container>
      <Header />
      <Grid>
        <GridItem>
          <img src={gridItemImg1} alt="hand sanitizer" />
          <p>asdf</p>
        </GridItem>
        <GridItem>
          <img src={gridItemImg2} alt="person inside house" />
          <p>asdf</p>
        </GridItem>
        <GridItem>
          <img src={gridItemImg3} alt="mask" />
          <p>asdf</p>
        </GridItem>
        <GridItem>
          <img src={gridItemImg4} alt="two people apart from each other" />
          <p>asdf</p>
        </GridItem>
        <GridItem>
          <img src={gridItemImg5} alt="dropper" />
          <p>asdf</p>
        </GridItem>
        <GridItem>
          <img src={gridItemImg6} alt="gavel" />
          <p>asdf</p>
        </GridItem>
      </Grid>
      <Text>Symptoms</Text>
      <Rectangle>
        <img src={imgLeft} alt="Person coughing" />
        <div>
          <h3>Dry Cough</h3>
          <p>
            The cough to look out for is a new, continuous dry cough. This means
            coughing a lot for more
          </p>
        </div>
      </Rectangle>
      <Rectangle>
        <img src={imgRight} alt="Person coughing" />
        <div>
          <h3>Fever</h3>
          <p>
            You have a fever if your temperature is above 37.8°C. This can make
            you feel warm,
          </p>
        </div>
      </Rectangle>
      <Indicator />
    </Container>
  );
};

export default Prevention;
