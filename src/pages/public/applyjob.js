import React from 'react'

const ApplyJob = () => {
  return (
    <div className="flex flex-col min-h-screen">
        {/* apply job */}
        {/* can retrieve data from jobdescription */}
        <form id='regFrom' method='post' action=''>
      
      <h1 className="text-black text-2xl font-bold mb-4 bg-gray-100 p-3 rounded-full">Peronsal Information</h1>
      <p>Reference Number:
        <input type="text" id='refNum'maxLength={5} required='required' />
      </p>
      <p>First Name:
        <input type="text" id='firstName' maxLength={20} required='required'/>
      </p>
      <p>Last Name:
        <input type="text" id='lastName' maxLength={20} required='required'/>
      </p>
      <p>Gender:
        <input type='radio' id='male' name='gender' />
        <label for='male'>Male</label>
        <input type='radio' id='female' name='gender' />
        <label for='female'>Female</label>
      </p>
      <p>Date of Birth 
        <input type='text' name='dob' id='dob' placeholder='dd/mm/yyyy' maxLength={10} required='required'/>
      </p>
        
        <h1 className="text-black text-2xl font-bold mb-4 bg-gray-100 p-3 rounded-full">Contact Information</h1>
        <p><label for="street">Street Address</label>
        <input type="text" name="street" id="street" maxlength="40" size="45" required="required" /></p>
    <p><label for="suburb">Suburb / Town</label>
        <input type="text" name="suburb" id="suburb" maxlength="40" size="45" required="required" /></p>
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
    <p><label for="postcode">Postcode</label>
        <input type="text" name="postcode" id="postcode" maxlength="4" minlength="4" size="4" pattern="[0-9]{4}" required="required" />
    </p>

    <p><label for="phonenumber">Phone Number</label>
        <input type="text" name="phonenumber" id="phonenumber" maxlength="12" minlength="8" size="12" pattern="^[0-9]+" required="required" /></p>


    <p><label for="email">Email Address</label>
        <input type="text" name="email" id="email" size="40" pattern="^.+@.+\..{2,3}$" required="required" /></p>
        
    {/*Create a submit and reset buttom*/}
    <p><input type="submit" value="Submit" />
        <input type="reset" value="Reset" /></p>

    </form>
    </div>
  )
}

export default ApplyJob