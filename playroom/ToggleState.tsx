import * as React from 'react';

import {noop} from '@shopify/javascript-utilities/other';
import {ToggleStateState, ToggleStateContext} from './types';

export default class PlayToggleState extends React.PureComponent<
  {children: React.ReactNode},
  ToggleStateState
> {
  state: ToggleStateState = {
    active: false,
  };

  get getContext(): ToggleStateContext {
    return {
      active: this.state.active,
      toggleState: this.toggleState,
    };
  }

  render() {
    return (
      <PlayToggleStateProvider value={this.getContext}>
        {this.props.children}
      </PlayToggleStateProvider>
    );
  }

  private toggleState = () => {
    const {active} = this.state;
    this.setState({active: !active});
  };
}

const {
  Provider: PlayToggleStateProvider,
  Consumer: PlayToggleStateConsumer,
} = React.createContext<ToggleStateContext>({
  active: false,
  toggleState: noop,
});

export {PlayToggleStateProvider, PlayToggleStateConsumer};
