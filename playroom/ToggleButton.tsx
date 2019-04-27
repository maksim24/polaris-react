import * as React from 'react';

import {ReactComponent} from '@shopify/react-utilities/types';
import compose from '@shopify/react-compose';

import {WithContextTypes} from '../src/types';
import {withContext, Button, ButtonProps} from '../src';

import {PlayToggleStateConsumer} from './ToggleState';
import {Omit, ToggleStateContext} from './types';

interface PlayToggleButtonProps extends Omit<ButtonProps, 'onClick'> {}

type ComposedPlayToggleButtonProps = WithContextTypes<ToggleStateContext> &
  PlayToggleButtonProps;

function PlayToggleButton(props: ComposedPlayToggleButtonProps) {
  const {
    context: {toggleState},
    ...rest
  } = props;

  return <Button onClick={toggleState} {...rest} />;
}

export default compose<PlayToggleButtonProps>(
  withContext<PlayToggleButtonProps, {}, ToggleStateContext>(
    PlayToggleStateConsumer,
  ),
)(PlayToggleButton) as ReactComponent<PlayToggleButtonProps>;
