
import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';

import { reSendEmailConfirm } from '../actions/user';


const styles = theme => ({
  wrapper: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class ReSendEmail extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      message: this.props.message || '',
      afterSend: this.props.afterSend || false
    };
  }

  render() {
    const { message, afterSend } = this.state;
    const { shouldShow, fadeProps, wrapperProps, classes } = this.props;
    return (
      <Fade {...fadeProps} in={shouldShow}>
        <Typography className={classes.wrapper} gutterBottom component={'div'} {...wrapperProps}>
          <span>{message}</span>
          <span>
            click
            <span style={{ cursor: 'pointer' }} onClick={this.sendEmail}> here </span>
            to
            {`${afterSend ? ' re ':' '}send the email confirmation`}
          </span>
        </Typography>
      </Fade>
    );
  }

  sendEmail = async () => {
    try {
      await reSendEmailConfirm(this.props.email);
      this.showEmailSent();
    }
    catch (e) {
      console.log(e);
    }
  };

  showEmailSent = () => {
    this.setState({
      message: 'Email sent if it did not show up please ',
      afterSend: true
    });
  };
}

export default withStyles(styles)(ReSendEmail);
