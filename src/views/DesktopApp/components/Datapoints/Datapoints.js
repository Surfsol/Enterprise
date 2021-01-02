import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, colors, Button, Typography,  List,
    ListItem,
    ListItemAvatar, Avatar} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardJobTag } from 'components/organisms';
const useStyles = makeStyles(theme => ({
    root: {},
    image: {
      boxShadow:
        '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
      borderRadius: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        maxWidth: 500,
      },
    },
    textWhite: {
        color: 'white',
      },
    list: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(4),
        },
        color: 'white',
        paddingLeft: "2em"
    },
    listItem: {
        textAlign: "left",
        listStyle: "disc",
        display: "block",
        display: "list-item",
        paddingLeft:"0px"
    }
  }));

  const Datapoints = props => {
    const { className, ...rest } = props;
    const classes = useStyles();
  
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
  
    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Grid container spacing={2} direction="row"  justify="center" alignItems="center">
                <Grid item xs={12}>
                <Typography
                    variant="h4"
                    className={clsx(classes.textWhite, classes.title)}
                    align="center"
                >
                    The most comprehensive databank for East Africa's cross-border traders 
                </Typography>
                </Grid>
                <Grid container spacing={2} direction="row"  justify="center" alignItems="flex-start">
                    <Grid item xs={3} align="left">
                        <Typography
                        variant="h5"
                        className={clsx(classes.textWhite, classes.title)}
                        align="left"
                    >
                        Demographics 
                        </Typography>
                        <List className={classes.list} dense="True">
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Age</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Border Crossing Frequency</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Border Location</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Country of Residence</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Education Level</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Gender</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Preferred Language</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Cross Border Trade as Primary Income</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Grow/Produce their Own Goods</Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3} align="left">
                        <Typography
                        variant="h5"
                        className={clsx(classes.textWhite, classes.title)}
                        align="left"
                    >   Trade Insights 
                        </Typography>
                        <List className={classes.list} dense="True">
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Requested Agencies</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Requested Documents</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Requested Procedures, by Commodity</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Requested Procedures, by Commodity Category</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Requsted Procedures, by Destination</Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3} align="left">
                        <Typography
                        variant="h5"
                        className={clsx(classes.textWhite, classes.title)}
                        align="left"
                    >   Business Insights 
                        </Typography>
                        <List className={classes.list} dense="True">
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Currency Exchanges</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Traders' Buying/Selling Country</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Traders' Buying/Selling Market</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Traded Commodities' Origin</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Traded Commodities</Typography>
                            </ListItem>
                            <ListItem className={classes.listItem} data-aos="fade-up">
                                <Typography variant="h6" className={clsx(classes.textWhite)}>Traded Commodity Categories</Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </div>

);
};
export default Datapoints;