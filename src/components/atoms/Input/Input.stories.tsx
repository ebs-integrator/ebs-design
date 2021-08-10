import * as React from 'react';
import { Icon } from 'components/atoms';
import SizeSwitcher from 'components/SizeSwitcher';

import { Input, InputSize } from './Input';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Input', 'atoms'),
  component: Input,
};

export const Regular = (): React.ReactElement => {
  const [inputValues, setInputValues] = React.useState({
    numMin: 0,
    numMax: 0,
  });

  return (
    <SizeSwitcher>
      {(size) => (
        <div className="storybook-rows">
          <div className="storybook-row">
            <div className="storybook-header">Text Input</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Inactive</div>
              <Input size={size as InputSize} placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Active</div>
              <Input size={size as InputSize} placeholder="Text field" value="Text field" onChange={(): null => null} />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Clearable</div>
              <Input
                size={size as InputSize}
                placeholder="Text field"
                isClearable
                value="Text field"
                onChange={(): null => null}
              />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Error</div>
              <Input size={size as InputSize} hasError placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Disabled</div>
              <Input size={size as InputSize} disabled placeholder="Text field" />
            </div>

            <div className="storybook-header">Number Input</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Number</div>
              <Input
                type="number"
                name="numMin"
                value={inputValues.numMin}
                placeholder="min: 0"
                min={0}
                onChange={(value) => {
                  setInputValues((s) => ({ ...s, numMin: value as number }));
                }}
              />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Number</div>
              <Input
                type="number"
                name="numMax"
                value={inputValues.numMax}
                placeholder="max: 100"
                max={100}
                onChange={(value) => setInputValues((s) => ({ ...s, numMax: value as number }))}
              />
            </div>
          </div>

          <div className="storybook-row">
            <div className="storybook-header">Text Input + Label</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Inactive</div>
              <Input size={size as InputSize} label="Label" placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Active</div>
              <Input size={size as InputSize} label="Label" placeholder="Text field" value="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Error</div>
              <Input size={size as InputSize} label="Label" hasError placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Disabled</div>
              <Input size={size as InputSize} label="Label" disabled placeholder="Text field" />
            </div>
          </div>

          <div className="storybook-row">
            <div className="storybook-header">Text Input + Extra</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Inactive</div>
              <Input size={size as InputSize} extra="Extra" placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Active</div>
              <Input size={size as InputSize} extra="Extra" placeholder="Text field" value="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Error</div>
              <Input size={size as InputSize} extra="Extra" hasError placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Disabled</div>
              <Input size={size as InputSize} extra="Extra" disabled placeholder="Text field" />
            </div>
          </div>

          <div className="storybook-row">
            <div className="storybook-header">Text Input + Label + Extra</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Inactive</div>
              <Input size={size as InputSize} label="Label" extra="Extra" placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Active</div>
              <Input size={size as InputSize} label="Label" extra="Extra" placeholder="Text field" value="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Error</div>
              <Input size={size as InputSize} label="Label" extra="Extra" hasError placeholder="Text field" />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Disabled</div>
              <Input size={size as InputSize} label="Label" extra="Extra" disabled placeholder="Text field" />
            </div>
          </div>
        </div>
      )}
    </SizeSwitcher>
  );
};
export const IconRight = (): React.ReactElement => (
  <SizeSwitcher>
    {(size) => (
      <div className="storybook-rows">
        <div className="storybook-row">
          <div className="storybook-header">Text Input</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input size={size as InputSize} suffix={<Icon type="eye" />} placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              placeholder="Text field"
              value="Text field"
              onChange={(): null => null}
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input size={size as InputSize} suffix={<Icon type="eye" />} hasError placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input size={size as InputSize} suffix={<Icon type="eye" />} disabled placeholder="Text field" />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Text Input + Label</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input size={size as InputSize} suffix={<Icon type="eye" />} label="Label" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              placeholder="Text field"
              value="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              hasError
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              disabled
              placeholder="Text field"
            />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Text Input + Extra</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input size={size as InputSize} suffix={<Icon type="eye" />} extra="Extra" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              extra="Extra"
              placeholder="Text field"
              value="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              extra="Extra"
              hasError
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              extra="Extra"
              disabled
              placeholder="Text field"
            />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Text Input + Label + Extra</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              placeholder="Text field"
              value="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              hasError
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input
              size={size as InputSize}
              suffix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              disabled
              placeholder="Text field"
            />
          </div>
        </div>
      </div>
    )}
  </SizeSwitcher>
);

export const IconLeft = (): React.ReactElement => (
  <SizeSwitcher>
    {(size) => (
      <div className="storybook-rows">
        <div className="storybook-row">
          <div className="storybook-header">Text Input</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input size={size as InputSize} prefix={<Icon type="eye" />} placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              placeholder="Text field"
              value="Text field"
              onChange={(): null => null}
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input size={size as InputSize} prefix={<Icon type="eye" />} hasError placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input size={size as InputSize} prefix={<Icon type="eye" />} disabled placeholder="Text field" />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Text Input + Label</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input size={size as InputSize} prefix={<Icon type="eye" />} label="Label" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              placeholder="Text field"
              value="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              hasError
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              disabled
              placeholder="Text field"
            />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Text Input + Extra</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input size={size as InputSize} prefix={<Icon type="eye" />} extra="Extra" placeholder="Text field" />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              extra="Extra"
              placeholder="Text field"
              value="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              extra="Extra"
              hasError
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              extra="Extra"
              disabled
              placeholder="Text field"
            />
          </div>
        </div>

        <div className="storybook-row">
          <div className="storybook-header">Text Input + Label + Extra</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              placeholder="Text field"
              value="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Error</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              hasError
              placeholder="Text field"
            />
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Disabled</div>
            <Input
              size={size as InputSize}
              prefix={<Icon type="eye" />}
              label="Label"
              extra="Extra"
              disabled
              placeholder="Text field"
            />
          </div>
        </div>
      </div>
    )}
  </SizeSwitcher>
);
