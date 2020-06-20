import React from 'react'
import Card from './components/article-card'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    rootA: {
        maxWidth: '70%',
        margin: '32px auto',
        display: 'grid',
        gridTemplateColumns : '33% 33% 33%',
        gridRowGap: '24px',
        gridColumnGap: '12px',
        justifyItems: 'center',
        [theme.breakpoints.down('md')] : {
            maxWidth: '80%',
            gridTemplateColumns : '50% 50%',
          },
        [theme.breakpoints.down('sm')] : {
            maxWidth: '95%',
            gridTemplateColumns : '100%',
          },
    }
}));

const Archive = (props) => {
    const { posts } = props
    const classes = useStyles();
    // console.log(posts)
    return (
        <div className={classes.rootA}>
            { posts.length ? (
                posts.map(post => <Card featuredImage={post.node.featuredImage != null ? post.node.featuredImage.sourceUrl : '/placeholder-image.jpg'} id={post.node.id} title={post.node.title} excerpt={post.node.excerpt} slug={post.node.slug} />)
            ) : ''}
        </div>

    )
}

export default Archive