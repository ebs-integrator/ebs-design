import '../src/resources/styles/index.scss';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal');
document.body.append(modalRoot);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
