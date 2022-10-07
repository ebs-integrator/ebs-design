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

const Item = ({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) => {
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
    <div className={bem('wrapper')} {...props}>
      <Tooltip
        interactive
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

Actions.Item = Item;

export default Actions;
