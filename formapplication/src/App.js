import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setformData] = useState({
    firstName: "", middleName: "", lastName: "", email: "",
<<<<<<< HEAD
    comments: false, condidates: false, offers: false, country: "India",
    address: "", city: "", state: "", pincode: "", pushNotifications: "",
  });


=======
    comments: false, condidates: false, offers: false, country: "",
    address: "", city: "", state: "", pincode: "",
  });

>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
  function ChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Finally printing the entireForm of data");
    console.log(formData);
  }

  return (
    <div className="App">
      <div>
        <h2>Application Form</h2>
        <form onSubmit={submitHandler}>
<<<<<<< HEAD
=======

>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
          <label htmlFor="firstName">First Name</label>
          <input type="text"
            placeholder='Enter first name'
            onChange={ChangeHandler}
            name='firstName'
            value={formData.firstName}
          />

          <label htmlFor="middleName">Middle Name</label>
          <input type="text"
            placeholder='Enter middle name'
            onChange={ChangeHandler}
            name='middleName'
            value={formData.middleName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input type="text"
            placeholder='Enter last name'
            onChange={ChangeHandler}
            name='lastName'
            value={formData.lastName}
          />

          <label htmlFor="email">Email I'd</label>
          <input type="text"
<<<<<<< HEAD
            placeholder='abcd@example.com'
=======
            placeholder='Enter your email'
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
            onChange={ChangeHandler}
            name='email'
            value={formData.email}
          />

          <label htmlFor="country">Country </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={ChangeHandler}
          >
<<<<<<< HEAD
=======
            <option value="select" placeholder="Select">Select</option>
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
            <option value="inda">India</option>
            <option value="usa">USA</option>
            <option value="saudiarbia">Saudi Arbia</option>
            <option value="uae">UAE</option>
            <option value="nepal">Nepal</option>
            <option value="bangladesh">Bangladesh</option>
          </select>

          <label htmlFor="address">Address</label>
          <input type="text"
            placeholder='Street Address'
            onChange={ChangeHandler}
            name='address'
            value={formData.address}
          />

          <label htmlFor="city">City</label>
          <input type="text"
<<<<<<< HEAD
            placeholder='Supaul'
=======
            placeholder='City'
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
            onChange={ChangeHandler}
            name='city'
            value={formData.city}
          />

          <label htmlFor="state"> State / Province</label>
          <input type="text"
<<<<<<< HEAD
            placeholder='Bihar'
=======
            placeholder='State/Province'
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
            onChange={ChangeHandler}
            name='state'
            value={formData.state}
          />

          <label htmlFor="pincode">Zip / Postel Code</label>
          <input type="text"
            placeholder='Zip/Postel Code'
            onChange={ChangeHandler}
            name='pincode'
            value={formData.pincode}
          />


          {/* by email section start */}

          <fieldset>
            <legend>By Email</legend>
            <div className='notification-options'>

              <div className='comments'>
                <input type="checkbox"
                  onChange={ChangeHandler}
                  name="comments"
                  value={formData.comments}
                  id="comments"
                />
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someones posts a comments on a posting. </p>

              </div>

              <div className='comments'>
                <input type="checkbox"
                  onChange={ChangeHandler}
                  name="condidates"
                  value={formData.condidates}
                  id="condidates"
                />
                <label htmlFor="condidates">Condidate</label>
                <p>Get notified when candidate applies for a job.</p>

              </div>

              <div className='comments'>
                <input type="checkbox"
                  onChange={ChangeHandler}
                  name="offers"
                  value={formData.offers}
                  id="offers"
                />
                <label htmlFor="offers">Offers</label>
                <p>Get notified when a candidate accepts or reject an offers.</p>

              </div>
            </div>
          </fieldset>

          {/*Push Notification section start */}


          <div className='push-notifications'>
<<<<<<< HEAD
            <h3>Push Notification</h3>
            <p>These are deliveds via SMS for your mobail</p>
            <div className='push'>

              <input type="radio"
                onChange={ChangeHandler}
                name="pushNotifications"
                value="Everything"
                id="pushEverything"
              />
              <label htmlFor="pushEverything">Everything</label>
=======
            <div className='push'>
              <h3>Push Notification</h3>
              <p>These are deliveds via SMS for your mobail</p>
              <label htmlFor="comments">Everything</label>
              <input type="radio"
                onChange={ChangeHandler}
                name="comments"
                value={formData.comments}
                id="comments"
              />
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
            </div>


            <div className='push'>
<<<<<<< HEAD

              <input type="radio"
                onChange={ChangeHandler}
                name="pushNotifications"
                value="Same as Email"
                id="pushEmail"
              />
              <label htmlFor="pushEmail">Same as email</label>
            </div>


            <div className='push'>
              <input type="radio"
                onChange={ChangeHandler}
                name="pushNotification"
                value="No Push Notification"
                id="noPush"
              />
              <label htmlFor="noPush">No Push Notification</label>
=======
              <label htmlFor="comments">Same as email</label>
              <input type="radio"
                onChange={ChangeHandler}
                name="comments"
                value={formData.comments}
                id="comments"
              />
            </div>

            <div className='push'>
              <label htmlFor="comments">No push Notification</label>
              <input type="radio"
                onChange={ChangeHandler}
                name="comments"
                value={formData.comments}
                id="comments"
              />
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
            </div>
          </div>

          <button>Submit</button>
        </form>
      </div >
    </div >
  );
}
export default App;