import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Process = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader title="Our process to find you a new job is fast" fadeUp />
      <Grid container spacing={4}>
          <Grid
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            data-aos="fade-up"
          >
            <DescriptionListIcon
              icon={
                <IconAlternate 
                  fontIconClass="arrow"
                  color={colors.blue} />
              }
              title="Multiple Filters"
              subtitle="Drill-down the data for sub-set specific insights"
              align="center"
            />
            </Grid>
            <Grid
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            data-aos="fade-up"
          >
            <DescriptionListIcon
              icon={
                <IconAlternate 
                  fontIconClass="arrow"
                  color={colors.blue} />
              }
              title="Compare Datasets"
              subtitle="Rapid on-the-fly comparisons to tailor your research"
              align="center"
            />
            </Grid>
            <Grid
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            data-aos="fade-up"
          >
            <DescriptionListIcon
              icon={
                <IconAlternate 
                  fontIconClass="arrow"
                  color={colors.blue} />
              }
              title="Download Data"
              subtitle="Download the data for my in-depth statistical analyses"
              align="center"
            />
          </Grid>
        <Grid item container xs={12} justify="center">
          <Button variant="contained" size="large" color="primary">
            get started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Process;
