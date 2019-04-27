import * as React from 'react';

import {ReactComponent} from '@shopify/react-utilities/types';
import compose from '@shopify/react-compose';

import {WithContextTypes} from '../src/types';
import {withContext, Popover, PopoverProps} from '../src';
import {Omit, ToggleStateContext} from './types';

import {PlayToggleStateConsumer} from './ToggleState';

interface PlayPopoverProps extends Omit<PopoverProps, 'active' | 'onClose'> {}
type ComposedPlayPopoverProps = WithContextTypes<ToggleStateContext> &
  PlayPopoverProps;

function PlayPopover(props: ComposedPlayPopoverProps) {
  const {
    context: {active, toggleState},
    ...rest
  } = props;

  return <Popover active={active} onClose={toggleState} {...rest} />;
}

export default compose<PlayPopoverProps>(
  withContext<PlayPopoverProps, {}, ToggleStateContext>(
    PlayToggleStateConsumer,
  ),
)(PlayPopover) as ReactComponent<PlayPopoverProps>;
