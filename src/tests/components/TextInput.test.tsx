import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import { TextInput } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<TextInput />', () => {
    let textInput: HTMLInputElement | null | undefined;

    const onChange = jest.fn();

    beforeEach(() => {
      act(() => {
        root?.render(
          <TextInput
            className='test className'
            handleChange={onChange}
            name='test name'
            placeholder='test placeholder'
            value='test value'
          />
        );
      });

      textInput = container?.querySelector('input');
    });

    afterEach(() => {
      textInput = null;
    });

    it('should render a text input', () => {
      expect(textInput).toBeTruthy();
    });

    it('should render the text input props correctly', () => {
      expect(textInput?.getAttribute('class')).toBe('test className');
      expect(textInput?.getAttribute('id')).toBe('test name');
      expect(textInput?.getAttribute('name')).toBe('test name');
      expect(textInput?.getAttribute('placeholder')).toBe('test placeholder');
      expect(textInput?.getAttribute('type')).toBe('text');
      expect(textInput?.value).toBe('test value');
    });

    it('should render the text input label correctly', () => {
      const label = container?.querySelector('label');
      expect(label?.textContent).toBe('');
      expect(label?.getAttribute('for')).toBe('test name');
    });

    it('should respond to change correctly', () => {
      act(() => {
        Simulate.change(textInput as HTMLInputElement);
        Simulate.change(textInput as HTMLInputElement);
      });
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
});
