import httpService from "./httpService";
const apiEndpoint = "produkter/";
export function saveProd(prod) {
  console.log(prod);
  if (prod._id) {
    const body = { ...prod };
    delete body._id;
    return httpService.put(apiEndpoint + prod._id, body);
  }
  return httpService.post(apiEndpoint, prod);
}

export async function getProd() {
  return httpService.get(apiEndpoint);
}

export async function getProdById(id) {
  return httpService.get(apiEndpoint + id);
}
