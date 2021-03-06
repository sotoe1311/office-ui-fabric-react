import * as React from 'react';
import * as shape from 'd3-shape';
import { IArcProps, IArcStyles } from './Arc.types';
import { classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getStyles } from './Arc.styles';

export class Arc extends React.Component<IArcProps, {}> {
  public static defaultProps: Partial<IArcProps> = {
    arc: shape.arc()
  };

  public updateChart(newProps: IArcProps): void {
    newProps.arc.innerRadius(newProps.innerRadius);
    newProps.arc.outerRadius(newProps.outerRadius);
  }

  public componentWillMount(): void {
    this.updateChart(this.props);
  }

  public componentWillReceiveProps(newProps: IArcProps): void {
    this.updateChart(newProps);
  }

  public render(): JSX.Element {
    const { color, arc } = this.props;
    const getClassNames = classNamesFunction<IArcProps, IArcStyles>();
    const classNames = getClassNames(getStyles, { color });
    return <path d={arc(this.props.data)} className={classNames.root} />;
  }
}
