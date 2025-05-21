import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {HomeScreen} from '../../src/features/home/Home.tsx';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../src/redux/hooks/reduxHooks.ts';
import {Screens} from '../../src/navigation/config/screens.ts';
import {deletePost} from '../../src/redux/features/post/postSlice.ts';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../../src/redux/hooks/reduxHooks.ts', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe('HomeScreen', () => {
  const mockNavigate = jest.fn();
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({navigate: mockNavigate});
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('renders empty state when no posts exist', () => {
    (useAppSelector as jest.Mock).mockReturnValue([]);

    const {getByText} = render(<HomeScreen />);
    expect(getByText('The list of posts is currently empty.')).toBeTruthy();
    expect(getByText('Create a post')).toBeTruthy();
  });

  it('shows a list of posts', () => {
    (useAppSelector as jest.Mock).mockReturnValue([
      {
        id: '1',
        title: 'Post 1',
        status: 'Published',
        description: 'Description for post 1',
        image: 'https://example.com/image1.jpg',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Post 2',
        status: 'Draft',
        description: 'Description for post 2',
        image: 'https://example.com/image2.jpg',
        createdAt: new Date().toISOString(),
      },
    ]);

    const {getByText} = render(<HomeScreen />);
    expect(getByText('Post 1')).toBeTruthy();
    expect(getByText('Post 2')).toBeTruthy();
    expect(getByText('Published')).toBeTruthy();
    expect(getByText('Draft')).toBeTruthy();
    expect(getByText('Description for post 1')).toBeTruthy();
    expect(getByText('Description for post 2')).toBeTruthy();
  });

  it('dispatches deletePost action when delete button is pressed', () => {
    (useAppSelector as jest.Mock).mockReturnValue([
      {
        id: '1',
        title: 'Post 1',
        status: 'Published',
        description: 'Description for post 1',
        image: 'https://example.com/image1.jpg',
        createdAt: new Date().toISOString(),
      },
    ]);

    const {getByText} = render(<HomeScreen />);
    fireEvent.press(getByText('X'));
    expect(mockDispatch).toHaveBeenCalledWith(deletePost('1'));
  });

  it('navigates to createPost screen when "New Post" button is pressed', () => {
    (useAppSelector as jest.Mock).mockReturnValue([]);

    const {getByText} = render(<HomeScreen />);
    fireEvent.press(getByText('New Post'));
    expect(mockNavigate).toHaveBeenCalledWith(Screens.createPost);
  });
});
