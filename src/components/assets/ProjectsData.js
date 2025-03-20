import { createTheme } from '@mui/material/styles';
import Fuse from 'fuse.js';

const projectsData = [
  {
    id: 1,
    title:
      "Drudgery Reducing Machines for FPO in Purulia - Jhalda Agro Producer Company Ltd. Centre for World Solidarity,Jhalda Agro Producer Company Ltd.",
    // Startdate: "28-Jun-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 48,
    title:
      "Long Endurance Mars Flying Exploration Vehicle (LEMFEV) Department of Science and Technology (International Cooperation Division)",
    // Startdate: "28-Jun-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 2,
    title:
      "MOCVD growth and p-type doping of Ga2O3 for solar blind UV photodetector applications Science and Engineering Research Board (SERB)",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 100,
    title:
      "M N Faruqui innovation centre projects Arjun Malhotra endowment to IIT Kharagpur",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 99,
    title:
      "DESIGN, DEVELOPMENT AND FABRICATION OF AN AUTOMOBILE FOR PARTICIPATION IN SAE FORMULA 1 CONTEST FOR STUDENTS SRIC, IIT KHARAGPUR",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 98,
    title:
      "Development of meta structures for underwater noise control NAVAL RESEARCH BOARD, Ministry of Defence, DRDO",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 97,
    title: "Air cooled condenser leak detection system NTPC LIMITED",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: " Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 96,
    title:
      "Extension of Brahmaputra Riverfront Project ITD CEMENTATION INDIA LIMITED",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: " Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 95,
    title:
      "Experimental and Numerical Investigations on Pore Scale Multiphase Flows using Reservoir on a Chip (RoC) for Improved Oil Recovery Anusandhan National Research Foundation (ANRF)",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 94,
    title:
      "ML and RL based Predictive Modeling Tool for Spatio-Temporal Temperature map on a Multi-core CPU under Dynamic Workloads Google Asia Pacific Pte Ltd.",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 93,
    title:
      "Opened & Intelligent Plug-in Hybrid Electric Vehicle (PHEV) Technologies for Smart Indian Cities (UAY_I_IITKGP_019) TATA MOTORS LIMITED,MHRD,Ministry of Heavy Industries and Public Enterprises, GoI",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 92,
    title:
      "Resource Recovery from organic waste with a circular economy approach Scheme for Promotion of Academic and Research Collaboration (SPARC), Apex Committee of SPARC",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 91,
    title:
      "Thermal Modelling and Cell characterization of Batteries for Electric Vehicles The MathWorks, Inc.,MATHWORKS INDIA PRIVATE LIMITED",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 90,
    title:
      "Academy of Classical and Folk Arts (ACFA) Various Government and Non-Government Organisations",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 89,
    title:
      "Application of AI techniques to design and maintenance problems in railways IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Anirvan Dasgupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anir",
      },
    ],
  },
  {
    id: 88,
    title:
      "Towards Improved Design For Battery Electrode Particles Through Analogue Systems Mimicking Instability-induced Degradation of Solid-electrolyte Interphases Science and Engineering Research Board (SERB)",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Anirvan Dasgupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anir",
      },
    ],
  },
  {
    id: 87,
    title:
      "Vibration and acoustic study of the resonators in a sitar Guru Krupa Foundation (IIT Foundation)",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Anirvan Dasgupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anir",
      },
    ],
  },
  {
    id: 86,
    title:
      "High fidelity structural theories and its finite element model for the large deformation and rupture analysis of soft biological shell and tubular structures for the applications in vascular solid mechanics. SRIC, IIT KHARAGPUR",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Archana Arbind",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archana.arbind",
      },
    ],
  },
  {
    id: 85,
    title:
      "High fidelity structural theories and its finite element model for the large deformation and rupture analysis of soft biological shell and tubular structures for the applications in vascular solid mechanics Science and Engineering Research Board (SERB)",
    // Startdate: "01-Apr-2019",
    faculties: [
      {
        name: " Prof. Archana Arbind",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archana.arbind",
      },
    ],
  },
  {
    id: 84,
    title: "Laser and EDM processing Various internal users of the Institute",
    // Startdate: "01-Apr-2019",
    faculties: [
      {
        name: "Prof. Asimava Roy Choudhury",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archie",
      },
    ],
  },
  {
    id: 83,
    title:
      "Laser Processing of Materials VARIOUS DEPARTMENTS/CENTRES OF IIT KHARAGPUR AND OUTSIDE INSTITUTIONS",
    // Startdate: "01-Apr-2019",
    faculties: [
      {
        name: "Prof. Asimava Roy Choudhury",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archie",
      },
    ],
  },

  {
    id: 82,
    title:
      "Folk Art Meets Future Tech: Madhubani-Inspired Metamaterials Guru Krupa Foundation (IIT Foundation)",
    // Startdate: "19-Mar-2019",
    faculties: [
      {
        name: "Prof. Atul Jain",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-atuljain",
      },
    ],
  },
  {
    id: 81,
    title:
      "VIRTUAL LABS PROJECT(PHASE-III EXTENDED) MHRD, Department of Higher Education, NMEICT, New Delhi",
    // Startdate: "19-Mar-2019",
    faculties: [
      {
        name: "Prof. Atul Jain",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-atuljain",
      },
    ],
  },
  {
    id: 80,
    title:
      "Design, fabrication and characterization of enhanced sound absorbing Meta-structures ISIRD, SRIC",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Biswajit Bharat",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-biswajitb",
      },
    ],
  },
  {
    id: 79,
    title:
      "Development of meta structures for underwater noise control NAVAL RESEARCH BOARD, Ministry of Defence, DRDO",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Biswajit Bharat",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-biswajitb",
      },
    ],
  },
  {
    id: 78,
    title:
      "FE analysis and experimental validation of CLD base frames for vibration damping DRDO, Naval Materials Research Laboratory",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Biswajit Bharat",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-biswajitb",
      },
    ],
  },
  {
    id: 77,
    title:
      "Development of Bio-Mimetic Autonomous Underwater Vehicles (BAUV) for Maritime Surveillance (Phase I) Naval Research Board (NRB)",
    // Startdate: "13-Mar-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 76,
    title:
      "SwasthyaScan- AI-Driven Teleoperated Robot-based Microscopy for TB Detection in Remote Communities Indian Council of Medical Research (ICMR)",
    // Startdate: "13-Mar-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 75,
    title:
      "DESIGN, DEVELOPMENT AND FABRICATION OF AN AUTOMOBILE FOR PARTICIPATION IN SAE FORMULA 1 CONTEST FOR STUDENTS SRIC, IIT KHARAGPUR",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 74,
    title:
      "Exploring Solutions for Various Technological Challenges in Metal Additive Manufacturing Technology and Sharing the Relevant Know-how with Indian Heavy Engineering Industries Department of Heavy Industries (DHI) ,Bharat Heavy Electricals Limited (BHEL)",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 73,
    title:
      "Selection of Raw Materials for Additive Manufacturing Applications in Relation to the Design Requirements; and Life Cycle Analysis of Additive Manufacturing Process for Different Materials TATA SONS PRIVATE LIMITED,TATA SONS PRIVATE LIMITED,Department of Heavy Industries (DHI) ,Department of Heavy Industries (DHI)",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 72,
    title:
      "DESIGN, DEVELOPMENT AND FABRICATION OF AN AUTOMOBILE FOR PARTICIPATION IN SAE FORMULA 1 CONTEST FOR STUDENTS SRIC, IIT KHARAGPUR",
    // Startdate: "15-Jul-2018",
    faculties: [
      {
        name: " Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
    ],
  },
  {
    id: 71,
    title:
      "Generation of Hydrogen Combustion Database and Ignition Characteristics of Hydrogen relevant to Severe Accident in Nuclear Reactors BARC,Mumbai",
    // Startdate: "15-Jul-2018",
    faculties: [
      {
        name: " Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
    ],
  },
  {
    id: 70,
    title:
      "Opened & Intelligent Plug-in Hybrid Electric Vehicle (PHEV) Technologies for Smart Indian Cities (UAY_I_IITKGP_019) TATA MOTORS LIMITED,MHRD,Ministry of Heavy Industries and Public Enterprises, GoI",
    // Startdate: "15-Jul-2018",
    faculties: [
      {
        name: " Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
    ],
  },
  {
    id: 69,
    title:
      "Adjunct Professor of Academy of Technology (AOT), Adisaptagram, Hooghly, W.B. ACADEMY OF TECHNOLOGY",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Dilip Kumar Pratihar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-dkpra",
      },
    ],
  },
  {
    id: 68,
    title:
      "Design Verification of 10T Capacity Motorized Swivelling Type Vertical Coil Tong for Handling Eye Vertical (Eye to Sky) Coils TATA STEEL DOWNSTREAM PRODUCTS LIMITED",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Dilip Kumar Pratihar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-dkpra",
      },
    ],
  },
  {
    id: 67,
    title:
      "Towards Improved Design For Battery Electrode Particles Through Analogue Systems Mimicking Instability-induced Degradation of Solid-electrolyte Interphases Science and Engineering Research Board (SERB)",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Jeevanjyoti Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-jeevan",
      },
    ],
  },
  {
    id: 66,
    title:
      "Vibration and acoustic study of the resonators in a sitar Guru Krupa Foundation (IIT Foundation)",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Korak Sarkar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-koraksarkar",
      },
    ],
  },
  {
    id: 65,
    title:
      "Reliability based design optimization of helicopter rotor blades SRIC, IIT KHARAGPUR",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Korak Sarkar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-koraksarkar",
      },
    ],
  },
  {
    id: 64,
    title:
      "Development of low GWP chemicals and their blends as alternatives to HCFCs and HFCs Project Management Unit Ozone Cell Ministry of Environment and Forest",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 63,
    title:
      "Centre of Excellence on Energy Aware Urban Infrastructure Science and Engineering Research Board (SERB)",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 62,
    title:
      "Experimental and Numerical Studies on Flameless Combustion with Hydrogen and Hydrocarbon Fuels Operates at High Pressure IITB Development and Relations Foundation",
    // Startdate: "07-Feb-2017",
    faculties: [
      {
        name: "Prof. Mahendra Reddy Vanteru",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-mahendra",
      },
    ],
  },
  {
    id: 61,
    title:
      "Development of biocompatible glass fibre composite for healthcare applications Ministry of Textile, GoI",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 60,
    title:
      "Fabrication and Modelling of a Composite Antenna Reflector ISRO, INDIA",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 59,
    title:
      "Fabrication of Impact-tolerant hybrid composite for naval applications Naval Research Board",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 58,
    title:
      "Fabrication and Analysis of Composite Specimens for External Users Various Government and Non-Government Organisations",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 57,
    title:
      "Investigating the Influence of Heat Treatment on Plasma- Sprayed Carbon Nanotube Reinforced Oxide Coating Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
      },
    ],
  },
  {
    id: 57,
    title:
      "Analysis of Sample Using SEM and XRD, optical microscopy, micro-machining, mechanical, tribological, metallurgical characterisation facility etc. VARIOUS DEPARTMENTS/CENTRES OF IIT KHARAGPUR AND OUTSIDE INSTITUTIONS",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
      },
    ],
  },
  {
    id: 56,
    title:
      "Thermally Sprayed CNT Reinforced WC-Co Coating for Aero Engine III Aeronautics R and D Board",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
      },
    ],
  },
  {
    id: 55,
    title:
      "Exploring Solutions for Various Technological Challenges in Metal Additive Manufacturing Technology and Sharing the Relevant Know-how with Indian Heavy Engineering Industries Department of Heavy Industries (DHI) ,Bharat Heavy Electricals Limited (BHEL)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
      },
    ],
  },
  {
    id: 54,
    title:
      "Plasma sprayed coatings to tune the thermo-optical properties of spacecraft components Indian Space Research Organisation",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
      },
    ],
  },
  {
    id: 53,
    title:
      "Selection of Raw Materials for Additive Manufacturing Applications in Relation to the Design Requirements; and Life Cycle Analysis of Additive Manufacturing Process for Different Materials TATA SONS PRIVATE LIMITED,TATA SONS PRIVATE LIMITED,Department of Heavy Industries (DHI) ,Department of Heavy Industries (DHI)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
      },
    ],
  },
  {
    id: 52,
    title:
      "Development of high strength Ã?Â² Titanium alloys using DED-based additive manufacturing, aiming at aerospace, automobile, and biomedical applications Anusandhan National Research Foundation (ANRF)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
      },
    ],
  },
  {
    id: 51,
    title:
      "3D printing of supercapacitors for flexible and wearable electronics SRIC, IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Poonam Sundriyal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psundriyal",
      },
    ],
  },
  {
    id: 50,
    title:
      "Digital Manufacturing of Self-powered Flexible and Wearable Electronics/ Wearable Sensors by Hybridizing Nanogenerators, Solar cells and Supercapacitors. Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Poonam Sundriyal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psundriyal",
      },
    ],
  },
  {
    id: 49,
    title: "",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 48,
    title:
      "Generation of Hydrogen Combustion Database and Ignition Characteristics of Hydrogen relevant to Severe Accident in Nuclear Reactors BARC,Mumbai",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 47,
    title:
      "Experimental and Numerical Investigations on Pore Scale Multiphase Flows using Reservoir on a Chip (RoC) for Improved Oil Recovery Anusandhan National Research Foundation (ANRF)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 46,
    title:
      "Opened & Intelligent Plug-in Hybrid Electric Vehicle (PHEV) Technologies for Smart Indian Cities (UAY_I_IITKGP_019) TATA MOTORS LIMITED,MHRD,Ministry of Heavy Industries and Public Enterprises, GoI",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 45,
    title:
      "Probing variant classes of nanofluid transformer oils for enhanced dielectric breakdown strengths and insulation caliber CENTRAL POWER RESEARCH INSTITUTE",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Purbarun Dhar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-purbarun",
      },
    ],
  },
  {
    id: 44,
    title:
      "CFD Optimization of Topology and Surface Texture for Wings of Butterfly-Mimetic Flyer Aeronautics R and D Board",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Rajaram Lakkaraju",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-rlakkaraju",
      },
    ],
  },
  {
    id: 43,
    title:
      "Development of Porous Interbody Cage for Lumbar Spinal Fusion using Biomechanical Analysis and Digital Manufacturing Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sanjay Gupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sangupta",
      },
    ],
  },
  {
    id: 42,
    title:
      "Development of customized implants via powder metallurgy process Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sanjay Gupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sangupta",
      },
    ],
  },
  {
    id: 41,
    title:
      "Digital Twins for Predictive Maintenance of Industrial Rotatory Equipment IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sankha Deb",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sankha.deb",
      },
    ],
  },
  {
    id: 40,
    title:
      "Multi-Sensor Integrated Robotic System for Hazardous Jobs in Manufacturing Industry Tata Steel Limited,Department of Heavy Industries (DHI)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sankha Deb",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sankha.deb",
      },
    ],
  },
  {
    id: 39,
    title:
      "Manufacturing of Bimetallic Ti - Al alloy structure by CMT-WAAM Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Siddharth Tamang",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-stamang",
      },
    ],
  },
  {
    id: 38,
    title:
      "Microwave brazing of super hard materials for cutting tool application SRIC, IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Siddharth Tamang",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-stamang",
      },
    ],
  },
  {
    id: 37,
    title:
      "CFD Optimization of Topology and Surface Texture for Wings of Butterfly-Mimetic Flyer Aeronautics R and D Board",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 36,
    title:
      "Nodal Center in HPC and AI at IIT Kharagpur under National Supercomputing Mission (NSM) Centre for Development of Advanced Computing",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 35,
    title:
      "Workshops for NSM Nodal Centre Centre for Development of Advanced Computing",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 34,
    title:
      "Analysis of Sample Using SEM and XRD, optical microscopy, micro-machining, mechanical, tribological, metallurgical characterisation facility etc. VARIOUS DEPARTMENTS/CENTRES OF IIT KHARAGPUR AND OUTSIDE INSTITUTIONS",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 33,
    title:
      "Analysis of Samples Using SEM and XRD, optical microscopy, micro-machining, mechanical, tribological, metallurgical characterisation facility etc. Various Govt./Industrial/Private Organization",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 32,
    title:
      "Thermally Sprayed CNT Reinforced WC-Co Coating for Aero Engine III Aeronautics R and D Board",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 31,
    title:
      "VIRTUAL LABS PROJECT(PHASE-III EXTENDED) MHRD, Department of Higher Education, NMEICT, New Delhi",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 30,
    title:
      "Development of low GWP chemicals and their blends as alternatives to HCFCs and HFCs Project Management Unit Ozone Cell Ministry of Environment and Forest",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 29,
    title:
      "Review and Update of the Master Plan for the IIT Kharagpur campus IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 28,
    title:
      "Research and Development of Leakproof Liquid Cooling Distribution Unit COOLER MASTER CO. LTD",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 27,
    title:
      "Tesla turbine for Organic Rankine Cycles (TORC) Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 26,
    title:
      "Centre of Excellence on Energy Aware Urban Infrastructure Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Subhransu Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suroy",
      },
    ],
  },
  {
    id: 25,
    title:
      "Opened & Intelligent Plug-in Hybrid Electric Vehicle (PHEV) Technologies for Smart Indian Cities (UAY_I_IITKGP_019) TATA MOTORS LIMITED,MHRD,Ministry of Heavy Industries and Public Enterprises, GoI",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Subhransu Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suroy",
      },
    ],
  },
  {
    id: 24,
    title:
      "A hand-held blood perfusion imager for the detection of oral pre-cancer and cancer - Licensed Technology MOUTHWISE DIAGNOSTICS PRIVATE LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },
  {
    id: 23,
    title:
      "Application of Aptamer, Microfluidics and Protein Targeted Approaches for Sex Specific Spermatozoa Enrichment in Bovines and Technology Development Thereof DEPARTMENT OF BIOTECHNOLOGY",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },
  {
    id: 22,
    title:
      "Affordable Point-of-Care MRI system for applications in India IITKGP Foundation (USA)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },
  {
    id: 21,
    title:
      "Common Research and Technology Development Hub (CRTDH) Department of Scientific and Industrial Research",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },
  {
    id: 20,
    title:
      "AI based model for detection and analytics of needle cage bearing in main shaft TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 19,
    title:
      "Background studies for the implementation of FSW technology in water cooling tank BLUE STAR LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 18,
    title:
      "Cobot based vision analytics for quality inspection in automobile process line (DHI part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 17,
    title:
      "Cobot based vision analytics for quality inspection in automobile process line (Industry part) TATA MOTORS LIMITED,Ministry of Heavy Industries and Public Enterprises, GoI",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 16,
    title:
      "DEVELOPMENT OF JOURNAL BEARING TEST RIG AND TRIBOLOGICAL STUDY OF WATER LUBRICATED JOURNAL BEARING OF PROPELLER SHAFT AND DEVELOPMENT OF A NUMERICAL MODEL FOR LIFE PREDICTION INDIAN MARITIME UNIVERSITY",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Venkata Naga Vamsi Munagala",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vamsi",
      },
    ],
  },
  {
    id: 15,
    title:
      "Multiphase self-lubricating composite coatings for high temperature tribological applications SRIC, IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Venkata Naga Vamsi Munagala",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vamsi",
      },
    ],
  },
  {
    id: 14,
    title:
      "Thermal Sprayed Heat Resistant Coatings for Thrust Chambers of Semi-Cryogenic Rocket Engines ISRO, IIT KHARAGPUR CELL",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Venkata Naga Vamsi Munagala",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vamsi",
      },
    ],
  },
  {
    id: 13,
    title:
      "Design and Analysis of a Modular Orthotropic Weighbridge TULSI WEIGH SOLUTIONS PVT. LTD.",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 12,
    title:
      "Design and Development of an Automated Machine for Repairing Railway Turnouts CEMFIS INDIA PRIVATE LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 11,
    title:
      "Centre of Excellence on Energy Aware Urban Infrastructure Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 10,
    title:
      "Training session on project deliverable software SigDATE Research Designs and Standards Organisation (RDSO), MINISTRY OF RAILWAYS",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
];

export default projectsData;
