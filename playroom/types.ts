export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ToggleStateState {
  active: boolean;
}

export interface ToggleStateContext extends ToggleStateState {
  toggleState(): void;
}
