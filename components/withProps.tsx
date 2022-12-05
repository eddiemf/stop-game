import React from 'react';

export const withProps = <
  ComponentProps extends object,
  NewProps extends Partial<{ [Property in keyof ComponentProps]: ComponentProps[Property] }>
>(
  Component: React.ComponentType<ComponentProps>,
  props: NewProps
): React.ComponentType<Omit<ComponentProps, keyof NewProps> & Partial<NewProps>> =>
  class WithProps extends React.Component<
    Omit<ComponentProps, keyof NewProps> & Partial<NewProps>
  > {
    name = Component.name;
    render() {
      return <Component {...(this.props as ComponentProps)} {...(props as Partial<NewProps>)} />;
    }
  };
