import * as React from 'react';
import {CaretDownMinor} from '@shopify/polaris-icons';
import {IconableAction, DisableableAction} from '../../../../../types';
import {handleMouseUpByBlurring} from '../../../../utilities/focus';
import Icon from '../../../Icon';
import UnstyledLink from '../../../UnstyledLink';
import styles from './Action.scss';

export interface Props {
  children?: string;
  disclosure?: boolean;
  url?: IconableAction['url'];
  external?: IconableAction['external'];
  icon?: IconableAction['icon'];
  onAction?: IconableAction['onAction'];
  accessibilityLabel?: IconableAction['accessibilityLabel'];
  disabled?: DisableableAction['disabled'];
}

export default function Action({
  icon,
  url,
  external,
  disclosure,
  onAction,
  children,
  accessibilityLabel,
  disabled,
}: Props) {
  const disclosureIconMarkup = disclosure && (
    <span className={styles.ActionIcon}>
      <Icon source={CaretDownMinor} />
    </span>
  );

  const contentMarkup = icon ? (
    <span className={styles.ActionIcon}>
      <Icon source={icon} />
    </span>
  ) : (
    <span className={styles.ActionContent}>
      {children}
      {disclosureIconMarkup}
    </span>
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

  const className = classNames(styles.Action, disabled && styles.disabled);

  return (
    <button
      key={children}
      className={className}
      onClick={onAction}
      onMouseUp={handleMouseUpByBlurring}
      aria-label={accessibilityLabel}
      type="button"
    >
      {contentMarkup}
    </button>
  );
}
