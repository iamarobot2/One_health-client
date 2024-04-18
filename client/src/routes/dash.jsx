
const doctors = [
  { name: 'Dr. John Doe', specialty: 'Cardiology', profilePic: 'john-doe.jpg' },
  { name: 'Dr. Jane Smith', specialty: 'Pediatrics', profilePic: 'jane-smith.jpg' },
  { name: 'Dr. Michael Johnson', specialty: 'Dermatology', profilePic: 'michael-johnson.jpg' },
  { name: 'Dr. Emily Brown', specialty: 'Oncology', profilePic: 'emily-brown.jpg' }
];

export default function DoctorsDashboard() {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      <header className="bg-blue-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Doctors Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="rounded-full h-20 w-20 bg-gray-700 mb-2">
                <img src={`/${doctor.profilePic}`} alt={doctor.name} className="rounded-full" />
              </div>
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p className="text-sm">{doctor.specialty}</p>
              <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Book Appointment</button>
            </div>
          ))}
        </div>
      </main>
      <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold">Confirmed Appointments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Confirmed Appointments Section Goes Here */}
        </div>
      </section>
    </div>
  );
}
