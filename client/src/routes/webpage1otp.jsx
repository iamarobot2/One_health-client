import React from 'react';

export default function MedicalRecordsManagement() {
  const generateLinkOTP = () => {
    // Functionality to generate link and OTP
  };

  const copyLink = () => {
    // Functionality to copy link
  };

  const copyOTP = () => {
    // Functionality to copy OTP
  };

  return (
    <div className="bg-blue-900 text-white py-8 px-6 sm:px-10">
      <h2 className="text-3xl font-bold mb-4">Data Sharing</h2>
      <p className="text-lg mb-6">
        Generate a secure link and OTP for healthcare providers to access your medical records with your consent.
      </p>
      <div className="flex flex-col space-y-4">
        <input type="email" placeholder="Recipient's Email" className="bg-white rounded-md p-2 text-black" />
        <textarea placeholder="Purpose of sharing" className="bg-white rounded-md p-2 h-40 text-black"></textarea>
        <button onClick={generateLinkOTP} className="bg-blue-500 text-white rounded-md p-2">Generate Link & OTP</button>
        <div className="bg-white p-2 rounded-md my-4">
          Generated Link: {/* Display Generated Link */}
          <button onClick={copyLink}>Copy Link</button>
        </div>
        <div className="bg-white p-2 rounded-md">
          Generated OTP: {/* Display Generated OTP */}
          <button onClick={copyOTP}>Copy OTP</button>
        </div>
      </div>
    </div>
  );
}