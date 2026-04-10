import { fetcher } from "@/lib/fetcher";
import type { ModelData } from "@/types/model-data.type";

const getModelData = async () => {
  const URL = process.env.NEXT_PUBLIC_SPECIAL_URL;

  const data = await fetcher<{
    data: {
      rows: ModelData[];
    };
  }>({
    endpoint: `${URL}/model/all?restaurantID=${process.env.NEXT_PUBLIC_RESTAURANT_ID}`,
    options: {
      headers: {
        "x-api-key": "YX359UOkq04TEBKA04KGK73JXP4H63UJVQZYAUKEWS",
      },
    },
  });
  return data?.data?.data;
};

export const ModelService = {
  getModelData,
};
