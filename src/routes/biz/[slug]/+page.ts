import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  return {
    bizid: params.slug,
    abcd: "大家好abcd大家好"
  };
};
