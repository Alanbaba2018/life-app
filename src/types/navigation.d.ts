import { ROUTE_SCREEN } from '@/const/routes'
declare global {
  export type RootStackParamList = {
    [ROUTE_SCREEN.LOGIN]: undefined;
    [ROUTE_SCREEN.HOME]: undefined;
  }
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}