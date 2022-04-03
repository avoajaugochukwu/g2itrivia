import {
  ServiceError, ServiceInit, ServiceLoaded, ServiceLoading,
} from '../interfaces/IService';

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
