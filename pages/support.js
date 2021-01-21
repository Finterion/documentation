import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Button, Divider} from "@material-ui/core";
import Link from "../src/Link";
import {useTypographyStyles} from "../src/styles";
import ArticleView from "../src/views/ArticleView";
import MarkdownArticle from "../src/markdown/MarkdownArticle";

const Support = props => {
    const typographyClasses = useTypographyStyles();
    return (
        <Container maxWidth={"md"}>
            <ArticleView
                showSource={false}
                sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/static/articles/support.md'}
            >
                <MarkdownArticle markdown={props.markdown}/>
            </ArticleView>
            <br/>
            <br/>
            <Typography className={typographyClasses.sectionHeader}>
                One-time Donations
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography className={typographyClasses.body}>
                We accept donations through these channels:
            </Typography>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <Button component={Link} naked href={'https://paypal.me/mvduyn?locale.x=nl_NL'}><img height={100} width={100} src={"./paypal.png"} /></Button>
                </Grid>
            </Grid>
            <br/>
            <Typography className={typographyClasses.sectionHeader}>
                Recurring Pledges
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography className={typographyClasses.body}>
                Recurring pledges come with exclusive perks, e.g. having your name listed
                in the Investing Algorithm Framework GitHub repository, or have your company logo placed on this website.
            </Typography>
            <ul>
                <li>
                    <Typography className={typographyClasses.body}>
                        Become a backer or sponsor via Patreon (Goes directly to support of developers working on the project)
                    </Typography>
                </li>
                <li>
                    <Typography className={typographyClasses.body}>
                        Become a backer or sponsor via OpenCollective (Goes directly to support of developers working on the project)
                    </Typography>
                </li>
            </ul>
            <br/>
            <Typography className={typographyClasses.sectionHeader}>
                Current Premium Sponsors
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography className={typographyClasses.sectionHeaderSecond}>
                Special Sponsors
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography className={typographyClasses.sectionHeaderSecond}>
                Platinum Sponsors
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography className={typographyClasses.sectionHeaderSecond}>
                Patreon Gold
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography className={typographyClasses.sectionHeaderSecond}>
                Patreon Silver
            </Typography>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../static/articles/support.md');
    return { props: { markdown: markdown.default} }
}

export default Support;