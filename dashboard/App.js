import React, { useState } from "react";

export default function MedicalRecordsManagementSystem() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateLinkOTP = () => {
    if (!recipientEmail) {
      setIsError(true);
      return;
    }

    const link = "https://onehealth.com/username";
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedLink(link);
    setGeneratedOTP(otp);
    setIsGenerated(true);
    setIsError(false); // Reset error state
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const sendEmail = () => {
    if (!recipientEmail) {
      setIsError(true);
      return;
    }

    // Implement sending email functionality here
    console.log(`Sending email to ${recipientEmail} with link: ${generatedLink} and OTP: ${generatedOTP}`);
    // For demonstration, let's assume the email is sent successfully
    setIsEmailSent(true);
    setIsError(false); // Reset error state
  };

  return (
    <div 
      className="min-h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{ 
        backgroundImage: "url('https://www.softclinicsoftware.com/wp-content/uploads/2022/04/digital-composite-doctor-with-white-graph-with-flare-against-blurry-background-with-light-blue-overlay.jpg')" 
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-left">Data Sharing</h2>
        <div className="mb-4">
          <label htmlFor="recipientEmail" className="block text-sm font-medium text-black-700 mb-2">Recipient's Email</label>
          <input
            type="email"
            id="recipientEmail"
            placeholder="Enter recipient's email"
            className={`w-full border ${isError ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500`}
            value={recipientEmail}
            onChange={(e) => {
              setRecipientEmail(e.target.value);
              setIsError(false); // Reset error state on change
            }}
          />
          {isError && (
            <p className="mt-1 text-red-500 text-sm">Please enter a valid email address.</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="purpose" className="block text-sm font-medium text-black-700 mb-2">Purpose of Sharing</label>
          <textarea
            id="purpose"
            placeholder="Enter purpose of sharing"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={generateLinkOTP}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate Link & OTP
        </button>
        {isGenerated && (
          <div className="mt-2 mb-4">
            <div className="mb-2">
              <p className="text-sm font-medium text-black-700 mb-1">Generated Link:</p>
              <div className="flex items-center bg-gray-100 bg-opacity-50 rounded-md py-1 px-3">
                <span className="text-blue-600">{generatedLink}</span>
                <button onClick={() => copyToClipboard(generatedLink)} className="ml-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none">Copy Link</button>
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-black-700 mb-1">Generated OTP:</p>
              <div className="flex items-center bg-gray-100 bg-opacity-50 rounded-md py-1 px-3">
                <span className="text-blue-600">{generatedOTP}</span>
                <button onClick={() => copyToClipboard(generatedOTP)} className="ml-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none">Copy OTP</button>
              </div>
            </div>
            <div className="mb-2"></div>
            <button
              onClick={sendEmail}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
            >
              Send
            </button>
            {isEmailSent && (
              <p className="mt-2 text-green-600 text-sm">Email sent successfully!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
