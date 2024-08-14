export interface DataInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  medias: string[];
  variants: string[];
}

export const getData = (): Promise<DataInterface[]> => {
  return fetch(
    "https://my-json-server.typicode.com/padrinpanji/json-server-db/products"
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      return [];
    });
};
