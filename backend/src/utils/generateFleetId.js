import Fleet from "../models/fleet.model.js";

export const generateFleetId = async () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000); // ensures 4 digits

  const isInDb = await Fleet.findOne({ fleetId: `FL-${randomNum}` });
  if (isInDb) {
    return generateFleetId();
  }
  return `FL-${randomNum}`;
};
