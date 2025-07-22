import axios from "axios";

export interface IPositionResponse {
  iss_position: {
    latitude: string;
    longitude: string;
  };
  timestamp: number;
  message: "success";
}

export interface IPersonInSpace {
  name: string;
  craft: string;
}

export interface IPeopleInSpaceResponse {
  number: number;
  people: IPersonInSpace[];
  message: "success";
}

const CORS_PROXY = "https://corsproxy.io/?";
const BASE_URL = "http://api.open-notify.org";

export const getISSPosition = async (): Promise<IPositionResponse> => {
  const response = await axios.get<IPositionResponse>(
    `${CORS_PROXY}${BASE_URL}/iss-now.json`
  );
  return response.data;
};

export const getPeopleInSpace = async (): Promise<IPeopleInSpaceResponse> => {
  const response = await axios.get<IPeopleInSpaceResponse>(
    `${CORS_PROXY}${BASE_URL}/astros.json`
  );
  return response.data;
};
