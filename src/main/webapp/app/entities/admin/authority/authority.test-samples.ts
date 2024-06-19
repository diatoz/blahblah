import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c083add4-e492-4439-863f-2bc6191c5657',
};

export const sampleWithPartialData: IAuthority = {
  name: '6dac018c-9668-4c20-ab3b-8eb09a9d590e',
};

export const sampleWithFullData: IAuthority = {
  name: '732c5cf4-2a11-4d01-a781-639f6047955a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
