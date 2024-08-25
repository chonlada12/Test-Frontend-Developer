import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { ENUM_KEY_LOCAL_STORAGE } from '../enum';
import { PersonalData } from '../pages/form-table/interface';
import { getObjectStorage, setObjectStorage } from '../service/storage';

const initialState: PersonalData[] = getObjectStorage(ENUM_KEY_LOCAL_STORAGE['@personal-data']);

export const personalSlice = createSlice({
  name: 'personal',
  initialState: initialState || [],
  reducers: {
    create: (state, action) => {
      const { payload } = action;
      const id = dayjs().unix();
      const name = `${payload.title} ${payload.firstName} ${payload.lastName}`;
      const dataForm = { id, name, ...payload };
      const data = [dataForm, ...state];

      setObjectStorage(ENUM_KEY_LOCAL_STORAGE['@personal-data'], data);
      return data;
    },
    update: (state, action) => {
      const newData = action.payload;
      const index = state.findIndex((item) => item.id === newData.id);
      const name = `${newData.title}${newData.firstName} ${newData.lastName}`;

      if (index !== -1) {
        state[index] = { ...state[index], ...newData, name };
        setObjectStorage(ENUM_KEY_LOCAL_STORAGE['@personal-data'], state);
      }
    },
    deleteId: (state, action) => {
      const id = action.payload;
      const newState = state.filter((item) => item.id !== id);
      setObjectStorage(ENUM_KEY_LOCAL_STORAGE['@personal-data'], newState);
      return newState; // return the new state
    },
    multiDelete: (state, action) => {
      const ids = action.payload;
      const newState = state.filter((item) => !ids.includes(item.id));
      setObjectStorage(ENUM_KEY_LOCAL_STORAGE['@personal-data'], newState);
      return newState; // return the new state
    },
  },
});

export const { create, update, deleteId, multiDelete } = personalSlice.actions;

export default personalSlice.reducer;
