import './styles.css'
import React from 'react'



const ApplyJob = () => {
  return (
    <div className="form">
        {/* apply job */}
        {/* can retrieve data from jobdescription */}
      <form id='regFrom' method='post' action=''>
      
      <div className='inputRef'>
      <h1 className="applySubhead">Reference Number</h1>
        <fieldset>
        <label>Reference Number:
        <input type="text" id='refNum'maxLength={5} required='required' />
        </label>
        </fieldset>
      </div>

      <div className='inputName'>
      <h1 className="applySubhead">Peronsal Information</h1>
        <fieldset>
        <label>First Name:
        <input type="text" id='firstName' maxLength={20} required='required'/>
        </label>

        <label>Last Name:
        <input type="text" id='lastName' maxLength={20} required='required'/>
        </label>
        </fieldset>
      </div>

        <div className='inputGender'>
        <fieldset>
        <p><label>Gender:
        <input type='radio' id='male' name='gender' />
        <label for='male'>Male</label>
        <input type='radio' id='female' name='gender' />
        <label for='female'>Female</label>
        </label>
        </p>
        </fieldset>
        </div>

        <div className='inputDOB'>
        <fieldset>
        <label>Date of Birth 
        <input type='text' name='dob' id='dob' placeholder='dd/mm/yyyy' maxLength={10} required='required'/>
        </label>
        </fieldset>
        </div>
        
        <div className='inputStreetSuburb'>
        <h1 className="applySubhead">Contact Information</h1>
        <fieldset>
        <p><label for="street">Street Address</label>
        <input type="text" name="street" id="street" maxlength="40" size="45" required="required" />
        
        <label for="suburb">Suburb / Town</label>
        <input type="text" name="suburb" id="suburb" maxlength="40" size="45" required="required" /></p>
        </fieldset>
        </div>
        
        <div className='inputState'>
        <fieldset>
        <p><label for="state">State</label>
        <select name="state" id="state" required="required">
            <option value="">Please Select</option>
            <option id="vic" value="vic">VIC</option>
            <option id="nsw" value="nsw">NSW</option>
            <option id="qld" value="qld">QLD</option> 
            <option id="nt" value="nt">NT</option>
            <option id="wa" value="wa">WA</option>
            <option id="sa" value="sa">SA</option>
            <option id="tas" value="tas">TAS</option>
            <option id="act" value="act">ACT</option>
        </select>
        </p>
        </fieldset> 
        </div>

        <div className='inputPostcode'>
        <fieldset>
        <p><label for="postcode">Postcode</label>
            <input type="text" name="postcode" id="postcode" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" required="required" />
        </p>
        </fieldset>
        </div>

        <div className='inputPhoneEmail'>
        <fieldset>
        <p><label for="phonenumber">Phone Number</label>
            <input type="text" name="phonenumber" id="phonenumber" maxlength="12" minlength="8" size="12" pattern="^[0-9]+" required="required" />


        <label for="email">Email Address</label>
        <input type="text" name="email" id="email" size="40" pattern="^.+@.+\..{2,3}$" required="required" /></p>
        </fieldset>
        </div>

        <div className='inputEducation'>
        <h1 className="applySubhead">Educational Qualification</h1>
          <fieldset>
          <table className="applyTable">
            <thead>
            <tr>
              <th>Year to Commence</th>
              <th>Year of Graduation</th>
              <th>Name of Education Provider</th>
              <th>Qualification</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" name="yearOfComm" id="yearOfComm" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="yearOfStudy" id="yearOfStudy" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="instituteName" id="instituteName" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="qualification" id="qualification" maxlength="40" size="40" required="required" /></td>
              </tr>
              <tr>
                <td><input type="text" name="yearOfComm" id="yearOfComm" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="yearOfStudy" id="yearOfStudy" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="instituteName" id="instituteName" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="qualification" id="qualification" maxlength="40" size="40" required="required" /></td>
              </tr>
              <tr>
               <td><input type="text" name="yearOfComm" id="yearOfComm" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="yearOfStudy" id="yearOfStudy" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="instituteName" id="instituteName" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="qualification" id="qualification" maxlength="40" size="40" required="required" /></td>
              </tr>
            </tbody>

          </table>
          </fieldset>
        </div>

        <div className='inputWorkExp'>
        <h1 className="applySubhead">Work Experience</h1>
          <fieldset>
          <table className="applyTable">
            <thead>
            <tr>
              <th>Employed from</th>
              <th>Employed to</th>
              <th>Name of Organisation</th>
              <th>Job Title</th>
            </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="text" name="employStart" id="employStart" maxlength="7" minlength="7" size="4" pattern="/[\d]{2}\/[\d]{4}/" required="required"  placeholder='MM/YYYY'/></td>
                <td><input type="text" name="employEnd" id="employEnd" maxlength="7" minlength="7" size="4" pattern="/[\d]{2}\/[\d]{4}/" required="required"  placeholder='MM/YYYY'/></td>
                <td><input type="text" name="orgName" id="orgName" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="jobTitle" id="jobTitle" maxlength="40" size="40" required="required" /></td>
              </tr>
              <tr>
                <td><input type="text" name="employStart" id="employStart" maxlength="7" minlength="7" size="4" pattern="/[\d]{2}\/[\d]{4}/" required="required"  placeholder='MM/YYYY'/></td>
                <td><input type="text" name="employEnd" id="employEnd" maxlength="7" minlength="7" size="4" pattern="/[\d]{2}\/[\d]{4}/" required="required"  placeholder='MM/YYYY'/></td>
                <td><input type="text" name="orgName" id="orgName" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="jobTitle" id="jobTitle" maxlength="40" size="40" required="required" /></td>
              </tr>
              <tr>
                <td><input type="text" name="employStart" id="employStart" maxlength="7" minlength="7" size="4" pattern="/[\d]{2}\/[\d]{4}/" required="required"  placeholder='MM/YYYY'/></td>
                <td><input type="text" name="employEnd" id="employEnd" maxlength="7" minlength="7" size="4" pattern="/[\d]{2}\/[\d]{4}/" required="required"  placeholder='MM/YYYY'/></td>
                <td><input type="text" name="orgName" id="orgName" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="jobTitle" id="jobTitle" maxlength="40" size="40" required="required" /></td>
              </tr>
            </tbody>
            </table>
          </fieldset>
        </div>

            <div className='inputProfReco'>
            <fieldset>
            <h1 className="applySubhead">Professional Recognition</h1>
            <table className="applyTable">
            <thead>
            <tr>
              <th>Year Obtained</th>
              <th>Professional Body</th>
              <th>Name of Certificate</th>
            </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="text" name="yearObtained" id="yearObtained" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="profBody" id="profBody" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="certName" id="certName" maxlength="40" size="40" required="required" /></td>
              </tr>
              <tr>
                <td><input type="text" name="yearObtained" id="yearObtained" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="profBody" id="profBody" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="certName" id="certName" maxlength="40" size="40" required="required" /></td>
              </tr>
              <tr>
                <td><input type="text" name="yearObtained" id="yearObtained" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" placeholder="YYYY" required="required" /></td>
                <td><input type="text" name="profBody" id="profBody" maxlength="40" size="40" required="required" /></td>
                <td><input type="text" name="certName" id="certName" maxlength="40" size="40" required="required" /></td>
              </tr>
            </tbody>
            </table>
            </fieldset>
            </div>

            <div className='inputTimePref'>
            <fieldset>
            <h1 className="applySubhead">Time Avilability</h1>
            <p>Please choose your preferred day of work in a week: 
            <label><input type="checkbox" name="monday" id="monday" value="Monday" />Monday</label>
            <label><input type="checkbox" name="tuesday" id="tuesday" value="Tuesday" />Tuesday</label>
            <label><input type="checkbox" name="wednesday" id="wednesday" value="Wednesday" />Wednesday</label>
            <label><input type="checkbox" name="thursday" id="thursday" value="Thursday" />Thursday</label>
            <label><input type="checkbox" name="friday" id="friday" value="Friday" />Friday</label>
            </p>
            </fieldset> 
            </div>
    {/*Create a submit and reset buttom*/}
        <p><input type="submit" value="Submit" />
            <input type="reset" value="Reset" /></p>

    </form>
    </div>
  )
}

export default ApplyJob