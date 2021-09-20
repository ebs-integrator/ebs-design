import * as React from 'react';
import { Tooltip, Icon } from 'components/atoms';

interface ContextProps {
  onClickItem: (onClick?: () => void) => void;
}

const ActionContext = React.createContext<ContextProps>({
  onClickItem: (onClick) => null,
});

const Item: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
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

const Actions: React.FC<ActionsProps> = ({
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
    <div className="ebs-action__wrapper" {...props}>
      <Tooltip
        bodyClass="ebs-action__tooltip"
        trigger="click"
        placement={placement}
        visible={visible}
        onVisibleChange={() => setVisible((s) => !s)}
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

export default Object.assign(Actions, { Item });
