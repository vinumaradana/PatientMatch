# PatientMatch

PatientMatch is a comprehensive application that facilitates patient and clinical trial matching through an intuitive web interface and RESTful API endpoints. This project is built using Node.js, Express.js, MongoDB (with Mongoose), and AWS Comprehend Medical for efficient data management and medical entity extraction.

## Table of Contents
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
* [API Endpoints](#api-endpoints)
* [Contributors](#contributors)

## Features
* **Intuitive and user-friendly webpage**
* **Patient Data Management**
  * Input patient medical record
  * Store patient medical details using AWS Comprehend Medical for entity extraction
* **Integration with AWS Comprehend Medical**
  * Utilizes AWS Comprehend Medical to extract medical entities (e.g., age, gender, medical conditions) from patient and clincal trial data
* **Scalable and Maintainable**
  * Built on Node.js and Express.js, leveraging MongoDB for data storage.
  * RESTful API architecture ensures scalability and maintainability.

 
## Technologies Used
* #### Backend:
  * **Node.js**: JavaScript runtime environment for building scalable server-side applications.
  * **Express.jsv**: Web framework for Node.js that simplifies routing, middleware integration, and request handling.
  * **MongoDB (Mongoose)**: NoSQL database used for storing and managing patient data and clinical trial details.
  * **AWS SDK (AWS Comprehend Medical)**: Integrates with AWS services to perform medical entity extraction from text.
* #### Frontend:
  * **React**: JavaScript library for building interactive user interfaces.
  * **HTML/CSS**: Basic frontend markup and styling.
  * **JavaScript**: Client-side scripting language for dynamic web interactions.
  

    
## Getting Started
1. clone the directory.
2. 'cd' to backend folder.
3. create '.env' file with AWS credentials (AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
4. create 'config.js' file with MongoDB links (PORT, mongoDBURL)
5. 'npm run dev'
6. create a new terminal, and 'cd' frontend folder
7. 'npm run dev'
8. open in chrome browser


## API Endpoints
* GET /patients: Retrieve all patient data.
* POST /patients: Add new patient data.
* GET /patients/:id: Retrieve patient data by ID.
* POST /clinicals: Add new clinical trial data.
* GET /clinicals: Retrieve all clinical trial data.
* GET /clinicals/:id: Retrieve clinical trial data by ID.
* POST /matchProcess: Perform matching process.

  
## Contributors 
* Prachi Heda 
* Vinuthna Maradana
* Chris Mo

## Citations 
Clinical Trial information obtained from ClinicalTrials.gov
