import * as React from 'react';
import { makeBEM } from 'libs';
import { Icon, Tooltip } from 'components';

const bem = makeBEM('ebs-action');

interface ContextProps {
  onClickItem: (onClick?: () => void) => void;
}

const ActionContext = React.createContext<ContextProps>({
  onClickItem: (onClick) => null,
});

const Item: React.FC<React.PropsWithChildren<{ onClick?: () => void }>> = ({ children, onClick }) => {
  const { onClickItem } = React.useContext(ActionContext);
  const handleOnClick = (): void => {
    onClickItem(onClick);
  };
  return (
    <div className={bem('tooltip-item')} onClick={handleOnClick}>
      {children}
    </div>
  );
};

export interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  showTitle?: boolean;
  placement?: 'right' | 'left' | 'top' | 'bottom';
}

const Actions: React.FC<React.PropsWithChildren<ActionsProps>> = ({
  title = 'Actions',
  showTitle = true,
  placement = 'left',
  children,
  ...props
}) => {
  const [visible, setVisible] = React.useState(false);
  const onClickItem = (onClick): void => {
    if (onClick) {
      onClick();
    }
    setVisible(false);
  };
  return (
    <div className={bem('wrapper')} {...props}>
      <Tooltip
        bodyClass={bem('tooltip')}
        trigger="click"
        placement={placement}
        visible={visible}
        onVisibleChange={(value) => setVisible(value)}
        tooltip={
          <>
            {showTitle && <div className={bem('tooltip-title')}>{title}</div>}
            <ActionContext.Provider value={{ onClickItem }}>
              <div className={bem('tooltip-items')}>{children}</div>
            </ActionContext.Provider>
          </>
        }
      >
        <Icon type="dots" model="bold" className={bem('tooltip-icon')} />
      </Tooltip>
    </div>
  );
};

export default Object.assign(Actions, { Item });
