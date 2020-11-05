import React from 'react'
import styled, {withTheme} from 'styled-components'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Truncate from 'react-truncate';

const StyledServiceCard = styled.div`
  .serviceCard{
    width: 300px;
    &__media{
      height: 200px;
    }
    &__text{
      height: 60px;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
    }
  }
`;

export const ServiceCard = withTheme(({headline, text, imgSrc, onCLick}) => {
    return (
        <StyledServiceCard>
            <Card className='serviceCard' onClick={onCLick}>
                <CardActionArea>
                    <CardMedia
                        className='serviceCard__media'
                        image={imgSrc}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {headline}
                        </Typography>
                        <div className='serviceCard__text'>
                            <Truncate lines={3}>
                                {text}
                            </Truncate>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Více
                    </Button>
                </CardActions>
            </Card>
        </StyledServiceCard>
    );
});
