import httpService from "./httpService";

const apiEndpoint = "user/";

export async function getSeller() {
  return httpService.get(apiEndpoint);
}

export async function getSellerById(id) {
  return httpService.get(apiEndpoint + id);
}

export function saveSeller(seller) {
  if (seller._id) {
    const body = { ...seller };
    delete body._id;
    return httpService.put(apiEndpoint + "reg/" + seller._id, body);
  }
  return httpService.post(apiEndpoint, seller);
}

export async function deleteSeller(id) {
  return httpService.delete(apiEndpoint + id);
}
