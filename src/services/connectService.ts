// src/services/contactService.ts
import apiClient from "./apiClient";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const registerContact = async (
  payload: ContactPayload
): Promise<ContactResponse> => {
  const response = await apiClient.post<ContactResponse>(
    "/api/register-contact",
    payload
  );
  return response.data;
};

export const registerVisitor = async () => {
  try {
    const response = await apiClient.get("/v1/connect/register-visitor");
    return response.data;
  } catch (error) {
    console.error("Error registering visitor:", error);
    return null;
  }
};
