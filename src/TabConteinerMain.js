import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import myImage from './space.jpg'
import Button from './Button'
const styles = {
  card: {
    maxWidth: "100%",
  },
  media: {
    objectFit: 'cover',

  },
};

function ImgMediaCard(props) {
  const { classes, onClick } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={() => onClick(0)}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="450"
            image={(myImage)}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
      <Button child='Нажми на меня' onClick={() => onClick(0)}/>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);