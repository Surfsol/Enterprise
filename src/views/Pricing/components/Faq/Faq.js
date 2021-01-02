import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme, } from '@material-ui/core/styles';
import { useMediaQuery, Grid, ListItem, ListItemText } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Accordion } from 'components/organisms';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const useStyles = makeStyles(theme => ({
  root: {},
  fontWeightBold: {
    fontWeight: 'bold',
  },
  faqTitle: {
    display: 'block',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
}));
const browserHistory = createBrowserHistory();

const items = [{
    id: 'faq-1',
    title: 'Flexible access to facilities.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-2',
    title: 'Snacks, drinks, coffee, and more.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-3',
    title: 'On site tech support.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-4',
    title: 'Flexible access to facilities.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-5',
    title: 'Snacks, drinks, coffee, and more.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-6',
    title: 'On site tech support.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}];
const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Frequently asked questions"
        titleProps={{
          className: classes.fontWeightBold,
        }}
      />
      
    <Router history={browserHistory}>
        <Accordion items={items} />
    </Router>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
