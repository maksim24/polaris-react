import * as React from 'react';
import {IconableAction} from '../../../../../types';
import {handleMouseUpByBlurring} from '../../../../utilities/focus';
import Icon from '../../../Icon';
import UnstyledLink from '../../../UnstyledLink';
import styles from './Action.scss';

export interface Props {
  children?: string;
  url?: IconableAction['url'];
  external?: IconableAction['external'];
  icon?: IconableAction['icon'];
  onAction?: IconableAction['onAction'];
  accessibilityLabel?: IconableAction['accessibilityLabel'];
}

export default function Action({
  icon,
  url,
  external,
  onAction,
  children,
  accessibilityLabel,
}: Props) {
  const contentMarkup = icon ? (
    <span className={styles.ActionIcon}>
      <Icon source={icon} />
    </span>
  ) : (
    <span className={styles.ActionContent}>{children}</span>
  );

  if (url) {
    return (
      <UnstyledLink
        key={children}
        external={external}
        onMouseUp={handleMouseUpByBlurring}
        className={styles.Action}
        url={url}
        aria-label={accessibilityLabel}
      >
        {contentMarkup}
      </UnstyledLink>
    );
  }

  return (
    <button
      key={children}
      className={styles.Action}
      onClick={onAction}
      onMouseUp={handleMouseUpByBlurring}
      aria-label={accessibilityLabel}
      type="button"
    >
      {contentMarkup}
    </button>
  );
}
