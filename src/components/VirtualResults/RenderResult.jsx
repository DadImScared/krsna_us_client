
import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import CATEGORIES from '../../categories';
import Title from '../Title';
import { RenderResult as styles } from '../../styles/VirtualResults';


class RenderResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, classes } = this.props;
    return (
      typeof CATEGORIES[item.category] === 'string' ?
        (
          <ListItem>
            <ListItemText primary={
              <div>
                <div style={{ display: 'flex' }}>

                  <div style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>category: {item.category}</div>
                  {item.language ? <div style={{ marginRight: '8px' }}>language: {item.language}</div>:null}
                  {item.directory ? <div style={{ marginRight: '8px' }}>directory: {item.directory}</div>:null}
                  {item.year ? <div style={{ marginRight: '8px' }}>year: {item.year}</div>:null}
                  {item.issue ? <div style={{ marginRight: '8px' }}>issue: {item.issue}</div>:null}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ marginRight: '5px' }}>title: </span> <a style={{ textDecoration: 'none' }} href={item.link}><Title item={item} /></a>
                </div>
                {item.highlightedBody ? (
                  <div>
                    <span>content: </span>
                    <Typography>
                      <span className={classes.contentStyle} dangerouslySetInnerHTML={{ __html: item.highlightedBody }} />
                    </Typography>
                  </div>
                ):null}
                <Divider />
              </div>
            }/>
          </ListItem>
        )
        :
        React.cloneElement(CATEGORIES[item.category].component, {
          item: item
        })
    );
  }
}

export default withStyles(styles)(RenderResult);
