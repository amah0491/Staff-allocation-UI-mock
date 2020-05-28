# Staff-allocation-UI-mock
Staff allocation and rostering is a tedious task and this UI mock attempts to solve this complex problem of assigning the nurses to the patients
keeping in mind their skillset and previous assignment.
Following is the problem scenario:
* There are certain patients which require intensive care and nurses allocated to those patients need to work for 12 hour shifts whereas normal patients have nurses which work for 8 Hour shift. Accordingly there are two type of nurses one which work 12 hour shift and other which work in 8 hour shift. Nurses working 12 hour shift cannot work an 8 hour shift and vice-versa.
* A nurse cannot attend to multiple patients while working in a shift.

While creating a roster for nurse allocation following things are to be considered:
1. Nurses are to be allocated to the patients according to the skillset required by the patient. 
2. Nurses who have worked with the patient previously worked with the patient are a better match as they have an idea about the patient's medical history as well as his reponse to the different treatments.
3. Allocating same nurse to multiple patients can result in conflict 
4. Nurse allocated in one shift in a day cannot be allocated another shift in same day as it may increase fatigue levels for nurse.
These are some of the things which are to be considered while designing a roster. These rosters are prepared by admin nurses which take up considerable amount of their time which can otherwise be utilized in taking care of patients.

**User Interface:**
The table shows different preferences for patients. Following are the different columns:
* Bed: It indicates different patients admitted into the hospital.
* Required skills: Skills that are required to take care of the patients
* Previous assignment: Nurse previously assigned to the patient
* Preferences: Nurse preferences ordered from best to worst. Following is the order from bes to worst for preference:
a) (green-background with blue font): Full match of skillset that the nurse possess and the one required by patient
b) (green-background) : Full match of skillset that the nurse possess and the one required by patient
c) (yellow-background): Partial match of skillset that the nurse possess and the one required by patient
d) (red-background): No match of skillset that the nurse possess and the one required by patient
Once an assignment is made for a preference then that nurse will not appear in the preferences elsewhere.



