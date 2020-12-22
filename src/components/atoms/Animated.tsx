import * as React from 'react';
import AnimateHeight from 'react-animate-height';

interface Props {
  startFrom?: string | number;
  debounce?: number;
  duration?: number;
  className?: string;
  loading?: boolean;
  disabled?: boolean;

  // lots of conflicts from Animated's types
  children: any;
}

export const Animated: React.FC<Props> = ({
  startFrom = '0%',
  debounce = 1,
  duration = 500,
  className = '',
  ...props
}) => {
  const [loading, setLoading] = React.useState(true);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!props.loading) {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => setLoading(false), debounce);
    }
  }, [props.loading, debounce]);

  if (props.disabled) {
    return props.children;
  }

  return (
    <AnimateHeight duration={duration} height={loading ? startFrom : 'auto'} className={className}>
      {props.children}
    </AnimateHeight>
  );
};
