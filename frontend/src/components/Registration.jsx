import React, { useState } from 'react';
import UserRegistration from '../pages/auth/UserRegistration';
import ConsultantRegistration from '../pages/ConsultantRegistration';

const Registration = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <div className="flex justify-end pt-4 pr-4 mt-3 mr-8">
        <button
          onClick={() => setFlag(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-4"
        >
          Consultant
        </button>
        <button
          onClick={() => setFlag(false)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
        >
          User
        </button>
      </div>
      <div className="mt-4">
        {flag === false ? <UserRegistration /> : <ConsultantRegistration />}
      </div>
    </div>
  );
};

export default Registration;
