// @flow
export type Step = {
  name: string,
  order: number,
  visible: boolean,
  target: React$Element,
  wrapper: React$Element,
  size: {
    x: number,
    y: number,
    width: number,
    height: number,
  }
};

export type CopilotContext = {
  registerStep: (Step) => void,
  unregisterStep: (name: string) => void,
  getCurrentStep: () => Step,
}

export type valueXY = {
  x: number,
  y: number,
};
