import axios from 'axios';
import API from "../../API/API";
const api = new API();
const all_voters = "voters";
const booth_names_url ="voters/search_by_booth_name"
const login = "auth/login";
const filter_casted_status = "voters/filter_casted_status";
const search_by_name = "voters/search_by_name";
const update ="voters/";





export const fetchAllVotersData = async (page,boothName) => {
  console.log("apinames in allvoters",boothName)
  return new Promise(async (resolve, reject) => {
    try {
        const result = await api.get(`${all_voters}?booth_name=${boothName}&page=${page}`);
      console.log("all voters data api:", result);
      const data = result.data;
      resolve(data);  
    } catch (error) {
      console.error("Error in allvoters API call:", error);
      reject(error);  
    }
  });
};
export const filterByCastedStatusData = async (casted, page, boothName) => {
  console.log("apinames in casted",boothName)
  return new Promise(async (resolve, reject) => {
    try {
       const result = await api.get(`${filter_casted_status}?casted=${casted}&booth_name=${boothName}&page=${page}`);
      console.log("all casted api:", result);
       const data = result?.data
      resolve(data);  
    } catch (error) {
      console.error("Error in allvoters API call:", error);
      reject(error);  
    }
  });
};
export const searchByNameData = async (name,boothName) => {
 console.log("from search api ============>", name,boothName);
  return new Promise(async (resolve, reject) => {
    try {
        
    const result = await api.get(`${search_by_name}?booth_name=${boothName}&voter_name=${name}`);
      console.log("search by name:", result);
      const data = result?.data
      resolve(data);  
    } catch (error) {
      console.error("Error in search name API call:", error);
      reject(error); 
    }
  });
};
export const updateVoter = async (id, updatedFields) => {

 return new Promise(async (resolve, reject) => {
    try {
        
   const result = await api.put(`${update}${id}`, updatedFields);
      console.log("update:", result);
      const data = result?.data
      resolve(data);  
    } catch (error) {
      console.error("Error in search name API call:", error);
      reject(error);  
    }
  });
};


export const fetchConsistencyNamesData = async (name) => {
  console.log("in api",name);
  try {
    const response = await axios.get(`${consistency_names_url}?constituency=${name}`);
    const data = response.data;
    console.log("api constituency",data)
    return data;
  } catch (error) {
    console.error('Error fetching consistency names data:', error);
    throw error;
  }
};


export const fetchBoothNamesData = async (name) => {
  console.log("boothnames data",name)
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(`${booth_names_url}?booth_name=${name}`);
      console.log("booth names data:", result);
      const data = result?.data
      resolve(data);  
    } catch (error) {
      console.error("Error in boothName API call:", error);
      reject(error);  
    }
  });
};

export const loginData = async (formData) => {
  console.log("Starting login API call with formData:", formData);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(`${login}`, formData);
      console.log("Login API response:", result);
      resolve(result);
    } catch (error) {
      console.error("Error in login API call:", error);
      reject(error); 
    }
  });
};




