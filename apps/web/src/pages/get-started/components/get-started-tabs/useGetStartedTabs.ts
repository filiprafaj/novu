import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { OnboardingUseCasesTabsEnum } from '../../consts/OnboardingUseCasesTabsEnum';

const TAB_SEARCH_PARAM_NAME = 'tab';
const DEFAULT_TAB: OnboardingUseCasesTabsEnum = OnboardingUseCasesTabsEnum.IN_APP;

interface GetStartedTabSearchParams {
  [TAB_SEARCH_PARAM_NAME]: OnboardingUseCasesTabsEnum;
}

const DEFAULT_PARAMS: GetStartedTabSearchParams = {
  [TAB_SEARCH_PARAM_NAME]: DEFAULT_TAB,
} satisfies URLSearchParamsInit;

export const useTabSearchParams = () => {
  const [params, setParams] = useSearchParams(DEFAULT_PARAMS as unknown as URLSearchParamsInit);

  const setTab = (tab: OnboardingUseCasesTabsEnum) => {
    setParams({ [TAB_SEARCH_PARAM_NAME]: tab });
  };

  const currentTab = (params.get(TAB_SEARCH_PARAM_NAME) as OnboardingUseCasesTabsEnum) ?? DEFAULT_TAB;

  return {
    currentTab,
    setTab,
  };
};
