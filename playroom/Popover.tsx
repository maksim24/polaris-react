import * as React from 'react';

import {ReactComponent} from '@shopify/react-utilities/types';
import compose from '@shopify/react-compose';

import {WithContextTypes} from '../src/types';
import {withContext, Popover, PopoverProps, ButtonProps} from '../src';
import {Omit, ToggleStateContext} from './types';

import {PlayToggleStateConsumer} from './ToggleState';
import PlayToggleButton from './ToggleButton';

interface PlayPopoverActivatorProps
  extends Omit<ButtonProps, 'children' | 'onClick'> {
  content: string;
}

interface PlayPopoverProps
  extends Omit<PopoverProps, 'active' | 'onClose' | 'activator'> {
  activator: PlayPopoverActivatorProps;
}

type ComposedPlayPopoverProps = WithContextTypes<ToggleStateContext> &
  PlayPopoverProps;

function PlayPopover(props: ComposedPlayPopoverProps) {
  const {
    context: {active, toggleState},
    activator: {content, ...restOfActivatorProps},
    ...restOfPopoverProps
  } = props;

  return (
    <Popover
      activator={
        <PlayToggleButton {...restOfActivatorProps}>{content}</PlayToggleButton>
      }
      active={active}
      onClose={toggleState}
      {...restOfPopoverProps}
    />
  );
}

export default compose<PlayPopoverProps>(
  withContext<PlayPopoverProps, {}, ToggleStateContext>(
    PlayToggleStateConsumer,
  ),
)(PlayPopover) as ReactComponent<PlayPopoverProps>;
