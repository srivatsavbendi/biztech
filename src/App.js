import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessLocation: '',
    businessDescription: '',
    servicesOffered: '',
    uniqueAspects: '',
    numberOfEmployees: '',
    physicalSpace: '',
    areasBenefiting: '',
    avgCustomersServed: '',
    peakTimes: '',
    currentTechnology: '',
    budgetForDevices: '',
    budgetRangeOpen: '',
    integrationSystems: '',
    deviceCompatibility: '',
    problemsToAddress: '',
    featuresOfInterest: '',
    futurePlans: '',
    additionalComments: ''
  });
  
  const [outputData, setoutputData] = useState({ });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataValues = Object.values(formData);
    const concatenatedString = formDataValues.join(' ');
    console.log(concatenatedString);

    const apiKey = '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'; // Replace with your OpenAI API key
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: "Please provide some ways smart technologies can be used by this business to improve their profits or increase customers. Use the information below" + concatenatedString,
        max_tokens: 1000
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      //console.log(response);

      console.log('Generated text:', response.data.choices[0].text);
      setoutputData(response.data.choices[0].text);

    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand mx-4" href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Smart Devices
        </a>
        <span className="navbar-text">
          
        </span>
      </nav>

      <div className="container mt-4 px-5 ">
        <form onSubmit={handleSubmit}>

          <div className="form-group m-3 mt-4">
            <h4 className="text-start">General Operations</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Type of Business"
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Location(s) of the Business"
              name="businessLocation"
              value={formData.businessLocation}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group m-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Brief description of what your business does"
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              className="form-control mt-2"
              rows="4"
              placeholder="Primary services/products offered"
              name="servicesOffered"
              value={formData.servicesOffered}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              className="form-control mt-2"
              rows="4"
              placeholder="Any unique aspects or specializations of your business"
              name="uniqueAspects"
              value={formData.uniqueAspects}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group m-3">
            <h4 className="text-start">Employees and Customers</h4>
            <input
              type="number"
              className="form-control"
              placeholder="Number of employees"
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Physical space occupied (in sq. ft.)"
              name="physicalSpace"
              value={formData.physicalSpace}
              onChange={handleInputChange}
            />
            <textarea
              className="form-control mt-2"
              rows="4"
              placeholder="Specific areas or departments that could benefit from smart devices"
              name="areasBenefiting"
              value={formData.areasBenefiting}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group m-3">
            <input
              type="number"
              className="form-control"
              placeholder="Average number of customers served"
              name="avgCustomersServed"
              value={formData.avgCustomersServed}
              onChange={handleInputChange}
            />
            <textarea
              className="form-control mt-2"
              rows="4"
              placeholder="Peak times or seasons with higher customer traffic"
              name="peakTimes"
              value={formData.peakTimes}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group m-3">
            <h4 className="text-start">Technology</h4>
            <textarea
              className="form-control"
              rows="4"
              placeholder="List of current smart devices/technology used"
              name="currentTechnology"
              value={formData.currentTechnology}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Budget for incorporating smart devices"
              name="budgetForDevices"
              value={formData.budgetForDevices}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Open to different budget ranges? (Yes/No)"
              name="budgetRangeOpen"
              value={formData.budgetRangeOpen}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group m-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Existing systems or software for integration"
              name="integrationSystems"
              value={formData.integrationSystems}
              onChange={handleInputChange}
            ></textarea>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Specific preferences for device compatibility"
              name="deviceCompatibility"
              value={formData.deviceCompatibility}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group m-3">
            <h4 className="text-start">Preferences and Needs</h4>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Specific problems or challenges to address"
              name="problemsToAddress"
              value={formData.problemsToAddress}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              className="form-control mt-2"
              rows="4"
              placeholder="Particular features or functionalities of interest"
              name="featuresOfInterest"
              value={formData.featuresOfInterest}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group m-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Upcoming expansions, renovations, or changes"
              name="futurePlans"
              value={formData.futurePlans}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group m-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Any other information or ideas you'd like to share"
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-info">Submit</button>
        </form>

        <div className="form-group m-4">
          <textarea className="form-control" rows="15" value={outputData} readOnly></textarea>
        </div>
      </div>

    </div>
  );
}

export default App;


