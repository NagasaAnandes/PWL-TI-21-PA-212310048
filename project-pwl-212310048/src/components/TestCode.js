import React, { useState } from 'react';

function FormSubmit() {
  const [npm, setNpm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [modalInfo, setModalInfo] = useState(null);

  // Function to calculate age based on birthdate
  const calculateAge = (birthdate) => {
    const today = new Date();
    const dob = new Date(birthdate);
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (npm && firstName && lastName && birthdate) {
      const age = calculateAge(birthdate);
      setModalInfo({
        npm: npm,
        fullName: `${firstName} ${middleName} ${lastName}`,
        age: `${age}th`
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Form Submit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="npm">NPM:</label>
          <input type="number" className="form-control" id="npm" value={npm} onChange={(e) => setNpm(e.target.value)} required maxLength="10" />
        </div>
        <div className="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label for="middleName">Middle Name:</label>
          <input type="text" className="form-control" id="middleName" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        </div>
        <div className="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label for="birthdate">Birthdate:</label>
          <input type="date" className="form-control" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Modal */}
      {modalInfo && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Submission Info</h5>
                <button type="button" className="close" onClick={() => setModalInfo(null)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>NPM: {modalInfo.npm}</p>
                <p>Fullname: {modalInfo.fullName}</p>
                <p>Age: {modalInfo.age}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalInfo(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default FormSubmit;
