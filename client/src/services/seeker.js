import { httpAuth } from "../helper/http";
import { SEEKER_ENDPOINT } from "../helper/endpoints";

export const handleSeekerProfileUpdate = async (seekerProfile) => {
  const URL = SEEKER_ENDPOINT.seekerUploadProfile;
  console.log(URL);
  console.log(seekerProfile);
  const response = await httpAuth.post(
    URL,
    JSON.stringify(
      {
        fileName: seekerProfile.image.name,
        type: seekerProfile.image.type,
        size: `${seekerProfile.image.size} bytes`,
      },
      null,
      2
    )
  );
  return response;
};
