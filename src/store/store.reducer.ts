import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from './store';
import { en } from '../assets/lang/en';
import { environment } from '../core/configs/app.config';
import { ILang } from '../assets/lang/lang';

const initialState: IState = {
  loader: false,
  languages: [
    {
      id: 1,
      key: 'en',
      value: 'en',
    },
  ],
  locale: en,
  user: null,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },

    setLocale: (state: IState, action: PayloadAction<ILang>) => {
      const lang = {
        en,
      };
      state.locale = lang[action.payload];
      localStorage.setItem(
        `${environment.applicationName}-locale`,
        action.payload
      );
    },
    setUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setLoader, setLocale, setUser } = rootSlice.actions;

export default rootSlice.reducer;
