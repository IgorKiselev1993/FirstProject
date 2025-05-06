import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {InlineDropdown} from '../../src/components/ui/dropdown/InlineDropdown.tsx';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('CreatePostScreen', () => {
  const statusList = ['Published', 'Draft'];

  it('should display dropdown list when pressed', () => {
    const onSelectMock = jest.fn();

    const {getByText, queryByText} = render(
      <InlineDropdown statusList={statusList} onSelect={onSelectMock} />,
    );

    expect(queryByText('Draft')).toBeNull();
    fireEvent.press(getByText('Published'));
    expect(getByText('Draft')).toBeTruthy();
  });
});
