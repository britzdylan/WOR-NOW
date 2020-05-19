import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from 'next/link';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const ArticleCard = (props) => {
const classes = useStyles();
const { featuredImage, title, excerpt, slug, id } = props

    return (
        <Card className={classes.root}>
      <Link href="#">
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={featuredImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <h2 gutterBottom variant="h5" component="h2"  
          dangerouslySetInnerHTML={ {
                        __html: title,
                    } } />
          <p variant="body2" color="textSecondary" component="p"
          dangerouslySetInnerHTML={ {
            __html: excerpt,
        } }
          />
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Link href={{ pathname: `/blog/${slug}`, query:  {id: `${id}` }}}><Button size="small" color="primary">Read More</Button></Link>
      </CardActions>
    </Card>
    )
}

export default ArticleCard