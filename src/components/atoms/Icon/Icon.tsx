import * as React from 'react';

export interface Props {
  onClick?: () => void;
  type: string;
  className?: string;
  component?: any;
}

export const Icon: React.FC<Props> = ({ onClick, type = 'none', className = '', component: Component, ...props }) => {
  const defaultProps = {
    ...props,
    onClick,
    width: '1em',
    height: '1em',
    fill: 'none',
    className: `ebs-icon ebs-icon-${type} ${className}`,
  };

  switch (type) {
    case 'eye':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M7.99996 9.33335C8.73634 9.33335 9.33329 8.7364 9.33329 8.00002C9.33329 7.26364 8.73634 6.66669 7.99996 6.66669C7.26358 6.66669 6.66663 7.26364 6.66663 8.00002C6.66663 8.7364 7.26358 9.33335 7.99996 9.33335Z"
            stroke="#494F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M1.33337 8L2.33337 9.33333C3.02129 10.1708 3.88628 10.8454 4.86612 11.3085C5.84595 11.7717 6.91626 12.0119 8.00004 12.0119C9.08382 12.0119 10.1541 11.7717 11.134 11.3085C12.1138 10.8454 12.9788 10.1708 13.6667 9.33333L14.6667 8"
            stroke="#494F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M1.33337 8.00002L2.33337 6.66668C3.02129 5.82922 3.88628 5.15464 4.86612 4.69148C5.84595 4.22832 6.91626 3.9881 8.00004 3.9881C9.08382 3.9881 10.1541 4.22832 11.134 4.69148C12.1138 5.15464 12.9788 5.82922 13.6667 6.66668L14.6667 8.00002"
            stroke="#494F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'arrow-top':
    case 'arrow-right':
    case 'arrow-bottom':
    case 'arrow-left':
      return (
        <svg viewBox="0 0 10 5" {...defaultProps}>
          <path d="M4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5L1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553Z" />
        </svg>
      );
    case 'arrow-outlined-top':
    case 'arrow-outlined-bottom':
      return (
        <svg viewBox="0 0 10 6" {...defaultProps}>
          {type === 'arrow-outlined-top' && (
            <path d="M1 5L5 0.999999L9 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          )}

          {type === 'arrow-outlined-bottom' && (
            <path d="M9 1L5 5L1 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      );
    case 'check':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M3.33325 8.00008L6.66659 11.3334L13.3333 4.66675"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'check-2':
      return (
        <svg viewBox="0 0 9 6" {...defaultProps}>
          <path
            d="M1.08325 3.00001L3.16659 5.08334L7.33325 0.916672"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'indeterminate':
      return (
        <svg viewBox="0 0 10 2" {...defaultProps}>
          <rect width="10" height="2" rx="1" />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path d="M14 14L10 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'menu-fold':
      return (
        <svg viewBox="0 0 24 24" {...defaultProps}>
          <path d="M4 6H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12H14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.81836 18H20.182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'close':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path d="M12 4L4 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path d="M2.66667 12.6667H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M2.66667 10L5.33333 6L8 7.33333L10.6667 4L13.3333 6.66667"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'box':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M8 2L13.3333 5V11L8 14L2.66667 11V5L8 2Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 8L13.3333 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8V14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8L2.66667 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M6 7.33333C7.47275 7.33333 8.66666 6.13943 8.66666 4.66667C8.66666 3.19391 7.47275 2 6 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 6 7.33333Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.781C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.781C9.71905 11.2811 10 11.9594 10 12.6667V14"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 14V12.6666C13.9966 12.0781 13.7986 11.5072 13.4368 11.0429C13.0751 10.5786 12.5699 10.2471 12 10.1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'archive':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M12.6667 2.66669H3.33333C2.59695 2.66669 2 3.26364 2 4.00002C2 4.7364 2.59695 5.33335 3.33333 5.33335H12.6667C13.403 5.33335 14 4.7364 14 4.00002C14 3.26364 13.403 2.66669 12.6667 2.66669Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33333 5.33331V12C3.33333 12.3536 3.4738 12.6927 3.72385 12.9428C3.9739 13.1928 4.31304 13.3333 4.66666 13.3333H11.3333C11.687 13.3333 12.0261 13.1928 12.2761 12.9428C12.5262 12.6927 12.6667 12.3536 12.6667 12V5.33331"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6.66667 8H9.33334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'create':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 8H10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'apps':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M6 2.66669H3.33334C2.96515 2.66669 2.66667 2.96516 2.66667 3.33335V6.00002C2.66667 6.36821 2.96515 6.66669 3.33334 6.66669H6C6.36819 6.66669 6.66667 6.36821 6.66667 6.00002V3.33335C6.66667 2.96516 6.36819 2.66669 6 2.66669Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9.33331H3.33334C2.96515 9.33331 2.66667 9.63179 2.66667 9.99998V12.6666C2.66667 13.0348 2.96515 13.3333 3.33334 13.3333H6C6.36819 13.3333 6.66667 13.0348 6.66667 12.6666V9.99998C6.66667 9.63179 6.36819 9.33331 6 9.33331Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6667 9.33331H10C9.63181 9.33331 9.33333 9.63179 9.33333 9.99998V12.6666C9.33333 13.0348 9.63181 13.3333 10 13.3333H12.6667C13.0349 13.3333 13.3333 13.0348 13.3333 12.6666V9.99998C13.3333 9.63179 13.0349 9.33331 12.6667 9.33331Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.33333 4.66669H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.3333 2.66669V6.66669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'home':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path d="M3.33333 8H2L8 2L14 8H12.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M3.33333 8V12.6667C3.33333 13.0203 3.4738 13.3594 3.72385 13.6095C3.9739 13.8595 4.31304 14 4.66666 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33334 8H6.66667V10.6667H9.33334V8Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'close-sidebar':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path d="M2.66667 4H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66667 8H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.54545 12L13.4545 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'open-sidebar':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path d="M2.66667 4H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.66667 8H9.33333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.54545 12H13.4545" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'edit':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M6 4.66666H4C3.64638 4.66666 3.30724 4.80713 3.05719 5.05718C2.80714 5.30723 2.66667 5.64637 2.66667 5.99999V12C2.66667 12.3536 2.80714 12.6928 3.05719 12.9428C3.30724 13.1928 3.64638 13.3333 4 13.3333H10C10.3536 13.3333 10.6928 13.1928 10.9428 12.9428C11.1929 12.6928 11.3333 12.3536 11.3333 12V9.99999"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10H8L13.6667 4.33334C13.9319 4.06813 14.0809 3.70841 14.0809 3.33334C14.0809 2.95827 13.9319 2.59856 13.6667 2.33334C13.4015 2.06813 13.0417 1.91913 12.6667 1.91913C12.2916 1.91913 11.9319 2.06813 11.6667 2.33334L6 8.00001V10Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.6667 3.33334L12.6667 5.33334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'bell':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M6.66667 3.33333C6.66667 2.97971 6.80714 2.64057 7.05719 2.39052C7.30724 2.14048 7.64638 2 8 2C8.35362 2 8.69276 2.14048 8.94281 2.39052C9.19286 2.64057 9.33334 2.97971 9.33334 3.33333C10.0989 3.69535 10.7516 4.25888 11.2214 4.96353C11.6911 5.66818 11.9603 6.48738 12 7.33333V9.33333C12.0502 9.7478 12.197 10.1447 12.4285 10.4921C12.6601 10.8395 12.97 11.1276 13.3333 11.3333H2.66667C3.02996 11.1276 3.33987 10.8395 3.57146 10.4921C3.80304 10.1447 3.94983 9.7478 4 9.33333V7.33333C4.03971 6.48738 4.30887 5.66818 4.77863 4.96353C5.2484 4.25888 5.90106 3.69535 6.66667 3.33333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 11.3333V12C6 12.5304 6.21071 13.0392 6.58579 13.4142C6.96086 13.7893 7.46957 14 8 14C8.53043 14 9.03914 13.7893 9.41421 13.4142C9.78929 13.0392 10 12.5304 10 12V11.3333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'message':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M2.66666 14V5.33334C2.66666 4.80291 2.87738 4.2942 3.25245 3.91913C3.62752 3.54406 4.13623 3.33334 4.66666 3.33334H11.3333C11.8638 3.33334 12.3725 3.54406 12.7475 3.91913C13.1226 4.2942 13.3333 4.80291 13.3333 5.33334V9.33334C13.3333 9.86378 13.1226 10.3725 12.7475 10.7476C12.3725 11.1226 11.8638 11.3333 11.3333 11.3333H5.33333L2.66666 14Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M5.33333 6H10.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.33333 8.66666H9.33333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M12 3.33333H4C3.26362 3.33333 2.66667 3.93028 2.66667 4.66666V12.6667C2.66667 13.403 3.26362 14 4 14H12C12.7364 14 13.3333 13.403 13.3333 12.6667V4.66666C13.3333 3.93028 12.7364 3.33333 12 3.33333Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.6667 2V4.66667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.33333 2V4.66667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.66667 7.33333H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.33333 10H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'euro':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M11.4667 4.66666C10.9041 4.02355 10.1912 3.58854 9.41756 3.41617C8.64389 3.2438 7.84383 3.34174 7.11768 3.69773C6.39153 4.05371 5.77163 4.65189 5.33571 5.41724C4.89979 6.1826 4.66725 7.08107 4.66725 8C4.66725 8.91892 4.89979 9.81739 5.33571 10.5828C5.77163 11.3481 6.39153 11.9463 7.11768 12.3023C7.84383 12.6583 8.64389 12.7562 9.41756 12.5838C10.1912 12.4115 10.9041 11.9764 11.4667 11.3333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33333 9.33333H8.66667M8.66667 6.66666H3.33333H8.66667Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M13.3333 7.33333C13.1703 6.16015 12.626 5.07311 11.7844 4.23966C10.9428 3.40622 9.8505 2.87261 8.67578 2.72103C7.50106 2.56946 6.30908 2.80832 5.28347 3.40083C4.25785 3.99334 3.4555 4.90662 3 6M2.66667 2.66667V6H6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66667 8.66667C2.82971 9.83986 3.37395 10.9269 4.21557 11.7603C5.05719 12.5938 6.1495 13.1274 7.32422 13.279C8.49894 13.4305 9.69092 13.1917 10.7165 12.5992C11.7421 12.0067 12.5445 11.0934 13 10M13.3333 13.3333V10H10"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 16 16" {...defaultProps}>
          <path
            d="M8.00001 11.8333L3.88534 13.9967L4.67134 9.41467L1.34267 6.17L5.94267 5.502L8.00001 1.33333L10.0573 5.502L14.6573 6.17L11.3287 9.41467L12.1147 13.9967L8.00001 11.8333Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 18 18" {...defaultProps}>
          <path
            fillRule="evenodd"
            d="M15.364,2.636 C13.664,0.936 11.404,-0.000 9.000,-0.000 C6.596,-0.000 4.336,0.936 2.636,2.636 C0.936,4.336 -0.000,6.596 -0.000,9.000 C-0.000,11.404 0.936,13.664 2.636,15.364 C4.336,17.064 6.596,18.000 9.000,18.000 C11.404,18.000 13.664,17.064 15.364,15.364 C17.064,13.664 18.000,11.404 18.000,9.000 C18.000,6.596 17.064,4.336 15.364,2.636 ZM16.561,8.297 L14.153,8.297 C14.063,6.229 13.583,4.299 12.776,2.800 C12.669,2.600 12.556,2.411 12.440,2.231 C14.705,3.387 16.316,5.647 16.561,8.297 ZM8.297,1.554 L8.297,8.297 L5.255,8.297 C5.341,6.463 5.762,4.768 6.462,3.466 C6.985,2.495 7.628,1.832 8.297,1.554 ZM8.297,9.703 L8.297,16.446 C7.628,16.168 6.985,15.505 6.462,14.534 C5.762,13.232 5.341,11.537 5.255,9.703 L8.297,9.703 ZM9.703,16.446 L9.703,9.703 L12.745,9.703 C12.659,11.537 12.238,13.232 11.538,14.534 C11.015,15.505 10.371,16.168 9.703,16.446 ZM9.703,8.297 L9.703,1.554 C10.371,1.832 11.015,2.495 11.538,3.466 C12.238,4.768 12.659,6.463 12.745,8.297 L9.703,8.297 ZM5.560,2.231 C5.443,2.411 5.331,2.600 5.224,2.800 C4.417,4.299 3.936,6.229 3.847,8.297 L1.439,8.297 C1.684,5.647 3.295,3.387 5.560,2.231 ZM1.439,9.703 L3.847,9.703 C3.936,11.771 4.417,13.701 5.224,15.200 C5.331,15.400 5.443,15.589 5.560,15.769 C3.295,14.613 1.684,12.353 1.439,9.703 ZM12.440,15.769 C12.556,15.589 12.669,15.400 12.776,15.200 C13.583,13.701 14.063,11.771 14.153,9.703 L16.561,9.703 C16.316,12.353 14.705,14.613 12.440,15.769 Z"
          />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 16 18" {...defaultProps}>
          <path
            fillRule="evenodd"
            d="M14.218,18.000 L1.782,18.000 C0.799,18.000 -0.000,17.247 -0.000,16.321 L-0.000,8.268 C-0.000,7.342 0.799,6.589 1.782,6.589 L3.109,6.589 L3.109,3.875 C3.109,1.738 4.954,0.000 7.223,0.000 L8.777,0.000 C11.046,0.000 12.891,1.738 12.891,3.875 L12.891,6.589 L14.218,6.589 C15.201,6.589 16.000,7.342 16.000,8.268 L16.000,16.321 C16.000,17.247 15.201,18.000 14.218,18.000 ZM10.881,3.875 C10.881,2.782 9.937,1.893 8.777,1.893 L7.223,1.893 C6.063,1.893 5.119,2.782 5.119,3.875 L5.119,6.589 L10.881,6.589 L10.881,3.875 ZM13.990,8.482 L2.010,8.482 L2.010,16.107 L13.990,16.107 L13.990,8.482 ZM8.000,9.518 C8.983,9.518 9.782,10.271 9.782,11.196 C9.782,11.747 9.487,12.264 9.005,12.576 L9.005,15.072 L6.995,15.072 L6.995,12.576 C6.512,12.264 6.218,11.747 6.218,11.196 C6.218,10.271 7.017,9.518 8.000,9.518 Z"
          />
        </svg>
      );
  }

  if (Component) {
    const renderComponent = Component.render(defaultProps);

    return renderComponent;
  }

  console.warn(`<Icon /> couldn't find ${type} icon.`);

  return null;
};
