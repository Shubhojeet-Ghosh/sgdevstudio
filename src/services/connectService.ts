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
    "v1/connect/contact-submission",
    payload
  );
  return response.data;
};

export const registerVisitor = async (payload: any) => {
  try {
    const response = await apiClient.post(
      "/v1/connect/register-visitor",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error registering visitor:", error);
    return null;
  }
};
