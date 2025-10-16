import Client from "../models/client.model.js";

export const getAllClients = async () => {
  return await Client.find();
};

export const createClient = async (data) => {
  const newClient = new Client(data);
  return await newClient.save();
};

export const getOneClient = async (id) => {
  return await Client.findById(id);
};

export const updateClient = async (id, data) => {
  return await Client.findByIdAndUpdate(id, data, { new: true });
};

export const deleteClient = async (id) => {
  return await Client.findByIdAndDelete(id);
};
