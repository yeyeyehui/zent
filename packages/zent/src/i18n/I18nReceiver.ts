import { Component, ReactNode } from 'react';

import I18nContext from './I18nContext';
import { I18nComponentName, ILocaleData } from './locale';

// eslint-disable-next-line @typescript-eslint/ban-types
export interface II18nReceiverProps<CONF = Record<string, any>, P = {}> {
  componentName: I18nComponentName;
  defaultI18n?: ILocaleData | (() => ILocaleData);
  children(map: CONF, props: P): ReactNode;
}

export default class I18nReceiver<
  CONF = Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> extends Component<II18nReceiverProps<CONF, P> & P> {
  static contextType = I18nContext;

  context!: React.ContextType<typeof I18nContext>;

  receive() {
    const { componentName, defaultI18n } = this.props;
    const zentI18n = this.context;
    const i18n = (zentI18n && (zentI18n as any)[componentName]) || {};

    return {
      ...(typeof defaultI18n === 'function' ? defaultI18n() : defaultI18n),
      ...(typeof i18n === 'function' ? i18n() : i18n),
      mark: (zentI18n && zentI18n.mark) || 'zh-CN', // i18n标记
    };
  }

  render() {
    const { children, componentName, defaultI18n, ...bypass } = this.props;

    return children(this.receive(), bypass as unknown as P);
  }
}
