import * as React from 'react';
import { Icon, Tooltip } from 'components';

interface ContextProps {
  onClickItem: (onClick?: () => void) => void;
}

const ActionContext = React.createContext<ContextProps>({
  onClickItem: (onClick) => null,
});

const Item = ({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) => {
  const { onClickItem } = React.useContext(ActionContext);
  const handleOnClick = (): void => {
    onClickItem(onClick);
  };
  return (
    <div className="ebs-action__tooltip-item" onClick={handleOnClick}>
      {children}
    </div>
  );
};

export interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  showTitle?: boolean;
  placement?: 'right' | 'left' | 'top' | 'bottom';
}

const Actions = ({
  title = 'Actions',
  showTitle = true,
  placement = 'left',
  children,
  ...props
}: React.PropsWithChildren<ActionsProps>) => {
  const [visible, setVisible] = React.useState(false);
  const onClickItem = (onClick): void => {
    if (onClick) {
      onClick();
    }
    setVisible(false);
  };
  return (
    <div className="ebs-action__wrapper" {...props}>
      <Tooltip
        bodyClass="ebs-action__tooltip"
        trigger="click"
        placement={placement}
        visible={visible}
        onVisibleChange={(value) => setVisible(value)}
        tooltip={
          <>
            {showTitle && <div className="ebs-action__tooltip-title">{title}</div>}
            <ActionContext.Provider value={{ onClickItem }}>
              <div className="ebs-action__tooltip-items">{children}</div>
            </ActionContext.Provider>
          </>
        }
      >
        <Icon type="dots" model="bold" className="ebs-action__tooltip-icon" />
      </Tooltip>
    </div>
  );
};

Actions.Item = Item;

export default Actions;
