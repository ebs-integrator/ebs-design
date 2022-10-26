# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## 23/09/2022

### Changed

- Remove atomic design pattern and bring components to the root of the project
- Organize Storybook folders by use case

### Added

- A separate Pagination component from 'template' folder

### Removed

- _templates_ folder from Storybook
- Storybook styling related to atomic design components

## 29/09/2022

### Changed

- Update all dependencies to latest versions
- Update configuration for Storybook, Rollup and Husky to match the latest versions
- Update component stories to match v6 of Storybook
- Update font-family in Storybook interface
- Replace React.FC with JSX.Element in all components

### Fixed

- TypeScript errors after updating dependencies

### Removed

- husky v4 config file
- lint-staged config file

## 02/10/2022

### Added

- BEM helpers (createClassWithModifiers, makeBEM)

### Changed

- Implement BEM helpers in all components
- Modify classnames where necessary to match BEM pattern

## 03/10/2022

### Added

- Changelog file

## 07/10/2022

### Changed

- Radio component

## 08/10/2022

### Added

- Separate RadioGroup component

## 04/10/2022

### Added

- ButtonGroup component with story in separate folder
- _Danger_ type for Button component

### Changed

- Refactor Button component — markup, styles and story

### Removed

- Button SCSS variables related to ghost and link types, and paddings based on size

